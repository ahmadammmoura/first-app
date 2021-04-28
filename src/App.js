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
      oneBeast : {},
      likes : 0
    };
  }

  handelModal = (data,likes)=>{
    console.log(data,likes);

    this.setState({
      show :true,
      onHide : false,
      oneBeast:data,
      likes:likes
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
        <SelectedBeast  state={this.state} closeModal={this.closeModal}/>
        <Header/>
        <Main handelModal={this.handelModal} data = {this.state.animals} />
        <Footer/>
      </div>
    );
  }
}

export default App;
