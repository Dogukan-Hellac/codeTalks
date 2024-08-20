import { StyleSheet } from "react-native";
import colors from "../../constants/Color";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray,
        height: 150,
    },
    title: {
        color: colors.secondary,
        fontSize: 25
    }
})