import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Image} from 'react-native';

const SignupPage = ({navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [image, setimage] = useState('');

  const [show, setshow] = useState(false);


  const handleSignup = () => {
    // Perform signup logic here
    setshow(true)
    // Add your signup logic here (e.g., API calls, validation, etc.)
  };

  return (
    <View style={{ flex:1}}>
      <View style={{ flex:1 , alignContent:'center' , justifyContent:'center'}}>
        <Text style={styles.buttonText}>Welcome to WhatsApp</Text>
        <Image source={{uri:'https://img.icons8.com/?size=512&id=ZeQPTbzIF4jw&format=png'}}  style={{ width:200, height:200 , marginTop:17 , alignSelf:'center'}}/>
      </View>
      {show ? <View style={{ flex:1 , alignItems:'center'}} >
        <TextInput
        style={styles.input}
        placeholder="name"
        onChangeText={text => setname(text)}
        value={name}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize:20 , color:'white' , alignSelf:'center'}}>Upload profile pic</Text>
      </TouchableOpacity>   
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize:20 , color:'white' , alignSelf:'center' }}>Signup</Text>
      </TouchableOpacity>   

      </View> :

      <View style={{ flex:1  , alignItems:'center',}}>
          <Text style={styles.title}>Sign Up</Text>
         <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={{fontSize:20 , color:'white' , alignSelf:'center'}}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('login')} >
        <Text style={{fontSize:17 , marginTop:10}}>Already Have An Account </Text>
      </TouchableOpacity> 
      </View>}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    backgroundColor:'red'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginTop:10 ,
    width:'80%'
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignupPage;
