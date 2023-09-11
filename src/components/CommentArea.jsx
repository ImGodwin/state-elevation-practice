import { Component } from 'react';
import { Form } from 'react-bootstrap';
import AddComment from './AddComment';

class CommentArea extends Component {
  state = {
    booksComment: [],
  };

  componentDidCatch = async () => {
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGM3NjUxNWY0MTAwMTQ2OTdhMzEiLCJpYXQiOjE2OTQ0Mzc0NDMsImV4cCI6MTY5NTY0NzA0M30.78f7OKz_UVhH1sb88WNzcTCQxLqUiWzAEsqINvGvkpY',
        },
      });
      console.log(response);

      if (response.ok) {
        let comments = await response.json();
        this.setState({ booksComment: comments });
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return <AddComment asin={this.props.asin} />;
  }
}

export default CommentArea;
