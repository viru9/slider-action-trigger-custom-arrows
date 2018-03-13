import React, { Component } from 'react';

class NextButton extends Component {

  constructor(props){
    super(props);
  }

  onClickedNext(e){
    console.log("onClickedNext: ",e);
    this.props.click_next_arrow(e);
    this.props.onClick(e);
  }

render(){

  const {className, style, onClick} = this.props

  return (
    <button style={{
      display: 'block',
      background: 'red'
    }}  onClick={(e)=>this.onClickedNext(e)}>Custom Next</button>
  );

}

}

export default NextButton;
