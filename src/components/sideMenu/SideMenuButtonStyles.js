import * as colors from '../../res/colors.json';
import * as dimensions from '../../res/dimensions.json';

export const sideMenuButtonStyle = {
    container: {
        padding: 8,
        borderWidth: 0,
        width: 350,
        flexDirection: 'row'
    },
    content: {
        color: colors.textDark,
        fontWeight: 'bold',
        fontSize: dimensions.fontNormal,
        padding: 10
    },
    icon: {
        color: colors.primary,
        fontSize: 30,
        padding: 8
    }
};