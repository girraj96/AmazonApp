
import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet,ScrollView } from "react-native";
import Header from "../Components/Header";
import navigationStrings from "../constants/navigationStrings";




export default class Shoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addProductArray: [],
            clickedItemCount: 0,
            newCount: 0
        }
    }
    _onAddCart = () => {
        const {clickedItemCount}=this.state;
        this.setState({
            clickedItemCount: clickedItemCount + 1
        })


    }
    componentDidMount(){

        const {itemCount } = this.props.route.params;
        this.setState({
            clickedItemCount:itemCount
        })

    }
    // _onCartClick = (addProductArray) => {
    //     const { navigation } = this.props;
    //     const { itemCount } = this.state;
    //     navigation.navigate(navigationStrings.CARTITEMS, { items: addProductArray, itemCount: itemCount });



    // }

    onbackPress=()=>{
        const { navigation } = this.props;
        const { itemCount,clickedItemCount} = this.state;
        navigation.navigate(navigationStrings.SHOESLIST,{newitemCount:clickedItemCount});
   }

    render() {
        const { clickedItem,itemCount,isCartVisible} = this.props.route.params;
        const {clickedItemCount}=this.state;
        return (
            <ScrollView>
            <View style={styles.detailsView}>
                {/*  _onCartClick={this._onCartClick} ifDrawerOpen={isDrawerOpen} onbackPress={this.onbackPress} */}
                <Header itemCount={clickedItemCount} isCartVisible={isCartVisible} onbackPress={this.onbackPress} />
            <View style={styles.productCard}>
                <Text style={styles.brandText}>Brand:  {clickedItem.shoesName}</Text>
                <Text style={styles.brandDescText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <Image source={{ uri: clickedItem.shoesImage }} style={styles.itemImage} resizeMode="cover"></Image>
                <View style={styles.priceView}><Text style={styles.mrpText}>MRP:</Text>
                    <Text style={styles.priceText}>{clickedItem.shoesPrice}</Text>
                </View>
                <View style={styles.deliveryView}> 
                    <Text style={styles.freeDeliveryText}>FREE delivery:</Text>
                    <Text style={styles.dateText}>Friday, March 5</Text>
                    <Text style={styles.freeDeliveryText}>Details</Text>

                </View>
                </View>
             <View style={styles.buttonView}>
             <TouchableOpacity style={styles.buyNowButton}>
                    <Text>Buy Now</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.addToCartButton} onPress={this._onAddCart}>
                    <Text>Add to Cart</Text>
                </TouchableOpacity>
             </View>
             

            </View>
    </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    detailsView: {
        alignItems: "center",
    },
    itemImage: {
        height: 250,
        width: "95%",
        marginTop: 10
    },
    addCartButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 40,
        backgroundColor: 'green'
    },
    addCartText: {
        color: 'white'
    },
    brandText: {
        color: "#66ccce",
        alignSelf: "flex-start",
    },
    brandDescText: {
        color: "grey",
        fontSize: 12,
        width: "95%",

    },
    priceText: {
        fontSize: 25,
        alignSelf: "flex-start",
        marginHorizontal: 5,

    },
    priceView: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginHorizontal: 5,

    },
    mrpText: {
        alignSelf: "flex-end"
    },
    deliveryView:{
        flexDirection:"row",
        alignSelf: "flex-start",
        marginHorizontal: 5,

    },
    freeDeliveryText:{
        fontSize:14,
        color: "#66ccce",
    },
    dateText:{
        marginHorizontal:5
    },
    buyNowButton:{
        backgroundColor:"#F1AD5A",
        height:45,
        width:"95%",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5,
        borderColor:'#B8B8B8',
        borderWidth:1
    },
    addToCartButton:{
        backgroundColor:'#F5DA95',
        height:45,
        width:"95%",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5,
        borderColor:'#B8B8B8',
        borderWidth:1
    },
    productCard:{
        backgroundColor:"white",
        width:"100%",
        paddingHorizontal:15,
        paddingVertical:5
    },
    buttonView:{
        width:"100%",
        alignItems:"center",
        marginTop:10
    }
})



// import React, { Component } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet,ScrollView } from "react-native";
// import Header from "../Components/Header";
// import navigationStrings from "../constants/navigationStrings";




// export default class Shoes extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             addProductArray: [],
//             itemCount: 0,
//             newCount: 0
//         }
//     }
//     _onAddCart = () => {
//         // alert("Hello");
//         const { selectedItem } = this.props.route.params;
//         const { itemCount } = this.state;
//         this.setState({
//             addProductArray: selectedItem,
//             itemCount: itemCount + 1
//         })


//     }
//     // componentDidMount(){

