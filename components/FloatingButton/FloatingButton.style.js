import { StyleSheet } from "react-native";
import colors from "../../constants/Color";

export default StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        position: 'absolute',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        right: 20,
        backgroundColor: colors.secondary,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.primary,
    },
    icon: {
    }
})