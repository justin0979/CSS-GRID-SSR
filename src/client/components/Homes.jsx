import { hot } from 'react-hot-loader/root';
import React from 'react';
import { connect } from 'react-redux';
import { fetchHomes } from '#actions';
import sprite from '#img/sprite';
import Button from '#components/Button';

class Homes extends React.Component {
  componentDidMount() {
    this.props.fetchHomes();
  }

  componentDidUpdate() {
    this.props.fetchHomes();
  }

  render() {
    return (
      <section className="homes">
        {this.props.homes.map(home => (
          <div key={home.id} className="home">
            <img src={home.img} alt={home.alt} className="home__img" />
            <svg className="home__like">
              <use xlinkHref={`${sprite}#icon-heart-full`} />
            </svg>
            <h5 className="home__name">{home.title}</h5>
            {home.descriptions.map(desc => (
              <div key={desc.id} className={`home__${desc.cn}`}>
                <svg>
                  <use xlinkHref={`${sprite}#icon-${desc.icon}`} />
                </svg>
                <p>
                  {desc.text}
                  <sup>{desc.sup}</sup>
                </p>
              </div>
            ))}
            <Button
              cn="home__btn"
              text="Contact realtor"
              renderBtn={() =>
                console.log('Clicked in Homes to contact realtor')
              }
            />
          </div>
        ))}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  homes: state.homes
});

export default connect(
  mapStateToProps,
  { fetchHomes }
)(hot(Homes));
