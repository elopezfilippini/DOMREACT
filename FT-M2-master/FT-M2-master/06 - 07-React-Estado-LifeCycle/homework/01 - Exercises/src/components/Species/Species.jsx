import React from "react";
// import styledSpecies from "./Species.module.css";

// export default function Species({ species, handleSpecies, handleAllSpecies }) {
//   // console.log(species);
//   return <div>
//     <h2>Species</h2>
//     {species.map((especie,index)=>
//      <div> 
//       <button key={index} onClick={handleSpecies} value={especie}> {especie}</button>
//    </div>)}
//    <button onClick={handleAllSpecies}></button>
//   </div>
// }


export default function Species({ species, handleSpecies, handleAllSpecies }) {
  return (
    <div>
      <h2>Species</h2>
      {species.map((speciesItem) => (
        <button
          key={speciesItem.id} // Asigna la clave única a cada elemento del mapeo
          onClick={() => handleSpecies(speciesItem)}
          value={speciesItem}
        >
          {speciesItem}
        </button>
      ))}
      <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  );
}