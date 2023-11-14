import React from 'react';
import {
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Container from '../../component/container';
import SvgUri from 'react-native-svg-uri';
import Box from '../../assets/box.svg'
import Input from '../../component/input';
import styleButton from '../../styles/button'
import { useFonts } from 'expo-font';
import styleToobar from '../../common/style/toolbar';

const BarCodePage = () => {


    return (
        <>
            <View style={{
                backgroundColor: '#D3E9F7',

            }}>
                <StatusBar
                    barStyle={'light-content'}
                    backgroundColor='#3696FF'
                />
                <View style={styleToobar.toolbar}>
                    <SvgUri
                        source={Box}
                    />
                    <View>
                        <Text style={{
                            fontSize: 32,
                            fontFamily: 'RobotoSerif-Bold',
                            color: '#fff',
                        }} >Cadastro</Text>
                        <Text style={{
                            fontSize: 24,
                            fontFamily: 'RobotoSerif-SemiBoldItalic',
                            color: '#fff',
                        }}>de caixas</Text>
                    </View>
                </View>
                <Container>
                    <View style={{
                        position: 'absolute',
                        width: "80%",
                        top: -18,
                        gap: 8,
                    }}>
                        <Input placeholder='Nome' />
                        <Input placeholder='Altura' />
                        <Input placeholder='Largura' />
                        <Input placeholder='Profundidade' />
                        <TouchableOpacity
                            style={styleButton.buttomPrimary}>
                            <Text style={styleButton.buttonTextPrimary}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </Container>
            </View >
        </>

    );
}

export default BarCodePage;
