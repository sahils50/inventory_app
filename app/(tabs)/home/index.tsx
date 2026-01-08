import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Open Notifications"
        onPress={() => router.push("/(tabs)/home/notifications")}
      />
    </View>
  );
}
