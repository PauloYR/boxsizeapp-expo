import React from 'react';
import {
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Container from '../../component/container';
import SvgUri from 'react-native-svg-uri';
import BarCode from '../../assets/barcode.svg'
import Input from '../../component/input';
import styleButton from '../../styles/button'

interface DividerProps {
    message?: string
}

interface PorcentProps {
    value: number
}

const ScannerBarCodePage = () => {

    const Divider: React.FC<DividerProps> = ({ message }) => {
        return (
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10
            }} >
                <View style={{ height: 1, backgroundColor: "#3696FF", flex: 100 }} />
                <Text style={{ color: "#3696FF", fontFamily: 'RobotoSerif-Bold' }}>{message}</Text>
                <View style={{ flex: 100, height: 1, backgroundColor: "#3696FF" }} />
            </View>
        )
    }

    const Porcent: React.FC<PorcentProps> = ({ value }) => {
        return (
            <View style={{ backgroundColor: "#fff", height: 20, borderRadius: 20, }}>
                <View style={{ backgroundColor: "#3696FF", height: 20, borderRadius: 20, width: `${value}%` }}></View>
            </View>
        )
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
                <View style={{
                    backgroundColor: '#3696FF',
                    height: '25%',
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 20
                }}>
                    <SvgUri
                        source={BarCode}
                    />
                    <View>
                        <Text style={{
                            fontSize: 32,
                            fontFamily: 'RobotoSerif-Bold',
                            color: '#fff',
                        }} >Leitura</Text>
                        <Text style={{
                            fontSize: 24,
                            fontFamily: 'RobotoSerif-SemiBoldItalic',
                            color: '#fff',
                        }}>De código barra</Text>
                    </View>
                </View>
                <Container>
                    <View style={{
                        position: 'absolute',
                        width: "80%",
                        top: -18,
                        gap: 8,
                        display: 'flex',

                    }}>
                        <Input placeholder='Caminhão' />
                        <Input placeholder='Caixa XPTO' />
                        <Divider message='OU' />
                        <TouchableOpacity
                            style={styleButton.buttomPrimary}>
                            <Text style={styleButton.buttonTextPrimary}>Ler Barcode</Text>
                        </TouchableOpacity>
                        <Text style={{
                            flex: 100,
                            textAlign: "center",
                            color: "#3696FF",
                            fontFamily: 'RobotoSerif-Bold',
                        }}>
                            Porcentagem de carregamento
                        </Text>
                        <Porcent value={90} />
                        <View style={{ borderRadius: 20, backgroundColor: "#fff" }}>

                        </View>
                    </View>
                </Container>
            </View >
        </>

    );


}


export default ScannerBarCodePage;
