const contactos = [
    {
        id: 1,
        nombres: "Manuel",
        apellidos: "Maiz",
        telefono: "123456789",
        ubicacion: {
            ciudad: "Ciudad1",
            direccion: "Dirección1"
        }
    },
    {
        id: 2,
        nombres: "Juana",
        apellidos: "Ariza",
        telefono: "987654321",
        ubicacion: {
            ciudad: "Ciudad2",
            direccion: "Dirección2"
        }
    },
    {
        id: 3,
        nombres: "Pedro",
        apellidos: "Peñaloza",
        telefono: "555555555",
        ubicacion: {
            ciudad: "Ciudad3",
            direccion: "Dirección3"
        }
    },
    {
        id: 4,
        nombres: "Raul",
        apellidos: "Thompson",
        telefono: "777777777",
        ubicacion: {
            ciudad: "Ciudad4",
            direccion: "Dirección4"
        }
    },
    {
        id: 5,
        nombres: "Jesus",
        apellidos: "Leon",
        telefono: "333333333",
        ubicacion: {
            ciudad: "Ciudad5",
            direccion: "Dirección5"
        }
    }
];

function agregarContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
    let nuevoContacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicacion: {
            ciudad: ciudad,
            direccion: direccion
        }
    };
    contactos.unshift(nuevoContacto);
};


agregarContacto(6, "Andres", "Primera", "111111111", "Ciudad6", "Dirección6");

function borrar() {
    let eliminado = contactos.pop();
    console.log(`Contacto eliminado: ${eliminado.nombres} ${eliminado.apellidos}`);
};


borrar();

function mostrar() {
    console.log(contactos);
};


mostrar();

