import { useMemo } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { restaurants } from "../../services";
import { MenuItem, Button } from "../../components";

import "./restaurant.css";

export function Restaurant() {
  const { id } = useLoaderData();

  const restaurant = useMemo(
    () => restaurants.find((restaurant) => `${restaurant.id}` === id),
    [id]
  );

  return (
    <div className="restaurant-container">
      <div className="image-container">
        <img
          src={restaurant.image}
          alt={`Restaurant ${restaurant.name} image`}
        />
      </div>
      <h1>{restaurant.name}</h1>
      <ul role="tablist">
        <li aria-selected="true">Menu</li>
        <li role="tab">Details</li>
        <li role="tab">Location</li>
        <li role="tab">Reviews</li>
      </ul>
      {restaurant.menu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
      <div className="restaurant-button-container">
        <Link to="book-table">
          <Button>Book Table</Button>
        </Link>
      </div>
    </div>
  );
}
