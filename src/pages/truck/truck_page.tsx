import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";

import Container from "../../component/container";
import SvgUri from "react-native-svg-uri";
import Box from "../../assets/truck-transport.svg";
import Input from "../../component/input";
import styleButton from "../../styles/button";
import { useFonts } from "expo-font";

const TruckPage = () => {

	return (
		<View
			style={{
				backgroundColor: "#D3E9F7",
			}}
		>
			<StatusBar barStyle={"light-content"} backgroundColor="#3696FF" />

			<View
				style={{
					backgroundColor: "#3696FF",
					height: "25%",
					borderBottomLeftRadius: 24,
					borderBottomRightRadius: 24,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					gap: 20,
				}}
			>
				<SvgUri source={Box} />
				<View>
					<Text
						style={{
							fontSize: 32,
							fontFamily: "RobotoSerif-Bold",
							color: "#fff",
						}}
					>
						Cadastro
					</Text>
					<Text
						style={{
							fontSize: 24,
							fontFamily: "RobotoSerif-SemiBoldItalic",
							color: "#fff",
						}}
					>
						de transportes
					</Text>
				</View>
			</View>
			<Container>
				<View
					style={{
						position: "absolute",
						width: "80%",
						top: -18,
						gap: 8,
					}}
				>
					<Input placeholder="Altura" />
					<Input placeholder="Largura" />
					<Input placeholder="Profundidade" />
					<Input placeholder="Tipo" />
					<TouchableOpacity style={styleButton.buttomPrimary}>
						<Text style={styleButton.buttonTextPrimary}>Cadastrar</Text>
					</TouchableOpacity>
				</View>
			</Container>
		</View>
	);
};

export default TruckPage;
