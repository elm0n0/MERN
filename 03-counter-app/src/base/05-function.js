// Funciones

const saludar = function(nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

const getUser = () => (
    {
        uid:'ASDASD',
        username:'PAPI'
    }
)

const user = getUser();
console.log(user)

const getUsuarioActivo = (nombre) => (
    {
        uid:'ABC567',
        username: nombre
    }
);
const usuarioActivo = getUsuarioActivo('JPEREZ');
console.log(usuarioActivo)
console.log(saludar('goku'));
console.log(saludar2('goku'));
console.log(saludar3('goku'));
console.log(getUser());



