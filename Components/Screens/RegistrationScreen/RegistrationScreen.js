// import {
//     View,
//     Text,
//     StyleSheet,
//     ImageBackground,
//     Image,
//     TouchableOpacity,
//     TextInput,
// } from "react-native";
// import React from "react";

// import unionImage from "./union.jpg";

// export default function RegistrationScreen() {
//     const [text, onChangeText] = React.useState("");
//     const [email, onChangeEmail] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const [secureTextEntry, setSecureTextEntry] = React.useState(true);

//     const toggleSecureTextEntry = () => {
//         setSecureTextEntry(!secureTextEntry);
//     };

//     return (
//         <View style={styles.container}>
//             <ImageBackground
//                 source={require("../../../assets/images/photoBG.jpg")}
//                 resizeMode="cover"
//                 style={styles.image}
//             >
//                 <View style={styles.rectangleBG}>
//                     <View style={styles.addPhoto}>
//                         <View style={styles.add}>
//                             <Image
//                                 source={unionImage}
//                                 style={styles.unionImage}
//                                 resizeMode="cover"
//                             />
//                         </View>
//                     </View>
//                     <View style={styles.pageHeader}>
//                         <Text style={styles.textPageHeader}>Реєстрація</Text>
//                     </View>

//                     <TextInput
//                         style={styles.input}
//                         onChangeText={onChangeText}
//                         // value={text}
//                         placeholder="Логін"
//                     />

//                     <TextInput
//                         inputMode="email"
//                         style={styles.input}
//                         onChangeText={onChangeEmail}
//                         // value={email}
//                         placeholder="Адреса електронної пошти"
//                     />

//                     <TextInput
//                         style={[{ position: 'relative' }, styles.input]}
//                         secureTextEntry={secureTextEntry}
//                         value={password}
//                         onChangeText={setPassword}
//                         placeholder="Пароль"
//                     />

//                     <TouchableOpacity
//                         style={styles.buttonScr}
//                         onPress={toggleSecureTextEntry}
//                     >
//                         <Text style={styles.buttonText}>
//                             {secureTextEntry ? "Показати" : "Сховати"}
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             </ImageBackground>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         width: "100%",
//         // height: 812,
//     },

//     image: {
//         flex: 1,
//         // justifyContent: "center",
//     },

//     rectangleBG: {
//         flexDirection: "column",
//         alignItems: "center",

//         width: "100%",
//         height: 549,

//         marginTop: "auto",
//         marginLeft: "auto",
//         marginRight: "auto",

//         backgroundColor: "#FFFFFF",
//         borderTopLeftRadius: 25,
//         borderTopRightRadius: 25,
//     },

//     addPhoto: {
//         width: 120,
//         height: 120,
//         transform: [{ translateY: -60 }],

//         backgroundColor: "#F6F6F6",
//         borderTopLeftRadius: 16,
//         borderTopRightRadius: 16,
//     },

//     add: {
//         width: 25,
//         height: 25,

//         backgroundColor: "#FFFFFF",

//         borderRadius: 50,
//         borderWidth: 1,
//         borderColor: "#FF6C00",
//         transform: [{ translateX: 108 }, { translateY: 81 }],
//     },
//     unionImage: {
//         width: 13,
//         height: 13,

//         transform: [{ translateX: 5 }, { translateY: 5 }],
//     },

//     pageHeader: {
//         width: "91%",
//         height: 36,
//         transform: [{ translateX: 0 }, { translateY: -28 }],
//     },

//     textPageHeader: {
//         color: "#212121",
//         fontFamily: "Roboto",
//         fontWeight: "500",
//         fontSize: 30,
//         lineHeight: 35.16,
//         letterSpacing: 0.01,

//         textAlign: "center",
//     },

//     input: {
//         width: "91%",
//         height: 50,

//         borderWidth: 1,
//         borderRadius: 8,
//         borderColor: "#E8E8E8",
//         backgroundColor: "#F6F6F6",

//         marginBottom: 16,
//         padding: 16,

//     },

//     buttonScr: {

//       position: 'absolute',
//       top: 0,
//       lext: 0,
//         color: "#1B4371",
//         fontFamily: "Roboto",
//         fontWeight: "400",
//         fontSize: 16,
//         lineHeight: 18.75,

//         backgroundColor: "blue",

//     },
// });

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React from "react";

import unionImage from "./union.jpg";

export default function RegistrationScreen() {
    const [text, onChangeText] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/images/photoBG.jpg")}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.rectangleBG}>
                    <View style={styles.addPhoto}>
                        <View style={styles.add}>
                            <Image
                                source={unionImage}
                                style={styles.unionImage}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <View style={styles.pageHeader}>
                        <Text style={styles.textPageHeader}>Реєстрація</Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        // value={text}
                        placeholder="Логін"
                    />

                    <TextInput
                        inputMode="email"
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        // value={email}
                        placeholder="Адреса електронної пошти"
                    />

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Пароль"
                        />
                        <TouchableOpacity
                            style={styles.eyeButton}
                            onPress={toggleSecureTextEntry}
                        >
                            <Text style={styles.buttonText}>
                                {secureTextEntry ? "Показати" : "Сховати"}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },

    image: {
        flex: 1,
    },

    rectangleBG: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
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
    unionImage: {
        width: 13,
        height: 13,
        transform: [{ translateX: 5 }, { translateY: 5 }],
    },

    pageHeader: {
        width: "91%",
        height: 36,
        transform: [{ translateX: 0 }, { translateY: -28 }],
    },

    textPageHeader: {
        color: "#212121",
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 30,
        lineHeight: 35.16,
        letterSpacing: 0.01,
        textAlign: "center",
    },

    inputContainer: {
        position: "relative",
        width: "100%",
        marginBottom: 16,
        alignItems: "center",
    },

    input: {
        width: "91%",
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8",
        backgroundColor: "#F6F6F6",
        padding: 16,
        marginBottom: 16,
    },

    // passwordInput: {
    //     flex: 1,
    // },

    eyeButton: {
        position: "absolute",
        top: 14,
        right: 32,

    },

    eyeIcon: {
        width: 20,
        height: 20,
    },

    buttonScr: {
        position: "absolute",
        bottom: 16,
        alignSelf: "center",
        backgroundColor: "blue",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
    },

    buttonText: {
        color: "#1B4371",
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18.75,
        textAlign: "center",
    },
});
