import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-4xl font-bold text-black">Home Screen</Text>
      <Button
        title="Open Notifications"
        onPress={() => router.push("/(app)/(tabs)/home/notifications")}
      />
    </View>
  );
}
