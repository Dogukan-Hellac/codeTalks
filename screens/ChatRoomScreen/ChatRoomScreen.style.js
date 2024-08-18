import { StyleSheet } from "react-native";
import colors from "../../constants/Color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.yellow
    },
    header: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        borderColor: colors.white,
        borderStyle:'dotted'
    },
    headerTitle: {
        color: colors.white,
        fontSize: 20
    }
})