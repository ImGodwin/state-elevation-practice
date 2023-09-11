import { Component } from 'react';
import { Card, Col } from 'react-bootstrap';

class SingleBook extends Component {
  render() {
    return (
      <Col xs={12} md={6}>
        <Card className="my-5">
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
