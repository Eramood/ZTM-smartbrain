import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Urlimg from './components/Urlimg/Urlimg'
import Rank from './components/Rank/Rank';
import Particles from './components/Particles/Particles';
import Facereco from './components/Facereco/Facereco'
import './App.css';

const PAT = 'PERSONAL TOKEN'; //put here you personal token access of clarifai

class App extends Component{

  constructor(){
    super();
    this.state={
      input:'',
      imgURL:'',
      box: {},
    }
  }

  faceLocation = (data) =>{
    const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftcol: clarifaiface.left_col * width,
      toprow: clarifaiface.top_row * height,
      rightcol: width - (clarifaiface.right_col*width) ,
      bottomrow:height-(clarifaiface.bottom_row*height),
    }
  }

  displaybox=(box)=>{
    console.log(box);
    this.setState({box:box})
  }


  onInputChange = (event) =>{
    this.setState({input: event.target.value});
    //read the URL set 
  }

  onButtonSubmit = () => {
    this.setState({imgURL: this.state.input})
    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "clarifai",
        "app_id": "main"
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": this.state.input //put the URL of input box in the url to search 
                  }
              }
          }
      ]
    });
    
     const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT  // code taken from clarifai
      },
      body: raw
    };
    
    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions) //face detection API
    .then(response => response.json())
    .then(result => this.displaybox(this.faceLocation(result)))
    .catch(error => console.log('error', error));
  }


  render() {
    return (
      <div className="App">
        <Navigation />
        <Particles />
        <Logo />
        <Rank />
        <Urlimg onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <Facereco box={this.state.box}  imgURL={this.state.imgURL} />
      </div>
    );
  }
}

export default App;