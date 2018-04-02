import React, { Component } from 'react';
import './comps.css';
import Navbar from './navbar';
// import { getUser } from '../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';

class Profile extends Component{
    constructor(props){
        super(props)

        this.state = {
            view: 'Profile',
            firstName: '',
            lastName: '',
            gender: '',
            hairColor: '',
            eyeColor: '',
            hobby: '',
            birthDay: 0,
            birthMonth: '',
            birthYear: 0,
            firstNameTitle: '',
            lastNameTitle: '',
            picture: '',
            user: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.cancelUpdates = this.cancelUpdates.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        axios.get('/getoneuser').then(
            user => this.setState({
                firstName: user.data[0].first_name || '',
                firstNameTitle: user.data[0].first_name || '',
                lastName: user.data[0].last_name || '',
                lastNameTitle: user.data[0].last_name || '',
                gender: user.data[0].gender || '',
                hairColor: user.data[0].hair_color || '',
                eyeColor: user.data[0].eye_color || '',
                hobby: user.data[0].hobby || '',
                birthDay: user.data[0].bday || 0,
                birthMonth: user.data[0].bmonth || '',
                birthYear: user.data[0].byear || 0,
                picture: user.data[0].img || '',
                user: user.data
            })
        )
    }

    handleChange(val, val2){
        this.setState({[val2]: val})
    }

    cancelUpdates(){
        const { user } = this.state;
        this.setState({
            firstName: user[0].first_name || '',           
            lastName: user[0].last_name || '',
            gender: user[0].gender || '',
            hairColor: user[0].hair_color || '',
            eyeColor: user[0].eye_color || '',
            hobby: user[0].hobby || '',
            birthDay: user[0].bday || 0,
            birthMonth: user[0].bmonth || '',
            birthYear: user[0].byear || 0,
            picture: user[0].img || '',
        })
    }

    updateUser(){

        const { firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear } = this.state;

        axios.put('/updateuser', {firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear}).then(
            user => this.setState({
                firstName: user.data[0].first_name || '',
                firstNameTitle: user.data[0].first_name || '',
                lastName: user.data[0].last_name || '',
                lastNameTitle: user.data[0].last_name || '',
                gender: user.data[0].gender || '',
                hairColor: user.data[0].hair_color || '',
                eyeColor: user.data[0].eye_color || '',
                hobby: user.data[0].hobby || '',
                birthDay: user.data[0].bday || 0,
                birthMonth: user.data[0].bmonth || '',
                birthYear: user.data[0].byear || 0,
                picture: user.data[0].img || '',
                user: user.data
            })
        )
    }

    render(){
        return (
            <div>
                <Navbar>{this.state.view}</Navbar>
                <div className="pagebody">
                <div className="dashcontent">
                    <div className="profile_info">
                        <div className="profile_img_name_conts">
                            <img src={this.state.picture} className="profile_img" alt="profile_img"/>

                            <div>

                                <h2>{this.state.firstNameTitle}</h2>
                                <h2>{this.state.lastNameTitle}</h2>

                            </div>

                        </div>

                        <div className="profile_buttons">
                            <button id="blackbutton" className="search_button" onClick={this.updateUser}>update</button>
                            <button id="greybutton" className="search_button" onClick={this.cancelUpdates}>cancel</button>
                        </div>
                    </div>
                    

                    <div id="profile_edits" className="bottom_contents">

                        <div className="profedits">

                            <div className="proeditColumn">

                                <p className="profileTexts">First Name</p>
                                <input value={this.state.firstName} className="profileInputs" onChange={(e) => this.handleChange(e.target.value, 'firstName')}/>

                                <p className="profileTexts">Last Name</p>
                                <input value={this.state.lastName} className="profileInputs" onChange={(e) => this.handleChange(e.target.value, 'lastName')}/>

                                <p className="profileTexts">Gender</p>
                                <select value={this.state.gender} className="profileSelect" onChange={(e) => this.handleChange(e.target.value, 'gender')}>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </select>

                                <p className="profileTexts">Hair Color</p>
                                <select value={this.state.hairColor} className="profileSelect" onChange={(e) => this.handleChange(e.target.value, 'hairColor')}>
                                    <option value='Brown'>Brown</option>
                                    <option value='Blue'>Blue</option>
                                    <option value='Green'>Green</option>
                                    <option value='Red'>Red</option>
                                    <option value='Blonde'>Blonde</option>
                                    <option value='White'>White</option>
                                </select>
                                
                                <p className="profileTexts">Eye Color</p>
                                <select value={this.state.eyeColor} className="profileSelect" onChange={(e) => this.handleChange(e.target.value, 'eyeColor')}>
                                    <option value='Brown'>Brown</option>
                                    <option value='Blue'>Blue</option>
                                    <option value='Green'>Green</option>
                                </select>

                            </div>

                            <div className="proeditColumn">

                                <p className="profileTexts">Hobby</p>
                                <select value={this.state.hobby} className="profileSelect" onChange={(e) => this.handleChange(e.target.value, 'hobby')}>
                                    <option value='Video Games'>Video Games</option>
                                    <option value='Hiking'>Hiking</option>
                                    <option value='Rafting'>Rafting</option>
                                    <option value='Fishing'>Fishing</option>
                                </select>  
                                
                                <p className="profileTexts">Birthday Day</p>
                                <select value={this.state.birthDay} className="profileSelect" onChange={(e) => this.handleChange(e.target.value, 'birthDay')}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>  

                                <p className="profileTexts">Birthday Month</p>
                                <select value={this.state.birthMonth} className="profileSelect" onChange={(e) => this.handleChange(e.target.value, 'birthMonth')}>
                                    <option value='January'>January</option>
                                    <option value='Feburary'>Feburary</option>
                                    <option value='March'>March</option>
                                    <option value='April'>April</option>
                                    <option value='May'>May</option>
                                    <option value='June'>June</option>
                                    <option value='July'>July</option>
                                    <option value='August'>August</option>
                                    <option value='September'>September</option>
                                    <option value='October'>October</option>
                                    <option value='November'>November</option>
                                    <option value='December'>December</option>
                                </select>

                                <p className="profileTexts">Birthday Year</p>
                                <select value={this.state.birthYear} className="profileSelect" onChange={(e) => this.handleChange(e.target.value, 'birthYear')}>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(Profile)