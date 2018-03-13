import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Slider from 'react-slick';
import './../../style/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this)
  this.previous = this.previous.bind(this)
    this.state = {
      start_count: 0,
      end_count: 10
    }
  }

  next() {
    this.slider.slickNext()
    this.setState({
      start_count:this.state.start_count+10,
      end_count:this.state.end_count+10
    });
  }
  previous() {
    if(this.state.start_count>0 && this.state.start_count>10){
      this.setState({
        start_count:this.state.start_count-10,
        end_count:this.state.end_count-10
      });
    }
    this.slider.slickPrev()
  }

  render() {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false
    };

    return (

      <div className="container" style={{
        background: "#9C27B0"
      }}>

        <div style={{
          margin: 100
        }}>
          <Slider ref={c => this.slider = c } {...settings}>
            {/* {this.renderSlides()} */}
            <div>
              <img src="http://placekitten.com/g/400/200"/>
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200"/>
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200"/>
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200"/>
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200"/>
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200"/>
            </div>
          </Slider>
          <div style={{textAlign: 'center'}}>
                    <button className='button' onClick={this.previous}>Previous</button>
                    <button className='button' onClick={this.next}>Next</button>
                    <button className='button' >All</button>
                  </div>

Start Count : {this.state.start_count}
End Count :  {this.state.end_count}

        </div>
      </div>
    );
  }
}

export default App;
