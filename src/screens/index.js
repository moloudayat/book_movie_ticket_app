import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navigator from '../route/navigator';

class Root extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <View style={{ width: '100%', height: '100%' }}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}

export default Root;
