import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render(){
    return(
       <div className='homeContainer'>
           <h2>Welcome!</h2>
           <h3>Please <Link to='/login'>Login</Link> or <Link to='/signin'>Sign Up</Link>!</h3>
       </div>
    )
    }
}

export default Home