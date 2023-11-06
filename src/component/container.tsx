import { ReactComponentElement, ReactNode } from "react"
import { StyleSheet, View } from "react-native"


interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
    container: {
        display: "flex",
        paddingEnd: 20,
        paddingStart: 20,
        height: '100%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Container