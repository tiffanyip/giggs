import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';

import { getApplicants } from '../../actions/applicants';

class ApplicantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: this.props.apply.applicants
    };
  }

  componentWillMount() {
    this.props.getApplicants(this.props.jobs.job.id);
  }

  renderApplicants(applicantData) {
    return (
      <div key={applicantData.user_id}>
        <h4>
          user: {applicantData.username}
        </h4>
        <h4>
          bid_price: {applicantData.bid_price}
        </h4>
        <h4>
          applied at: {Moment(applicantData.createdAt).format('LLL')}
        </h4>
      </div>
    );
  }

  render() {
    return (
      <div>
        Job Applicants:
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantList);
