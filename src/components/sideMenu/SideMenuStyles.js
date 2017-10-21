import * as colors from '../../res/colors.json'
import * as dimensions from '../../res/dimensions.json'

export const sideMenuStyle = {
    container: {
        flex: 1,
        backgroundColor: colors.drawerBackground,
    },

    // Image box
    logo: {
        height: 150,
        width: 350,
        backgroundColor: colors.logoRed,
        alignSelf: 'center',
        marginBottom: 10
    },

    // Divider
    divider: {
        borderBottomColor: colors.drawerDivider,
        borderBottomWidth: 1,
        marginVertical: 10
    },

    // Notification
    notificationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 14
    },
    notificationText: {
        color: colors.textDark,
        fontWeight: 'bold',
        fontSize: dimensions.fontNormal,
    },
};