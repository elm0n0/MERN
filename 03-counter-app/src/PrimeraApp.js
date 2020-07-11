import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo, subtitulo}) => {


    return ( 
        <>
        <h1>{saludo}</h1>
        {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
        <p>{subtitulo}</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un Subtitulo",
}

export default PrimeraApp;