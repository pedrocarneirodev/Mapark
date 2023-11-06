import {
  Accuracy,
  getForegroundPermissionsAsync,
  requestForegroundPermissionsAsync,
  watchHeadingAsync,
  watchPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { Linking, View } from "react-native";
import { Container, Image, ParkingImage } from "./styles";

const MapButton = () => {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    let locationSubscription: any;

    (async () => {
      const { status } = await getForegroundPermissionsAsync();

      if (status !== "granted") {
        await Linking.openSettings();
      } else {
        locationSubscription = await watchHeadingAsync((data) => {
          setHeading(data.trueHeading);
        });
      }
    })();

    return () => {
      locationSubscription && locationSubscription.remove();
    };
  }, []);

  return (
    <Container colors={["#000", "hsl(209, 79%, 21%)"]} locations={[0.3, 1]}>
      <ParkingImage
        resizeMode="center"
        source={require("../../assets/img/parking.png")}
      ></ParkingImage>
      <Image
        resizeMode="center"
        source={require("../../assets/img/volto-complete.png")}
        style={{
          transform: [{ rotateZ: `${heading}deg` }],
        }}
      ></Image>
    </Container>
  );
};

export default MapButton;
