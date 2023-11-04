import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const usePreventGoBack = () => {
  const navigation = useNavigation();

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
      }),
    [navigation]
  );
};

export default usePreventGoBack;
