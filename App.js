import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';
// import StatusBarFn from './Components/StatusBar'
import RegistrationScreen from "./Components/Screens/RegistrationScreen";

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

    return (
        <View style={styles.container}>
            <RegistrationScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
