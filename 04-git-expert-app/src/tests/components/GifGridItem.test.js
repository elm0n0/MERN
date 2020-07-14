import React from 'react'
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifGridItem from '../../Component/GifGridItem';

describe('GifGridItem Test', () => {

    const titulo = 'titulo';
    const url = 'https://miurl.es';

    test('mostrar el componente <GifGridItem /> ', () => {
        const wraper = shallow(<GifGridItem 
            title={titulo} 
            url={url}
        />);
        expect(wraper).toMatchSnapshot();
    })
})

