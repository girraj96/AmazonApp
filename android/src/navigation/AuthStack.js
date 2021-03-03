import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Signin,Signup} from "../Screens/index";
import navigationStrings from '../constants/navigationStrings';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <React.Fragment>
      <Stack.Screen name={navigationStrings.SIGNIN}  component={Signin} options={{
                    headerShown: false
                }} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} options={{
                    headerShown: false
                }}/>
    
      </React.Fragment>
  );
}

export default AuthStack;
