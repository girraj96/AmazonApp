import React from "react";
import {View,Text,Image,StyleSheet} from "react-native";

export default function Categories(props){
    const {data}=props;
    return(
        <View style={styles.categoriesMainView}>
        <View style={styles.circleView}>
          <Image  source={data.categorieImage} style={styles.categoriesImage} resizeMode="contain"></Image>
        </View>
        <Text style={styles.categorieTitle}>{data.categorieTitle}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    categoriesMainView:{
        alignItems:'center'
    },
    circleView:{
        height:45,
        width:45,
        borderRadius:45/2,
        backgroundColor:'#C7EAEC',
        alignItems:'center',
        justifyContent:'center'

    },
    categoriesImage:{
        height:"80%",
        width:"80%",
    },
    categorieTitle:{
        fontSize:14,
    }
})