import { useState } from "react";

import { FeaturedRestaurant, SearchBox } from "../../components";
import { restaurants } from "../../services";

import "./home.css";

export function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <SearchBox value={search} onChange={handleSearch} />
      <h1>Featured Restaurants</h1>
      <div className="restaurants-list">
        {filteredRestaurants.map((restaurant) => (
          <FeaturedRestaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
