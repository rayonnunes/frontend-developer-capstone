import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from "./Home";
import { restaurants } from "../../services";

jest.mock("../../services", () => ({
  restaurants: [
    { id: 1, name: "Restaurant One" },
    { id: 2, name: "Restaurant Two" },
    { id: 3, name: "Another Restaurant" },
  ],
}));

jest.mock("../../components", () => ({
  SearchBox: ({ value, onChange }) => (
    <input data-testid="search-box" value={value} onChange={onChange} />
  ),
  FeaturedRestaurant: ({ restaurant }) => (
    <div data-testid="restaurant">{restaurant.name}</div>
  ),
}));

describe("Home", () => {
  test("renders search box and featured restaurants", () => {
    render(<Home />);

    expect(screen.getByTestId("search-box")).toBeInTheDocument();
    expect(screen.getByText("Featured Restaurants")).toBeInTheDocument();
    expect(screen.getAllByTestId("restaurant")).toHaveLength(
      restaurants.length
    );
  });

  test("filters restaurants based on search input", () => {
    render(<Home />);

    const searchBox = screen.getByTestId("search-box");
    fireEvent.change(searchBox, { target: { value: "One" } });

    expect(screen.getAllByTestId("restaurant")).toHaveLength(1);
    expect(screen.getByText("Restaurant One")).toBeInTheDocument();
  });

  test("displays all restaurants when search input is cleared", () => {
    render(<Home />);

    const searchBox = screen.getByTestId("search-box");
    fireEvent.change(searchBox, { target: { value: "One" } });
    fireEvent.change(searchBox, { target: { value: "" } });

    expect(screen.getAllByTestId("restaurant")).toHaveLength(
      restaurants.length
    );
  });
});
