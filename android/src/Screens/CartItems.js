import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import Header from "../Components/Header";
import navigationStrings from "../constants/navigationStrings";



export default class CartItems extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            totalPrice: 0,
            countedItem: 0,
        })

    }
  
    // componentDidMount() {
    //     const { items} = this.props.route.params;
    //     let completePrice = items[indexOfItem].shoesPrice * itemCount;
    //     this.setState({
    //         totalPrice: completePrice,
    //         countedItem:itemCount
    //     })
    // }

    _onSubButton = (id) => {

        const { items} = this.props.route.params;
        let newItems=[...items];
         let itemIndex = newItems.findIndex((item) => item.id === id);
        let newQauntity= newItems[itemIndex];
        newQauntity.quantity-=1;
        this.setState({
            items:newQauntity
        })

    }

    _onAddButton = (id) => {
        const { items} = this.props.route.params;
        let newItems=[...items];
         let itemIndex = newItems.findIndex((item) => item.id === id);
        let newQauntity= newItems[itemIndex];
        newQauntity.quantity+=1;
        this.setState({
            items:newQauntity
        })
    }

    onbackPress=()=>{
        const { navigation } = this.props;
        navigation.navigate(navigationStrings.SHOESLIST);
    }

    _renderItem = ({item}) => { 
        return(
            <View style={{backgroundColor:"white"}}>
           <View style={styles.productView}>
                 <Image source={{ uri: item.shoesImage }} style={styles.productImage} resizeMode="contain" />
                 <View style={styles.productDetails}>
                     <Text style={styles.descText}>{item.shortDescription}</Text>
                     <Text style={styles.priceColor}>₹ {item.shoesPrice}</Text>
                     <Text style={styles.inStockText}>In stock</Text>
                     <View style={styles.sellerNameView}><Text style={styles.soldByText}>Sold by </Text><Text style={styles.sellerName}>WEBOASIS GARMENT PVT. LTD.</Text></View>
                 </View>
             </View>
 
               <View style={styles.buttonsView}>
                 <View style={styles.itemAddSub}>
                     <TouchableOpacity style={styles.subCount} onPress={()=>this._onSubButton(item.id)}>
                         <Text>
 
                             -
                         </Text>
                     </TouchableOpacity>
                     <Text style={styles.totalCount}>
                         {item.quantity}
                     </Text>
                     <TouchableOpacity style={styles.addCount} onPress={()=>this._onAddButton(item.id)}>
                         <Text>
                             +
                         </Text>
                     </TouchableOpacity>
                 </View>
             </View> 
         </View>
         
        )
  }

    render() {
        const { items } = this.props.route.params;
        const { totalPrice, countedItem } = this.state;
        return (
            <View style={styles.mainView}>
            <Header onbackPress={this.onbackPress} itemCount={countedItem}/>
            <View style={styles.subView}>
                 <View style={styles.itemPriceCount}>
                     <Text>Subtotal ({countedItem} items): </Text>
                     <Text style={styles.priceColor}>₹ {totalPrice}</Text>
                 </View>
             </View>
             <TouchableOpacity style={styles.proccedToBuyButton}>
                 <Text>Proceed to Buy</Text>
             </TouchableOpacity>
            <FlatList 
            data={items}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={(item) => this._renderItem(item)}
           />
        </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,

    },
    itemPriceCount: {
        flexDirection: "row",
        marginVertical: 15

    },
    priceColor: {
        color: "#B12703",
        fontSize: 18
    },
    subView: {
        marginHorizontal: 10,
    },
    proccedToBuyButton: {
        backgroundColor: "#F1AD5A",
        height: 45,
        width: "95%",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
        borderColor: 'grey',
        borderWidth: 1,
        alignSelf: "center"
    },
    productView: {
        marginTop: 20,
        flexDirection: 'row',
        marginHorizontal: 10
    },
    productDetails: {
        flexDirection: "column",
        flex: 0.6,
        marginHorizontal: 5
    },
    productImage: {
        height: 150,
        width: 130,
        flex: 0.4
    },
    sellerNameView: {
        flexDirection: 'row',

    },
    inStockText: {
        color: "green",
        fontSize: 18
    },
    descText: {

    },
    soldByText: {
        fontSize: 18,
        color: "grey"
    },
    sellerName: {
        fontSize: 18,
        color: "#0E6B7C"
    },
    buttonsView: {
        flexDirection: "row",
        marginVertical: 10,
    },
    itemAddSub: {
        height: 45,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey',
        flexDirection: "row",
        marginHorizontal: 10,
        alignItems: "center"
    },
    subCount: {
        paddingLeft: 20,
        borderRightWidth: 1,
        paddingRight: 20,



    },
    totalCount: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    addCount: {
        paddingLeft: 20,
        borderLeftWidth: 1,
        paddingRight: 20,


    }
})