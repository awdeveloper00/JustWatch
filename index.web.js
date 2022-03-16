import {AppRegistry} from 'react-native';
import App from './src/components/App.jsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('react-native-web-app'),
});
