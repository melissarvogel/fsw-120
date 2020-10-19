import React from 'react';
import './App.css';


  
      function constructor(props) {
        super(props)
      
          this.state = {value: ''}
          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
      }

      function handleChange(event){
        this.setState({value: event.target.value})}
      
      
      function handleSubmit(event){
        event.preventDefault()
      }
      
function App(){
  <div id="root">
    render() {
      <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder= "First Name" value={this.state.value} onChange={this.handleChange} />
          <input type="text" placeholder= "Last Name" value={this.state.value} onChange={this.handleChange} />
          <input type="text" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
          <input type="text" placeholder="Place of Birth" value={this.state.value} onChange={this.handleChange} />
          <input type="text" placeholder="Phone" value={this.state.value} onChange={this.handleChange} />
          <input type="text" placeholder="Favorite Food" value={this.state.value} onChange={this.handleChange} />
          <input type="text" placeholder="Tell us about yourself." value={this.state.value} onChange={this.handleChange} />
          <button onSubmit={this.handleChange}>Submit</button>
      
      </form>

   
  }

  </div>
}
      
    

export default App;
