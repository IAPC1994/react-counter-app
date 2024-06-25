import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        console.log(user);

        expect( user ).toEqual( userTest );
    })


    //getUsuarioActivo debe retonar un objeto
    test('getUsuario activo debe retornar un objeto', () => {
        const nombre = 'Ivan';
        const user = getUsuarioActivo('Ivan');

        expect( user ).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })

});