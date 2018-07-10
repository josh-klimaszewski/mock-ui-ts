import { Card, CardContent, Divider, List } from '@material-ui/core';
import * as React from "react";
import { connect } from "react-redux";
import { fetchInvoices } from "../../actions";

import InvoiceList from './InvoiceList';
import './style.css';
import Summary from './Summary';



// import { Card, CardContent, Divider, List } from '@material-ui/core';
export class InvoicesCard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        invoiceTotal: 0,
        invoices: []
    };
    this.getInvoiceTotal = this.getInvoiceTotal.bind(this);
  }
  public getInvoiceTotal = () => {
    const invoices = this.props.invoices;
    return invoices.reduce(
      (total: any, current: any) => total + current.fields.amount,
      0
    );
    
  };
  public componentDidMount() {
    this.props.fetchInvoices();
  }
  public render() {
    const invoiceTotal = this.getInvoiceTotal();
    return (
        <Card className="card">
            <CardContent className="card-header">
                Invoices
            </CardContent>
            <List>
                <Summary 
                    className="summary"
                    primary="Coming Due"
                    amount={invoiceTotal}
                    renderExpanded={() => <InvoiceList invoices={this.props.invoices} />}
                />
                <Divider />
                <Summary 
                    className="summary"
                    primary="Past Due"
                    amount={5560}
                    renderExpanded={() => <InvoiceList invoices={this.props.invoices} />}
                />
                <Divider />
            </List>
        </Card>
    )
  }
}

function mapStateToProps(state: any) {
  return { invoices: state.invoices.invoices };
}
export default connect(
  mapStateToProps,
  { fetchInvoices }
)(InvoicesCard);
