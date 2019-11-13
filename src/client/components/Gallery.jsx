import { hot } from "react-hot-loader/root";
import React from "react";
import { connect } from "react-redux";
import { fetchGallery } from "#actions";

class Gallery extends React.Component {
  componentDidMount() {
    this.props.fetchGallery();
  }

  componentDidUpdate() {
    this.props.fetchGallery();
  }

  render() {
    return (
      <section className="gallery">
        {this.props.gallery.map(gal => {
          return (
            <figure
              key={gal.id}
              className={`gallery__item gallery__item--${gal.id}`}
            >
              <img
                src={gal.img}
                alt={`Gallery image ${gal.id}`}
                className="gallery__img"
              />
            </figure>
          );
        })}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  gallery: state.gallery
});

export default connect(mapStateToProps, { fetchGallery })(hot(Gallery));
