import * as colors from './res/colors.json';
import * as strings from './res/strings.json';
import * as dimensions from './res/dimensions.json';

export const mainStyle = {
    navigatorStyle: {
        statusBarColor: colors.primaryDark,
        statusBarTextColorScheme: 'light',
        navigationBarColor: 'black',
        navBarBackgroundColor: colors.primary,
        navBarTextColor: 'white',
        navBarButtonColor: 'white',
        navBarHiddenOnScroll: true,

        // tab styling
        topTabTextColor: colors.textSecondary,
        selectedTopTabTextColor: colors.textLight,
        selectedTopTabIndicatorHeight: dimensions.indicatorHeight,
        selectedTopTabIndicatorColor: colors.textLight,
        tabBarHidden: false,
        drawUnderTabBar: true
    }
};