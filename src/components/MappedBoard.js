import React from 'react';
import Square from './Square';
import '../index.css';

class MappedBoard extends React.Component{

  constructor(props){
    super(props);
    this.ar=props.address;
    this.movefunc=props.movefunc;
  }
  isEven(num){
    return (num % 2 === 0);
  }
  retPosition(y,x){
    let yCord = y;
    let xCord = x % 8;
    let xAxis = ['a','b','c','d','e','f','g','h'];
    let retVal = xAxis[xCord]+yCord;
    return retVal;
  }

  temp(){
    var completeBoard =[];
    var count = 0;
    for(var i=8;i>=1;i--){
      var rowSquare =[];
      for(var j=0;j<8;j++){
        const squareColor = (this.isEven(i) && this.isEven(j)) || (!this.isEven(i) && !this.isEven(j))? "square-white" : "square-black";
        rowSquare.push(<Square
                        color={squareColor}
                        position={this.retPosition(i,j)}
                        key={this.retPosition(i,j)}
                        address={this.props.address[count]}
                        movefunc={this.props.movefunc}
                    />);
        count+=1;
      }
      completeBoard.push(rowSquare);
    }
    return completeBoard;
  }
  render(){
    var completeBoard = this.temp();
    return(
      <div className="board">{completeBoard}</div>
    )
  }
}
export default MappedBoard;
