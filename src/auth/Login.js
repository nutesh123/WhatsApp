import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Image } from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const [show, setshow] = useState(false);


  const handleSignup = () => {
    // Perform signup logic here
    setshow(true)
    // Add your signup logic here (e.g., API calls, validation, etc.)
  };

  return (
    <View  style={{flex:1}}>
        <View style={{ flex:1 , alignContent:'center' , justifyContent:'center'}}>
        <Text style={styles.buttonText}>Welcome to WhatsApp</Text>
        <Image source={{uri:'https://img.icons8.com/?size=512&id=ZeQPTbzIF4jw&format=png'}}  style={{ width:200, height:200 , marginTop:17 , alignSelf:'center'}}/>
      </View>
      <View style={styles.container}>
          <Text style={styles.title}> Login</Text>
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
        <Text style={{fontSize:20 , color:'white' , alignSelf:'center'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
        <Text style={{fontSize:17 , marginTop:17 }}>Dont Have An Account </Text>
      </TouchableOpacity> 
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    width:'80%'
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