//     //     const { selectedItem} = this.props.route.params;
//     //     alert(selectedItem.id)
//     //     // this.setState({
//     //     //     addProductArray:selectedItem
//     //     // })
//     //     // alert(this.state.addProductArray[itemPrice])

//     // }
//     _onCartClick = (addProductArray) => {
//         const { navigation } = this.props;
//         const { itemCount } = this.state;
//         navigation.navigate(navigationStrings.CARTITEMS, { items: addProductArray, itemCount: itemCount });



//     }

//     onbackPress=()=>{
//         const { navigation } = this.props;
//         const { itemCount } = this.state;
//         navigation.navigate(navigationStrings.DRAWER_ROUTES,{newitemCount:itemCount});
//     }

//     render() {
//         const { selectedItem, isDrawerOpen} = this.props.route.params;
//         const { itemCount, addProductArray } = this.state;

//         return (
//             <ScrollView>
//             <View style={styles.detailsView}>
//                 <Header itemCount={itemCount} addProductArray={addProductArray} _onCartClick={this._onCartClick} ifDrawerOpen={isDrawerOpen} onbackPress={this.onbackPress}/>
//             <View style={styles.productCard}>
//                 <Text style={styles.brandText}>Brand:  {selectedItem.itemsTitle}</Text>
//                 <Text style={styles.brandDescText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
//                 <Image source={{ uri: selectedItem.itemsImage }} style={styles.itemImage} resizeMode="cover"></Image>
//                 <View style={styles.priceView}><Text style={styles.mrpText}>MRP:</Text>
//                     <Text style={styles.priceText}>{selectedItem.itemPrice}</Text>
//                 </View>
//                 <View style={styles.deliveryView}> 
//                     <Text style={styles.freeDeliveryText}>FREE delivery:</Text>
//                     <Text style={styles.dateText}>Friday, March 5</Text>
//                     <Text style={styles.freeDeliveryText}>Details</Text>

//                 </View>
//                 </View>
//              <View style={styles.buttonView}>
//              <TouchableOpacity style={styles.buyNowButton}>
//                     <Text>Buy Now</Text>
//                 </TouchableOpacity>

                
//                 <TouchableOpacity style={styles.addToCartButton} onPress={this._onAddCart}>
//                     <Text>Add to Cart</Text>
//                 </TouchableOpacity>
//              </View>
             
//                 {/* <Image source={{uri:selectedItem.itemsImage}} style={styles.itemImage}></Image>
//                     <Text>{selectedItem.itemsTitle}</Text>
//                     <TouchableOpacity style={styles.addCartButton} onPress={this._onAddCart}><Text style={styles.addCartText}>Add cart</Text></TouchableOpacity> */}

//             </View>
//     </ScrollView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     detailsView: {
//         alignItems: "center",
//     },
//     itemImage: {
//         height: 250,
//         width: "95%",
//         marginTop: 10
//     },
//     addCartButton: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: 90,
//         height: 40,
//         backgroundColor: 'green'
//     },
//     addCartText: {
//         color: 'white'
//     },
//     brandText: {
//         color: "#66ccce",
//         alignSelf: "flex-start",
//     },
//     brandDescText: {
//         color: "grey",
//         fontSize: 12,
//         width: "95%",

//     },
//     priceText: {
//         fontSize: 25,
//         alignSelf: "flex-start",
//         marginHorizontal: 5,

//     },
//     priceView: {
//         flexDirection: "row",
//         alignSelf: "flex-start",
//         marginHorizontal: 5,

//     },
//     mrpText: {
//         alignSelf: "flex-end"
//     },
//     deliveryView:{
//         flexDirection:"row",
//         alignSelf: "flex-start",
//         marginHorizontal: 5,

//     },
//     freeDeliveryText:{
//         fontSize:14,
//         color: "#66ccce",
//     },
//     dateText:{
//         marginHorizontal:5
//     },
//     buyNowButton:{
//         backgroundColor:"#F1AD5A",
//         height:45,
//         width:"95%",
//         borderRadius:5,
//         justifyContent:"center",
//         alignItems:"center",
//         marginVertical:5,
//         borderColor:'grey',
//         borderWidth:1
//     },
//     addToCartButton:{
//         backgroundColor:'#F5DA95',
//         height:45,
//         width:"95%",
//         borderRadius:5,
//         justifyContent:"center",
//         alignItems:"center",
//         marginVertical:5,
//         borderColor:'grey',
//         borderWidth:1
//     },
//     productCard:{
//         backgroundColor:"white",
//         width:"100%",
//         paddingHorizontal:15,
//         paddingVertical:5
//     },
//     buttonView:{
//         width:"100%",
//         alignItems:"center",
//         marginTop:10
//     }
// })