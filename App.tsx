import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTabs } from "./src/pages/home/home_page";
import { useFonts } from 'expo-font';
import { loadFonts } from './src/styles/fontConfig'; 


const Stack = createNativeStackNavigator();

function App() {

    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
      async function loadApp() {
        await loadFonts(); // Carrega as fontes
        setFontLoaded(true);
      }
  
      loadApp();
    }, []);

  if (!fontLoaded) {
    return null; // Ou um componente de carregamento, se preferir
  }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HomeTabs"}>
                <Stack.Screen options={{ headerShown: false }} name="HomeTabs" component={HomeTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App; 