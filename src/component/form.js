import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';

class FormBeast extends Component{

  constructor(props){
    super(props);
    this.state={
      change:this.props.handelChange ,
      submit:this.props.handelSubmit
    };
    
  }



  render(){
    return (
      <>
        
        <Form onSubmit={this.state.submit} >
          <Form.Label>number of hornes</Form.Label>
          <Form.Control  name ="numberOfHornes" onChange={this.state.change} as="select" custom>
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

