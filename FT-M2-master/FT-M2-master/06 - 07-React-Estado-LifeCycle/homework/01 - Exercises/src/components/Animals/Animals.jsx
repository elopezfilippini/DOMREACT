import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
    
  }
  

  render() {
    const animales = this.props.animals;
    return (
      <div>
        {animales.map((animal) => (
          <div key={animal.id}>
            <h5>{animal.name}</h5>
            <img src={animal.image} alt={animal.name} width="300px" />
            <span>{animal.specie}</span>
          </div>
        ))}
      </div>
    );}}