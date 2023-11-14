import { StatusBar, View, Text } from "react-native"
import styleToobar from "../../common/style/toolbar"
import SvgUri from "react-native-svg-uri"
import HomeIcon from "../../assets/icon_home_page.svg"
import Container from "../../component/container"
import Input from "../../component/input"
import PieChart from 'react-native-pie-chart';


const GraphicsPage = () => {
    return (
        <View style={{
            backgroundColor: '#D3E9F7',
        }}>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor='#3696FF'
            />
            <View style={styleToobar.toolbar}>
                <SvgUri
                    source={HomeIcon}
                />
                <View>

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
                    <View style={{ height: 190 }} />
                    <Input
                        placeholder='Caminhão' />
                    <PieChart
                        widthAndHeight={300}
                        series={[20, 80]}
                        sliceColor={[
                            '#40CFFC',
                            '#3696FF'
                        ]} />
                </View>
            </Container>
        </View>
    )
}

export default GraphicsPage