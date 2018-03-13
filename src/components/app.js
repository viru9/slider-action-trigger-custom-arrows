import React, {Component} from 'react';
import ReactDOM from "react-dom";
import ReactJWPlayer from 'react-jw-player';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import TextField from 'material-ui/TextField';
import Slider from 'react-slick';
import PrevButton from './prevButton';
import NextButton from './nextButton';
import Nuka from 'nuka-carousel';
import createClass from 'create-react-class';
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


  fetchNewSliders(start_count,end_count){
    // this.setState({
    //   start_count:start_count,
    //    end_count:end_count
    // });
  console.log("fetchNewSliders: start_count>>> "+start_count+" / end_count: "+end_count);
  }

  onClickedNext() {
    this.state.start_count = this.state.start_count+10;
    this.state.end_count = this.state.end_count+10;
    // this.setState({
    //   start_count:this.state.start_count+10,
    //   end_count:this.state.end_count+10
    // });
    this.fetchNewSliders(this.state.start_count,this.state.end_count)
  }

  onClickedPrev() {
    if(this.state.start_count>0 && this.state.start_count>10){
      this.state.start_count = this.state.start_count-10;
      this.state.end_count = this.state.end_count-10;
      // this.setState({
      //   start_count:this.state.start_count-10,
      //   end_count:this.state.end_count-10
      // });
    }
    this.fetchNewSliders(this.state.start_count,this.state.end_count)
  }

  renderSlides() {
    return (
      <div>
        <img src="http://placekitten.com/g/400/200"/>
      </div>
    );
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
