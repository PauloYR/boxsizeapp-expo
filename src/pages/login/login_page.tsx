import React, { useState } from 'react';
import {
    SafeAreaView,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Pressable,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../../hook/useTogglePasswordVisibility';
import Group from '../../assets/group.svg'
import DelTruck from '../../assets/del-truck.svg'
import SvgUri from 'react-native-svg-uri'
import Container from '../../component/container';
import styleButton from '../../styles/button'

const LoginPage = () => {
    
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={style.page}>
            <Container >
                <View style={style.card}>   
                    <View style={style.textContainer}>
                        <View style={style.logo1}><SvgUri source={Group}></SvgUri></View>
                        <View style={style.logo2}><SvgUri source={DelTruck}></SvgUri></View>                    
                        </View>
                <View>
                <Text style={style.user}>Usuário:</Text>  
                <TextInput style={style.inputUser} placeholder='Usuário'/>                
                <Text style={style.pass}>Senha:</Text>
            <View style={style.inputContainer}>
                <TextInput style={style.inputPass} secureTextEntry={passwordVisibility} placeholder="*********"/>
                <Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons style={style.svgPass} name={rightIcon} size={20} />
                </Pressable>
            </View>
                <TouchableOpacity
                    style={style.button}>
                    <Text style={style.textB}>Login</Text>
                </TouchableOpacity>
                </View>
                </View>
            </Container>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EEDC',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12
      },
      inputPass:{
        width: '80%',
      },
      svgPass:{
        width: '20%'
      },
      inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#40CFFC',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginRight: 28,
        marginLeft: 28,
        marginTop: 11.16,
      },
      inputUser:{
        borderBottomWidth: 2,
        borderBottomColor: '#40CFFC',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginRight: 28,
        marginLeft: 28,
        marginTop: 11.16,
    },
    page: {
        backgroundColor: "#3696FF"
    },
    textB:{
        textAlign: 'center',
        display: 'flex',
        color: '#fff',
        fontSize: 14,
        lineHeight: 40,
        justifyContent: 'center',
    },
    textContainer: {
        flexDirection: 'row',
      },
    logo1:{
        marginRight:20,
        marginLeft: 73,
        marginTop: 65
    },
    logo2:{
        marginLeft: 20,
        marginRight: 63,
        marginTop: 35
    },
    user:{
        marginTop: 46.35,
        marginEnd: 11.16,
        marginLeft: 28,
        marginRight: 95.63,
        color: '#4E4E4E',
        fontSize: 12,
        fontStyle: 'normal'
    },
    pass:{
        marginTop: 15.04,
        marginEnd: 12.57,
        marginLeft: 28,
        marginRight: 95.63,
        color: '#4E4E4E',
        fontSize: 12,
        fontStyle: 'normal'
    },
    card: {
        width: 326,
        height: 431,
        flexShrink: 0,
        borderRadius:24,
        backgroundColor: "#D3E9F7"
    },
    button: {
        width: 270,
        height: 47,
        radius: 10,
        borderRadius: 10,
        backgroundColor: "#3696FF",
        marginTop: 30,
        marginEnd: 48,
        marginLeft: 28,
        marginRight: 28,
    }
})
export default LoginPage;
