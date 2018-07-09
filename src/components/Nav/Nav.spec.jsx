import * as enzyme from 'enzyme';<u></u>
import React from 'react';
import renderer from 'react-test-renderer';
import Nav from './Nav';

describe('Nav bar', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = enzyme.shallow(<Nav />)
        jest.mock('react-router-dom/Link', () => 'Link')
    })
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('calls setActiveNav when a nav item is clicked', () => {
        const spy = jest.spyOn(wrapper.instance(), 'setActiveNav');
        wrapper.instance().forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('Link').first().simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    })
    it('updates state.activeNav', () => {
        wrapper.instance().setActiveNav('dashboard');
        expect(wrapper.state('activeNav')).toEqual('dashboard');
    })
})

