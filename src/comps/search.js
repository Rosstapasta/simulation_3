import React, { Component } from 'react';
import './comps.css';
import Navbar from './navbar';
import axios from 'axios';

export default class Search extends Component{
    constructor(props){
        super(props)

        this.state = {

            view: 'Search',
            users: [],
            users2: [],
            filter: '',
            filterProp: 'first_name',
            filterSwitch: false,
            offSetVal: 0,
            dbCount: 0,
            pagesTotal: 0,
            pageArray: [],
            pagedisplayed: 1
        }

        this.makeFriend = this.makeFriend.bind(this);
        this.unFriend = this.unFriend.bind(this);
        this.componentGet = this.componentGet.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.searchButton = this.searchButton.bind(this);
        this.resetButton = this.resetButton.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentGet(){

        axios.get('/getusercount').then( res => {
            this.setState({dbCount: res.data[0].count},
               () => this.setState({pagesTotal: Math.ceil(this.state.dbCount/20)},
                    () => {
                        var pageArraySet = [];
                        var newOffSet = 0;
                        var currentpage = 1;

                        for(let i = 0; i < this.state.pagesTotal; i ++){
                            pageArraySet.push({offset: newOffSet, pagenumber: currentpage});
                            newOffSet+=20;
                            currentpage+=1;
                        }
                        this.setState({pageArray: pageArraySet})
                    }              
                )
            )
        })

        axios.get(`/getallusers?value=${this.state.offSetVal}`).then(
            res => 
            this.setState({users2: res.data}, 
            
               () => axios.get('/friendvalues').then(
                    res => { 
                      
                        var newData = res.data;
                        var newDD = [];
                      
                        for(let i = 0; i < newData.length; i++){
                                newDD.push(newData[i].friend_id)
                        };
                        
                        var newData2 = this.state.users2;
                        for(let j=0; j < newData2.length; j++){
                            for(let k = 0; k < newDD.length; k++){
                                if(newData2[j].id === newDD[k]){
                                    newData2[j].identify = 1;
                                }
                            }
                        }
                        this.setState({users: newData2})                    
                    }
                )
            ) 
        )
    }

    componentWillMount(){
        this.componentGet()
    }

    makeFriend(val){
        axios.post('/newfriend', { val } ).then( res => {
           this.componentGet();
        })
    }

    unFriend(val){
        axios.post('/unfriend', { val }).then( res => {
           this.componentGet();
        })
    }

    handleChange(val){
        this.setState({filter: val});
    }

    handleChange2(e){
        this.setState({filterProp: e.target.value})
    }

    searchButton(){
        this.setState({filterSwitch: true })
    }

    resetButton(){
        this.setState({filterSwitch: false})
    }

    changePage(page){
        this.setState({offSetVal: page.offset, pagedisplayed: page.pagenumber},
        () => this.componentGet()
        )
    }


    render(){
        
        var pages = this.state.pageArray.map( (page, i) => {
            return (
                <div key={i} className="pageBox">
                    {page.pagenumber === this.state.pagedisplayed ? <div>{<button className='currentPage'>page {page.pagenumber}</button>}</div> : <button className='otherPage' onClick={() => this.changePage(page)}>{page.pagenumber}</button>}
                </div>
            )
        })

        var filterRec = [];
        if(this.state.filterSwitch){
            filterRec = this.state.users.filter( people => people[this.state.filterProp] === this.state.filter)
        }else{
            filterRec = this.state.users;
        }

            var friendBoxes = filterRec.map( (people, i) => {

                return (
                    <div key={i} className="friendBox">

                        <img width="100px" src={people.img} alt="not found"/>

                        <div className="friendBox_name">
                            <span>{people.first_name}</span>
                            <span>{people.last_name}</span>                       
                        </div>

                       {people.identify  ? <div>{<button id='blackbutton' className='friendBox_button' onClick={() => this.unFriend(people.id)}>remove friend</button>}</div>: <div>{<button className="friendBox_button" onClick={() => this.makeFriend(people.id)}>add friend</button>}</div> }

                    </div>
                )
            })

        return (
            <div>
                <Navbar>{this.state.view}</Navbar>
                <div className="pagebody">
                    <div className="searchmiddle">

                        <div className="search_top">

                            <select value={this.state.filterProp} className="search_select" onChange={this.handleChange2}>
                                <option value='first_name'>First Name</option>
                                <option value='last_name'>Last Name</option>
                            </select>

                            <input className="search_input" onChange={(e) => this.handleChange(e.target.value)}/>
                                
                            <button id="blackbutton" className="search_button" onClick={ this.searchButton}>Search</button>

                            <button id="greybutton" className="search_button" onClick={this.resetButton}>Reset</button>

                        </div>

                        <div className="users_search_cont">

                            {friendBoxes}

                            <div className='pageFlipThing'>

                                <div className='pageFlipChild'>
                                    {pages}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}