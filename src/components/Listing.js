import React from 'react'
import {connect} from 'react-redux'
import {getItems, deleteItem, passItem, opt} from '../actions';

class Listing extends React.Component {


    componentDidMount(){
        this.props.getItems()
        this.props.opt()
    }

    edit = (item) => {
        console.log(item)
        this.props.passItem(item)
        this.props.history.push('/sleep/edit')

    } 


    render(){
        return(
        <div>
            <div>
                <h1>{this.props.bestSleep.bestSleep} </h1>
            </div>

            <div className = 'listingContainer'>

                {this.props.tech.map((i,index) => {
                    return(
                    <div key={index} className='item'>
                    <div className='text'>
                        <div className='line'></div>
                        <h3>Sleed Date:</h3>
                        <p>{i.sleepDate}</p>
                        <h3>Wake Date:</h3>
                        <p>{i.wakeDate}</p>
                        <h3>Bed Time:</h3>
                        <p>{i.sleepTime}</p>
                        <h3>Wake Time:</h3>
                        <p>{i.wakeTime}</p>
                        <h3>Mood</h3>
                        <p>Before: {i.moodBefore}/4</p>
                        <p>During: {i.moodDuring}/4</p>
                        <p>After: {i.moodAfter}/4</p>

                    </div>

                        <div className='buttons'>
                            <button className='updateButton' onClick={() => this.edit(i)}>Edit Item</button>
                            <button className='deleteButton' onClick={() => this.props.deleteItem(i.id)}>Delete Item</button>
                        </div>
                    </div>      
                    )
                })}
            </div>
         </div>
        )
    }
}
const mapStateToProps = (state) => {
    return({
      ...state,
      tech: state.tech,
      bestSleep: state.bestSleep,
  
    })
  }
  
  export default connect(mapStateToProps, {getItems, deleteItem, passItem, opt})(Listing);
  