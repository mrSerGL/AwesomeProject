import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function RegistrationScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/images/photoBG.jpg")}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.rectangleBG}>
                    <View style={styles.addPhoto}>
                        <View style={styles.add} />
                    </View>
                    <Text style={styles.pageHeader}>Реєстрація</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 375,
        height: 812,
    },

    image: {
        flex: 1,
        // justifyContent: "center",
    },

    rectangleBG: {
        flexDirection: "column",
        alignItems: "center",

        width: 375,
        height: 549,

        marginTop: "auto",
        marginLeft: "auto",
        marginRight: "auto",

        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    addPhoto: {
        width: 120,
        height: 120,
        transform: [{ translateY: -60 }],

        backgroundColor: "#F6F6F6",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },

    add: {
        width: 25,
        height: 25,

        backgroundColor: "#FFFFFF",

        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#FF6C00",

        transform: [{ translateX: 108 }, { translateY: 81 }],
    },

    pageHeader: {
        color: "#212121",

        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 30,
        lineHeight: 35.16,
        letterSpacing: 0.01,
    },
});
