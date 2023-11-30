const contactos = ["manuel maiz", "juana ariza", "pedro peñaloza", "raul thompson", "jesus leon"]

function agregarContacto(){
let nuevoContacto = "andres primera"
contactos.unshift(nuevoContacto);
}
agregarContacto();


let nuevaAge
function borrar(){
   nuevaAge = contactos.pop();
}
borrar();

function mostrar(){
    console.log(contactos);
}
mostrar(nuevaAge);



