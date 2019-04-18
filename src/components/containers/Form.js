import React, { Component } from 'react'
import { database } from '../../firebase'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getNotes, saveNotes } from '../../actions/notesActions'


 class Form extends Component {
    
    constructor(props){
        super(props);
        //state
        this.state = {
            title: '',
            body: '',
            notes:{}
        }
        //bind
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderNotes = this.renderNotes.bind(this)
    }

    //Handle Change
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //lifecycle
    componentDidMount(){
       this.props.getNotes(); 
    }

    //Handle submit
    handleSubmit(e){
        e.preventDefault()
        const note = {
            title:this.state.title,
            text:this.state.text
           
        }
        this.props.saveNotes()
        this.setState({
            title: '',
            body: ''
        })
    }


    // render notes
    renderNotes() {
        return _.map(this.state.notes, (note, key) => {
            return (
                <div key={note.uid}>
                    <h2>{note.title}</h2>
                    <p>{note.text}</p>
                </div>
            );
        });
    }
   
  
  
  
    render() {
   
    
    return (
      <div className="form-continer">
         <form onSubmit={this.handleSubmit} >
            <div className="form-field">
                <label htmlFor="title">Title</label>
                <input 
                    name="title" 
                    value={this.state.title}
                    type="text" 
                    className="field" 
                    placeholder="...Insert Title"
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-field">
                <label htmlFor="text">Text</label>
                <input 
                    name="text" 
                    value={this.state.text}
                    type="text" 
                    className="field" 
                    placeholder="...Insert Text"
                    onChange={this.handleChange}
                    required
                />
            </div>
            <div className="form-field">
                <button  className="btn">Submit</button>
            </div>
         </form>
         {this.renderNotes()}
         
        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        notes: state.notes
    }
}




export default connect(mapStateToProps, {getNotes, saveNotes}) (Form)
