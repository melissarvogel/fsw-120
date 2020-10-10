import React from 'react';


class App extends Component {
  constructor(){
      super()
      this.state = {
          num1: 0,
          num2: 0,
          num3: 0,
          num4: 0,
          num5: 0
      }
  }


  function (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { roll: 0 }
  }
  

 handleClick() {
    const min = 1;
    const max = 6;
    const roll = min + Math.random() * (max - min);
    this.setState({ roll: this.state.random + roll });
  }

  render() {
    return (
      <div>
        <h1>{this.state.random}</h1>
        <button onClick={this.handleClick.bind(this)}>Roll!</button>
        <button onClick={this.state.bind(this)}>Reset!</button>
      </div>
    );
  }
}

export default App