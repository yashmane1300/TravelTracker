import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, alignSelf: 'center', marginTop: 30, color: 'white', fontWeight: '200' }}>Your Profile</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </View>
    )

}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(0,5,55)',
        flex: 1,
        marginTop: 25
    }
})

export default AccountScreen;