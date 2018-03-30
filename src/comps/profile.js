import React, { Component } from 'react';
import './comps.css';
import Navbar from './navbar';

export default class Profile extends Component{
    constructor(){
        super()

        this.state = {
            view: 'Profile'
        }
    }

    render(){
        return (
            <div>
                <Navbar>{this.state.view}</Navbar>
                <div className="pagebody">
                <div className="dashcontent">
                    <div className="profile_info">
                        <div className="profile_img_name_conts">
                            <img className="profile_img" alt="profile_img"/>
                            <div>
                                <h2>firstName</h2>
                                <h2>lastName</h2>
                            </div>
                        </div>

                        <div className="profile_buttons">
                            <button id="blackbutton" className="search_button">update</button>
                            <button id="greybutton" className="search_button">cancel</button>
                        </div>
                    </div>
                    

                    <div id="profile_edits" className="bottom_contents">

                        <div className="profedits">

                            <div className="proeditColumn">
                                <p className="profileTexts">First Name</p>
                                <input className="profileInputs"/>
                                <p className="profileTexts">Last Name</p>
                                <input className="profileInputs"/>
                                <p className="profileTexts">Gender</p>
                                <select className="profileSelect">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                <p className="profileTexts">Hair Color</p>
                                <select className="profileSelect">
                                    <option>Brown</option>
                                    <option>Blue</option>
                                    <option>Green</option>
                                    <option>Red</option>
                                    <option>Blonde</option>
                                    <option>White</option>
                                </select>  <p className="profileTexts">Eye Color</p>
                                <select className="profileSelect">
                                    <option>Brown</option>
                                    <option>Blue</option>
                                    <option>Green</option>
                                </select>

                            </div>

                            <div className="proeditColumn">

                                <p className="profileTexts">Hobby</p>
                                <select className="profileSelect">
                                    <option>Video Games</option>
                                    <option>Hiking</option>
                                    <option>Rafting</option>
                                    <option>Fishing</option>
                                </select>  <p className="profileTexts">Birthday Day</p>
                                <select className="profileSelect">
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
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
                                <select className="profileSelect">
                                    <option>January</option>
                                    <option>Feburary</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <p className="profileTexts">Birthday Year</p>
                                <select className="profileSelect">
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