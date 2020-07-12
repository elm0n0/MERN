// Funciones

const saludar = function(nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

export const getUser = () => (
    {
        uid:'ASDASD',
        username:'PAPI'
    }
)

export const getUsuarioActivo = (nombre) => (
    {
        uid:'ABC567',
        username: nombre
    }
);
