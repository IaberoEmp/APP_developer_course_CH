import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
    return (
        <Stack.Navigator
                initialRouteName='Profile'
                screenOptions={({navigation})=>{
                    return {
                        header: ()=> {
                            return <Header
                                tittle='Perfil'
                                navigation={navigation}
                            />
                        }
                    }
                }}
            >
                <Stack.Screen name='Profile' component={Profile}/>
            </Stack.Navigator>
    )
}

export default ProfileStack