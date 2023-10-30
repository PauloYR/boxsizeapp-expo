import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTabs } from "./src/pages/home/home_page";
import { useFonts } from 'expo-font';
import { loadFonts } from './src/styles/fontConfig';
import LoginPage from './src/pages/login/login_page';


const Stack = createNativeStackNavigator();

function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadApp() {
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
        <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 