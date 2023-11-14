import React from "react";
// import Bienvenido from  './Bienvenido.jsx';
import Botones from './Botones.jsx';

const studentName = "Emiliano Lopez Filippini";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
    return (
   <div><h1>Toki bebe</h1>
      <Botones alerts={alerts} />
   <h3>{studentName}</h3>
  <ul> 
      {techSkills.map((habilidad,index) => 
    (
    <li>{habilidad}
    </li>))}
    </ul></div>)
  
  }


// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
//   ReactDOM.render(
//     element,
//     document.getElementById('app')
//   );
