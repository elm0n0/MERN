import {getUser,getUsuarioActivo} from '../../base/05-function';
import '@testing-library/jest-dom';

describe('05-funciones', () => {
    test('debe retornar un obj', () => {
        const userTest = {
            uid:'ASDASD',
            username:'PAPI'
        } 
        const user = getUser()
        expect(user).toEqual(userTest);
    })
    test('debe retornar un obj', () => {
        const userTest = {
            uid:'ABC567',
            username: 'nombre'
        }
        const nombre = 'nombre'
        const user = getUsuarioActivo(nombre)
        expect(user).toEqual(userTest);
    })
})
