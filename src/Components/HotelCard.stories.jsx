import React from "react";
import HotelCard from "./HotelCard";

export default {
  title: "HotelCard",
  component: HotelCard,
};

const Template = (args) => <HotelCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://source.unsplash.com/400x300/?hotel,room",
  name: "Hotel Royal Blue",
  location: "Zurich, Switzerland",
  price: 480,
  rating: 4.9,
  reviews: "6.8K",
};