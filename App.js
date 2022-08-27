import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [valor1, setValor1] = useState(10);
	const [valor2, setValor2] = useState(2);
	const [resultado, setResultado] = useState();
	function somar(){
		let r = parseFloat(valor1) + parseFloat(valor2);
		setResultado(r);
	}
	function subtrair (){
		let r = parseFloat(valor1) - parseFloat(valor2);
		setResultado(r);
	}
	function multiplicar(){
		let r = parseFloat(valor1) * parseFloat(valor2);
		setResultado(r);
	}
	function dividir(){
		let r = parseFloat(valor1) / parseFloat(valor2);
		setResultado(r);
	}
	function exponencial(){
		let r = parseFloat(valor1) ** parseFloat(valor2);
		setResultado(r);
	}

  return (
    <View style={styles.container}>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>Calculadora Simples</Text>
		  </View>
		  <View style={styles.bloco}>
		  	<Text>Valor 1: </Text>
			  <TextInput 
				style = {styles.input}
				value={valor1}
				  onChangeText={(valor)=>setValor1(valor)}
				  keyboardType="numeric"
				/>
		  </View>
		  <View style={styles.bloco}>
		  	<Text>Valor 2: </Text>
			  <TextInput 
				style = {styles.input}
				value={valor2}
				  onChangeText={(valor)=>setValor2(valor)}
				  keyboardType="numeric"
				/>
		  </View>
		  <View style={styles.blocobtn}>
		  	<TouchableOpacity style = {styles.botao}
				onPress={somar}
				>
			 	<Text style = {styles.textoBotao}>+</Text> 
			</TouchableOpacity>
			  
			<TouchableOpacity style = {styles.botao}
				onPress={subtrair}
				>
			 	<Text style = {styles.textoBotao}>-</Text> 
			</TouchableOpacity>
			  
			 <TouchableOpacity style = {styles.botao}
				onPress={multiplicar}
				>
			 	<Text style = {styles.textoBotao}>x</Text> 
			</TouchableOpacity>
			  
			  <TouchableOpacity style = {styles.botao}
				onPress={dividir}
				>
			 	<Text style = {styles.textoBotao}>÷</Text> 
			</TouchableOpacity>
			  
			  <TouchableOpacity style = {styles.botao}
				onPress={exponencial}
				>
			 	<Text style = {styles.textoBotao}>^</Text> 
			</TouchableOpacity>
		  </View>
		  <View style={styles.bloco}>
			  <Text>Resultado: {resultado}</Text>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	bloco:{
		marginTop: 20,
		width:'80%',
		marginLeft:'10%'
	},
	blocobtn:{
		marginTop: 20,
		width:'80%',
		marginLeft:'10%',
		display: 'flex',
		flexDirection: 'row'
	},
	titulo:{
		fontSize:30,
		textAlign:'center'
	},
	input:{
		borderWidth:2,
		fontSize: 20
	},
	botao:{
		backgroundColor:'#000',
		padding: 5,
		borderRadius: 10,
		marginTop: 2,
		width: 30,
		marginLeft: 28
	},
	textoBotao:{
		color:'#FFF',
		textAlign:'center',
		fontSize:15
	},
});
