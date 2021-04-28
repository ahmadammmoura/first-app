import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
// import FormBeast from './form';



class Main extends Component{

  constructor(props){
    super(props);
    this.state ={
      animals: this.props.data,
    };
  }

  

  render(){

    // console.log(this.props.numberOfHornes);

    const {animals} = this.state;
    const {handelModal,numberOfHornes} = this.props;

    const list= animals.map(animal=>{
      return(
        <div key ={animal.title} >  
          <HornedBeasts style={{display: 'inline-block'}} handelModal={handelModal} image_url={animal.image_url} title={animal.title} description={animal.description}/>
        </div>  
      );
    });

    const filterdList = animals.filter(Beast =>{
      return Beast.horns === parseInt(numberOfHornes);
    }).map(animal =>{
      return (
        <div key ={animal.title} >  
          <HornedBeasts style={{display: 'inline-block'}} handelModal={this.props.handelModal} image_url={animal.image_url} title={animal.title} description={animal.description}/>
        </div>  
      );
    });

    console.log(filterdList);

    return (
      <div className="container">
        {numberOfHornes ? filterdList : list}
      </div>
    );
  }
}

export default Main;
