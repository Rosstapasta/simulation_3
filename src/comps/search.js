import React, { Component } from 'react';
import './comps.css';
import Navbar from './navbar';
import axios from 'axios';
import { connect } from 'react-redux';
import { getFriends } from '../ducks/reducer';

class Search extends Component{
    constructor(){
        super()

        this.state = {
            view: 'Search',
            users: []
        }
    }

    componentWillMout(){
        axios.get('/getallusers').then(
            res => this.setState({users: res.data})
        )
        this.props.getFriends()
    }

    render(){

        
        return (
            <div>
                <Navbar>{this.state.view}</Navbar>
                <div className="pagebody">
                    <div className="searchmiddle">

                        <div className="search_top">

                            <select className="search_select">
                                <option>First Name</option>
                                <option>Last Name</option>
                            </select>

                            <input className="search_input"/>

                            <button id="blackbutton" className="search_button">Search</button>

                            <button id="greybutton" className="search_button">Reset</button>

                        </div>

                        <div className="users_search_cont">

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default connect(state => state, {getFriends})(Search)