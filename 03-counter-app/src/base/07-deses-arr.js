// deses de arrays
const personajes = ['juan','gabi','gildo'];
const [,p2] = personajes;

export const retornaArray = () => {
    return ['ABC',123]
}

const [letras,numeros] = retornaArray();

//Tarea
// el primer valor del arreglo se llamará nombre
// el segundo se llamará set nombre
const useState = ( valor ) => {
    return [valor, () => {console.log('Hola Mundo')}];
}