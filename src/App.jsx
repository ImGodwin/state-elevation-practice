import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Books from './components/Books';
import { Component } from 'react';
import CommentArea from './components/CommentArea';
import fantasy from './data/fantasy.json';

class App extends Component {
  render() {
    return (
      <div className="App bg-dark">
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <Books fantasy={fantasy} />
            </Col>
            <Col xs={12} lg={4}>
              <CommentArea />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
