import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTabs } from "./src/pages/home/home_page";
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

function App() {

    const [fontsLoaded, fontsError] = useFonts({
        'RobotoSerif-Bold': require('./src/assets/fonts/static/RobotoSerif-Bold.ttf'),
        'RobotoSerif-SemiBoldItalic': require('./src/assets/fonts/static/RobotoSerif-SemiBoldItalic.ttf'),
    });

    if (!fontsLoaded) return null
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HomeTabs"}>
                <Stack.Screen options={{ headerShown: false }} name="HomeTabs" component={HomeTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App; 