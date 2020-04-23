
import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qtdeCaracter: 0, contador: 10, botaoHabilitado: true, inputHabilitado: false, conteudoTextInput: '' };
  }
  //funções 
  pararTempo() {
    clearInterval(this.intervalo)
    this.setState(() => ({ contador: 10, inputHabilitado: false, botaoHabilitado: true }))
    this.limparCampo()
    Alert.alert(`quantidade digitado: ${this.state.qtdeCaracter}`)
  }
  limparCampo() {
    this.setState(() => ({ conteudoTextInput: '' }))
  }
  startarTempo() {
    this.setState(() => ({ inputHabilitado: true, botaoHabilitado: false }));
    this.intervalo = setInterval(() => {
      this.decrementarCronometro();
    }, 1000)
  }
  decrementarCronometro() {
    this.setState(state => ({ contador: state.contador - 1 }));
  }
  contarCaracter(text) {
    this.setState(() => ({ qtdeCaracter: text.length, conteudoTextInput: text }))

  }
  //ciclo de vida 
  componentDidUpdate() {
    if (this.state.contador <= 0) {
      this.pararTempo();
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{
          fontFamily: 'Roboto',
          color: 'paperLightBlue',
          fontSize: 20,
          fontWeight: 'bold',
          padding:20,
        }}>@#$%!*>>?#@%$&</Text>
        <Text style={{ fontFamily: 'Roboto', fontSize: 14 , padding: 20}}> Digite um maior numero de caracter possível em .... </Text>
        <Text style={{
          fontFamily: 'Roboto',
          fontSize: 20,
          fontWeight: 'bold'
        }}> Tempo: {this.state.contador}</Text>
        <TextInput
          style={{ height: 100, width: 350, borderColor: 'gray', borderWidth: 1, margin: 20 }}
          editable={this.state.inputHabilitado}
          onChangeText={this.contarCaracter.bind(this)}
          value={this.state.conteudoTextInput}>
        </TextInput>
        <Button
          style={{ width: 170, marginTop: 40, height:80 }}
          title={'Começar'} color={'green'}
          onPress={this.startarTempo.bind(this)}
          disabled={!this.state.botaoHabilitado}>
        </Button>

      </View>

    )

  }
}
export default App;
