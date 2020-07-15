import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign in to Your Account</Text>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />

            <NavLink
                text="Don't have an account? Sign up instead"
                routeName="Signup"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
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
        textShadowColor: 'black',

    }
})

export default SigninScreen;