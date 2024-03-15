import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'
import Header from '../components/Header'
import EditProfile from '../screens/EditProfile'
import { useSelector } from 'react-redux'

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
                <Stack.Screen name='EditProfile' component={EditProfile}/>
            </Stack.Navigator>
    )
}

export default ProfileStack