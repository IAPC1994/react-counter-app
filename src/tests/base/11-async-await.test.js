import { getImagen } from "../../base/11-async-await";



describe('Pruebas en 11-async-await', () => {
    test('getImagen() debe retornar un URL de la imagen', async() => {
       
        const url = await getImagen();
        //console.log(url);
        expect( url.includes('https://') ).toBe(true);
    
    });   

   
});