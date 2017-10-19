import {Navigation} from 'react-native-navigation';

import HomeScreen from "./components/HomeScreen";

// Register all components here
export function registerScreens(store, Provider) {
    Navigation.registerComponent('app.HomeScreen', () => HomeScreen, store, Provider);
}