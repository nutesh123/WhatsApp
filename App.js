
import { NavigationContainer } from '@react-navigation/native';
import SignupPage from './src/auth/Signup';
import StackNevigation from './src/nevigation/StackNevi';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
      <StackNevigation></StackNevigation>
    </NavigationContainer>
  )
}

export default App