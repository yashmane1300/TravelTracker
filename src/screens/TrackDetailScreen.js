import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from "../context/TrackContext"
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext)
    const _id = navigation.getParam('_id')

    const track = state.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords
    return <>
        <View style={styles.container}>
            <Text style={styles.text}>{track.name}</Text>
            <MapView

                initialRegion={{
                    longitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    </>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    },
    text: {
        color: 'white',
        fontWeight: '200',
        alignSelf: 'center',
        fontSize: 48,
        marginBottom: 25,
        marginTop: 10
    },
    container: {
        backgroundColor: 'rgb(0,5,55)',
        flex: 1
    }
})

export default TrackDetailScreen;