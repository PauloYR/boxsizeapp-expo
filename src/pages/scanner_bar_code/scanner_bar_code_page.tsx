import React, { useEffect, useState } from 'react';
import {
    ScrollView,
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
import ItemBox from './components/item_box';
import ContainerSpaceArea from './components/container_space_area';
import styleToobar from '../../common/style/toolbar';
import { Dropdown } from 'react-native-element-dropdown';
import Divider from './components/divider';
import Porcent from './components/porcent';
import { onValue, getDatabase, ref, onDisconnect, push, remove, update } from 'firebase/database';
import { err } from 'react-native-svg/lib/typescript/xml';
import { BoxData, TruckData, BoxQtyInTruckData } from '../../common/firebase_data';

interface ItemBox {
    boxName: string
    qtd: number
}

interface DropdownStateProps {
    label: string,
    value: string
}

const ScannerBarCodePage = () => {

    const [dataDropdownTruck, setDataDropdownTruck] = useState<TruckData[]>([])
    const [dataDropdownBox, setDataDropdownBox] = useState<BoxData[]>([])
    const [dataDropdownBoxShow, setDataDropdownBoxShow] = useState<BoxData[]>([])


    useEffect(() => {
        const refTruck = ref(getDatabase(), "truck");

        onValue(refTruck, (snapshot) => {
            const newData = snapshot.val();
            const arrayTruck: TruckData[] = []
            try {
                for (let key in newData) {
                    const value: string = key;
                    const obj = newData[key];

                    arrayTruck.push({
                        ...obj,
                        id: value,
                    })
                }
            }
            catch (error) {
                console.error(error)
            } finally {
                setDataDropdownTruck(arrayTruck)
            }
        });

        const refBox = ref(getDatabase(), "box");

        onValue(refBox, (snapshot) => {
            const newData = snapshot.val();
            const arrayTruck: BoxData[] = []
            try {
                for (let key in newData) {
                    const value: string = key;
                    const obj = newData[key];
                    arrayTruck.push({
                        ...obj,
                        id: value,
                    })
                }
            }
            catch (error) {
                console.error(error)
            } finally {
                setDataDropdownBox(arrayTruck)
            }
        });

        return () => {
            onDisconnect(refTruck);
            onDisconnect(refBox);
        }
    }, [])
    const [valueDropdownTruck, setValueDropdownTruck] = useState<TruckData>();

    useEffect(() => {
        getBoxNotUseds()
        getBoxUseds()
    }, [valueDropdownTruck, dataDropdownBox, dataDropdownTruck])

    const getBoxNotUseds = () => {
        if (!valueDropdownTruck) {
            return
        }

        const truck = dataDropdownTruck.filter((truck) => truck.id === valueDropdownTruck?.id)[0];

        if (truck?.boxs == null || typeof truck?.boxs === 'undefined') {
            setDataDropdownBoxShow(dataDropdownBox)
            return
        }
        let boxNotUseds = dataDropdownBox.filter(function (box) {
            for (let key in truck?.boxs) {
                const boxId: string = truck.boxs[key].id
                if (boxId === box.id) {
                    return false
                }
            }
            return true
        });
        setDataDropdownBoxShow(boxNotUseds)
    }

    const getBoxUseds = () => {
        if (!valueDropdownTruck) {
            return
        }

        const truck = dataDropdownTruck.filter((truck) => truck.id === valueDropdownTruck?.id)[0];
        if (truck?.boxs == null || typeof truck?.boxs === 'undefined') {
            setBoxUseds([])
            return
        }

        let boxUseds = dataDropdownBox.flatMap(function (box) {
            for (let key in truck?.boxs) {
                const boxInTruck = truck.boxs[key]
                var boxQtyInTruckData: BoxQtyInTruckData = {
                    key,
                    id: boxInTruck.id,
                    qty: boxInTruck.qty
                }
                if (boxInTruck.id === box.id) {
                    boxQtyInTruckData.name = box.name
                    return boxQtyInTruckData
                }
            }
            return []
        });

        setBoxUseds(boxUseds)
    }

    const onRemoveItem = async (index: number) => {
        if (!boxUseds) {
            return
        }
        const box = boxUseds[index]

        const refItem = ref(getDatabase(), `truck/${valueDropdownTruck?.id}/boxs/${box.key}`)

        await remove(refItem)
    }

    const [boxUseds, setBoxUseds] = useState<BoxQtyInTruckData[]>()

    const [availableArea, setAvailableArea] = useState(20)
    const [usedArea, setUsedArea] = useState(20)


    const [valueDropdownBox, setValueDropdownBox] = useState<BoxData>();

    const addBoxHandler = async () => {
        if (valueDropdownTruck?.name === "" || valueDropdownBox?.name === "") {
            console.log("Preencha os dados")
            return
        }
        const refTruckCurrent = ref(getDatabase(), `truck/${valueDropdownTruck?.id}/boxs`);

        await push(
            refTruckCurrent, {
            id: valueDropdownBox?.id
        });

        setValueDropdownBox(undefined)
    }



    const onChangeQtyBox = async (index: number, qty: number) => {
        const box = boxUseds?.at(index)
        const refBoxsByTruck = ref(getDatabase(), `truck/${valueDropdownTruck?.id}/boxs/${box?.key}`);
        try {
            await update(refBoxsByTruck, {
                ...box,
                qty
            })
        } catch (e) {
            console.error(e)
        }
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
                        top: "-20%",
                        gap: 8,
                        display: 'flex',
                        height: '66%'
                    }}>
                        <ScrollView >
                            <View style={{ height: 190 }} />
                            <View style={{ display: 'flex', gap: 10, }}>
                                <Dropdown
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: 10,
                                        paddingHorizontal: 10,
                                        paddingVertical: 8,
                                        borderBottomWidth: 2,
                                        borderBottomColor: '#40CFFC',
                                    }}
                                    placeholderStyle={{
                                        color: "#645757"
                                    }}
                                    containerStyle={{
                                        backgroundColor: "#fff"
                                    }}
                                    itemTextStyle={{
                                        color: "#645757"
                                    }}
                                    selectedTextStyle={{
                                        color: "#3696FF"
                                    }}
                                    data={dataDropdownTruck}
                                    value={valueDropdownTruck}
                                    maxHeight={300}
                                    labelField="name"
                                    valueField="id"
                                    placeholder='Selecione o caminhão'
                                    onChange={(value) => {
                                        setValueDropdownTruck(value)
                                    }}
                                />

                                <Dropdown
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: 10,
                                        paddingHorizontal: 10,
                                        paddingVertical: 8,
                                        borderBottomWidth: 2,
                                        borderBottomColor: '#40CFFC',
                                    }}
                                    placeholderStyle={{
                                        color: "#645757"
                                    }}
                                    containerStyle={{
                                        backgroundColor: "#fff"
                                    }}
                                    itemTextStyle={{
                                        color: "#645757"
                                    }}
                                    selectedTextStyle={{
                                        color: "#3696FF"
                                    }}
                                    data={dataDropdownBoxShow}
                                    value={valueDropdownBox}
                                    disable={dataDropdownBoxShow.length === 0}
                                    maxHeight={300}
                                    labelField="name"
                                    valueField="id"
                                    placeholder={dataDropdownBoxShow.length !== 0 ? 'Selecione a caixa' : 'Todas as caixas foram adicionadas'}
                                    onChange={(value) => {
                                        setValueDropdownBox(value)
                                    }}
                                />
                                <TouchableOpacity
                                    style={styleButton.buttomPrimary} onPress={addBoxHandler}>
                                    <Text
                                        style={styleButton.buttonTextPrimary}>
                                        Adicionar Caixa
                                    </Text>
                                </TouchableOpacity>
                                <Divider
                                    message='OU' />
                                <TouchableOpacity
                                    style={styleButton.buttomPrimary}>
                                    <Text
                                        style={styleButton.buttonTextPrimary}>
                                        Ler Barcode
                                    </Text>
                                </TouchableOpacity>
                                <Text style={{
                                    flex: 100,
                                    textAlign: "center",
                                    color: "#3696FF",
                                    fontFamily: 'RobotoSerif-Bold',
                                }}>
                                    Porcentagem de carregamento
                                </Text>
                                <Porcent
                                    value={90} />
                                <ContainerSpaceArea
                                    availableArea={availableArea}
                                    usedArea={usedArea} />
                                {
                                    boxUseds?.map((value, index) => {
                                        return <ItemBox
                                            key={value.key}
                                            remove={() => {
                                                onRemoveItem(index)
                                            }}
                                            boxName={value.name ?? ""}
                                            qty={value?.qty ?? 0}
                                            onChangeQty={(newQty) => {
                                                onChangeQtyBox(index, newQty)
                                            }} />
                                    })
                                }
                            </View>
                            <View style={{ height: 40 }} />
                        </ScrollView>
                    </View>
                </Container>
            </View >
        </>

    );
}


export default ScannerBarCodePage;
