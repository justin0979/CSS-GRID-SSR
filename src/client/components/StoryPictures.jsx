import React from 'react';
import story1 from '#img/story-1';
import story2 from '#img/story-2';

class StoryPictures extends React.Component {
  render() {
    return (
      <div className="story__pictures">
        <img
          src={story1}
          alt="Couple with new house"
          className="story__img--1"
        />
        <img
          src={story2}
          alt="Couple with new house"
          className="story__img--2"
        />
      </div>
    );
  }
}

export default StoryPictures;
