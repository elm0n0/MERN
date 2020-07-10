const persona = {
    nombre: "Juanjo",
    apellido: "Perez",
    edad: 45,
    direccion: {
        ciudad:"orihuela",
        zip:"03300",
        lat:"14.232323",
        lng:"34.123123",
    }
};
console.log(persona);

const persona2 = { ...persona };

persona2.nombre = "peter";
console.log(persona);
console.log(persona2);