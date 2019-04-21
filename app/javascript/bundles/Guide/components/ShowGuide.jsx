import PropTypes from 'prop-types';
import React from 'react';

class ShowGuide extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {value: ''};

    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReviewChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { guide } = this.props;
    return (
      <div className="container pt-4">
        <a href={"/guide"}>Click here to go to home page</a>

        <div className="jumbotron">
          <h1>Guide Homepage</h1>
          <hr />
          <p>Please tell guide to be honest and polite to all travelers</p>

          <p> This is <b>{guide.email}</b></p>
          <p> He knows: <b>{guide.display_languages}</b> </p>
          <p> He can: <b>{guide.display_activities}</b> </p>
          <p> His rating: </p>
        </div>

        <h3> He would like to get your appreciation </h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="reviewInput">
              Comment
              <input id="reviewInput" type="text" className="form-control" value={this.state.comment} onChange={this.handleReviewChange} />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    )
  }
}

ShowGuide.propTypes = {
  guide: PropTypes.object.isRequired,
};

export default ShowGuide;