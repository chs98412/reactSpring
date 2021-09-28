import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
// import { Container, Grid } from '@material-ui/core';

import axios from 'axios'


class Home extends Component {
  async api(){
    try {
      const data = await axios.post('https://hyukword.herokuapp.com/test');
      console.log(data)
    } catch {
      // 오류 발생시 실행
    }
  }
    render() {
      //this.api()
        return (
        <div><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525023300360gnuh.jpg" />
        <Card.Body>
          <Card.Title className="mb-2 text-muted" >모카</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">강아지</Card.Subtitle>
          <Card.Text className="mb-2 text-muted">
            성별: 여자
            생년월일 : 2020-09-24
            몸무게: 2kg
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525023300360gnuh.jpg" />
        <Card.Body>
          <Card.Title className="mb-2 text-muted" >모카</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">강아지</Card.Subtitle>
          <Card.Text className="mb-2 text-muted">
            성별: 여자
            생년월일 : 2020-09-24
            몸무게: 2kg
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      </div>
        );
    }
}
export default Home;