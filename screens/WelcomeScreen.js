import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { Button, Icon } from "native-base";
import { KeyboardAvoidingView } from 'react-native';

export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Manchester'
        }
    }

    render() {

        return (

            <React.Fragment>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ImageBackground source={require('../assets/contemporary-restaurant.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={styles.overlay}>
                            <View style={styles.bottom}>
                                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                                    <View style={styles.logo}>
                                        <Text style={styles.welcome}>Welcome</Text>
                                        <Text style={styles.welcome}>to</Text>
                                        <Image source={require('../assets/reserv3d.png')} style={{ height: 50, width: '60%' }}></Image>
                                    </View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp', { search: this.state.text })}>
                                        <View style={styles.signupbutton}>
                                            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Helvetica-Light' }}>SIGN UP</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login', { search: this.state.text })}>
                                        <View style={styles.loginbutton}>
                                            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Helvetica-Light' }}>LOGIN</Text>
                                        </View>
                                    </TouchableOpacity>
                                </KeyboardAvoidingView>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </React.Fragment >

        );
    }
}

const styles = StyleSheet.create({
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 120
    },
    buttonSignUp: {
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#D9D9D9'
    },
    buttonLogIn: {
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 48,
        margin: 10,
        color: '#113859'
    },
    text: {
        color: "white",
        fontSize: 20
    },
    search: {
        flexDirection: 'row',
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        backgroundColor: 'white',
        borderRadius: 5,
        height: 48,
    },
    icon: {
        backgroundColor: "white",
        color: '#D9D9D9',
        margin: 10,
        fontSize: 25
    },
    searchInput: {
        color: '#D9D9D9',
        flex: 1,
        fontSize: 15,
        margin: 10,
    },
    logo: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 270
    },
    welcome: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Helvetica-Light'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%'
    },
    signupbutton: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 56,
        margin: 5,

    },
    loginbutton: {
        backgroundColor: '#113859',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '90%',
        marginRight: '5%',
        marginLeft: '5%',
        height: 56,
        margin: 5,

    }

});