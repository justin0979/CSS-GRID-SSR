import { hot } from 'react-hot-loader/root';
import React from 'react';
import { connect } from 'react-redux';
import { fetchFeatures } from '#actions';

class Features extends React.Component {
  componentDidMount() {
    this.props.fetchFeatures();
  }

  componentDidUpdate() {
    this.props.fetchFeatures();
  }

  renderFeatures = () => {
    return this.props.features.map(feature => (
      <div key={feature.id} className="feature">
        <svg className="feature__icon">
          <use xlinkHref={feature.icon} />
        </svg>
        <h4 className="heading-4 heading-4--dark">{feature.heading}</h4>
        <p className="feature__text">{feature.text}</p>
      </div>
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
)(hot(Features));

/*
Below code bits were used to test redux state with HMR

export default connect(
  mapStateToProps,
  { fetchFeatures, increment, decrement }
)(hot(Features));
const mapStateToProps = state => ({
  features: state.features,
  count: state.count
});
import { fetchFeatures, increment, decrement } from 'actions';
    const { count } = this.props;
        <div>
          <button onClick={() => this.props.increment(count)}>increment</button>
          <button onClick={() => this.props.decrement(count)}>decrement</button>
          <h1>count = {this.props.count}</h1>
        </div>

*/
