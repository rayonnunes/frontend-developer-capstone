import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { BookTable } from "./BookTable";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLoaderData: () => ({ id: "1" }),
  useNavigate: () => jest.fn(),
}));

const getNextMonday = () => {
  const date = new Date();
  date.setDate(date.getDate() + ((1 + 7 - date.getDay()) % 7));
  date.setHours(0, 0, 0, 0);
  return date;
};

const parseDate = () => {
  console.log("NEXT MONDAY", getNextMonday());

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayOfWeek = days[getNextMonday().getDay()];

  const getMonthName = months[getNextMonday().getMonth()];

  const getOrdinalDay = () => {
    const day = getNextMonday().getDate();
    if (day === 1 || day === 21 || day === 31) {
      reuturn`${day}st`;
    }
    if (day === 2 || day === 22) {
      return `${day}nd`;
    }
    if (day === 3 || day === 23) {
      return `${day}rd`;
    }
    return `${day}th`;
  };

  return `${dayOfWeek}, ${getMonthName} ${getOrdinalDay()}, ${getNextMonday().getFullYear()}`;
};

describe("BookTable", () => {
  test("renders the form with initial state", () => {
    render(
      <MemoryRouter initialEntries={["/book-table/1"]}>
        <Routes>
          <Route path="/book-table/:id" element={<BookTable />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Book table at Go Vegan, Go!")).toBeInTheDocument();
    expect(screen.getByTestId("input-time")).toBeInTheDocument();
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of Guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Additional Requests")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /book table/i })).toBeDisabled();
  });

  test("enables the submit button when all required fields are filled", () => {
    render(
      <MemoryRouter initialEntries={["/book-table/1"]}>
        <Routes>
          <Route path="/book-table/:id" element={<BookTable />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Number of Guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Additional Requests"), {
      target: { value: "None" },
    });
    fireEvent.click(screen.getByLabelText(parseDate()));
    fireEvent.change(screen.getByTestId("input-time"), {
      target: { value: "18:00" },
    });
    fireEvent.click(screen.getByLabelText("PM"));

    expect(screen.getByRole("button", { name: /book table/i })).toBeEnabled();
  });

  test("saves booking to localStorage and navigates to confirmation on submit", () => {
    const navigate = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockImplementation(() => navigate);

    render(
      <MemoryRouter initialEntries={["/book-table/1"]}>
        <Routes>
          <Route path="/book-table/:id" element={<BookTable />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Number of Guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Additional Requests"), {
      target: { value: "None" },
    });

    fireEvent.click(screen.getByLabelText(parseDate()));
    fireEvent.change(screen.getByTestId("input-time"), {
      target: { value: "18:00" },
    });
    fireEvent.click(screen.getByLabelText("PM"));

    fireEvent.click(screen.getByRole("button", { name: /book table/i }));

    const booking = JSON.parse(localStorage.getItem("booking-1"));
    expect(booking).toEqual({
      date: getNextMonday().toISOString(),
      time: "18:00",
      period: "pm",
      firstName: "John",
      lastName: "Doe",
      numberGuests: "4",
      phoneNumber: "1234567890",
      email: "john.doe@example.com",
      additionalRequests: "None",
    });

    expect(navigate).toHaveBeenCalledWith("confirmation");
  });
});
