import { useState, useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { restaurants } from "../../services";

import "./confirmation.css";
import { Button } from "../../components";

export function Confirmation() {
  const { id } = useLoaderData();
  const navigate = useNavigate();

  const [booking] = useState(() =>
    JSON.parse(localStorage.getItem(`booking-${id}`))
  );

  const restaurant = useMemo(
    () => restaurants.find((restaurant) => `${restaurant.id}` === id),
    [id]
  );

  return (
    <div className="confirmation-container">
      <h1>Confirm Reservation</h1>

      <p>
        Dear {booking.firstName} {booking.lastName}, Please confirm your order
        or edit it.
      </p>
      <p>We will send you a confirmation through the email/phone provided</p>

      <div className="confirmation-details">
        <p>
          <strong>Restaurant:</strong> {restaurant.name}
        </p>
        <p>
          <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}
          {" - "}
          {booking.time} {booking.period}
        </p>
        <p>
          <strong>Number of Guests:</strong> {booking.numberGuests}
        </p>
        <p>
          <strong>First Name:</strong> {booking.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {booking.lastName}
        </p>
        <p>
          <strong>Phone Number:</strong> {booking.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {booking.email ?? "Not provided"}
        </p>
        <p>
          <strong>Additional Requests:</strong>{" "}
          {booking.additionalRequests ?? "Not provided"}
        </p>
      </div>
      <div className="confirmation-actions">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Back and edit
        </Button>
        <Button onClick={() => navigate("/")}>Confirm</Button>
      </div>
    </div>
  );
}
