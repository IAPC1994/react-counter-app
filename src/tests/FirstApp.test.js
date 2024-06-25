import { render, screen } from '@testing-library/react'; // Se usta render para obtener la imagen del componente. 
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en FirstApp', () => { 

    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';
    
    test('Have to do match with the Snapshot', () => { 
        const { container } = render( <PrimeraApp title={ title } /> );
        expect(container).toMatchSnapshot();
    });

    test('Have to show the message "Hola, Soy Goku"', () => { 
        render(<PrimeraApp title={ title }/> );
        expect( screen.getByText(title) ).toBeTruthy();  //Que si exista
        // expect( screen.getByText(title) ).not.toBeTruthy();   Que no exista
        // screen.debug();
    })

    test('Have to show the title in a h1 element', () => { 
        render(<PrimeraApp title={ title }/> );
        expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain( title );
    })

    test('Have to show the subtitle send by props', () => {
        render(<PrimeraApp title={ title }  subtitulo={ subTitle } /> );
        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
});