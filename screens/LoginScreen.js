import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor(){
    super()
    this.state={
      email : "",
      password : ""
    }
  }

  showAlert(errorCode){
    switch(errorCode){
      case 'auth/too-many-requests':
        Alert.alert('To many requests\Try again later')
        this.setState({
          email:"",
          password : ""
        })
        break
      case 'auth/wrong-password':
        Alert.alert('Enter Correct password')
        this.setState({
          password : ""
        })
        break
      default:
        this.setState({
          email:"",
          password : ""
        })
        return Alert.alert('Invalid email and password')
    }
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.subContainer1}>
        <View>
          <View style={{borderWidth:25,borderColor:"white",marginTop:-180}}>
        <Text style={{textAlign:"center",fontSize: 40,}}>Bed Time stories</Text>
        </View>
          <Image
            source={require("../assets/booklogo.jpg")}
            style={{width:200, height: 200,marginLeft:50}}/>
          
        </View>
        <View style={styles.loginBox}>
          <TextInput 
              placeholder="Abc@example.com"
              placeholderTextColor = "black"
              onChangeText= {(emailText)=>{
                  this.setState({
                      email: emailText
                  })
              }}
              value={this.state.email}
              style={styles.textInput,{width:290,height:500,marginLeft:-10,opacity:50}}
              />

</View>
<View style={styles.loginBox}>
          <TextInput
              placeholder="Password"
              placeholderTextColor = "black"
              onChangeText= {(passwordText)=>{
                  this.setState({
                      password: passwordText
                  })
              }}
              value={this.state.password}
              style={styles.textInput,{width:290,height:500,marginLeft:-10,opacity:50}}
              secureTextEntry = {true}
              />
              </View>
        </View>
        <View style={styles.subContainer2}>
          <TouchableOpacity
            style={styles.button}
            onPress = {async()=>{
              var email  = await this.state.email;
              var password = await this.state.password
              firebase.auth().signInWithEmailAndPassword(email, password)
              .then(()=>{
                this.props.navigation.navigate('WriteStory')
              })
              .catch((error)=> {
                var errorCode = error.code;
                var errorMessage = error.message;
                return this.showAlert(errorCode)
              })
            }}
            >
            <Text style={styles.buttonText,{fontWeight:"bold",fontSize:25}}>Login</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E3D5FE'
  },
  title:{
    fontWeight:"normal",
    fontSize:43,
    padding:25,
    color:'#ffff'
  },
  image:{
    width:"60%",
    height:"40%",
    marginBottom:30,
    borderWidth:5,
    borderColor:'#ffff',
    borderRadius:20
  },
  subContainer1:{
    flex:0.6,
    justifyContent:'center',
    alignItems:'center'
  },
  subContainer2:{
    flex:0.4,
    alignItems:'center'
  },
  textInput : {
    width:"70",
    height: "8%",
    padding:10,
    marginBottom:10,
    color:"black",
    fontSize:20,
    fontWeight:"bold",
  },
  button:{
    width:160,
    height:90,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:10,
    borderColor:'Black',
    borderRadius:15,
    marginTop:-90,
  },
  buttonText:{
    color:'Black',
    fontSize:25
  },
  loginBox:{
    width: 300,
  height: 40,
  borderWidth: 1.5,
  fontSize: 20,
  margin:10,
  paddingLeft:10,
  borderWidth:6,
  
  }
})
