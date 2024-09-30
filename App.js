import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView } from "react-native";
import { usePlayer } from "./hooks/usePlayer";
import { useToken } from "./hooks/useToken";
import { ModalProvider } from "./context/modal";
import { PlayerProvider } from "./context/player";

import { LoginStackNavigation } from "./navigation/LoginStackNavigation";
import { BottomTabNavigation } from "./navigation/BottomTabNavigation";
import SplashScreen from "./screens/SplashScreen";
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  const { setupPlayer } = usePlayer();
  const { token } = useToken();
  const queryClient = new QueryClient();

  useEffect(() => {
    setupPlayer();
  }, []);

  return (
    <ModalProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView style={{ flex: 1 }} dges={["top", "left", "right"]}>
            <NavigationContainer>
              <PlayerProvider>
                {token === null ? (
                  <SplashScreen />
                ) : token.length > 0 ? (
                  <BottomTabNavigation />
                ) : (
                  <LoginStackNavigation />
                )}
              </PlayerProvider>
            </NavigationContainer>
          </SafeAreaView>
        </QueryClientProvider>
      </Provider>
    </ModalProvider>
  );
}
