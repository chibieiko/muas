import * as colors from '../../res/colors.json';
import * as dimensions from '../../res/dimensions.json';

export const sideMenuButtonStyle = {
    container: {
        paddingHorizontal: 8,
        paddingVertical: 14,
        borderWidth: 0,
        width: 350,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        color: colors.textDark,
        fontWeight: 'bold',
        fontSize: dimensions.fontNormal,
        paddingHorizontal: 10
    },
    icon: {
        color: colors.primary,
        fontSize: 30,
        paddingHorizontal: 8
    }
};