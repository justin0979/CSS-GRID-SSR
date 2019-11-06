import React from 'react';
import Button from '#components/Button';

class StoryContent extends React.Component {
  render() {
    return (
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;The Best Decision of Our Lives&rdquo;
        </h2>
        <p className="story__text mb-lg">
          This is a story for some kind of thing, I don't really know what we
          are going to be talking about here.
        </p>
        <Button
          text="Find your own home"
          cn=""
          renderBtn={() => console.log('Clicked in the Story Content Section')}
        />
      </div>
    );
  }
}

export default StoryContent;
