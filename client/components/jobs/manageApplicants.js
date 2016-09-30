import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';

import { getApplicants } from '../../actions/applicants';

class ManageApplicants extends Component {

  componentWillMount() {
    this.props.getApplicants(this.props.jobs.job.id);
    console.log("this.props.jobs.job", this.props.jobs.job);
  }

  renderApplicants(applicantData) {
    return (
      <div key={applicantData.id}>
        <p>
          User: {applicantData.username}
        </p>
        <p>
          Bid Price: ${applicantData.bid_price}
        </p>
        <p>
          Applied at: {Moment(applicantData.createdAt).format('LLL')}
        </p>
        <button className="btn btn-secondary">
          Accept
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h4> Manage Applicants: </h4>
        {this.props.apply.applicants.map(this.renderApplicants)}
      </div>
    );
  }
}

function mapStateToProps({ apply, jobs }) {
  return { apply, jobs };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getApplicants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageApplicants);
