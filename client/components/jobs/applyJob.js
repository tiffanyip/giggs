import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { applyJob } from '../../actions/applicants';

class ApplyJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bid: '',
      info: {
        user_id: Cookies.getJSON('user').userid,
        job_id: this.props.jobs.job.job_id
      }
    };
    this.handleApply = this.handleApply.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ bid: e.target.value });
  }

  handleApply(e) {
    e.preventDefault();
    this.state.info.bid_price = this.state.bid;
    this.props.applyJob(this.state.info);
    this.setState({ bid: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleApply} className="input-group">
          <div className="input-group-addon">$</div>
          <input
            className="form-control"
            placeholder="Enter Bid Price"
            value={this.state.bid}
            type="number"
            min="1"
            max={this.props.jobs.job.max_price}
            onChange={this.onInputChange}
          />
          <div className="input-group-addon">.00</div>
          <br />
          <span className="input-group-btn">
            <button
              className="btn btn-important"
              type="submit"
            >
              Apply
            </button>
          </span>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ apply, jobs }) {
  return { apply, jobs };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ applyJob }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyJob);
