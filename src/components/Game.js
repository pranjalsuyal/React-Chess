import React from 'react';
import ChessManager from '../services/ChessManager';
import  MappedBoard from './MappedBoard';
import '../index.css';
class Game extends React.Component{
  constructor(props){
    super(props);
    this.chessManager=new ChessManager();
  }
  state = {
    address:[]                                        //Array which stores image address of Board to be mapped
  };
  retPosition(y,x){                                   //returns postion of the square on the board
    let yCord = y;
    let xCord = x % 8;
    let xAxis = ['a','b','c','d','e','f','g','h'];
    let retVal = xAxis[xCord]+yCord;
    return retVal;
  }
  isEven(num){
    return (num % 2 === 0);
  }

  movefunc = (position,piece) => {
    if(piece!==''){
      if(this.source!==''){
        this.chessManager.move(this.source , position);
        this.setState({address : this.chessManager.map()});
        this.source='';
      }
      else{
        this.source = position;
      }
    }
    else{
      if(this.source!==''){
        this.chessManager.move(this.source , position);
        this.setState({address : this.chessManager.map()});
        this.source='';
      }
    }
  }
  componentDidMount(){
    this.chessManager.reset();
    this.setState({ address : this.chessManager.map()});
  }
  eventReset=(e)=>{
    e.preventDefault();
    this.chessManager.reset();
    this.setState({ address : this.chessManager.map()});
  }
  eventClear=(e)=>{
    e.preventDefault();
    this.chessManager.clear();
    this.setState({ address : this.chessManager.map()});
  }
  render(){
    return (
      <div>


      <MappedBoard
        address={this.state.address}
        movefunc={this.movefunc}
      />
      


      <button
        onClick={this.eventReset}
      >Reset</button>
      <button
        onClick={this.eventClear}
      >Clear Board</button>
      </div>
    );
  }
}

export default Game;
