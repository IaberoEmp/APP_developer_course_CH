import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapPreview = ({ latitude, longitude }) => {
    const mapRegion = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922, // Estos deltas determinan el zoom del mapa
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            {latitude && longitude ? (
                <MapView
                    style={styles.map}
                    region={mapRegion}
                    // Puedes habilitar o deshabilitar el scroll y el zoom en el mapa
                    scrollEnabled={true}
                    zoomEnabled={true}
                >
                    <Marker
                        coordinate={{ latitude: latitude, longitude: longitude }}
                        title={"Ubicación"}
                        description={"Aquí está el marcador."}
                    />
                </MapView>
            ) : (
                    {/* Puedes poner aquí un placeholder si el mapa no está disponible */}
            )}
        </View>
    );
};

export default MapPreview;

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 350,
    },
    map: {
        width: 350,
        height: 350,
    },

});