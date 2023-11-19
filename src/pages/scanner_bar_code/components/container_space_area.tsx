import { View, Text } from "react-native"

interface ContainerSpaceAreaProps {
    availableArea?: number
}

function maskMeasurement(data: number): string {
    if (data < 1) {
        const inCm = data * 100;
        return `${Math.floor(inCm)} cm`;
    } else {
        const inMm = data * 1000;
        const wholePart = Math.floor(inMm);
        const decimalPart = Math.floor(inMm - wholePart);

        if (decimalPart > 0) {
            return `${wholePart} mm ${decimalPart} cm`;
        } else {
            return `${wholePart} mm`;
        }
    }
}


const ContainerSpaceArea = (
    {
        availableArea,
    }: ContainerSpaceAreaProps
) => {
    if (!availableArea) {
        return <></>
    }
    
    var valueOk = availableArea
    if (valueOk < 0) {
        valueOk = availableArea * -1
    }
    const value = maskMeasurement(valueOk)
    const isMoreValue = (availableArea ?? 0) < 0

    return <View style={{
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 15,
        paddingEnd: 20,
        paddingStart: 20,
        marginTop: 8,
        alignItems: 'flex-start'
    }}>
        <Text style={{ color: isMoreValue ? "red" : undefined }}>
            {isMoreValue ?
                `Ultrapassou a area disponivel ${value}` :
                `Área disponível ${value}`}
        </Text>
    </View>
}

export default ContainerSpaceArea