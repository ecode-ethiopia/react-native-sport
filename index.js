import {
  Alert, AsyncStorage, BackHandler, AppState, Platform, UIManager,
} from 'react-native';
import InitIOS from './init/init.ios';

class Sport {
  appState = '';

  hello = () => {
    console.log('React Native Sport saysHELLO!');
    this.setAppStateListener();
    return InitIOS();
  }

  setAppStateListener=() => {
    AppState.addEventListener('change', this.handleAppStateChange);
  };

  removeListener=() => {
    AppState.removeEventListener('change', this.handleAppStateChange);
  };

  handleAppStateChange = (nextAppState) => {
    if ((this.appState === 'inactive' || this.appState === 'background')
    && nextAppState === 'active') {
      console.log('Application has gome to the foreground');
      this.reinitAfterBackground();
    }
    this.appState = nextAppState;
  }

  reinitAfterBackground=() => {
    this.hello();
  };
}
export default new Sport();
