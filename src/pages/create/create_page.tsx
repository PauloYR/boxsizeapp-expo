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
import Input from '../../component/input';
import { useNavigation } from '@react-navigation/native';

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

const LoginPage = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();

    const createUser = ()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => { 
             const user = userCredential.user;
             console.log(user);
        })
            .catch((error) => {
             console.log("n deu bom");
             const errorCode = error.code;
             const errorMessage = error.message;
        });
    }

    return (
        <SafeAreaView style={style.page}>
            <Container>
                <View style={style.card}>
                    <View style={style.textContainer}>
                        <View>
                            <SvgUri source={Group}></SvgUri>
                        </View>
                        <View>
                            <SvgUri source={DelTruck}></SvgUri>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            ...style.label,
                            marginTop: 46.35,
                        }}>Usuário:</Text>
                        <Input onChangeText={(text) => setEmail(text)} value={email} placeholder='Usuário' />
                        <Text style={style.label}>Senha:</Text>
                        <Input onChangeText={(text) => setPass(text)} value={pass} secureTextEntry={passwordVisibility} placeholder="*********" />
                        <TouchableOpacity 
                            onPress={createUser}
                            style={{
                                ...styleButton.buttomPrimary,
                                ...style.button
                            }}>
                            <Text style={styleButton.buttonTextPrimary}>
                                Cadastrar
                            </Text>
                        </TouchableOpacity>
                        <Text style={{
                            ...style.label,
                            marginTop: 12.57,
                        }}                         
                        onPress={() => {
                                navigation.navigate("LoginPage")
                            }}
                        >Já passui cadastro? Entrar em sua conta. </Text>
                    </View>
                </View>
            </Container>
        </SafeAreaView >
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
    inputPass: {
        width: '90%',
    },
    svgPass: {
        color: "#D3E9F7"
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
    inputUser: {
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
    textB: {
        textAlign: 'center',
        display: 'flex',
        color: '#fff',
        fontSize: 14,
        lineHeight: 40,
        justifyContent: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    label: {
        marginBottom: 8,
        color: '#4E4E4E',
        fontSize: 12,
        fontStyle: 'normal'
    },
    card: {
        width: "100%",
        borderRadius: 24,
        backgroundColor: "#D3E9F7",
        padding: 24
    },
    button: {
        marginTop: 10,
        backgroundColor: "#3696FF",
    }
})
export default LoginPage;
