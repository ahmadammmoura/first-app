import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends Component{

  constructor(props){
    super(props);
    // console.log(props);
  }

  render(){
    

    const {oneBeast,likes,show,onHide} = this.props.state;

    // console.log(oneBeast,likes);
    return (
      <>
        <Modal
          size="lg"
          show={show}
          onHide={onHide}
          aria-labelledby="example-modal-sizes-title-lg" style={{hieght:'100%'}} >
          <Modal.Header style={{width:'50%',margin:'auto'}} onClick={()=>this.props.closeModal()} closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {oneBeast.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{width:'50%',margin:'auto'}} >
            <Card>
              <Card.Img variant="top" src={oneBeast.image_url} />
              <Card.Body>
                <Card.Text>
                  {oneBeast.description}
                </Card.Text>
                <Card.Text>
                &#128156; {likes}
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
