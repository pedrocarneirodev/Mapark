import React, { useCallback, useEffect } from "react";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import SplashScreenLib from "react-native-splash-screen";

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
import HistoryScreen from "./screens/History";
import MapScreen from "./screens/Map";
import PaymentSuccessScreen from "./screens/PaymentSuccess";
import PaymentMethodScreen from "./screens/PaymentMethod";

const Stack = createNativeStackNavigator();

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ["parking://"],
  config: {
    screens: {
      HOME: {
        path: "deeplink/:ticketCode",
      },
    },
  },
};

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  navigationBarColor: "transparent",
  animation: "slide_from_right",
};

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
      SplashScreenLib.hide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator screenOptions={defaultScreenOptions}>
          <Stack.Screen name="HOME" component={HomeScreen as any} />
          <Stack.Screen name="MAP" component={MapScreen} />
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
          <Stack.Screen
            name="PAYMENT_SUCCESS"
            component={PaymentSuccessScreen}
          />
          <Stack.Screen name="ACCOUNT" component={AccountScreen} />
          <Stack.Screen name="HISTORY" component={HistoryScreen} />
          <Stack.Screen name="PAYMENT_METHOD" component={PaymentMethodScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
