import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobDetail } from '../../actions/jobs';

class JobAdmin extends Component {

}

function mapStateToProps({ jobs }) {
  return { jobs };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getJobDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedJob);
