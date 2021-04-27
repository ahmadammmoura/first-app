import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends Component{

  constructor(props){
    super(props);
    this.state={
      data:this.props.state
    };
  }

  render(){
    return (
      <>
        <Modal
          size="lg"
          show={this.props.show}
          onHide={this.props.onHide}
          aria-labelledby="example-modal-sizes-title-lg">
          <Modal.Header onClick={()=>this.props.closeModal()} closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {this.state.data[0].title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img variant="top" src={this.state.data[0].image_url} />
              <Card.Body>
                <Card.Text>
                  {this.state.data[0].description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>

      </>
    );
  }
}


export default SelectedBeast;
