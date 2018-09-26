import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {Header, Container, Title, Button, Icon, Left, Right, Body} from 'native-base';
import { categoryChanged, titleChanged, descriptionChanged } from '../actions';
import { Actions } from 'react-native-router-flux'; // New code

const { width, height } = Dimensions.get('window')

class Add extends Component {

    onCategoryChange = (text) => {
        this.props.categoryChanged(text);
      }
    
    onTitleChange = (text) => {
        this.props.titleChanged(text);
      }

    onDescriptionChange = (text) => {
        this.props.descriptionChanged(text);
      }

      onButtonPress = () => {
        console.log('Will be added to database!')
      }

render(){
  return (
    <Container>
        <Header style={{ backgroundColor: '#1e54aa'}}>
            <Left>
                <Icon onPress={() => Actions.pop()} name="ios-arrow-back" style={{color: 'white'}}/>
            </Left>      
        </Header>

    <View style={{flexDirection: 'column', alignSelf: 'center', paddingTop: width * 0.1}}>
            <View style={{paddingLeft: 5}}>
            <Text style={styles.titles}>CATEGORY</Text>
            </View>
             <View style={styles.inputContainer}>
                <View style={{paddingLeft: 10}}>
                    <TextInput 
                    style={styles.inputText}
                    label="Category"
                    placeholder="Select your category"
                    onChangeText={this.onCategoryChange()}
                    value={this.props.category}
                    />
                </View>
             </View>

            <View style={{paddingVertical: width * 0.02}}></View>
            
            <View style={{paddingLeft: 5}}>
            <Text style={styles.titles}>PROBLEM TITLE</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{paddingLeft: 10}}>
                    <TextInput
                    style={styles.inputText}
                    label="Title"
                    placeholder="ex: Need Tax declaration"
                    onChangeText={this.onTitleChange()}
                    value={this.props.title}
                    />
                </View>
            </View>

            <View style={{paddingVertical: width * 0.02}}></View>
              
                
            <View style={{paddingLeft: 5}}>
            <Text style={styles.titles}>DESCRIBE THE CASE</Text>
            </View>
                    <TextInput
                    style={styles.descText}
                    label="Description"
                    placeholder="ex: I realize that my earnings have crossed the limit 
                    established by the federal receipt and I need to 
                    calculate exactly what I truly need to registry"
                    onChangeText={this.onDescriptionChange()}
                    value={this.props.description}
                    />
            
            <View style={{alignSelf: 'center', paddingTop: width * 0.03}}>
            <Button style={styles.Button} onPress={() => this.onButtonPress()}>
          <View style={{paddingHorizontal: width * 0.28}}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Send!</Text>
          </View>
          </Button>
          </View>
        

        <View style={{flexDirection: 'row', alignSelf: 'center', paddingTop: width * 0.05}}>
          <Text style={{fontSize: 18, color: '#709fea'}}>Need Help? </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 18, color: '#709fea', fontWeight: 'bold'}}>See our FAQ!</Text>
            </TouchableOpacity>
          </View>

    </View>

    </Container>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  TextInput: {
    paddingLeft: 15,
    fontSize: 18,
    marginLeft: 32,
    width: '65%'
  },
  inputContainer: {
    width: width * 0.9,
    backgroundColor: '#fff',
    height: height * 0.06,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey'
  },
  descText: {
    width: width * 0.9,
    backgroundColor: '#fff',
    height: height * 0.3,
    flexDirection: 'column',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    paddingBottom: height * 0.23,
    paddingLeft: 10
  },
  Button: {
    width: width * 0.7,
    borderRadius: 10,
    height: height * 0.06,
    borderColor: '#709fea',
    borderWidth: 2
  },
  titles: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});

const mapStateToProps = ({ add }) => {
    const { category, title, description } = add;
  
    return { category, title, description };
  };
  
  export default connect(mapStateToProps, {
    categoryChanged, titleChanged, descriptionChanged
  })(Add);