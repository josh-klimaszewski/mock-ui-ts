import * as React from 'react';
import { connect } from 'react-redux';
import { fetchInvoices } from '../../actions';
class InvoicesCard extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            invoices: []
        }
    }
    public componentDidMount() {
        fetchInvoices();
        
        
    }
    public render() {
        
        return (
            <div>hi</div>
        );
    }
}
function mapStateToProps(state: any) {
    
    return { invoices: state.invoices.invoices }
}
export default connect(mapStateToProps, { fetchInvoices })(InvoicesCard);