import { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import SingleBook from './SingleBooks';

class Books extends Component {
  render() {
    //console.log(this.props.fantasy);
    return (
      <Container>
        <Row>
          {this.props.fantasy.map((book) => {
            return <SingleBook key={book.asin} book={book} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default Books;
