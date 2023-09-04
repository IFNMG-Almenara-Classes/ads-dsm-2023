import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Principal from "../screens/Principal";
import Menu from "../screens/Menu";
import Agenda from "../screens/Agenda";

const Stack = createNativeStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Principal" component={Principal} />                
            <Stack.Screen name="Menu" component={Menu} options={{
              headerShown: false
            }} />                
            <Stack.Screen name="Agenda" component={Agenda} />                
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default Routes;