import React, {Component} from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer"
import {Home, Setting} from "../Screens/index"
import navigationStrings from '../constants/navigationStrings';


const Drawer = createDrawerNavigator();

function DrawerRoutes({navigation}) {
  return (
            <Drawer.Navigator>
                <Drawer.Screen name={navigationStrings.HOME} component={Home} />
                <Drawer.Screen name={navigationStrings.SETTING} component={Setting} />
            </Drawer.Navigator>

  );
}


export default DrawerRoutes;