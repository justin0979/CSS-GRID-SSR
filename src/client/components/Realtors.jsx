import { hot } from 'react-hot-loader/root';
import React from 'react';
import { connect } from 'react-redux';
import { fetchRealtors } from '#actions';

class Realtors extends React.Component {
  componentDidUpdate() {}

  renderRealtors = () =>
    this.props.realtors.map(realtor => (
      <li key={realtor.id}>{realtor.name}</li>
    ));

  render() {
    return (
      <div className="realtors">
        <h1>Top 3 Realtors</h1>
        <ul>{this.renderRealtors()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  realtors: state.realtors
});

export default connect(
  mapStateToProps,
  { fetchRealtors }
)(hot(Realtors));
