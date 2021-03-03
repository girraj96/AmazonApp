import React from "react";
import {View,Text, StyleSheet,Image, TouchableOpacity} from "react-native";
import imagePath from "../assests/imagePath";

export default function AuthHeader (){
    return(
        <View style={styles.authHeaderView}>
            <Image source={imagePath.amazon_logo} style={styles.appLogo} resizeMode="contain"/>
        </View>
    )
}
const styles=StyleSheet.create({
    authHeaderView:{
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#edeeef",
        borderBottomWidth:0.2
    },
    appLogo:{
        height:"100%",
        width:110
    },
    welcomeText:{
        marginVertical:10,
        fontSize:17
    }
})