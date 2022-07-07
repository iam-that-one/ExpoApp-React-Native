
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Details from "./screens/Details";
import Bookmarks from "./screens/Bookmarks";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from "./components/TabBar";
import Add from "./screens/Add";
import Profile from "./screens/Profile";
import Message from "./screens/Message";
import Map from "./screens/Map";
import UserProfile from "./screens/UserProfile";
export default function App() {
  const Stack = createStackNavigator();
 
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    }, 
  };
  return (
    
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          detachPreviousScreen:true
        
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home}  options={{
        animationEnabled: false,
      }}/>
       <Stack.Screen name="Details" component={Details}/>
       <Stack.Screen name="Bookmarks" component={Bookmarks}  options={{
        animationEnabled: false,
      }}/>
       <Stack.Screen name="Message" component={Message}  options={{
        animationEnabled: false,
      }} />
       <Stack.Screen name="Add" component={Add}  options={{
        animationEnabled: false,
      }}/>
       <Stack.Screen name="Profile" component={Profile}  options={{
        animationEnabled: false,
      }}/>
        <Stack.Screen name="Map" component={Map}  options={{
        animationEnabled: true,
      }}/>
        <Stack.Screen name="UserProfile" component={UserProfile}  options={{
        animationEnabled: true,
      }}/>
      </Stack.Navigator>

    </NavigationContainer>


  );
}




