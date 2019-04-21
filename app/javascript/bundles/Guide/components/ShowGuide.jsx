import PropTypes from 'prop-types';
import React from 'react';

class ShowGuide extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    debugger
    return (
      <div className="container pt-4">
        This is guide
      </div>
    )
  }
}

ShowGuide.propTypes = {
  guide: PropTypes.object.isRequired,
};

export default ShowGuide;