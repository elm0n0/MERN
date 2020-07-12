import {getHeroeByIdAsinc} from '../../base/09-promesas';
import heroes from '../../data/heroes'
import '@testing-library/jest-dom'
describe('09-promesas', () => {
    test('debe retornar un heroe by id ', ( done ) => {
        const id = 1;
        const heroe = getHeroeByIdAsinc(id).then(heroe => {
            expect(heroe).toEqual(heroes[0])
            done();
        })
    });
    
    test('debe retornar un error si el heroe by id no existe', ( done ) => {
        const id = 10;
        const heroe = getHeroeByIdAsinc(id).catch(e => {
            expect(e).toBe('no hay heroe')
            done()
        })
    });

})
