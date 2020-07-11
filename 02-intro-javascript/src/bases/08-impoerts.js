import heroes from '../data/heroes';

const getHeroeById = (id) => (
    heroes.find( (e) => (e.id === id))
)
// console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => (
    heroes.filter(e => e.owner === owner)
)

// console.log(getHeroesByOwner('DC'), owners)
export {
    getHeroeById,
    getHeroesByOwner,
}