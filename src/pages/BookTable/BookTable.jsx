import { useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { restaurants } from "../../services";
import { RadioButton, Input, Textarea, Button } from "../../components";
import { Calendar } from "../../components/Calendar";
import { Label } from "../../components/Label";

import "./book-table.css";

export function BookTable() {
  const { id } = useLoaderData();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberGuests, setNumberGuests] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [additionalRequests, setAdditionalRequests] = useState("");

  const navigate = useNavigate();

  const restaurant = useMemo(
    () => restaurants.find((restaurant) => `${restaurant.id}` === id),
    [id]
  );

  const isDisabled = useMemo(() => {
    return !(
      date &&
      time &&
      period &&
      firstName &&
      lastName &&
      numberGuests &&
      phoneNumber
    );
  }, [date, time, period, firstName, lastName, numberGuests, phoneNumber]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const booking = {
      date,
      time,
      period,
      firstName,
      lastName,
      numberGuests,
      phoneNumber,
      email,
      additionalRequests,
    };

    localStorage.setItem(`booking-${id}`, JSON.stringify(booking));

    navigate(`confirmation`);
  };

  return (
    <div className="book-table-container">
      <h1>Book table at {restaurant.name}</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group-centered">
          <Label>Select Date and Time</Label>
          <div className="date-time-fields">
            <Calendar selected={date} onSelect={setDate} />
            <div className="time-field">
              <Input
                id="time"
                type="time"
                value={time}
                required
                onChange={(event) => setTime(event.target.value)}
                data-testid="input-time"
              />
              <div className="radio-button-group">
                <RadioButton
                  id="am"
                  label="AM"
                  value="am"
                  onChange={(event) => {
                    setPeriod(event.target.value);
                  }}
                  orientation="row"
                  checked={period === "am"}
                />
                <RadioButton
                  id="pm"
                  label="PM"
                  value="pm"
                  onChange={(event) => {
                    setPeriod(event.target.value);
                  }}
                  orientation="row"
                  checked={period === "pm"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="input-group">
          <Input
            label="First Name"
            id="first-name"
            type="text"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <Input
            label="Last Name"
            id="last-name"
            type="text"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="input-group">
          <Input
            label="Number of Guests"
            id="number-guests"
            type="number"
            min="0"
            required
            value={numberGuests}
            onChange={(event) => setNumberGuests(event.target.value)}
          />
          <Input
            label="Phone Number"
            id="phone-number"
            type="tel"
            required
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <Input
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Textarea
          label="Additional Requests"
          id="additional-requests"
          rows={4}
          value={additionalRequests}
          onChange={(event) => setAdditionalRequests(event.target.value)}
        />
        <Button type="submit" disabled={isDisabled}>
          Book Table
        </Button>
      </form>
    </div>
  );
}
