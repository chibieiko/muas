import {Navigation} from 'react-native-navigation';

import HomeScreen from "./components/homeScreen/HomeScreen";
import BudgetEditScreen from "./components/budgetEditScreen/BudgetEditScreen";
import ConsumptionScreen from "./components/consumptionScreen/ConsumptionScreen";
import RankingScreen from "./components/rankingScreen/RankingScreen";
import SideMenu from "./components/sideMenu/SideMenu";
import LoginScreen from "./components/loginScreen/LoginScreen";
import PricesScreen from "./components/pricesScreen/PricesScreen";
import TipsScreen from "./components/tipsScreen/TipsScreen";
import TipScreen from "./components/tipsScreen/TipScreen";

import * as strings from "./res/strings.json";

// Register all components here
export function registerScreens(store, Provider) {
    Navigation.registerComponent(strings.homeScreen, () => HomeScreen, store, Provider);
    Navigation.registerComponent(strings.budgetEditScreen, () => BudgetEditScreen, store, Provider);
    Navigation.registerComponent(strings.consumptionScreen, () => ConsumptionScreen, store, Provider);
    Navigation.registerComponent(strings.rankingScreen, () => RankingScreen, store, Provider);
    Navigation.registerComponent(strings.sideMenu, () => SideMenu, store, Provider);
    Navigation.registerComponent(strings.loginScreen, () => LoginScreen, store, Provider);
    Navigation.registerComponent(strings.pricesScreen, () => PricesScreen, store, Provider);
    Navigation.registerComponent(strings.tipsScreen, () => TipsScreen, store, Provider);
    Navigation.registerComponent(strings.tipScreen, () => TipScreen, store, Provider);

}
