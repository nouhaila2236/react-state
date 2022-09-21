import './App.css';
import React,{setState} from "react";
class App extends React.Component {
  state ={
  Person:{
     fullName : 'Nouhaila EL ARROUM',
     bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     imgSrc: "./myPP.PNG",
     profession:'Developer',
    },
    shows:false,
    btnTitle:'Show Profile',
    time:0
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      shows: !this.state.shows,
      btnTitle:'Hide Profile'
    });
    this.tick()
    console.log(this.state.shows)
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time + 1
    });
  }
  render (){
   return(

  <div className="App">
  {this.state.shows && (
    <div className="App-card">
      <div className="App-card-inner">
    <div className="App-photo">
    <img className="photo-profile" src={this.state.Person.imgSrc} alt="Photo Profile" />
    </div>
    <div className="info">
    <h1>{this.state.Person.fullName}</h1>
    <h3>{this.state.Person.profession}</h3>
    <p>{this.state.Person.bio}</p>
    </div>
    </div>
    <h6 className='timer'>It's been {this.state.time}s</h6>
    </div>
  )}

  <button className='btn btn-dark' onClick={this.handleShowPerson}>{this.state.btnTitle}</button>
  </div>
  );
}
}

export default App;
