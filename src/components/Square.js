import React from 'react';
import '../index.css';
class Square extends React.Component{
  constructor(props){
    super(props);
    this.color = props.color;
    this.position = props.position;
  }

  handleClick=(e)=>{
    this.props.movefunc(this.position,this.props.address);
  }

  render(){
    return (
      <div
        className={this.props.color}
        key={this.props.position}
        onClick={this.handleClick}
      >
      <img src={this.props.address} alt="" />
      </div>
    );
  }
}
export default Square;
