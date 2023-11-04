import React, { useCallback } from "react";
import * as ExpoSplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import SplashScreen from "./screens/Splash";
import LoginScreen from "./screens/Login";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { View } from "react-native";
import ApresentationScreen from "./screens/Apresentation";
import HomeScreen from "./screens/Home";
import EstablishmentsScreen from "./screens/Establishments";
import PaymentDetailsScreen from "./screens/PaymentDetails";
import PaymentTakePhotoScreen from "./screens/PaymentTakePhoto";
import AccountScreen from "./screens/Account";

const Stack = createNativeStackNavigator();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  navigationBarColor: "transparent",
  animation: "slide_from_right",
};

ExpoSplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={defaultScreenOptions}>
          <Stack.Screen name="HOME" component={HomeScreen} />
          <Stack.Screen
            name="ESTABLISHMENTS"
            component={EstablishmentsScreen}
          />
          <Stack.Screen name="LOGIN" component={LoginScreen} />
          <Stack.Screen name="APRESENTATION" component={ApresentationScreen} />
          <Stack.Screen name="SPLASH" component={SplashScreen} />
          <Stack.Screen
            name="PAYMENT_DETAILS"
            component={PaymentDetailsScreen}
          />
          <Stack.Screen
            name="PAYMENT_TAKE_PHOTO"
            component={PaymentTakePhotoScreen}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="ACCOUNT" component={AccountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
