import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('CounterApp', () => {
    let wraper = shallow(<CounterApp />)
    beforeEach( () => {
        wraper = shallow(<CounterApp />)
    })

    test('debe mostrar el componente correctamente ', () => {
        expect(wraper).toMatchSnapshot()
    })
    test('debe de mostrar el subtitulo enviado por props ', () => {
        const value = 100;
        const wraper = shallow(
            <CounterApp 
                value = {value}
            />)
        const numero = wraper.find('h2').text().trim();
        expect(numero).toBe(`${value}`)
    })

    test('debe intrementar en 1 el contador del counter app ', () => {
        wraper.find('button').at(0).simulate('click');
        const numero = wraper.find('h2').text().trim();
        expect(numero).toBe('11')
    })

    test('debe decrementar en 1 el contador del counter app ', () => {
        wraper.find('button').at(2).simulate('click');
        const numero = wraper.find('h2').text().trim();
        expect(numero).toBe('9')
    })

    test('debe resetear el contador del counter app al valor inicial', () => {
        wraper.find('button').at(0).simulate('click');
        let numero = wraper.find('h2').text().trim();
        expect(numero).toBe('11')
        wraper.find('button').at(1).simulate('click');
        numero = wraper.find('h2').text().trim();
        expect(numero).toBe('10')
    })
})