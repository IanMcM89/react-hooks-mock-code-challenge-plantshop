import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plantsData => {
      setPlants(plantsData)
      setFilteredPlants(plantsData)
    })
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleSearchFilter(searchValue) {
    if (searchValue === '') {
      setFilteredPlants(plants)
    } else {
      setFilteredPlants(plants.filter(plant => plant.name.toLowerCase().includes(searchValue.toLowerCase())));
    }
  }

  console.log(filteredPlants);

  return (
    <main>
      <NewPlantForm plants={plants} onAddPlant={handleAddPlant}/>
      <Search onSearch={handleSearchFilter}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
