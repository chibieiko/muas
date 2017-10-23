import * as dimensions from '../../res/dimensions.json';
import * as colors from '../../res/colors.json';

export const PricesScreenStyles = {
    container: {
        flex: 1,
            backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: dimensions.fontBig,
        color: colors.primary,
        marginHorizontal: dimensions.horizontalMargin,
        marginVertical: dimensions.verticalMargin
    },
    priceItem: {
        justifyContent: 'space-between'
    }
};