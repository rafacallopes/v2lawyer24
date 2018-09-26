import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import {Header, Container, Title, Button} from 'native-base';

const { width, height } = Dimensions.get('window')

class Login extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  // renderButton() {
  //   if (this.props.loading) {
  //     return <Spinner size="large" />;
  //   }

  //   return (
  //     <Button onPress={this.onButtonPress.bind(this)}>
  //       Login
  //     </Button>
  //   );
  // }
  render() {
    return (
     <Container>
      <Header style={{ backgroundColor: '#1e54aa'}}>
        <Title style={{color: 'white'}}>Lawyer24h</Title>
      </Header>

          <View style={{flexDirection: 'column', alignSelf: 'center', paddingTop: width * 0.5}}>

          <View style={{alignSelf: 'center'}}>
          <Image
          style={{width: 230, height: 58}}
          source={{uri: 'https://scontent.fsdu8-1.fna.fbcdn.net/v/t1.0-9/42128095_1812280528840713_2849025835216666624_n.jpg?_nc_cat=0&oh=6d8f3c3119a68d51191e2cecebb7658d&oe=5C2BEECF'}}
        />
        </View>

            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.inputText}
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
            />
            </View>

            <View style={{paddingVertical: width * 0.02}}></View>
        
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
            </View>
        

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

          
          <Button style={styles.Button} onPress={() => this.onButtonPress()}>
          <View style={{paddingHorizontal: width * 0.28}}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Login</Text>
          </View>
          </Button>

          <View style={{flexDirection: 'row', alignSelf: 'center', paddingTop: width * 0.03}}>
          <Text style={{fontSize: 18, color: '#709fea'}}> or</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 18, color: '#709fea', fontWeight: 'bold'}}> Sign Up</Text>
            </TouchableOpacity>
          </View>

          </View>
          </Container>
        

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  TextInput: {
    paddingLeft: 15,
    fontSize: 18,
    marginLeft: 32,
    width: '65%'
  },
  inputContainer: {
    width: width * 0.7,
    backgroundColor: '#fff',
    height: height * 0.06,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey'
  },
  Button: {
    width: width * 0.7,
    borderRadius: 10,
    height: height * 0.06,
    borderColor: '#709fea',
    borderWidth: 2
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(Login);