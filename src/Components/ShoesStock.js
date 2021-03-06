import React from  "react";
import {View,Text,TouchableOpacity,Image,StyleSheet} from "react-native";

export default function ShoesStock(props){

    const {data, onBuyItemPress,onItemsPress}=props;

    return(
        <View style={styles.productMainView}>
            <TouchableOpacity style={styles.productView} onPress={()=>onItemsPress(data.id)}>
            <Image source={{uri:data.shoesImage}} style={styles.productImage} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.productDetailsView}>
            <Text style={styles.productName}>{data.shoesName}</Text>
            <Text style={styles.productDesc}>{data.shortDescription}</Text>
            <Text style={styles.productPrice}>₹{data.shoesPrice}</Text>
            <TouchableOpacity style={styles.productButButton} onPress={()=>onBuyItemPress(data.id)}>
                <Text>
                    Buy Now
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    productMainView:{
        width:"50%",
        marginRight:3,
        borderWidth:1,
        borderColor:"#DEDEDE",
        borderRadius:5
    },
    productView:{
        height:200,
    },
    productImage:{
        height:"100%",
        width:"100%"
    },
    productDetailsView:{
        alignItems:"center"
    },
    productName:{
        fontSize:15,
        fontWeight:"bold"
    },
    productDesc:{

    },
    productPrice:{
        color:"#ff2400",
        fontSize:17,
        marginVertical:5
    },
    productButButton:{
        width:"85%",
        height:30,
        backgroundColor:"#FF9900",
        borderRadius:3,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:10
    }
})