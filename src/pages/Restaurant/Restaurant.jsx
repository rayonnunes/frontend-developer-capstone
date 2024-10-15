import { useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { restaurants } from "../../services";

import "./restaurant.css";
import { MenuItem, Button } from "../../components";

export function Restaurant() {
  const { id } = useLoaderData();

  const restaurant = useMemo(
    () => restaurants.find((restaurant) => `${restaurant.id}` === id),
    [id]
  );

  console.log({ restaurants, id, restaurant });

  return (
    <div className="restaurant-container">
        <div className="image-container">
            <img src={restaurant.image} alt={`Restaurant ${restaurant.name} image`} />
        </div>
        <h1>{restaurant.name}</h1>
        <ul>
            <li aria-selected="true">Menu</li>
            <li>Details</li>
            <li>Location</li>
            <li>Reviews</li>
        </ul>
        {restaurant.menu.map((item) => (
            <MenuItem  key={item.id} item={item} />
        ))}
        <div className="restaurant-button-container">
            <Button>Book Table</Button>
        </div>
    </div>
  );
}
