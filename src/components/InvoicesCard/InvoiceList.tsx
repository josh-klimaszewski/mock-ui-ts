
import { List } from '@material-ui/core';
import * as React from 'react';
import InvoiceListItem from './InvoiceListItem';


const InvoiceList = ({ invoices }) => (
    <List>
        {invoices.map((invoice) => (
            <InvoiceListItem invoice={invoice} key={invoice.id} />
        ))}
    </List>
    
);
export default InvoiceList;