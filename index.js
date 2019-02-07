import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  VrButton,
  asset,
  AmbientLight,
  PointLight
} from 'react-360';

import Entity from 'Entity';

export default class React3DView extends React.Component {

  state = {
    count: 20,
    walk: 200,
  };

  _incrementCount = () => {
    this.setState({count: this.state.count + 20});
  };

  _startwalk = () =>{
    setInterval(this._walk, 1000);  
  }

  _walk = () =>{
    this.setState({walk: this.state.walk - 20});
  }
  
  render() {
    return (
      <View>
        <AmbientLight intensity={0.5} />
        <PointLight style={{color: 'white', transform: [{translate: [0, 10, -300]}]}} />
        <VrButton
        onClick={this._startwalk}>
        <Entity
        source={{
          obj: asset('creature.obj'),
          mtl: asset('creature.mtl'),
        }}
        lit={true}
        style={{
          transform: [
            {translate: [this.state.walk, -50, 200]},
            {scale: 0.1},
            {rotateY: 0},
            {rotateX: -90},
          ],
        }}
        />
        </VrButton>

        <VrButton
        onClick={this._incrementCount}>
        <Entity
        source={{
          obj: asset('lowpolytree.obj'),
          mtl: asset('lowpolytree.mtl'),
        }}
        lit={true}
        style={{
          transform: [
            {translate: [600, -120, -100]},
            {scale: this.state.count},
          ],
        }}
        />
        </VrButton>

        <Entity
        source={{
          obj: asset('pyramid.obj'),
          mtl: asset('pyramid.mtl'),
        }}
        lit={true}
        style={{
          transform: [
            {translate: [50, -50, 400]},
          ],
        }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('React3DView', () => React3DView);
