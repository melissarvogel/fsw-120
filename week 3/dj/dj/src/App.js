import React from 'react';

import './index.css';

import './index'



  function setState() {
    return {
      bgColor: ['white', 'white', 'white', 'white']
    }

  }

  function handleClick() {
    this.props.colors()
    this.setState({
      bgColor: ['green', 'orange', 'purple', 'yellow']
    }
,

 function() {

    return(
      <div id="root">
<Square color={this.state.colors[0], onClick = {handleClick()}}/>

<Square color={this.state.colors[1], onClick = {handleClick()}}/>

<Square color={this.state.colors[2], onClick = {handleClick()}}/>

<Square color={this.state.colors[3], onClick = {handleClick()}}/>
    </div> ) 
  }
    )
}

export default App

