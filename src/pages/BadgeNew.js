import React from 'react';

import "./styles/BadgeNew.css";
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm.js';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component {

  state = { 
    loading: false,
    error: null,
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {

    if(this.state.loading) {
      return <PageLoading />;
    }

    const {
      firstName,
      lastName,
      email,
      jobTitle,
      twitter
    } = this.state.form;

    return (
      <>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={firstName || 'FIRST_NAME'} 
                lastName={lastName || 'LAST_NAME'}
                jobTitle={jobTitle || 'JOB_TITLE'} 
                twitter={twitter || 'TWITTER'}
                email={email || 'EMAIL'}
                avatarURL="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
             <BadgeForm 
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}
            /> 
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeNew;