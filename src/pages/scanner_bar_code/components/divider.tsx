import { View, Text } from "react-native"

interface DividerProps {
    message?: string
}


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

export default Divider