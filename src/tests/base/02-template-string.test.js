import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

/**
 * Para poder realizar estas pruebas se debe exportar la funcion getSaludo() desde el archivo que se requiera realizar el test. 
 * Para cada funcion que se quiera probar estas deben ser exportadas.
 */

describe ('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Ivan!', () => {

        const nombre = 'Ivan';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + "!");
    })

    //getSaludo debe de retonar Hola Carlos! si no hay argumento en nombre
    test('getSaludo debe retonar Hola Carlos! si no hay argumento en nombre', () => {
        const saludo = getSaludo();
        expect ( saludo ).toBe('Hola Carlos!');
    })
});