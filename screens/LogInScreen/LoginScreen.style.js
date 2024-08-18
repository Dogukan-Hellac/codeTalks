import { StyleSheet } from "react-native";
import colors from "../../constants/Color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    top_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: colors.white,
    },
    bottom_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})