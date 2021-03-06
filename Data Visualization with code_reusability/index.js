import React from 'react';
import ReactDOM from "react-dom"
import {range} from 'd3';
import {Face} from './Face';

const width = 160;
const height = 160;
const array = range(6*3);

const App = () => array.map(()=>(
 <Face
      width = {width}
      height={height}
      centrX= {width/2}
      centrY= {height/2}
      strokewidth={10}
      eyeOffsetX = {30}
      eyeOffsetY = {30}
      eyeRadius = {10}
      mouthRadius = {40}
      mouthWidth={10} 
      />
));
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);