// deses de arrays

const personajes = ['juan','gabi','gildo'];
const [,p2] = personajes;
console.log(p2);

const retornaArray = () => {
    return ['ABC',123]
}

const [letras,numeros] = retornaArray();

console.log(letras,numeros);

//Tarea
// el primer valor del arreglo se llamará nombre
// el segundo se llamará set nombre
const useState = ( valor ) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre,setNombre] = useState('Goku')
setNombre()
console.log(nombre)