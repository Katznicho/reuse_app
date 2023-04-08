import React,{useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query'
import BaseNavigation from './src/BaseNavigation/BaseNavigation';
import NetInfo from "@react-native-community/netinfo";
import { LogBox, View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { generalstyles } from './src/generalstyles/generalstyles';
import { theme } from './src/theme/theme';
import { Button } from 'react-native-paper';

export default function App() {
  const [connected, setIsConnected] = useState<boolean | null>(false)

  const checkInternet = () => {

    NetInfo.addEventListener(state => {
      return setIsConnected(state?.isConnected);
    });
  };

  useEffect(() => { }, [connected]);

  useEffect(() => {
    checkInternet();
    LogBox.ignoreAllLogs();
    if (auth().currentUser) {
      auth().signOut();
    }
  }, []);
  return connected ?(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={new QueryClient()}>
        <BaseNavigation />
        </QueryClientProvider>
        <FlashMessage position="top" animated />
      </PersistGate>
    </Provider>
  ):(<View
    style={[
      generalstyles.container,
      { backgroundColor: theme.colors.primary, marginHorizontal: 10 },
      generalstyles.centerContent,
    ]}>
    <Text>Please Enable Internet Access and Restart the App</Text>
    <Button

      mode="contained"


      buttonColor={theme.colors.buttonColor}
      textColor={theme.colors.primary}
      onPress={checkInternet}
    >
      Retry
    </Button>
  </View>)
}

