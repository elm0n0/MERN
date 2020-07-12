import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';


describe('PrimeraApp', () => {
    test('debe mostrar el componente app correctamente ', () => {
        const saludo = "Hola, Soy Goku";
        const wraper = shallow(<PrimeraApp saludo = {saludo} />)
        expect(wraper).toMatchSnapshot()
    })
    test('debe de mostrar el subtitulo enviado por props ', () => {
        const saludo = "Hola, Soy Goku";
        const subtitulo = "Soy un subtitulo";
        const wraper = shallow(
            <PrimeraApp 
                saludo = {saludo} 
                subtitulo = {subtitulo}
            />)
        const textoParrafo = wraper.find('p').text();
        console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo)
    })
    
})