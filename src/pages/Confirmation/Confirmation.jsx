import { useState, useMemo } from "react";
import { Dialog, Flex } from "@radix-ui/themes";
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
    <Dialog.Root>
      <div className="confirmation-container">
        <h1>Confirm Reservation</h1>
        <p>
          Dear {booking.firstName} {booking.lastName}, Please confirm your order
          or edit it.
        </p>
        <p>We will send you a confirmation through the email/phone provided</p>

        <section className="confirmation-details">
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
        </section>
        <div className="confirmation-actions">
          <Button
            variant="secondary"
            onClick={() => navigate(-1)}
            aria-label="Back and edit reservation"
          >
            Back and edit
          </Button>
          <Dialog.Trigger asChild>
            <Button aria-label="Confirm reservation">Confirm</Button>
          </Dialog.Trigger>
        </div>
      </div>
      <Dialog.Content maxWidth="33%">
        <Dialog.Title size="6">
          <div className="dialog-title">
            <h2>Reservation Requested</h2>
            <span role="img" aria-label="party popper">
              🎉
            </span>
          </div>
        </Dialog.Title>
        <Dialog.Description size="2" mb="4" align="center">
          We will let you know once the restaurant confirms your order by SMS
          and email. It usually takes 15 minutes.
        </Dialog.Description>
        <Flex gap="3" justify="center">
          <Button
            onClick={() => navigate("/")}
            aria-label="Confirm and go to homepage"
          >
            Confirm
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
