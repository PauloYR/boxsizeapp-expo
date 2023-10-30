import { ReactComponentElement, ReactNode } from "react"
import { StyleSheet, View } from "react-native"


interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return <View style={style.card}>{children}
    </View>;
};

const style = StyleSheet.create({
    card: {
        display: "flex",
        alignContent: "center",
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Card