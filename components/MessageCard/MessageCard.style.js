import { StyleSheet } from "react-native";
import colors from '../../constants/Color'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    top_container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text: {
        color: colors.black,
        fontWeight: 'bold'
    },
})