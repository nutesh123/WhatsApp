
import home from '../screen/home';
import SignupPage from '../auth/Signup';
import About from '../screen/About'
import Login from '../auth/Login';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const StackNevigation = () => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator >
             <Stack.Screen name="signup" component={SignupPage} options={{headerShown:false}} />
        <Stack.Screen name="about" component={About} />
        <Stack.Screen name="login" component={Login} />
        
      </Stack.Navigator>
  )
}

export default StackNevigation