import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';

import { getApplicants } from '../../actions/applicants';

import ApplyJob from './applyJob';

class JobApplicants extends Component {

  componentWillMount() {
    this.props.getApplicants(5);
  }

  renderApplicants(applicantData) {
    return (
      <div key={applicantData.user_id}>
        <p>
          Username: {applicantData.username}
        </p>
        <p>
          Bid Price: {applicantData.bid_price}
        </p>
        <p>
          Applied at: {Moment(applicantData.createdAt).format('LLL')}
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="col-md-4">
        <h4> Job Applicants: </h4>
        {this.props.apply.applicants.map(this.renderApplicants)}
        <ApplyJob job_id={5} user_id={14} />
      </div>
    );
  }
}

function mapStateToProps({ apply }) {
  return { apply };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getApplicants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobApplicants);
