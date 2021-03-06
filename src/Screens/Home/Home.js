import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, SafeAreaView, Image, StyleSheet, FlatList } from "react-native";
import imagePath from '../../assests/imagePath';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';
import ShoppingItems from '../../Components/ShoppingItems';
import navigationStrings from '../../constants/navigationStrings';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoriesArray: [
                {
                    id: 1,
                    categorieImage: imagePath.prime_icon,
                    categorieTitle: 'Prime',
                },
                {
                    id: 2,
                    categorieImage: imagePath.pantry_icon,
                    categorieTitle: 'Pantry',
                },
                {
                    id: 3,
                    categorieImage: imagePath.mobile_icon,
                    categorieTitle: 'Mobiles',
                },
                {
                    id: 4,
                    categorieImage: imagePath.fashion_icon,
                    categorieTitle: 'Fashion',
                },
                {
                    id: 5,
                    categorieImage: imagePath.home_icon,
                    categorieTitle: 'Home',
                },
                {
                    id: 6,
                    categorieImage: imagePath.appliances_icon,
                    categorieTitle: 'Appliances',
                },
                {
                    id: 7,
                    categorieImage: imagePath.electronics_icon,
                    categorieTitle: 'Electronics',
                },
            ],

            shoppingItemsAry: [
                {
                    id: 1,
                    itemsImage: "https://icdn2.themanual.com/image/themanual/amazon-adidas.jpg",
                    itemsTitle: `Shoes`,
                    itemPrice: 1000
                },
                {
                    id: 2,
                    itemsImage: "https://i2.cdn.turner.com/money/2011/09/27/technology/amazon_publishing/amazon_kindle_books.top.jpg",
                    itemsTitle: `Books`,
                    itemPrice: 400
                },
                {
                    id: 3,
                    itemsImage: "https://images.fonearena.com/blog/wp-content/uploads/2019/07/Xiaomi-Mi-A3-1.jpg",
                    itemsTitle: `SmartPhones`,
                    itemPrice: 12000

                },
                {
                    id: 4,
                    itemsImage: "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/16047/152124/Hot-Sell-2018-New-Fashion-Wind-Breaker-Jackets-Men-Korean-Trend-Street-Wear-Overcoat-Slim-Fit__45531.1544765779.jpg?c=2?imbypass=on",
                    itemsTitle: `Men's cloths`,
                    itemPrice: 600

                },
                {
                    id: 5,
                    itemsImage: "https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/v1598971712/public_site/2020/Womens/Fall/TC_20098_Fall_Womens_LP_Header_Mobile.jpg",
                    itemsTitle: `Women's cloths`,
                    itemPrice: 500

                },
                {
                    id: 6,
                    itemsImage: "https://wwd.com/wp-content/uploads/2020/03/shutterstock_1274741653.jpg?crop=0px%2C0px%2C7360px%2C4909px&resize=640%2C415",
                    itemsTitle: `Beauty`,
                    itemPrice: 700

                },
                {
                    id: 7,
                    itemsImage: "https://cdn.mos.cms.futurecdn.net/A4GDK27VMnz6LtFDy9yzk.jpg",
                    itemsTitle: 'Laptops & Computers',
                    itemPrice: 50000

                },
                {
                    id: 8,
                    itemsImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc090120peart-005-1595519364.jpg",
                    itemsTitle: 'Home & Decor',
                    itemPrice: 2000

                },
            ],
            itemCount: 0,
            isDrawerOpen: true,
            isDrawerClose: false,
            isCartVisible:false
        }
    }

    _onItemClick = (id) => {
        const { navigation } = this.props;
        const { shoppingItemsAry,isCartVisible } = this.state;
        let newAry = [...shoppingItemsAry];
        let itemIndex = newAry.findIndex((item) => item.id === id);

        navigation.navigate(navigationStrings.SHOESLIST);
    }

    openDrawer = () => {
        const { navigation } = this.props;
        navigation.openDrawer();
    }

    render() {
        const { categoriesArray, shoppingItemsAry, isDrawerOpen,isCartVisible } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Header openDrawer={this.openDrawer}  isDrawerOpen={isDrawerOpen} isCartVisible={isCartVisible}/>
                <View style={styles.locationView}>
                    <Image source={imagePath.location_icon} resizeMode="contain" style={styles.locationIcon} />
                    <Text style={styles.locationText}>Deliver to Girraj - Jaipur 302033 </Text>
                </View>
                <View style={styles.flatlistView}>
                    <FlatList
                        data={categoriesArray}

                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                        renderItem={({ item }) =>
                            <Categories data={item} />}
                    />
                </View>

                <View style={styles.flatlistView2}>
                    <FlatList
                        data={shoppingItemsAry}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={styles.shoppingItemSeparator} />}
                        renderItem={({ item }) =>
                            <ShoppingItems shoppingItems={item} _onItemClick={this._onItemClick} />}
                    />
                </View>

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    locationView: {
        backgroundColor: '#66ccce',
        height: 40,
        alignItems: "center",
        flexDirection: "row"
    },
    locationIcon: {
        height: 25,
        width: 25,
        marginLeft: 10

    },
    locationText: {
        fontSize: 14,
        marginHorizontal: 5
    },
    itemSeparator: {
        width: 30,
    },
    flatlistView: {
        marginVertical: 10,
        marginHorizontal: 15,
    },
    flatlistView2: {

    },
    shoppingItemSeparator: {
        height: 15,
    },
    flatlistView2: {
        flex: 1
    }
})