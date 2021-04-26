import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class HornedBeasts extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      likes : 0
    };
  }
  
  handelLikes = ()=>{
    this.setState({
      likes:this.state.likes +1
    });
  }
  
  render(){
    return (
      <Card style={{width:'20rem',margin:'2rem'}} >
        <Card.Img  style={{width:'15rem',margin:'auto'}} src={this.props.image_url} />
        <Card.Body style={{margin:'auto'}} >
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Text>
            {this.state.likes}
          </Card.Text>
        </Card.Body>
        <Button onClick={this.handelLikes} variant="primary">like</Button>
      </Card>
    );
  }
}

export default HornedBeasts;
