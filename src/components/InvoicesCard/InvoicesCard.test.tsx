import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

// import { fetchInvoices } from "../../actions";
import InvoicesCard from './InvoicesCard';

enzyme.configure({ adapter: new Adapter() });

describe('InvoicesCard component', () => {
    it('should execute fetchInvoices', () => {
        const wrapper = enzyme.shallow(<InvoicesCard />);
        expect(wrapper.prop('fetchInvoices()')).toHaveBeenCalledTimes(1);
    });
});