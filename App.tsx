import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTabs } from "./src/pages/home/home_page";
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HomeTabs"}>
                <Stack.Screen options={{ headerShown: false }} name="HomeTabs" component={HomeTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App; 