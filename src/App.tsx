import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

type State = {
  content: string
}

class App extends Component<any, State>{

  constructor(props: Readonly<any> | any) {
    super(props);
    this.state = {
      content: ''
    }
  }

  handleOnChange = (event: any) => {
    this.setState({ content: event.target.value })
  }

  handleOnSubmit = () => {
    console.warn('cli', this.state.content)
  }

  render() {
    return (
      <div className="App">
        <h1>TODO</h1>
        <input onChange={this.handleOnChange} />
        <button onClick={this.handleOnSubmit}>提交</button>
      </div>
    );
  }
}

export default App;
