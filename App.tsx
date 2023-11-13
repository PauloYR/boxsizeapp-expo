import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { HomeTabs } from "./src/pages/home/home_page";
import { useFonts } from 'expo-font';
import { loadFonts } from './src/styles/fontConfig';
import LoginPage from './src/pages/login/login_page';
import CreatePage from './src/pages/create/create_page'
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from './src/hook/connectionFirebase'
import { initializeAuth, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'


const Stack = createNativeStackNavigator();

function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
 // const navigation = useNavigation();
  
  async function loadApp() {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    await loadFonts(); // Carrega as fontes
    setFontLoaded(true);

  }

  useEffect(() => {
    loadApp();
  }, []);

  if (!fontLoaded) {
    return null; // Ou um componente de carregamento, se preferir
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"LoginPage"}>
        <Stack.Screen options={{ headerShown: false }} name="HomeTabs" component={HomeTabs} />  
        <Stack.Screen options={{ headerShown: false }} name="CreatePage" component={CreatePage} />
        <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 