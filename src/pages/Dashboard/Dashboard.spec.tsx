import * as enzyme from 'enzyme';
import * as React from 'react';

import InvoicesCard from '../../components/InvoicesCard';
import Dashboard from './Dashboard';

describe('Dashboard component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = enzyme.shallow(<Dashboard />)
    })
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('renders InvoicesCard component', () => {
        expect(wrapper.contains(<InvoicesCard />)).toBe(true);
    })
});




