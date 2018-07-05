import * as React from "react";
import { connect } from "react-redux";
import { fetchInvoices } from "../../actions";

// import { Card, CardContent, Divider, List } from '@material-ui/core';
class InvoicesCard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        invoiceTotal: 0,
        invoices: []
    };
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
    // const invoiceTotal = this.getInvoiceTotal();
    return <div>hi</div>;
  }
}

function mapStateToProps(state: any) {
  return { invoices: state.invoices.invoices };
}
export default connect(
  mapStateToProps,
  { fetchInvoices }
)(InvoicesCard);
