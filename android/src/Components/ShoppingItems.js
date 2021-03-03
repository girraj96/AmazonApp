import React from "react";
import {View,Text,Image,StyleSheet, TouchableOpacity} from "react-native";

export default function ShoppingItems(props){

    const {shoppingItems,_onItemClick}=props;

    return(

        <View>
            <TouchableOpacity style={styles.categoriesMainView}  onPress={()=>_onItemClick(shoppingItems.id)} >
            <Image source={{uri:shoppingItems.itemsImage}} style={styles.shoppingImages} resizeMode="cover"></Image>
            <Text>{shoppingItems.itemsTitle}</Text>
        </TouchableOpacity>
        </View>
    )
    // => navigation.navigate('Shoes')}
}
const styles=StyleSheet.create({
    categoriesMainView:{
       width:200,
        margin:5        
    },
    shoppingImages:{
        height:120,
        width:"100%",
    }
  
})