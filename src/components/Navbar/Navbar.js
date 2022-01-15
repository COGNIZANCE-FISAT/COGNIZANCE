import React, {Component} from "react";
import {MenuItems} from './MenuItems';
class Navbar extends Component{
    render() {
        return(
            <nav className ="NavbarItems">
                <h1 className="navbar-logo">Cognizance 11.0</h1>
                <div className="menu-icon">
                    
                </div>
                <ul>
                    {MenuItems.map((item, index) =>{
                    return(
                        <li key = {index}>
                        <a claName ={item.cName} href ={item.url}>
                            {item.title}
                        </a>
                        </li>
                    )
                    })}
                </ul>
            </nav>
        );
    }
}
export default Navbar;