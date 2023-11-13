import { View, Text } from "react-native"

interface ContainerSpaceAreaProps {
    availableArea: number
    usedArea: number
}

const ContainerSpaceArea = (
    {
        availableArea,
        usedArea
    }: ContainerSpaceAreaProps
) => {
    return <View style={{
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 15,
        paddingEnd: 20,
        paddingStart: 20,
        marginTop: 8,
        alignItems: 'flex-start'
    }}>
        <Text style={{ color: "red" }}>
            Área disponível {availableArea}
        </Text>
        <Text>
            Área usada {usedArea}
        </Text>
    </View>
}

export default ContainerSpaceArea