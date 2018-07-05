import * as React from "react";
import logo from '../../assets/sally_dogwalker_logo.png'

import "./style.css";

class Header extends React.Component<any, any> {
    public render() {
        return (
            <div className='dashHeader'>
                <div className='dashHeaderCompany'>
                    <img className='sallyLogo' src={logo} alt='Sally the Dog Walker' />
                </div>
                <div className='dashHeaderActions'>
                    <i className="material-icons">add_circle</i>
                    <span>QUICK ACTIONS</span>
                </div>
                <div className='dashHeaderSearch'>
                    <i className="material-icons">search</i>
                </div>
            </div>
        )
    };
}

export default Header;
