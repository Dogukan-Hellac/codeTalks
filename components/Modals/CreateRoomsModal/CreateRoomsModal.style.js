import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    },
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: Dimensions.get('screen').height / 3,
        justifyContent: 'space-between'
    }
})