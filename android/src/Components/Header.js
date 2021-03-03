import React from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePath from "../assests/imagePath"

export default function Header({openDrawer,itemCount,addProductArray,_onCartClick,isDrawerOpen,onbackPress,isCartVisible}) {

    
    return (
        <View>
            <StatusBar barStyle="dark-content" backgroundColor="#66CCCE" />
            <View style={styles.headerBar}>
                <View style={styles.logoView}>
                    {isDrawerOpen?(<TouchableOpacity onPress={openDrawer}>
                    <Image source={ImagePath.drawer_icon} 
                        style={styles.drawerIcon} resizeMode="contain" />
                        </TouchableOpacity>):(<TouchableOpacity onPress={onbackPress}>
                    <Image source={ImagePath.back_icon} 
                        style={styles.drawerIcon} resizeMode="contain" />
                        </TouchableOpacity>)}
                    <Image source={ImagePath.amazon_logo} style={styles.amazonIcon} resizeMode="contain" />
                    <View style={styles.miceCartIconView}>
                        <Image source={ImagePath.microphone_icon} style={styles.microphoneIcon} resizeMode="contain" />
                        {/* <TouchableOpacity onPress={()=>_onCartClick(addProductArray)}> */}
                        {isCartVisible&&<TouchableOpacity onPress={()=>_onCartClick()}>
                            <Text style={styles.cartCount}>{itemCount}</Text>
                            <Image source={ImagePath.cart_icon} style={styles.cartIcon} resizeMode="contain" />
                        </TouchableOpacity>}
                        
                    </View>
                </View>
                <View style={styles.searchBarView}>
                    <Image source={ImagePath.search_icon} style={styles.searchIcon} resizeMode="contain" />
                    <TextInput style={styles.searcTextInput} placeholder="Search"></TextInput>
                    <Image source={ImagePath.camera_icon} style={styles.cameraIcon} resizeMode="contain" />
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    headerBar: {
        height: 110,
        backgroundColor: '#94DFDA',
        alignItems: 'center',

    },
    logoView: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    searchBarView: {
        width: '95%',
        height: "40%",
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 'auto'

    },
    searchIcon: {
        height: 20,
        width: "7%"
    },
    cameraIcon: {
        height: 25,
        width: "7%"
    },
    searcTextInput: {
        width: "86%",
        height: 40,
        fontSize: 18,
        fontWeight: "bold",
        paddingVertical: 5
    },
    drawerIcon: {
        height: 35,
        width: 35,
        marginVertical: 3
    },
    amazonIcon: {
        height: 50,
        width: 100,
        marginHorizontal: 20
    },
    miceCartIconView: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center'
    },
    microphoneIcon: {
        height: 25,
        width: 25,
        marginHorizontal: 20
    },
    cartIcon: {
        height: 50,
        width: 50,
        position: 'relative'
    },

    cartCount: {
        fontSize: 16,
        position: 'absolute',
        left: "45%",
        top: "15%"
    }
})