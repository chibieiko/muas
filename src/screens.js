import {Navigation} from 'react-native-navigation';

import HomeScreen from "./components/homeScreen/HomeScreen";
import ConsumptionScreen from "./components/consumptionScreen/ConsumptionScreen";
import RankingScreen from "./components/rankingScreen/RankingScreen";
import SideMenu from "./components/sideMenu/SideMenu";
import LoginScreen from "./components/loginScreen/LoginScreen";
import PricesScreen from "./components/pricesScreen/PricesScreen";
import TipsScreen from "./components/tipsScreen/TipsScreen";

// Register all components here
export function registerScreens(store, Provider) {
    Navigation.registerComponent('app.HomeScreen', () => HomeScreen, store, Provider);
    Navigation.registerComponent('app.ConsumptionScreen', () => ConsumptionScreen, store, Provider);
    Navigation.registerComponent('app.RankingScreen', () => RankingScreen, store, Provider);
    Navigation.registerComponent('app.SideMenu', () => SideMenu, store, Provider);
    Navigation.registerComponent('app.LoginScreen', () => LoginScreen, store, Provider);
    Navigation.registerComponent('app.PricesScreen', () => PricesScreen, store, Provider);
    Navigation.registerComponent('app.TipsScreen', () => TipsScreen, store, Provider);
}