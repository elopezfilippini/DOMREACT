//   -  Utiliza el evento `click` en un boton para hacer que al hacer click en el mismo aparezca en el DOM una lista 
// con todos los amigos que el servidor nos devolvera al hacer un `GET` a la ruta `http://localhost:5000/amigos`

var boton = document.getElementById("boton")
boton.addEventListener("click",funcionget)
var ulo = document.getElementById("lista")

function funcionget() {
    $.get("http://localhost:5000/amigos", function (res){
        
        ulo.innerHTML=""
        for (const element of res) {
            let  nuevoli = document.createElement("li")
            nuevoli.innerHTML = element.name
            ulo.appendChild(nuevoli)}})
        }

var input = document.getElementById("input")
var botonbuscar=document.getElementById("search")
var idrecibido=input.value
botonbuscar.addEventListener("click",funcionbuscar)

function funcionbuscar() {
    var idrecibido=input.value
    let  nuevoli2 = document.createElement("li")
    $.get("http://localhost:5000/amigos/"+idrecibido, function (res){
        nuevoli2.innerHTML = res.name;
        document.body.appendChild(nuevoli2)})}
       ;
 ///Funcion eliminar
var inputel = document.getElementById("inputDelete")
var botonbuscar=document.getElementById("delete")
var idrecibido2=input.value
botonbuscar.addEventListener("click",funcionbuscar)
var url ="http://localhost:5000/amigos/"+idrecibido2
$.ajax({
    url: url,
    method: "DELETE",
    dataType: "json",
    success: function (response) {
      console.log(response); // Aquí puedes manejar la respuesta si la eliminación se realiza con éxito.
    },
    error: function (xhr, status, error) {
      console.log(error); // Aquí puedes manejar los errores si ocurre algún problema en la solicitud DELETE.
    },
  });