import { View, Text } from "react-native"

interface PorcentProps {
    value?: number
}

const Porcent: React.FC<PorcentProps> = ({ value }) => {

    if (!value) {
        return <></>
    }

    var valueOk = value ?? 0

    if (valueOk > 100) {
        valueOk = 100
    }

    return (
        <>
            <Text style={{
                flex: 100,
                textAlign: "center",
                color: "#3696FF",
                fontFamily: 'RobotoSerif-Bold',
            }}>
                Porcentagem de carregamento
            </Text>
            <View style={{ backgroundColor: "#fff", height: 20, borderRadius: 20, }}>
                <View style={{ backgroundColor: (value ?? 0) > 100 ? "red" : "#3696FF", height: 20, borderRadius: 20, width: `${valueOk}%` }}></View>
            </View>
        </>
    )
}

export default Porcent