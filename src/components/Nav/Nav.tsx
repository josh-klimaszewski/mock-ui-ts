
import * as React from "react";
import { Link } from "react-router-dom";
import "./style.css";
class Nav extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeNav: "dashboard"
    };
  }
  public setActiveNav = (nav: any) => {
    this.setState({ activeNav: nav });
  };
  public render() {
    return (
      <div className="nav-bar">
        
        <div className="links">
            <Link to="/" 
            className={this.state.activeNav === "dashboard" ? "active" : ""}
            onClick={() => this.setActiveNav("dashboard")}
            >
              <i className="material-icons md-dark">dashboard</i>
              Dashboard
            </Link>
            <Link to="/invoices" 
            className={this.state.activeNav === "invoices" ? "active" : ""}
            onClick={() => this.setActiveNav("invoices")}
            >
              <i className="material-icons md-dark">receipt</i>
              Invoices
            </Link>
            <Link to="/paybills" 
            className={this.state.activeNav === "paybills" ? "active" : ""}
            onClick={() => this.setActiveNav("paybills")}
            >
              <i className="material-icons md-dark">credit_card</i>
              Pay Bills
            </Link>
            <Link to="/accounting" 
            className={this.state.activeNav === "accounting" ? "active" : ""}
            onClick={() => this.setActiveNav("accounting")}
            >
              <i className="material-icons md-dark">assessment</i>
              Accounting
            </Link>
            <Link to="/reports" 
            className={this.state.activeNav === "reports" ? "active" : ""}
            onClick={() => this.setActiveNav("reports")}
            >
              <i className="material-icons md-dark">subject</i>
              Reports
            </Link>
            <Link to="connectedapps/" 
            className={this.state.activeNav === "connectedapps" ? "active" : ""}
            onClick={() => this.setActiveNav("connectedapps")}
            >
              <i className="material-icons md-dark">device_hub</i>
              Connected Apps
            </Link>
            {/* <figure className="gap" /> */}
            <figure className="gap" />
            <figure className="gap" />
            
            <Link to="/settings" 
            className={this.state.activeNav === "settings" ? "active" : ""}
            onClick={() => this.setActiveNav("settings")}
            >
              <i className="material-icons md-dark">settings</i>
              Settings
            </Link>
        </div>
      </div>
    );
  }
}
export default Nav;