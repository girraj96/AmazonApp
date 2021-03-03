import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import Header from "../../Components/Header";
import ShoesStock from "../../Components/ShoesStock";
import navigationStrings from "../../constants/navigationStrings";

export default class ShoesList extends Component {
    state = {
        shoesLists: [
            {
                id: 1,
                shoesName: "T-Rock",
                shortDescription: "Men's Running Shoes",
                shoesPrice: 315,
                shoesImage: "https://images-na.ssl-images-amazon.com/images/I/716WSjKMcCL._AC_UL320_.jpg",
                isPreviousClicked:true,
                quantity:1,
            },
            {
                id: 2,
                shoesName: "Maddy",
                shortDescription: "Daily Running Shoes",
                shoesPrice: 649,
                shoesImage: "https://images-na.ssl-images-amazon.com/images/I/51xlU4uI+GL._AC_UL320_.jpg",
                isPreviousClicked:true,
                quantity:1,
            },
            {
                id: 3,
                shoesName: "Ethics",
                shortDescription: "Boys Shoes",
                shoesPrice: 899,
                shoesImage: "https://images-na.ssl-images-amazon.com/images/I/61j6rA7eweL._AC_UL320_.jpg",
                isPreviousClicked:true,
                quantity:1,
            },
            {
                id: 4,
                shoesName: "Inklenzo",
                shortDescription: "Sports Shoes for Running",
                shoesPrice: 784,
                shoesImage: "https://images-na.ssl-images-amazon.com/images/I/61gu9eTzeGL._AC_UL320_.jpg",
                isPreviousClicked:true,
                quantity:1,
            },
            {
                id: 5,
                shoesName: "Bourge",
                shortDescription: "Men's Sneaker",
                shoesPrice: 699,
                shoesImage: "https://images-na.ssl-images-amazon.com/images/I/81OlX3C3isL._AC_UL320_.jpg",
                isPreviousClicked:true,
                quantity:1,
            },
            {
                id: 6,
                shoesName: "Sparx",
                shortDescription: "Men's Running Sportes Shoes",
                shoesPrice: 563,
                shoesImage: "https://images-na.ssl-images-amazon.com/images/I/81Agwfg6ssL._AC_UL320_.jpg",
                isPreviousClicked:true,
                quantity:1,
            },
            {
                id: 7,
                shoesName: "aadi",
                shortDescription: "Boy's Orange-z1 Running Shoes",
                shoesPrice: 1047,
                shoesImage: "https://images-na.ssl-images-amazon.com/images/I/81PSjLaLYsL._AC_UL320_.jpg",
                isPreviousClicked:true,
                quantity:1,
            },
            {
                id: 8,
                shoesName: "Centrino",
                shortDescription: "Men's Hiking Boots",
                shoesPrice: 987,
                shoesImage: "https://images-na.ssl-images-amazon.com/images/I/71Hrx-Tu8gL._AC_UL320_.jpg",
                isPreviousClicked:true,
                quantity:1,
            },
        ],
        cartItemCount:0,
        newshoesAry:[],
     

    }

    onbackPress = () => {
        const { navigation } = this.props;
        navigation.navigate(navigationStrings.DRAWER_ROUTES);
    }

    componentDidMount() {
        this.setState({
            isCartVisible: true
        })
    }

    onBuyItemPress = (id) => {
        const { shoesLists, cartItemCount,newshoesAry} = this.state;
        let newshoesList = [...shoesLists];
        let itemIndex = newshoesList.findIndex((item) => item.id === id);

        if (!newshoesAry.includes(newshoesList[itemIndex])) {
            let newr=[...newshoesAry,newshoesList[itemIndex]];
            this.setState({
                cartItemCount:cartItemCount+1,
                newshoesAry:newr,
            })
        }
    }

    _onCartClick=()=>{ 
        const {newshoesAry,cartCountAry}=this.state;
        const { navigation } = this.props;
        navigation.navigate(navigationStrings.CARTITEMS,{items:newshoesAry,cartCountAry:cartCountAry});
    }

    onItemsPress=(id)=>{
        const { shoesLists, cartItemCount,isCartVisible} = this.state;
        const { navigation } = this.props;
        let newshoesList = [...shoesLists];
        let itemIndex = newshoesList.findIndex((item) => item.id === id); 
        navigation.navigate(navigationStrings.SHOES,{clickedItem:newshoesList[itemIndex],itemCount:cartItemCount,isCartVisible:isCartVisible});

    }

    render() {
        const { shoesLists, isCartVisible, cartItemCount } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <Header onbackPress={this.onbackPress} isCartVisible={isCartVisible} itemCount={cartItemCount} _onCartClick={this._onCartClick}/>
                <View style={{ margin: 10, flex: 1 }}>
                    <FlatList
                        data={shoesLists}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ height: 5 }}></View>}
                        keyExtractor={(items) => items.id.toString()}
                        renderItem={({ item }) =>
                            <ShoesStock data={item} onBuyItemPress={this.onBuyItemPress} onItemsPress={this.onItemsPress} />}
                    />
                </View>

            </View>
        )
    }
}