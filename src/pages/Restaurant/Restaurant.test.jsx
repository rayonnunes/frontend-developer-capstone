import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Restaurant } from "./Restaurant";
import { restaurants } from "../../services";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLoaderData: jest.fn(),
}));

describe("Restaurant", () => {
  beforeEach(() => {
    require("react-router-dom").useLoaderData.mockReturnValue({ id: "1" });
  });

  test("renders restaurant details", () => {
    render(
      <MemoryRouter initialEntries={["/restaurant/1"]}>
        <Routes>
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Go Vegan, Go!"
    );
  });

  test("renders restaurant menu items", () => {
    render(
      <MemoryRouter initialEntries={["/restaurant/1"]}>
        <Routes>
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Vegan sandwich")).toBeInTheDocument();
    expect(screen.getByText("Vegan salad")).toBeInTheDocument();
  });

  test("renders book table button", () => {
    render(
      <MemoryRouter initialEntries={["/restaurant/1"]}>
        <Routes>
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", { name: /book table/i })
    ).toBeInTheDocument();
  });
});
