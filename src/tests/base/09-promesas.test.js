import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

// done:  es una funcion que se llama para decirle a jest que la promesa ya termino. Si no se usa esta funcion, se quedara esperando a que se resuelva la promesa.

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync Debe retornar un heroe async', ( done ) => {
       const id = 1;
       
       getHeroeByIdAsync(id)
            .then(heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();
            });
    });   

    test('Debe de obtener un error si el heroe por id no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync( id ).catch( error => {
            expect( error ).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});