import { StyleSheet } from "react-native";
import { colors, px } from "../../common";

export const styles=StyleSheet.create({
    container:{
        width:px(42),
        height:px(42),
        borderRadius:px(21),
        borderWidth:px(1),
        borderColor:colors.gray,
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
    }
})