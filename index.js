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

  // ADD STATE

  // ADD OTHER METHODS
  
  render() {
    return (
      <View>

        {/* ADD CODE FOR DINOSAUR */}

        {/* ADD VRBUTTON HERE */}
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
        {/* ADD VRBUTTON HERE */}
        
{/* 
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
        /> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('React3DView', () => React3DView);
