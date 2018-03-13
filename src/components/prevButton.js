import React, {Component} from 'react';

class PrevButton extends Component {

  constructor(props) {
    super(props);
  }

  onClickedPrev(e) {
    console.log("onClickedPrev: ",e);
    this.props.click_prev_arrow(e);
    this.props.onClick(e);
  }

  render() {

    const {className, style, onClick} = this.props

    return (
      <button style={{
        display: 'block',
        background: 'green'
      }} onClick={(e) => this.onClickedPrev(e)}>Custom Prev</button>
    );

  }

}

export default PrevButton;
