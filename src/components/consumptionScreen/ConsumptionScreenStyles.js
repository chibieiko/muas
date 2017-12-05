import {StyleSheet} from "react-native";
import * as dimensions from "../../res/dimensions.json";
import * as colors from "../../res/colors.json";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    primaryButton: {
        width: "45%"
    },
    secondaryButton: {
        width: "30%",
        borderColor: "#ef2400",
        marginBottom: dimensions.verticalMargin
    },
    header: {
        textAlign: "center",
        fontSize: dimensions.fontBig,
        marginTop: dimensions.verticalMargin,
        marginBottom: 30
    }
});
