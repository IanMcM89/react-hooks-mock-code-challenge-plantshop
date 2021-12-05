import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantsToBeDisplayed = plants.map(plant => <PlantCard key={plant.id} plant={plant}/>);
  
  return (
    <ul className="cards">{plantsToBeDisplayed}</ul>
  );
}

export default PlantList;
