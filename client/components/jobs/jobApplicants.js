import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';

import { getApplicants } from '../../actions/applicants';

class JobApplicants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: this.props.jobs.job
    };
  }
  componentWillMount() {
    this.props.getApplicants(this.props.jobs.job.id);
  }

  renderApplicants(applicantData) {
    return (
      <div key={applicantData.user_id}>
        <p>
          Username: {applicantData.username}
        </p>
        <p>
          Bid Price: $ {applicantData.bid_price}
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

export default connect(mapStateToProps, mapDispatchToProps)(JobApplicants);
