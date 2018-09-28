import React from 'react';
import { shallow } from 'enzyme'
import initialState from '../initialData'
import Toolbar from '../components/Toolbar';

describe('Toolbar tests', () => {
    it('Toolbar has correct classes and children', () => {
        const toolbar = shallow(<Toolbar />)

        expect(toolbar.hasClass('toolbar')).toBeTruthy()
    })
})

/*
fa-check-square-o - all selected
fa-minus-square-o - some selected
fa-square-o - none selected
*/