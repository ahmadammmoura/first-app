import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';

class FormBeast extends Component{

  constructor(props){
    super(props);
    
  }



  render(){
    return (
      <>
      
        
        <Form onSubmit={this.props.handelSubmit} >
          <Form.Label>number of hornes</Form.Label>
          <Form.Control  name ="numberOfHornes" onChange={this.props.handelChange } as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <Button variant="primary" type="submit">
              Submit
          </Button>
        </Form>
      </>
    );
  }
}


export default FormBeast;

