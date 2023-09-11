import { SafeAreaView, StatusBar } from "react-native";
import Routes from "./src/routes/Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {

  return (
    <SafeAreaProvider>      
        <Routes/>
    </SafeAreaProvider>
  );
}