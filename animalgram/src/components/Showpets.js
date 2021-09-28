import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
class Showpets extends Component {
    render(){
        return (
        <article>
        <div><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title className="mb-2 text-muted" >{this.props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.type}</Card.Subtitle>
          <Card.Text className="mb-2 text-muted">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        
        </Card.Body>
      </Card>
      </div>
    </article>
        );
    }
}

export default Showpets;

