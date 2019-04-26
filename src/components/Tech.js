import React from 'react'
import {NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Post from './Post'
import Listing from './Listing'
import Account from './Account'
import Edit from './Edit'

class Tech extends React.Component {
    componentDidMount(){
        this.props.history.push('/sleep/data')
    }

    render(){

    return(

        <div className='techContainer'>
            <nav className='techNav'>
                <NavLink to='/sleep/data'>My Data</NavLink>
                {/* <NavLink to='/sleep/edit'>Edit</NavLink> */}
                <NavLink to='/sleep/post'>Post</NavLink>
                <NavLink to='/sleep/account'>Account</NavLink>
            </nav>

            <Route path='/sleep/post' component={Post} />
            <Route path='/sleep/edit' component={Edit} />
            <Route path='/sleep/account' component={Account} />
            <Route path='/sleep/data' component={Listing} />

        </div>
       
    )
    }
}

export default Tech

