import React from 'react';

const PrimeraApp = ( {saludo = 'Hola Mundo'} ) => {


    return ( 
        <>
        <h1>{saludo}</h1>
        {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
        <p>My Primera App</p>
        </>
    )
}

export default PrimeraApp;