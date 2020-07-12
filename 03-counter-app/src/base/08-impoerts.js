import heroes from '../data/heroes';

const getHeroeById = (id) => (
    heroes.find( (e) => (e.id === id))
)

const getHeroesByOwner = (owner) => (
    heroes.filter(e => e.owner === owner)
)
export {
    getHeroeById,
    getHeroesByOwner,
}