import {retornaArray} from '../../base/07-deses-arr'
import '@testing-library/jest-dom'

describe('07-deses-arr', () => {
    test('debe retornar un string y un numero', () => {
        const [letras,numeros] = retornaArray()

        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')

        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')
    })
})
