import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <Form></Form>
            </div>
        )
    }
}

class Form extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://formula-test-api.herokuapp.com/contactn', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                "name": this.name.value,
                "email": this.email.value,
                "comment": this.comment.defaultValue
            }
        })
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="formWrapper" >
                <div className="fieldsContainer">
                    <legend>You can contact us by this form</legend>
                    <p><label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" required/>
                    </p>
                    <p><label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" id="email" required/>

                    </p>
                    <p><label htmlFor="comment">Comment:</label>
                        <textarea name="comment" id="comment" rows = "5" required> </textarea>
                    </p>
                </div>
                <button id="contactFormButton">Submit</button>
            </form>
        )
    }

}