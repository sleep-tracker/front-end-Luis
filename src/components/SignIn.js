import React from 'react'
import {connect} from 'react-redux';
import {registerUser} from '../actions'

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            reg: {
                "name": "",
                "lastName": "",
                "age": '',
                "email": "",
                "password": "",
            }
        }

        this.handleChange = e => {
            this.setState({
                reg: {
                    ...this.state.reg, 
                    [e.target.name]: e.target.value
                }
            })
        }

    }

    // Change to register 

    register = (e) => {
        e.preventDefault();
        this.props.registerUser(this.state.reg)
        .then(() => {
            this.props.history.push('/sleep')
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className='loginContainer'>
                <h2>Sign in</h2>
                <form onSubmit= {(e) => this.register(e)} className='loginForm'>
                    <h4>First Name</h4>
                    <input
                        type='text'
                        name='name'
                        placeholder="First Name"
                        value={this.state.reg.name}
                        onChange ={(e) => this.handleChange(e)}

                    />
                    <h4>Last Name</h4>
                    <input
                        type='text'
                        name='lastName'
                        placeholder="email"
                        value={this.state.reg.lastName}
                        onChange ={(e) => this.handleChange(e)}

                    />
                    <h4>Age</h4>
                    <input
                        type='text'
                        name='age'
                        placeholder="Age (optional)"
                        value={this.state.reg.age}
                        onChange ={(e) => this.handleChange(e)}

                    />
                    <h4>Email</h4>
                    <input
                        type='text'
                        name='email'
                        placeholder="email"
                        value={this.state.reg.email}
                        onChange ={(e) => this.handleChange(e)}

                    />

                    <h4>Password</h4>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.reg.password}
                        onChange ={(e) => this.handleChange(e)}
                    />

                    <button className='loginButton'>Sign Up</button>
                </form>

                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return({
      ...state,
  
    })
  }
  
  export default connect(mapStateToProps, {registerUser,})(SignIn);
  