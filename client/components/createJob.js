import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputBox from './inputBox';
import { createJob } from '../actions/jobs';

class CreateJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      openings: '',
      maxPrice: '',
      deadlineDate: '',
      deadlineTime: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.jobSubmit = this.jobSubmit.bind(this);
  }

  handleChange(input, event) {
    this.setState({ [input]: event.target.value });
  }

  jobSubmit(event) {
    event.preventDefault();
    this.props.createJob(this.state);
  }
  renderForm() {
    return (
      <form onSubmit={this.jobSubmit}>
        <InputBox
          type="text"
          input="name"
          value={this.state.name}
          place="Job Name"
          func={this.handleChange}
        />
        <InputBox
          type="text"
          input="openings"
          value={this.state.openings}
          place="Openings"
          func={this.handleChange}
        />
        <InputBox
          type="number"
          input="maxPrice"
          value={this.state.maxPrice}
          place="Price"
          func={this.handleChange}
        />
        <InputBox
          type="date"
          input="deadlineDate"
          value={this.state.deadlineDate}
          place="Deadline Date"
          func={this.handleChange}
        />
        <InputBox
          type="time"
          input="deadlineTime"
          value={this.state.deadlineTime}
          place="Deadline Time"
          func={this.handleChange}
        />
        <button type="submit">Create Job</button>
      </form>
    );
  }

  render() {
    return (
      <div>
        <h3>Create Job</h3>
        {this.renderForm()}
      </div>
    );
  }
}

function mapStateToProps({ job }) {
  return { job };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createJob }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);