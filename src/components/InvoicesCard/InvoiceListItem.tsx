import { ListItem, ListItemText } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import * as React from 'react';

const InvoiceListItem = ({ invoice }) => (
    <ListItem>
        <ListItemText primary={`${invoice.fields.customerId}`}/>
        ${invoice.fields.amount}
        <ChevronRight />
    </ListItem>
)
export default InvoiceListItem;