import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import emailyLogo from './../emaily-logo.png';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null: 
                return;
            case false:
                return (
                    <li><a href="/auth/google" className="teal-text">Login With Google</a></li>
                )
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2" style={{ margin: '0 10px' }} className="teal-text">Credits :{ this.props.auth.credits }</li>,
                    <li key="3"><a href="/api/logout" className="teal-text">Logout</a></li>
                ]
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper teal lighten-5">
                    
                    <Link 
                        to={this.props.auth ? '/surveys' : '/' } 
                        className="left brand-logo "
                    >
                        <img src={emailyLogo} className="responsive-img" style={{ height: '64px', margin: '5px 20px' }} alt="logo"/>
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
            
        )
    }
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);