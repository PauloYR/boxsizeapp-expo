import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'RobotoSerif-SemiBold': require('../assets/fonts/static/RobotoSerif-SemiBold.ttf'),
    'RobotoSerif-Bold': require('../assets/fonts/static/RobotoSerif-Bold.ttf'),
    'RobotoSerif-SemiBoldItalic': require('../assets/fonts/static/RobotoSerif-SemiBoldItalic.ttf'),
    'RobotoSerif-Regular': require('../assets/fonts/static/RobotoSerif-Regular.ttf'),
  });
};