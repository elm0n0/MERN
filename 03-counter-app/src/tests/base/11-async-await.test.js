import {getImagen} from '../../base/11-async-await';
import '@testing-library/jest-dom';

describe('11-async-await', () => {
    test('debe retornar el url de la imagen ', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true)
    })
    
})
