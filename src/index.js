import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';

class App extends React.Component{

  render(){
    return (
      <div>
        <Game />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
