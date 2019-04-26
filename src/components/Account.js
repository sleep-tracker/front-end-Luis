import React from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../actions'

class Account extends React.Component {
    componentDidMount(){
        this.props.getUserInfo();
    }
    render(){
        return(
            <div className='accountContainer'>
                <div className='accountInfo'>  
                    <h1>Account Info</h1>

                    <div className='accountDetails'>
                        <img src='https://www.matchmyemail.com/wp-content/themes/nrg/images/userpic.png' alt='default'/>
                        <div>
                            <h2>Name: {this.props.users.name} {this.props.users.lastName}</h2>
                            <h2>Email: {this.props.users.email}</h2>
                            <h2>Age: {this.props.users.age}</h2>
                            <h2>User id: {this.props.users.id}</h2>
                        </div>
                        

                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
      ...state,
      users: state.users,
  
    })
  }

export default connect(mapStateToProps, {getUserInfo})(Account);
