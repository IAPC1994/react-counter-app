import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";
import { render, screen } from '@testing-library/react'; // Se usta render para obtener la imagen del componente. 


describe('Pruebas en <PrimeraApp>', () => {
    /*test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {

        const saludo = "Hola, Soy Goku";
        const { getByText }  = render( <PrimeraApp saludo={saludo} /> );

        expect( getByText(saludo) ).toBeInTheDocument();

    });*/

    test('debe mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        //const wrapper = shallow(<PrimeraApp saludo = {saludo} />);

        const { container } = render(<PrimeraApp saludo={saludo} />)

        //expect( wrapper ).toMatchSnapshot();
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el saludo en un h1', () => {
        const saludo = 'Hola, Soy Goku';
        //const wrapper = shallow(<PrimeraApp saludo = {saludo} />);

        const { container, getByText } = render(<PrimeraApp saludo={saludo} />)

        //expect( wrapper ).toMatchSnapshot();
        expect( getByText(saludo) ).toBeTruthy();
    });

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Kame Hame Ha';
        const wrapper = shallow(<PrimeraApp saludo = {saludo} subtitulo={subtitulo}/>);

        const textoParrafo = wrapper.find('p').text(); //Es igual al query selector
        console.log(textoParrafo);
        expect( textoParrafo ).toBe(subtitulo); 
    });
});