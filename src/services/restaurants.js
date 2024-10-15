
import rest1 from "../assets/rest-1.jpg";
import rest2 from "../assets/rest-2.jpg";
import rest3 from "../assets/rest-3.jpg";
import salad from "../assets/salad.jpg";
import sandwich from "../assets/sandwich.jpg";


export const restaurants = [
    {
      id: 1,
      name: "Go Vegan, Go!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet est vitae nunc dictum, eget semper ipsum placerat.",
      image: rest1,
      badges: [
        {
          type: "primary",
          value: "Vegan",
        },
        {
          type: "secondary",
          value: "Gluten-free",
        },
      ],
      menu: [
        {
          id: 1,
          name: "Vegan sandwich",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 10,
          image: rest1
        },
        {
          id: 2,
          name: "Vegan salad",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 12,
          image: salad
        },
        {
          id: 3,
          name: "Vegan pasta",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 15,
          image: rest3
        },
      ],
    },
    {
      id: 2,
      name: "Sailor’s boat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet est vitae nunc dictum, eget semper ipsum placerat.",
      image: rest2,
      badges: [
        { type: "primary", value: "Seafood" },
        { type: "tertiary", value: "Best rated" },
      ],
      menu: [
        {
          id: 1,
          name: "Fresh fish",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 10,
          image: rest2
        },
        {
          id: 2,
          name: "Fish and chips",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 12,
          image: sandwich
        },
        {
          id: 3,
          name: "Seafood pasta",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 15,
          image: rest3
        },
      ],
    },
    {
      id: 3,
      name: "Nonna Pasta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet est vitae nunc dictum, eget semper ipsum placerat.",
      image: rest3,
      badges: [
        { type: "secondary", value: "Italian" },
        { type: "tertiary", value: "Fast order" },
      ],
      menu: [
        {
          id: 1,
          name: "Spaghetti",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 10,
          image: rest3
        },
        {
          id: 2,
          name: "Lasagna",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 12,
          image: rest1
        },
        {
          id: 3,
          name: "Ravioli",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 15,
          image: sandwich
        },
      ],
    },
  ];