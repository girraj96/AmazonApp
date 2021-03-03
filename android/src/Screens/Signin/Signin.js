import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,ScrollView} from "react-native";
// import RadioButtonRN from 'radio-buttons-react-native';
// import RadioButtonRN from 'radio-buttons-react-native';

import AuthHeader from "../../Components/AuthHeader";
import imagePath from "../../assests/imagePath";
import { RadioButton } from 'react-native-paper';
import Signup from "../Signup/Signup";
import navigationStrings from "../../constants/navigationStrings";



export default class Signin extends Component {
    state = {
        value: 'signin',
        isSignUp: false,
    }

    _onValueChange = (value) => {
        this.setState({
            value: value
        })
        switch (value) {
            case "signin":
                this.setState({
                    isSignUp: false
                })
                break;
            default:
                this.setState({
                    isSignUp: true
                })
        }
    }

    signUpFunction = () => {
        return (
            <View>
                <Text>Signup</Text>
            </View>
        )
    }


    render() {
        const { checked, value, isSignUp } = this.state;
        const {navigation}=this.props;
        return (
            <ScrollView style={{ flexGrow: 1 }}>
                <AuthHeader />
                <RadioButton.Group onValueChange={this._onValueChange} value={value} >
                    <RadioButton.Item value="signup" label="Create account. New to Amazon?" color="#FF9900" style={styles.signinRadio} />
                    {isSignUp && <Signup/>}

                    <RadioButton.Item value="signin" label="Sign-In. Already a customer?" color="#FF9900" style={styles.signupRadio}
                    />
                    {!isSignUp && <View style={styles.signinView}>
                        <TextInput style={styles.emailTextInput} placeholder="Mobile number or E-mail" />
                        <TouchableOpacity style={styles.signInButton} onPress={()=>navigation.navigate(navigationStrings.DRAWER_ROUTES)}>
                            <Text >
                                Continue
                    </Text>
                        </TouchableOpacity>
                        <View style={styles.termsView}>
                            <Text style={styles.byClickingText}>By creating an account or logging in, you agree to Amazon's <Text style={styles.linkText}> Conditions of Use</Text> and <Text style={styles.linkText}> Privacy Policy.</Text></Text>
                        </View>
                    </View>}
                </RadioButton.Group>

                <View style={styles.linksView}>
                    <Text style={styles.linksText}>Conditions of Use</Text>
                    <Text style={styles.linksText}>Privacy Notice</Text>
                    <Text style={styles.linksText}>Help</Text>

                </View>
                <Text style={styles.copyrightText}>&#169; 1996-2021, Amazon.com, Inc. or its affiliates</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    welcomeText: {
        marginVertical: 15,
        marginHorizontal: 10,
        fontSize: 24
    },
    radioButtonsView: {
        paddingLeft: 20
    },
    signupView: {
        flexDirection: "row",
        alignItems: "center"
    },
    boxStyle: {
        borderWidth: 0
    },
    signinRadio: {
        flexDirection: "row-reverse",
    },
    signupRadio: {
        flexDirection: "row-reverse",

    },
    signinView: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        backgroundColor: "white",
        borderWidth: 0.3,
    },
    emailTextInput: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#C4C4C4",
        paddingLeft: 10,
        marginVertical: 10
    },
    signInButton: {
        height: 50,
        backgroundColor: "#F1AD5A",
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: '#C4C4C4',
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    termsView: {
        marginVertical: 15,

    },
    linkText: {
        color: "#2FB7F5"

    },
    linksView: {
        flexDirection: "row",
        alignSelf: "center",
        marginVertical: 10
    },
    linksText: {
        color: "#2FB7F5",
        fontSize: 17,
        margin: 10
    },
    copyrightText: {
        fontSize: 13,
        alignSelf: "center"
    }
})