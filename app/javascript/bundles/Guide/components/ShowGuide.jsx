import PropTypes from 'prop-types';
import React from 'react';

class ShowGuide extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { guide } = this.props;
    return (
      <div className="container pt-4">
        <div class="jumbotron">
          <h1>Guide Homepage</h1>
          <hr />
          <p>Please tell guide to be honest and polite to all travelers</p>

          <p> This is <b>{guide.email}</b></p>
          <p> He knows: <b>{guide.display_languages}</b> </p>
          <p> He can: <b>{guide.display_activities}</b> </p>
        </div>
      </div>
    )
  }
}

ShowGuide.propTypes = {
  guide: PropTypes.object.isRequired,
};

export default ShowGuide;