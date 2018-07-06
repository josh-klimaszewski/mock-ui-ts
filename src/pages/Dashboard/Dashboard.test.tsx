import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import InvoicesCard from '../../components/InvoicesCard';
import Dashboard from './Dashboard';

enzyme.configure({ adapter: new Adapter() });

describe('Dashboard component', () => {
    it('renders InvoicesCard component', () => {
        const wrapper = enzyme.shallow(<Dashboard />);
        expect(wrapper.contains(<InvoicesCard />)).toBe(true);
    })
});




