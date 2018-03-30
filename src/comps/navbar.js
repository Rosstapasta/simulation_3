import React from 'react';
import './comps.css';
import home from './assets/home.png';
import search from './assets/search.png';
import { Link } from 'react-router-dom';

export default function Navbar(props){
    
        return (
            <div className="nav_body">

                <div className="nav1">
                    <p>Helo</p>
                    <div className="placeholdnav"/>
                    <Link to="/dashboard"><img className="navimg" src={ home } alt='home'/></Link>
                    <div className="placeholdnav"/>
                    <Link to="/search"><img src={ search } alt='search'/></Link>
                </div>

                <div className="nav2">
                    <p>{props.children}</p>
                </div>

                <div className="nav2">
                    <Link to="/" style={{textDecoration: 'none', color: 'white'}}><p>Logout</p></Link>
                </div>

            </div>
        )
    
}