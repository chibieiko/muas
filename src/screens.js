import {Navigation} from 'react-native-navigation';

import HomeScreen from "./components/homeScreen/HomeScreen";
import ConsumptionScreen from "./components/consumptionScreen/ConsumptionScreen";
import RankingScreen from "./components/rankingScreen/RankingScreen";

// Register all components here
export function registerScreens(store, Provider) {
    Navigation.registerComponent('app.HomeScreen', () => HomeScreen, store, Provider);
    Navigation.registerComponent('app.ConsumptionScreen', () => ConsumptionScreen, store, Provider);
    Navigation.registerComponent('app.RankingScreen', () => RankingScreen, store, Provider);
}