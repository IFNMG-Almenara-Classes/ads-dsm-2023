import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Principal from "../screens/Principal";
import Menu from "../screens/Menu";
import Agenda from "../screens/Agenda";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

function Routes(){
  const insets = useSafeAreaInsets();

    return (
      <View style={{ flex: 1, paddingTop: insets.top }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Principal" component={Principal} />                
            <Stack.Screen name="Menu" component={Menu} options={{
              headerShown: false
            }} />                
            <Stack.Screen name="Agenda" component={Agenda} />                
          </Stack.Navigator>
        </NavigationContainer>
        </View>
      );
}

export default Routes;