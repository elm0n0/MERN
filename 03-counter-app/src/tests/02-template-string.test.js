import '@testing-library/jest-dom';
import {getSaludo} from '../base/02-template-string';
describe('02-template-string ', () => {
    test('probando getSaludo', () => {
        const nombre = 'Juan'
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })
})
