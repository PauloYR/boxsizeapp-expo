import { View } from "react-native"

interface PorcentProps {
    value: number
}

const Porcent: React.FC<PorcentProps> = ({ value }) => {
    return (
        <View style={{ backgroundColor: "#fff", height: 20, borderRadius: 20, }}>
            <View style={{ backgroundColor: "#3696FF", height: 20, borderRadius: 20, width: `${value}%` }}></View>
        </View>
    )
}

export default Porcent