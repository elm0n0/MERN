import {getHeroeById} from '../base/08-impoerts';
// promesas
export const getHeroeByIdAsinc = (id) => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            //tarea importacion
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe)
            }else {
                reject('no hay heroe')
            }
        }, 100);
    });
}