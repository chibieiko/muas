import {StyleSheet} from 'react-native';
import * as dimensions from '../../res/dimensions.json';
import * as colors from '../../res/colors.json';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: dimensions.horizontalMargin,
        marginVertical: dimensions.verticalMargin,
    },
    info: {
        textAlign: "center",
        marginBottom: 20,
        fontSize: 16
    },
    icon: {
        fontSize: 24,
        color: colors.primary,
        marginHorizontal: 5
    },
    icons: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    avatar: {
        flexDirection: "row",
        alignItems: "center"
    },
    ranking: {
        fontSize: 16,
        marginRight: 8,
        color: colors.primary,
        fontWeight: "bold"
    }
});