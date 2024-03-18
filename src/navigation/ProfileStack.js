import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'
import Header from '../components/Header'
import EditProfile from '../screens/EditProfile'
import LocationSelector from '../screens/LocationSelector'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {

    return (
        <Stack.Navigator
                initialRouteName='Profile'
                screenOptions={({navigation})=>{
                    return {
                        header: ()=> {
                            return <Header
                                tittle='User Profile'
                                navigation={navigation}
                            />
                        }
                    }
                }}
            >
                <Stack.Screen name='Profile' component={Profile}/>
                <Stack.Screen name='EditProfile' component={EditProfile}/>
                <Stack.Screen name='LocationSelector' component={LocationSelector}/>
            </Stack.Navigator>
    )
}

export default ProfileStack