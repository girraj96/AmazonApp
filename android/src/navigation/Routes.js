import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack=createStackNavigator();


export default function Routes(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                {AuthStack()}
                {MainStack()}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
