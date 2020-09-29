import React from 'react';

class BadgeForm extends React.Component {

  // state = {
  //  firstName: '',
  //  lastName: '',
  //  email: '',
  //  jobTitle: '',
  //  twitter: ''
  // }

  // handleChange = e => {
  //  console.log({
  //   name: e.target.name,
  //   value: e.target.value
  // });
  //  this.setState({
  //    [e.target.name]: e.target.value
  //  })
  // }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Button was submit');
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label>First Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="firstName" 
              value={this.props.formValues.firstname}
            /> 
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="lastName" 
              value={this.props.formValues.lastname}
            /> 
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="email" 
              name="email" 
              value={this.props.formValues.email}
            /> 
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="jobTitle" 
              value={this.props.formValues.jobTitle}
            /> 
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="twitter" 
              value={this.props.formValues.twitter}
            /> 
          </div>
          <button
            className="btn btn-primary"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    )
  };

}

export default BadgeForm;