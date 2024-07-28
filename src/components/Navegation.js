import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';






//scren principal
import ScreenDash from "./screen/Dash/ScreenDash.js";
import ScreenLuces from "./screen/Luces/ScreenLuces.js";
import ScreensPuertas from "./screen/puertas/ScreensPuertas.js";
import SceeensUser from "./screen/User/SceeensUser.js";
import ScreenSetting from './Setting/ScreenSetting.js';
import UserDetalles from './screen/User/UserDetalles.js';
import FormularioUser from './screen/User/FormularioUser.js';
import upadeteUser from './screen/User/upadeteUser.js';

 



const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();


function MyStak(){
    return(
        <HomeStack.Navigator initialRouteName='ScreenDash'>
            <HomeStack.Screen name='homescream' component={ScreenDash} />
            <HomeStack.Screen name='userDetalles' component={UserDetalles} />
            <HomeStack.Screen name='FormularioUser' component={FormularioUser}/>
            <HomeStack.Screen name='ScreensUser' component={SceeensUser}/>
            <HomeStack.Screen name='upadeteUser' component={upadeteUser}/>
            

        </HomeStack.Navigator>
        
        
    )
}


function MyTabs (){
    return(

        <Tab.Navigator 
        initialRouteName='Dash'
        screenOptions={{
            tabBarActiveTintColor:'#4FDC13'
        }} 
        >

            <Tab.Screen
            options={{
                tabBarLabel:'MENU',
                tabBarBadge:3,
                headerShown: false,
                tabBarIcon:({color,size}) => (
                    <MaterialCommunityIcons name="home" size={24} color={color} />
                ),

            }}


            name='Dash'
            component={MyStak}/>
            


            <Tab.Screen
            options={{
                tabBarLabel:'cocina',
                tabBarBadge:3,
                headerShown: false,
                tabBarIcon : ({color,size}) => (
                    <Entypo name="light-up" size={24} color={color} />
                ),
            }}
            name='luces' 
            component={ScreenLuces}/>

            <Tab.Screen
            options={{
                tabBarIcon: ({color,size}) =>(
                    <FontAwesome5 name="door-open" size={24} color={color} />
                ),
            }}
            
            name='puerta' 
            component={ScreensPuertas}/>
            <Tab.Screen name='user'

        options={{
            tabBarIcon: ({color,size}) =>(
                <AntDesign name="user" size={24} color={color} />
    ),
}}

             component={SceeensUser}/>
            <Tab.Screen name='Setting'

options={{
    tabBarIcon: ({color,size}) =>(
        <AntDesign name="setting" size={24} color={color} />
),
}}
            
             component={ScreenSetting}/>


        </Tab.Navigator>
    )



}

export default function Navegation(){
    return(
            <NavigationContainer>
               <MyTabs /> 
            </NavigationContainer>

    )
}