import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import navigationStrings from "../constants/navigationStrings";
import DrawerRoutes from "./DrawerRoutes";
import { CartItems, Shoes, ShoesList} from "../Screens";




const Stack = createStackNavigator();
export default function () {

    return (
        <>
            <Stack.Screen
                name={navigationStrings.DRAWER_ROUTES}
                options={{
                    headerShown: false
                }}
                component={DrawerRoutes}
            />
            <Stack.Screen
                name={navigationStrings.SHOES}
                options={{
                    headerShown: false
                }}
                component={Shoes}
            />
            <Stack.Screen
                name={navigationStrings.CARTITEMS}
                options={{
                    headerShown: false
                }}
                component={CartItems}
                
            />
                    <Stack.Screen
                name={navigationStrings.SHOESLIST}
                options={{
                    headerShown: false
                }}
                component={ShoesList}
                
            />

        </>
    )
}