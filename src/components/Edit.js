import React from 'react'
import {connect} from 'react-redux'
import {editPost} from '../actions'

class Edit extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            editedItem: {
                "id": this.props.newEdit.id,
                "sleepDate": this.props.newEdit.sleepDate,
                "wakeDate": this.props.newEdit.wakeDate,
                "sleepTime": this.props.newEdit.sleepTime,
                "wakeTime": this.props.newEdit.wakeTime,
                "moodBefore": this.props.newEdit.moodBefore,
                "moodAfter": this.props.newEdit.moodAfter,
                "moodDuring": this.props.newEdit.moodDuring,
            }
        }
    }



    handleEdit = (e) => {
        this.setState({
            editedItem: {
                ...this.state.editedItem,
                [e.target.name]: e.target.value,
            }
        })
    }


    editPost = (e) => {
        e.preventDefault();

        this.props.editPost(this.state.editedItem)
        .then(this.props.history.push('/technology/listing'))
        
        this.setState({
            editedItem: {
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
           <h1>Edit Post Listing</h1>

           <form className="postForm" onSubmit={(e) => this.editPost(e)}>
                <h3>Sleep Date</h3>
                    <input 
                        type = 'date'
                        name = 'sleepDate'
                        onChange = {(e) => this.handleEdit(e)}
                        value = {this.state.editedItem.sleepDate}
                    />
                <h3>Wake Date</h3>
                    <input 
                        type = 'date'
                        name = 'wakeDate'
                        onChange = {(e) => this.handleEdit(e)}
                        value = {this.state.editedItem.wakeDate}
                    />
                <h3>Sleep Time</h3>
                    <input 
                        type = 'time'
                        name = 'sleepTime'
                        onChange = {(e) => this.handleEdit(e)}
                        value = {this.state.editedItem.sleepTime}
                    />
                <h3>Wake Time</h3>
                    <input 
                        type = 'time'
                        name = 'wakeTime'
                        onChange = {(e) => this.handleEdit(e)}
                        value = {this.state.editedItem.wakeTime}
                    />
                    {/* face input */}
                    <div className='mood'>
                    <h3>Mood Rating Before Bed</h3>
                        <input 
                            type = 'radio'
                            name = 'moodBefore'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleEdit(e)}
                            value = {1}
                        />

                        <img src ='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/1.png' alt="frown"/>


                        <input 
                            type = 'radio'
                            name = 'moodBefore'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleEdit(e)}
                            value = {2}
                        />

                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/2.png' alt='meh'/>


                        <input 
                            type = 'radio'
                            name = 'moodBefore'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleEdit(e)}
                            value = {3}
                        />
                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/3.png' alt='smile'/>

                        <input 
                            type = 'radio'
                            name = 'moodBefore'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleEdit(e)}
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
                            onChange = {(e) => this.handleEdit(e)}
                            value = {1}
                        />

                        <img src ='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/1.png' alt="frown"/>


                        <input 
                            type = 'radio'
                            name = 'moodDuring'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleEdit(e)}
                            value = {2}
                        />

                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/2.png' alt='meh'/>


                        <input 
                            type = 'radio'
                            name = 'moodDuring'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleEdit(e)}
                            value = {3}
                        />
                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/3.png' alt='smile'/>

                        <input 
                            type = 'radio'
                            name = 'moodDuring'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleEdit(e)}
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
                            onChange = {(e) => this.handleEdit(e)}
                            value = {1}
                        />

                        <img src ='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/1.png' alt="frown"/>


                        <input 
                            type = 'radio'
                            name = 'moodAfter'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleEdit(e)}
                            value = {2}
                        />

                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/2.png' alt='meh'/>


                        <input 
                            type = 'radio'
                            name = 'moodAfter'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleEdit(e)}
                            value = {3}
                        />
                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/3.png' alt='smile'/>

                        <input 
                            type = 'radio'
                            name = 'moodAfter'
                            placeholder = 'Mood Before 1-5'
                            onChange = {(e) => this.handleEdit(e)}
                            value = {4}
                        />
                        <img src='https://5cc1ef044fb4f343b07ba0d6--vigorous-yalow-45b1cc.netlify.com/img/4.png' alt='joy'/>
                    </div>
                     

                    <button className ='postButton'>Edit</button>
                </form>

        </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.table();
    return({
      ...state,
      user_id: state.auth.user_id,
      auth: {...state.auth,} ,

      pass: state.pass,
      newEdit: {...state.newEdit},
  
    })
  }
  
  export default connect(mapStateToProps, {editPost})(Edit);
  