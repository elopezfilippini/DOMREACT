
import React,{useEffect} from 'react';

// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";



export default function Zoo() {
  const [zoo,setZoo]= React.useState({
    zooName : "",
    animals : [],
    species : [], 
    allAnimals :[]
  })
  function handleInputChange (evento){
    setZoo({...zoo,zooName:evento.target.value})
    }
    
    React.useEffect()*(() => 
    fetch('http://localhost:3001/zoo')
    .then((res) => res.json())
    .then((data) =>
       setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
       })
    )
    .catch((error) => console.log(error)))
  function handleSpecies(evento){}
  function handleAllSpecies(){}
  return(
    <div>
      
      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange}></input>
      <h1>{zoo.zooName}</h1>
      <Animals animals={zoo.animals}/>
      <Species species={zoo.species} handleAllSpecies={handleAllSpecies} handleSpecies={handleSpecies}/>
    </div>)
 
}
