import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BarCodePage from '../barcode/barcode_page'
import TruckPage from '../truck/truck_page'
import BoxPage from '../box/box_page'
import HomeIcon from '../../assets/home.svg'
import TruckIcon from '../../assets/truck.svg'
import BoxAdd from '../../assets/box-add.svg'
import SvgUri from 'react-native-svg-uri'
import { StyleSheet, Text } from 'react-native'
import { useFonts } from 'expo-font'

const Tab = createBottomTabNavigator()
const iconSelectedColor = '#40CFFC'
const iconUnSelectColor = '#3696FF'

export const HomeTabs = () => {





    const tabBarLabel = ({ focused, color, position, children }: any) => (
        null
    )

    return (
        <Tab.Navigator initialRouteName={"barcode"} screenOptions={({ route }) => ({
            tabBarStyle: {
                ...style.tabMenuBottom,
                ...style.shadow
            }
        })} >
            <Tab.Screen
                name="Barcode"
                component={BarCodePage}
                options={{
                    headerShown: false,
                    tabBarLabel: tabBarLabel,
                    tabBarIcon: ({ focused }) =>
                        <SvgUri
                            fill={focused ? iconSelectedColor : iconUnSelectColor}
                            source={HomeIcon}
                        />
                }}
            />
            <Tab.Screen
                name="truck"
                component={TruckPage}
                options={{
                    headerShown: false,
                    tabBarLabel: tabBarLabel,
                    tabBarIcon: ({ focused }) =>
                        <SvgUri
                            fill={focused ? iconSelectedColor : iconUnSelectColor}
                            source={TruckIcon}
                        />
                }} />
            <Tab.Screen
                name="box"
                component={BoxPage}
                options={{
                    headerShown: false,
                    tabBarLabel: tabBarLabel,
                    tabBarIcon: ({ focused }) =>
                        <SvgUri
                            fill={focused ? iconSelectedColor : iconUnSelectColor}
                            source={BoxAdd}
                        />
                }}
            />
        </Tab.Navigator>
    );
}


const style = StyleSheet.create({
    tabMenuBottom: {
        backgroundColor: '#fff',
        height: 70,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 100,
    },
    shadow: {
        shadowColor: '#000000CA',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})