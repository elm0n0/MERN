import {getHeroeById,getHeroesByOwner} from '../../base/08-impoerts';
import heroes from '../../data/heroes';
import '@testing-library/jest-dom';

describe('08-impoerts', () => {
    test('debe devovler un heroe por la id ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id);
        expect(heroe).toEqual(heroeData)
    })

    test('debe devovler undefine si el id no existe ', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        console.log(heroe)
        const heroeData = heroes.find(h => h.id);
        expect(heroe).toBe(undefined)
    })

    test('debe retornar los heroes de DC ', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroe).toEqual(heroeData)
    })
    
    test('debe retornar los heroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroe.length).toBe(heroeData.length)
    })
})
