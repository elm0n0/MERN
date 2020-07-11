import {getHeroeById} from './bases/08-impoerts';
// promesas

// const promesa = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         //tarea importacion
//         const heroe = getHeroeById(1);
//         reject('no se pudo encontrar el Heroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log(heroe);
// }).catch(e => console.warn(e))
const getHeroeByIdAsinc = (id) => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            //tarea importacion
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe)
            }else {
                reject('no hay heroe')
            }
        }, 200);
    });
}
getHeroeByIdAsinc(2).then(
    console.log
).catch(
    console.warn
)