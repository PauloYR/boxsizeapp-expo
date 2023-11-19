import { View, Text, TouchableOpacity } from "react-native"
import Input from "../../../component/input"
import SvgUri from "react-native-svg-uri"
import Trash from '../../../assets/trash.svg'

interface ItemBoxProps {
    boxName: string
    qty: number
    remove: () => void
}

const ItemBox = (
    {
        boxName,
        qty,
        remove
    }: ItemBoxProps
) => {
    return <View style={{
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingEnd: 20,
        paddingStart: 20,
    }}>
        <Text>
            {boxName}
        </Text>

        <Input placeholder='QTD(1)' value={qty.toString()} />

        <View style={{
            borderRadius: 10,
            backgroundColor: "#3696FF",
            padding: 8,
        }}>
            <TouchableOpacity
                onPress={remove}>
                <SvgUri
                    width={16}
                    height={16}
                    source={Trash}
                />
            </TouchableOpacity>
        </View>
    </View>
}

export default ItemBox