import { Collapse, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import * as React from 'react';


class Summary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            open: false
        }
    }
    public handleToggle = () => {
        this.setState(({ open }) => ({
            open: !open
        }));
    };
    public render() {
        const { primary, amount, renderExpanded } = this.props;
        return(
            <React.Fragment>
                <ListItem className="list" onClick={this.handleToggle}>
                    <div className="list-item">
                        <ListItemText 
                            primary={primary}
                        />
                        ${amount}
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </div>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
                        {renderExpanded && renderExpanded()}
                    </Collapse>
                </ListItem>
            </React.Fragment>
        )
    }
}
export default Summary;
