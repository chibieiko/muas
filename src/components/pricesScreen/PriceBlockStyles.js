import * as colors from '../../res/colors.json';
import * as dimensions from '../../res/dimensions.json';

export const PriceBlockStyles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: dimensions.horizontalMargin,
        paddingVertical: 12
    },
    innerContainer: {
        flexDirection: 'row'
    },
    text: {
        color: colors.textDark,
        fontSize: dimensions.fontNormal
    },
    icon: {
        color: colors.primary,
        fontSize: 20,
        paddingHorizontal: 8
    }
};