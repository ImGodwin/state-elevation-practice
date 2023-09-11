import { Component } from 'react';
import { Form } from 'react-bootstrap';

class AddComment extends Component {
  state = {
    bookCommentList: {
      comment: '',
      rate: 1,
      bookId: this.props.asin,
    },
  };

  senCommentToServer = async (event) => {
    event.preventDefault();

    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        body: JSON.stringify(this.state.bookCommentList),
        headers: {
          'Content-type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGM3NjUxNWY0MTAwMTQ2OTdhMzEiLCJpYXQiOjE2OTQwOTM4NTMsImV4cCI6MTY5NTMwMzQ1M30.V7v-WBeO5LjksDBGJyfkLRYD6p6GcRiNkTDyhd99vOQ',
        },
      });
      if (response.ok) {
        this.setState({
          bookCommentList: {
            comment: '',
            rate: 1,
            elementId: this.props.asin,
          },
        });
      }
    } catch (error) {
      console.log('error');
    }
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Leave Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Comment here"
              value={this.state.bookCommentList.comment}
              onChange={(e) =>
                this.setState({
                  bookCommentList: {
                    ...this.state.bookCommentList,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default AddComment;
