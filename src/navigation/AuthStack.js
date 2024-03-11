import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={({navigation})=>{
            return {
                header: ()=> <Header 
                                navigation={navigation}
                            />
            }
        }}
    >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
    </Stack.Navigator>
  )
}

export default AuthStack