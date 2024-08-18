import { StyleSheet } from "react-native";
import colors from "../../constants/Color";

const baseStyle = {
    container: {
        width: '90%',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    title: {
        fontWeight: 'bold'
    }
}

export default StyleSheet.create({
    primary: {
        container: {
            ...baseStyle.container,
            backgroundColor: colors.secondary,
        },
        title: {
            ...baseStyle.title,
            color: colors.white,
        }
    },
    secondary: {
        container: {
            ...baseStyle.container,
            backgroundColor: colors.white,
            borderRadius: 5,
            borderWith: 1,
            borderWithColor: colors.secondary
        },
        title: {
            ...baseStyle.title,
            color: colors.primary,
        }
    }
})