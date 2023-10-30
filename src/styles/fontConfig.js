import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'RobotoSerif-SemiBold': require('../assets/fonts/static/RobotoSerif-SemiBold.ttf'),
    'RobotoSerif-Regular': require('../assets/fonts/static/RobotoSerif-Regular.ttf'),
  });
};