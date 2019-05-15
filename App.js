/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);

    this.state = { escolhaUsuario : '',escolhaComputador : '', resultado: '' }
  }

  jokenpo(escolhaUsuario){

//gerar numero aleatorio ( 0,1,2)
var numAleatorio = Math.floor(Math.random() * 3);

var escolhaComputador = '';

switch(numAleatorio){
  case 0: escolhaComputador = 'pedra';break;
  case 1: escolhaComputador = 'papel';break;
  case 2: escolhaComputador = 'tesoura';break;
}

var resultado = '';

if(escolhaComputador == 'pedra'){
  if(escolhaUsuario == 'pedra'){
    resultado = 'empate'
  }

  if(escolhaUsuario == 'papel'){
    resultado = 'Usuario ganhou';
  }

  if(escolhaUsuario == 'tesoura'){
    resultado = 'computador ganhou';
  }
}

if(escolhaComputador == 'papel'){
  if(escolhaUsuario == 'papel'){
    resultado = 'empate'
  }

  if(escolhaUsuario == 'tesoura'){
    resultado = 'Usuario ganhou';
  }

  if(escolhaUsuario == 'pedra'){
    resultado = 'computador ganhou';
  }
}

if(escolhaComputador == 'tesoura'){
  if(escolhaUsuario == 'tesoura'){
    resultado = 'empate'
  }

  if(escolhaUsuario == 'pedra'){
    resultado = 'Usuario ganhou';
  }

  if(escolhaUsuario == 'papel'){
    resultado = 'computador ganhou';
  }
}

   this.setState({ escolhaUsuario : escolhaUsuario,
                    escolhaComputador : escolhaComputador, resultado : resultado});

  }
  render(){
    return(
      <View style={{marginTop: 50}}>

     <Topo></Topo>


      <View style={styles.painelAcoes}>
         <View style={styles.btnEscolha}>
           <Button title ="Pedra" onPress={() =>  { this.jokenpo('pedra')}}></Button> 
         </View>

         <View style={styles.btnEscolha}>
          <Button title="Papel" onPress={() => { this.jokenpo('papel')}}></Button>
         </View>

         <View style={styles.btnEscolha}>
          <Button title="Tesoura" onPress={() => { this.jokenpo('tesoura')}}></Button>
        </View>

      </View>

      <View style={styles.palco}>
        <Text style={styles.txtResultado}>{this.state.resultado} </Text>

        <Icone escolha={this.state.escolhaComputador} jogador= 'Computador'></Icone>
        <Icone escolha={this.state.escolhaUsuario} jogador= 'Usuário'></Icone>

      </View>

      </View>
    );
  }
}

class Topo extends Component{
  render(){
    return(
      <View>
      <Image source={require('./imgs/jokenpo.png')}></Image>
    </View>
    );
  }
}


class Icone extends Component {
  render(){
    if(this.props.escolha == 'pedra'){
      return(
        <View>
        <Text>{this.props.jogador}</Text>
        <Image source={require('./imgs/pedra.png')}/>
       </View>
      );

    } else if(this.props.escolha == 'papel'){

      return(
        <View>
        <Text>{this.props.jogador}</Text>
        <Image source={require('./imgs/papel.png')}/>
       </View>
      );



    } else if(this.props.escolha == 'tesoura'){


      return(
        <View>
        <Text>{this.props.jogador}</Text>
        <Image source={require('./imgs/tesoura.png')}/>
       </View>
      );


    } else {
      return false;
    }
  }
}


  

const styles = StyleSheet.create({
 btnEscolha: {
   width : 90
 },

 painelAcoes: {
   flexDirection: 'row',
   justifyContent: 'space-between'
 },
 palco: {
   alignItems: 'center',
   marginTop: 10
 },
 txtResultado: {
   fontSize: 25,
   fontWeight: 'bold',
   color: 'red',
   height: 60
 }
});
