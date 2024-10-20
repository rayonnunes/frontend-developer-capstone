import { useMemo } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { restaurants } from "../../services";

import "./book-table.css";
import { Input, Textarea } from "../../components";
import { Calendar } from "../../components/Calendar";

export function BookTable() {
  const { id } = useLoaderData();

  const restaurant = useMemo(
    () => restaurants.find((restaurant) => `${restaurant.id}` === id),
    [id]
  );

  return (
    <div className="book-table-container">
      <h1>Book table at {restaurant.name}</h1>

      <form>
        <Calendar />
        <Input label="First Name" id="first-name" type="text" />
        <Input label="Last Name" id="last-name" type="text" />
        <Input label="Number of Guests" id="number-guests" type="number" min="0" />
        <Input label="Phone Number" id="phone-number" />
        <Input label="Email" id="email" type="email" />
        <Textarea label="Additional Requests" id="additional-requests" rows={4} />
      </form>

    </div>
  );
}