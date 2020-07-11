// desectructuración

const persona = {
    nombre: 'toni',
    edad:45,
    clave: 'ironman',
    rango: 'soldado',
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useConext = ( {nombre, edad, rango= 'Capitan', clave} ) => {



    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        cords: {
            lat:14.12346,
            lng:-13.12346
        }
    }
}

const {nombreClave,anios, cords:{lat,lng}} = useConext(persona);
console.log(nombreClave, anios)

console.log(lat,lng)