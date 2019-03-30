import React from 'react';
import Field from './field';

class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            form:{
                firstName: '',
                lastName: '',
                phone: '',
                email:''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleInputChange(event){

        const { name, value} = event.target;
        const {form} = this.state;
        form[name] = value;
        this.setState({
            form:{...form}
        })

    }
    handleSubmit(event){
        event.preventDefault();
        this.props.add(this.state.form);
        this.handleReset();
    }
    handleReset = ()=>{
        this.setState({
            form:{
                firstName: '',
                lastName: '',
                phone: '',
                email:''
            }
        })
    }
    render(){
        const {firstName, lastName, phone, email} = this.state.form;

        return(
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone" type="text" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="text" value={email} onChange={this.handleInputChange}/>
                <button>Add Contact</button> 
                <button type="button" onClick={this.handleReset}>Reset</button>
            </form>
            
        )
    }
}
//feature 5
export default ContactForm;