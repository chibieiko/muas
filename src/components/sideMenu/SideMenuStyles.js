import * as colors from '../../res/colors.json'
import * as dimensions from '../../res/dimensions.json'

export const sideMenuStyle = {
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    pictureContainer: {
        height: 150,
        width: 350,
        backgroundColor: colors.primary
    },
    divider: {
        borderBottomColor: '#CFD8DC',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    notificationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 8
    },
    switch: {
        padding: 10,
        paddingLeft: 0
    },
    notificationText: {
        color: colors.textDark,
        fontWeight: 'bold',
        fontSize: dimensions.fontNormal,
        padding: 10,
    }

};