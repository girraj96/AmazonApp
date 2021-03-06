import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import imagePath from "../../assests/imagePath";

export default class Signup extends Component {
    state = {
        value: 'signin',
        name: '',
        mobileNumber: "",
        email: '',
        password: "",
        isNameValide: false,
        isMobileValid: false,
        isEmailValid: false,
        isPasswordValid: false
    }

    onSignupClick = () => {
        const { name, mobileNumber, email, password } = this.state;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (name.length < 4) {
            this.setState({
                isNameValide: true,
            })
        }
        else if (mobileNumber.length < 10) {
            this.setState({
                isMobileValid: true,
            })
        }
        // else if (email != reg) {
        //     this.setState({
        //         isEmailValid: true
        //     })
        // }
        else if (password.length<5) {
            this.setState({
                isPasswordValid: true
            })
        }
        else {
            this.setState({
                isNameValide: false,
                isMobileValid: false,
                isEmailValid: false,
                isPasswordValid: false
            })
        }
    }

    render() {
        const { isNameValide, isMobileValid, isEmailValid, isPasswordValid } = this.state;
        return (
            <View style={styles.signupView}>
                <TextInput placeholder="Name" style={styles.nameTextInput} onChangeText={(value) => this.setState({ name: value })} />
                {isNameValide && (<Text style={{ color: "red", fontSize: 12 }}>minimum 4 chracters required</Text>)}
                <View style={styles.mobileNumberView}>
                    <TouchableOpacity style={styles.countryCode}>
                        <Text style={styles.countryCodes}>IN +91</Text>
                    </TouchableOpacity>
                    <View style={styles.mobileErrorView}>
                        <TextInput style={styles.mobileNumberTextinput} placeholder="Mobile Number"
                            maxLength={10} keyboardType="numeric" onChangeText={(value) => this.setState({ mobileNumber: value })} />
                        {isMobileValid && (<Text style={{ color: "red", fontSize: 12 }}>please enter valid mobile number</Text>)}

                    </View>

                </View>
                <TextInput style={styles.emailTextInput} placeholder="Email (Optional)" onChangeText={(value) => this.setState({ email: value })} />
                {isEmailValid && (<Text style={{ color: "red", fontSize: 12 }}>please enter valid E-mail</Text>)}
                <TextInput style={styles.passwordTextInput} secureTextEntry={true} placeholder="Set password" onChangeText={(value) => this.setState({ password: value })} />
                <Text>i Passwords must be at least 6 characters.</Text>
                {isPasswordValid && (<Text style={{ color: "red", fontSize: 12 }}>please enter valid password</Text>)}
                <View style={styles.checkPasswordView}>
                    <View style={styles.checkBoxview}>
                        <Image style={styles.checkBoxImage} source={imagePath.right_icon} />
                    </View>
                    <Text style={styles.showPasswordText}>Show password</Text>
                </View>
                <TouchableOpacity style={styles.signUpButton} onPress={this.onSignupClick}>
                    <Text style={styles.signupText}>
                        Signup
                    </Text>
                </TouchableOpacity>
                <View style={styles.termsView}>
                    <Text style={styles.byClickingText}>By creating an account or logging in, you agree to Amazon's <Text style={styles.linkText}> Conditions of Use</Text> and <Text style={styles.linkText}> Privacy Policy.</Text></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    signupView: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        backgroundColor: "white",
        borderWidth: 0.3,
    },
    nameTextInput: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#C4C4C4",
        paddingLeft: 10,
    },
    mobileNumberView: {
        flexDirection: "row",
        marginVertical: 20,
    },
    countryCode: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#edeeef",
        flex: 0.4,
        borderRadius: 2,
        borderWidth: 0.3,
    },
    mobileNumberTextinput: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#C4C4C4",
        marginLeft: 5,
        paddingLeft: 10,
    },
    emailTextInput: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#C4C4C4",
        paddingLeft: 10,
    },
    passwordTextInput: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#C4C4C4",
        paddingLeft: 10,
        marginTop: 20
    },
    checkPasswordView: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20
    },
    checkBoxview: {
        height: 23,
        width: 23,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#C4C4C4",
        borderRadius: 3
    },
    checkBoxImage: {
        height: "100%",
        width: "100%"
    },
    showPasswordText: {
        marginHorizontal: 5
    },
    signUpButton: {
        height: 50,
        backgroundColor: "#F1AD5A",
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: '#C4C4C4',
        alignItems: "center",
        justifyContent: "center"
    },
    termsView: {
        marginVertical: 15,
    },
    linkText: {
        color: "#2FB7F5"
    },
    mobileErrorView:{
        flexDirection:"column",
        flex: 0.6,

    }

})