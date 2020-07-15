import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign up for Travel Tracker</Text>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(160,205,255)',
        flex: 1
    },
    text: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '300',
        color: 'rgb(0,5,55)',
        shadowColor: 'black',
        textShadowColor: 'black'
    }
});

export default SignupScreen;