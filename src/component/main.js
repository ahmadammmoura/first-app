import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends Component{

  constructor(props){
    super(props);
    this.state ={
      animals: this.props.data
    };
  }

  

  render(){
    const list=this.state.animals.map(animal=>{
      return(
        <div key ={animal.title} >  
          <HornedBeasts style={{display: 'inline-block'}} handelModal={this.props.handelModal} image_url={animal.image_url} title={animal.title} description={animal.description}/>
        </div>  
      );
    });
    return (
      <div className="container">
        {list}
      </div>
    );
  }
}

export default Main;
