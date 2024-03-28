import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className={"flex  flex-1 bg-orange-400 justify-center center-item"}>
      <Text className={"text-2xl font-bold text-green-400"}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
