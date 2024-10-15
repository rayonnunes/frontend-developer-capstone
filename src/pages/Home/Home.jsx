import { FeaturedRestaurant, SearchBox } from "../../components";

import { restaurants } from "../../services";

import "./home.css";

export function Home() {
  return (
    <div className="home-container">
      <SearchBox />
      <h1>Featured Restaurants</h1>
      <div className="restaurants-list">
        {restaurants.map((restaurant) => (
          <FeaturedRestaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
