import React,{Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, SafeAreaView, Image} from "react-native";
import Header from '../Components/Header';

export default class Setting extends Component{

    openDrawer=()=>{
        this.props.navigation.openDrawer();
    }
    render(){
        return(
            <SafeAreaView>
                <Header openDrawer={this.openDrawer} />
            </SafeAreaView>
        )
    }
}