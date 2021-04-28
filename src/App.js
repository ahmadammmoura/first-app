import React, { Component } from 'react';
import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';
import data from './assets/data.json';
import SelectedBeast from './component/SelectedBeast';
import FormBeast from './component/form';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      animals: data,
      show :false,
      onHide : true,
      oneBeast : {},
      likes : 0,
      filterby:null
    };
  }

  handelModal = (data,likes)=>{
    // console.log(data,likes);

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

  handelSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target.numberOfHornes.value);
    this.setState({
      filterby: e.target.numberOfHornes.value
    });
  }

  handelChange = (e)=>{
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      filterby: e.target.value
    });
  }


  render(){
    console.log(this.state.filterby);
    return(
      <div>
        <SelectedBeast  state={this.state} closeModal={this.closeModal}/>
        <Header/>
        <FormBeast handelChange={this.handelChange} handelSubmit={this.handelSubmit} />
        <Main numberOfHornes = {this.state.filterby} handelModal={this.handelModal} data = {this.state.animals} />
        <Footer/>
      </div>
    );
  }
}

export default App;
