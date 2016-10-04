import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createReview } from '../../../actions/review';

import StarReview from './starReview';

class createReviews extends Component {
  constructor(props){
    super(props)
    this.state = {
       type: "employer",
       review_id: 2, //This will be changed!
       job_id: 4, //This will also be changed!
       employerReview: "",
       numericalEmployerReview: ""
     }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStarRate = this.handleStarRate.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('this.state.testing', this.state)
    this.props.createReview(this.state)
  }
  handleChange(event){
    event.preventDefault();
    this.setState({ employerReview : event.target.value})
    console.log('this.state.employerReview', this.state.employerReview)
  }
   handleStarRate(event){
     event.preventDefault();
     this.setState({numericalEmployerReview: event.target.value})
     console.log('Inside starReview:', event.target.value)
   }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4> Write a review! </h4>
          <p> Its always great to hear from you!</p>
          <StarReview star={this.handleStarRate}/>
          <input type="text"
            placeholder="Write a review..."
            value={this.state.employerReview}
            onChange={this.handleChange}
            ></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}



function mapStateToProps({ reviews }) {
  return { reviews };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createReview }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(createReviews);