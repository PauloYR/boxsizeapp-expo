import React, { useState } from 'react';
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
import { getDatabase, push, ref } from 'firebase/database';

const BarCodePage = () => {
    const listaRef = ref(getDatabase(), "box");

    const [heigth, setHeigth] = useState("")
    const [width, setWidth] = useState("")
    const [depth, setDepth] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = () => {
        push(listaRef, {
            heigth: parseInt(heigth),
            width: parseInt(width),
            depth: parseInt(depth),
            name
        });
    }

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
                        <Input placeholder='Nome' setValue={setName} value={name} />
                        <Input placeholder="Altura" setValue={setHeigth} value={heigth} />
                        <Input placeholder="Largura" setValue={setWidth} value={width} />
                        <Input placeholder="Profundidade" setValue={setDepth} value={depth} />
                        <TouchableOpacity
                            style={styleButton.buttomPrimary}
                            onPress={handleSubmit}>
                            <Text style={styleButton.buttonTextPrimary}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </Container>
            </View >
        </>

    );
}

export default BarCodePage;
