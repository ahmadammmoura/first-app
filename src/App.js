import React, { Component } from 'react';
import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';
import data from './assets/data.json';
import SelectedBeast from './component/SelectedBeast';
class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      animals: data,
      show :false,
      onHide : true,
      array : [
        {
          "image_url": "https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg",
          "title": "Baby mouflon",
          "description": "The cuteness that is a baby mouflon asleep",
          "keyword": "mouflon",
          "horns": 2
        }
      ]
    };
  }

  handelModal = (title)=>{
    console.log(title);
    this.setState({
      show :true,
      onHide : false
    });
    const filterd = this.state.animals.filter(element =>{
      return title === element.title;
    });
    console.log(filterd);
    this.setState({
      array:filterd
    });
   
  }

  closeModal = ()=>{
    this.setState({
      show : false,
      onHide:true
    });
  }


  

  render(){
    return(
      <div>
        <SelectedBeast state={this.state.array} closeModal={this.closeModal} show ={this.state.show} onHide = {this.state.onHide} />
        <Header/>
        <Main handelModal={this.handelModal} data = {this.state.animals} />
        <Footer/>
      </div>
    );
  }
}

export default App;
