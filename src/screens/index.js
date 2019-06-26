import React from 'react';
import { View } from 'react-native';
import Navigator from '../route/navigator';

class Root extends React.PureComponent {
  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <Navigator />
      </View>
    );
  }
}

export default Root;
