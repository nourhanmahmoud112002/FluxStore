import { StyleSheet } from "react-native";
import { colors, px } from "../../common";

export const styles=StyleSheet.create({
    container:{
        width:px(36),
        height:px(36),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:px(18),
        backgroundColor:colors.white,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3.84,
        elevation: 5,
    }
})