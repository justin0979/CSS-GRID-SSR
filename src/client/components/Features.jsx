import React from 'react';
import { connect } from 'react-redux';
import { fetchFeatures } from 'actions';

class Features extends React.Component {
  componentDidMount() {
    this.props.fetchFeatures();
  }

  renderFeatures = () => {
    return this.props.features.map(feature => (
      <div key={feature.id}>{feature.text}</div>
    ));
  };

  render() {
    return <section className="features">{this.renderFeatures()}</section>;
  }
}

const mapStateToProps = state => ({
  features: state.features
});

export default connect(
  mapStateToProps,
  { fetchFeatures }
)(Features);
