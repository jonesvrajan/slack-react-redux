import React from 'react';
import Logo from '../img/slack_logo.svg';
import {Link} from 'react-router-dom'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <header className={this.state.active ? 'mobile-menu-open': null} >
                <h1><Link to="/slack-react-redux/"><img src={Logo} alt="Slack"/></Link></h1>

                <nav className="page-nav">
                    <ul className="page-nav-ul desktop-only">
                        <li>
                            <a href="/">Product</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                        <li>
                            <a href="/">Support</a>
                        </li>
                        <li>
                            <a href="/">Create a new workspace</a>
                        </li>
                        <li>
                            <a href="/">Find your workspace</a>
                        </li>
                        <li>
                            <button className="nav-button">Sign in</button>
                        </li>
                    </ul>
                    <ul className="page-nav-ul mobile-only">
                        <li>
                            <a href="/">Download Slack</a>
                        </li>
                        <li>
                            <button className="nav-button" onClick={()=>this.toggleClass()}>Menu</button>
                        </li>
                    </ul>
                </nav>
                <nav className="mobile-menu">
                    <div className="mobile-menu-header">
                        <a href="/" className="mobile-logo"><img src={Logo} alt="Slack"/></a>
                        <i className="fas fa-times icon-close" onClick={()=>this.toggleClass()}></i>
                    </div>
                    <ul>
                        <li>
                            <a href="/">Product</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                        <li>
                            <a href="/">Support</a>
                        </li>
                        <li>
                            <a href="/">Download the Slack App</a>
                        </li>
                    </ul>
                    <ul className="mobile-menu-footer">
                        <li>
                            <a href="/">Sign in</a>
                        </li>
                        <li>
                            <a href="/">Create a new workspace</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
} 

export default Header;