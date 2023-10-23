import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    useColorScheme,
    TouchableOpacity
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import Input from '../../component/input';
import Container from '../../component/container';
import styleText from '../../styles/text'
import styleButton from '../../styles/button'

const BoxPage = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            <Container>
                <Text style={styleText.title}>Cadastro de Caixa</Text>
                <Input placeholder='Altura' />
                <Input placeholder='Largura' />
                <Input placeholder='Profundidade' />
                <Input placeholder='BarCode' />
                <Input placeholder='Nome' />
                <TouchableOpacity
                    style={styleButton.buttomPrimary}>
                    <Text style={styleButton.buttonTextPrimary}>Cadastrar</Text>
                </TouchableOpacity>

            </Container>
        </SafeAreaView>
    );
}

export default BoxPage;
