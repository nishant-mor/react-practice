class Button1 extends React.Component {

  handleClick1 = () =>{
		this.props.clickfunciton(this.props.incr);
	};

	render(){
  	return(
    	<button onClick = {this.handleClick1} >+ {this.props.incr}</button>
    );
  }
};

const Display = (props) => {
	return(
	<h1>Result: {props.value}</h1>
  );
}

class App extends React.Component {
	state  = {counter : 0};
  handleClick = (increment) =>{
  	this.setState({
    	counter: this.state.counter  + increment
    })
  };
  
  render(){
  	return(
    <div>
      <Button1 clickfunciton= {this.handleClick} incr = {1}/>
    	<Button1 clickfunciton= {this.handleClick} incr = {10}/>
    	<Button1 clickfunciton= {this.handleClick} incr = {100}/>
      <Button1 clickfunciton= {this.handleClick} incr = {1000}/>
    	<Button1 clickfunciton= {this.handleClick} incr = {10000}/>
      <Display  value = {this.state.counter}/>
    </div>
    
    );
    
  }
  
}

ReactDOM.render(<App />,mountNode);
