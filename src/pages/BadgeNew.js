import React from 'react';

import "./styles/BadgeNew.css";
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm.js';

class BadgeNew extends React.Component {

  state = { 
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    } 
  }

  handleChange= e => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      // form: nextForm
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      jobTitle,
      twitter
    } = this.state.form;

    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={firstName} 
                lastName={lastName}
                jobTitle={jobTitle} 
                twitter={twitter}
                email={email}
                avatarURL="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
             <BadgeForm 
              onChange={this.handleChange}
              formValues={this.state.form}
            /> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;