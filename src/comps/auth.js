import React, { Component } from 'react';
import './comps.css';
import logo from './assets/logo.png';

export default class Auth extends Component{
    render(){
        return (
            <div className="auth_body">
                <div className="helobox">

                    <div className="helologo">
                        <img className="heloimg" src={ logo } alt="Helo"/>

                        <div className="logotext">Helo</div>

                    </div>

                    <div className="auth_links_contain">
                        <div className="auth_links">
                            <a href='http://localhost:3030/auth' className="authlinktext">Login / Register</a>
                        </div>

                    </div>

                </div> 
            </div>
        )
    }
}