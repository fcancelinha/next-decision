import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import base from '../data/base'


const style = StyleSheet.create({
	container: {
		justifyContent: 'center',
		backgroundColor: '#000000',
		height: '100%'
	},
	display: {

	},
	decisionText: {
		textAlign: 'center',
		color: '#FFFFFF'
	},
})




const Main = () => {
	const [decision, setDecision] = useState('Hello!')

	const getDecision = () => {
		const index = Math.floor(Math.random() * base.length)
		setDecision(base[index])
	}

	return (
		<View style={style.container}>
			<Pressable onPress={getDecision}>
				<Text>{decision}</Text>
			</Pressable>
		</View>
	)
}

export default Main
