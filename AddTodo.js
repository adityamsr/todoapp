import React, { Component } from 'react'

class AddTodo extends Component {
    state= {
        content:'' // to take input from form text
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value  // to take input from form text
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();    // this is to refresh the page
        //console.log(this.state);
        this.props.addTodo(this.state);  // this is to pass the content into it
        this.setState({
            content: ''
        })
    }

    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit}> 
               <label> Add new todos </label>
               <input type="text" onChange={this.handleChange} value={this.state.content} />
              </form>
            </div>
        )
    }
}

export default AddTodo