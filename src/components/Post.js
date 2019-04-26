import React from 'react'
import {connect} from 'react-redux'
import {postListing} from '../actions'

class Post extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            newItem: {
                "sleepDate": "",
                "wakeDate": "",
                "sleepTime": "",
                "wakeTime": "",
                "moodBefore": null,
                "moodAfter": null,
                "moodDuring": null
            }
        }

    }

    handleAddChange = (e) => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                [e.target.name]: e.target.value,
            }
        })
    }


    newPost = (e) => {
        e.preventDefault();
        this.props.postListing(this.state.newItem);

        this.setState({
            newItem: {
                "sleepDate": "",
                "wakeDate": "",
                "sleepTime": "",
                "wakeTime": "",
                "moodBefore": null,
                "moodAfter": null,
                "moodDuring": null
            }
        })

    }
    render(){
        return(
        <div className='postContainer'>
           <h1>New Sleep Data</h1>

           <form className="postForm" onSubmit={(e) => this.newPost(e)}>
                <h3>Sleep Date</h3>
                    <input 
                        type = 'date'
                        name = 'sleepDate'
                        onChange = {(e) => this.handleAddChange(e)}
                        value = {this.state.newItem.sleepDate}
                    />
                <h3>Wake Date</h3>
                    <input 
                        type = 'date'
                        name = 'wakeDate'
                        onChange = {(e) => this.handleAddChange(e)}
                        value = {this.state.newItem.wakeDate}
                    />
                <h3>Sleep Time</h3>
                    <input 
                        type = 'time'
                        name = 'sleepTime'
                        onChange = {(e) => this.handleAddChange(e)}
                        value = {this.state.newItem.sleepTime}
                    />
                <h3>Wake Time</h3>
                    <input 
                        type = 'time'
                        name = 'wakeTime'
                        onChange = {(e) => this.handleAddChange(e)}
                        value = {this.state.newItem.wakeTime}
                    />
                    {/* face input */}
                    <div className='mood'>
                    <h3>Mood Rating Before Bed</h3>
                        <input 
                            type = 'radio'
                            name = 'moodBefore'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {1}
                        />

                        <img src ='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/1.png' alt="frown"/>


                        <input 
                            type = 'radio'
                            name = 'moodBefore'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {2}
                        />

                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/2.png' alt='meh'/>


                        <input 
                            type = 'radio'
                            name = 'moodBefore'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {3}
                        />
                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/3.png' alt='smile'/>

                        <input 
                            type = 'radio'
                            name = 'moodBefore'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {4}
                        />
                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/4.png' alt='joy'/>

                    </div>

                    {/* face input */}
                    <div className='mood'>
                        <h3>Mood Rating During Sleep</h3>
                         <input 
                            type = 'radio'
                            name = 'moodDuring'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {1}
                        />

                        <img src ='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/1.png' alt="frown"/>


                        <input 
                            type = 'radio'
                            name = 'moodDuring'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {2}
                        />

                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/2.png' alt='meh'/>


                        <input 
                            type = 'radio'
                            name = 'moodDuring'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {3}
                        />
                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/3.png' alt='smile'/>

                        <input 
                            type = 'radio'
                            name = 'moodDuring'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {4}
                        />
                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/4.png' alt='joy'/>

                    </div>


                    <div className='mood'>
                        <h3>Mood Rating After Waking</h3>
                        <input 
                            type = 'radio'
                            name = 'moodAfter'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {1}
                        />

                        <img src ='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/1.png' alt="frown"/>


                        <input 
                            type = 'radio'
                            name = 'moodAfter'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {2}
                        />

                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/2.png' alt='meh'/>


                        <input 
                            type = 'radio'
                            name = 'moodAfter'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {3}
                        />
                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/3.png' alt='smile'/>

                        <input 
                            type = 'radio'
                            name = 'moodAfter'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleAddChange(e)}
                            value = {4}
                        />
                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/4.png' alt='joy'/>
                    </div>
                     

                    <button className ='postButton'>Post</button>
                </form>

        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return({
      ...state,
      user_id: state.auth.user_id,
      auth: {...state.auth,} 
  
    })
  }
  
  export default connect(mapStateToProps, {postListing})(Post);
  