import Moment from 'moment';
import React, { Component } from 'react';
import Cookies from 'js-cookie';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getJobDetail, getCategoryName } from '../../actions/jobs';

import ApplyJob from './applyJob';
import JobApplicants from './jobApplicants';


class SelectedJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Cookies.getJSON('user').userid,
      job: {},
    };
  }

  componentWillMount() {
    this.props.getJobDetail(5).then(() => {
      this.setState({ job: this.props.jobs.job });
    });
  }

  render() {
    return (
      <div>
        <div className="col-md-6">
          <h4> Job Name: </h4> {this.props.jobs.job.jobName} <br />
          <h4> Username: </h4> {this.props.jobs.job.username} <br />
          <h4> Openings: </h4> {this.props.jobs.job.openings} <br />
          <h4> Address: </h4> {this.props.jobs.job.address} <br />
          <h4> Category: </h4> {this.props.jobs.job.category} <br />
          <h4> Description: </h4>{this.props.jobs.job.description} <br />
          <h4> Max Price: </h4> ${this.props.jobs.job.max_price} <br />
          <h4> Job Created: </h4>{Moment(this.props.jobs.job.createdAt).format('LLL')} <br />
          <h4> Deadline: </h4>{Moment(this.props.jobs.job.deadline).format('LLL')} <br />
        </div>
        <JobApplicants job_id={5} user_id={this.state.user}/>
        {/* <ApplyJob job_id={5} user_id={this.state.user} /> */}
      </div>
    );
  }
}

function mapStateToProps({ jobs }) {
  return { jobs };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getJobDetail, getCategoryName }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedJob);
