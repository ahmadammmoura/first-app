import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
// import FormBeast from './form';



class Main extends Component{

  constructor(props){
    super(props);
    this.state ={
      animals: this.props.data,
      filterBy: this.props.numberOfHornes
    };
  }

  

  render(){

    console.log(this.state.filterBy);

    const list=this.state.animals.map(animal=>{
      return(
        <div key ={animal.title} >  
          <HornedBeasts style={{display: 'inline-block'}} handelModal={this.props.handelModal} image_url={animal.image_url} title={animal.title} description={animal.description}/>
        </div>  
      );
    });

    const filterdList = this.state.animals.filter(horne =>{
      return horne.horns === this.state.filterBy;
    }).map(animal =>{
      return (
        <div key ={animal.title} >  
          <HornedBeasts style={{display: 'inline-block'}} handelModal={this.props.handelModal} image_url={animal.image_url} title={animal.title} description={animal.description}/>
        </div>  
      );
    });

    return (
      <div className="container">
        {this.state.filterBy ? filterdList : list}
      </div>
    );
  }
}

export default Main;
