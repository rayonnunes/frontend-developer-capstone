import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Confirmation } from "./Confirmation";
import { restaurants } from "../../services";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLoaderData: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("Confirmation", () => {
  const mockNavigate = jest.fn();
  const mockUseLoaderData = require("react-router-dom").useLoaderData;
  const mockUseNavigate = require("react-router-dom").useNavigate;

  beforeEach(() => {
    mockUseLoaderData.mockReturnValue({ id: "1" });
    mockUseNavigate.mockReturnValue(mockNavigate);
    localStorage.setItem(
      "booking-1",
      JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        date: "2023-10-10",
        time: "7:00 PM",
        period: "Evening",
        numberGuests: 4,
        phoneNumber: "1234567890",
        email: "john.doe@example.com",
        additionalRequests: "None",
      })
    );
  });

  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("renders confirmation details correctly", () => {
    render(
      <MemoryRouter initialEntries={["/confirmation/1"]}>
        <Routes>
          <Route path="/confirmation/:id" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Confirm Reservation")).toBeInTheDocument();
    expect(
      screen.getByText("Dear John Doe, Please confirm your order or edit it.")
    ).toBeInTheDocument();
    expect(screen.getByText("Go Vegan, Go!")).toBeInTheDocument();
    expect(screen.getByText("10/9/2023 - 7:00 PM Evening")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(screen.getByText("1234567890")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("None")).toBeInTheDocument();
  });

  it("navigates back to edit reservation when 'Back and edit' button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/confirmation/1"]}>
        <Routes>
          <Route path="/confirmation/:id" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByLabelText("Back and edit reservation"));
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  it("shows dialog content when 'Confirm' button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/confirmation/1"]}>
        <Routes>
          <Route path="/confirmation/:id" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByLabelText("Confirm reservation"));
    expect(screen.getByText("Reservation Requested")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We will let you know once the restaurant confirms your order by SMS and email. It usually takes 15 minutes."
      )
    ).toBeInTheDocument();
  });

  it("navigates to homepage when 'Confirm' button in dialog is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/confirmation/1"]}>
        <Routes>
          <Route path="/confirmation/:id" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByLabelText("Confirm reservation"));
    fireEvent.click(screen.getByLabelText("Confirm and go to homepage"));
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
