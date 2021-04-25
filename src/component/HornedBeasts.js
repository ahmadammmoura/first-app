import React, { Component } from 'react';

class HornedBeasts extends Component{
  render(){
    const {animals} = this.props;
    const listOfAnimals = animals.map(animal =>{
      return(
        <div>
          <h2>{animal.title}</h2>
          <img src={animal.image_url} alt='animal pic' title={animal.title} />
          <p>{animal.description}</p>
        </div>
      );
    });
    return (
      <div>
        {listOfAnimals}
      </div>
    );
  }
}

export default HornedBeasts;
