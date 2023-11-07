import GradientBackground from "../../components/GradientBackground";
import BackButtonNav from "../../components/BackButtonNav";
import { NavContainer, Header, ParkingImage, Image } from "./styles";
import { useEffect, useState } from "react";
import {
  Accuracy,
  getForegroundPermissionsAsync,
  watchHeadingAsync,
  watchPositionAsync,
} from "expo-location";
import { Linking } from "react-native";

const MapScreen = () => {
  const [location, setLocation] = useState({ lat: 0, lon: 0, heading: 0 });
  const [firstLocation, setFirstLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

  useEffect(() => {
    let locationSubscription: any;

    (async () => {
      const { status } = await getForegroundPermissionsAsync();

      if (status !== "granted") {
        await Linking.openSettings();
      } else {
        locationSubscription = await watchPositionAsync(
          { accuracy: Accuracy.BestForNavigation, timeInterval: 2000 },
          (location) => {
            if (firstLocation == null) {
              setFirstLocation({
                lat: location.coords.latitude,
                lon: location.coords.longitude,
              });
            }

            setLocation({
              lat: location.coords.latitude,
              lon: location.coords.longitude,
              heading: location.coords.heading ?? 0,
            });
          }
        );
      }
    })();

    return () => {
      locationSubscription && locationSubscription.remove();
    };
  }, []);

  const x =
    (location.lat - (firstLocation ? firstLocation.lat : 0)) * 100000000;
  const y =
    (location.lon - (firstLocation ? firstLocation.lon : 0)) * 100000000;

  console.log("x " + x);
  console.log("y " + y);

  return (
    <GradientBackground>
      <NavContainer>
        <BackButtonNav />

        <Header>Encontrar Vagas</Header>
      </NavContainer>

      <ParkingImage
        resizeMode="repeat"
        imageStyle={{
          height: 1000,
          width: 1000,
          transform: [
            {
              translateX: -415 + x,
            },
            {
              translateY: -200 + y,
            },
          ],
        }}
        source={require("../../assets/img/parking.png")}
      >
        <Image
          resizeMode="center"
          source={require("../../assets/img/volto-complete.png")}
          style={{
            transform: [{ rotateZ: `${location.heading}deg` }],
          }}
        />
      </ParkingImage>
    </GradientBackground>
  );
};

export default MapScreen;
