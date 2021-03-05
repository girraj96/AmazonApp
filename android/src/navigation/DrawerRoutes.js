import React, {Component} from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer"
import {Home, Profile} from "../Screens/index"
import navigationStrings from '../constants/navigationStrings';
import DrawerContent from '../Components/DrawerContent';




const Drawer = createDrawerNavigator();

function DrawerRoutes({navigation}) {
  return (
            <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
                <Drawer.Screen name={navigationStrings.HOME} component={Home} />
                <Drawer.Screen name={navigationStrings.PROFILE} component={Profile} />
            </Drawer.Navigator>

  );
}


export default DrawerRoutes;