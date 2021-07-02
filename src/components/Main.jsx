import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import base from '../data/base'


const style = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	display: {
		justifyContent: 'center',
		// backgroundColor: '#000000',
		height: '100%',
		width: '100%'
	},
	decisionText: {
		color: '#000000',
		textAlign: 'center',
		fontSize: 35,
		marginLeft: 30,
		marginRight: 30,
		fontFamily: 'monospace'
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: '100%',
	  },
})


const Main = () => {
	const [decision, setDecision] = useState('Hello !\n Press me for your next life altering decision!')
	const fadeAnim = useRef(new Animated.Value(0)).current

	const getDecision = () => {
		const index = Math.floor(Math.random() * base.length)
		setDecision(base[index])
	}

	return (
		<View style={style.container}>
			<LinearGradient
				// Background Linear Gradient
				colors={['#0f2027','#203a43','#2c5364']}
				style={style.background}
			/>
			<Pressable onPress={getDecision} style={style.display}>
				<Text style={style.decisionText}>
					{decision}
				</Text>
			</Pressable>
		</View>
	)
}

export default Main
