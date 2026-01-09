import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Setting() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-2xl font-bold text-blue-600">Settings Screen</Text>
      <Button
        title="Aboutus"
        onPress={() => router.push("/(tabs)/settings/Aboutus")}
      />
      <Button
        title="Appearance"
        onPress={() => router.push("/(tabs)/settings/Appearance")}
      />
      <Button
        title="Change Password"
        onPress={() => router.push("/(tabs)/settings/ChangePassword")}
      />
      <Button
        title="Edit Profile"
        onPress={() => router.push("/(tabs)/settings/EditProfile")}
      />
      <Button
        title="Help Center"
        onPress={() => router.push("/(tabs)/settings/HelpCenter")}
      />
      <Button
        title="Review"
        onPress={() => router.push("/(tabs)/settings/Review")}
      />
      <Button
        title="Security"
        onPress={() => router.push("/(tabs)/settings/Security")}
      />
      <Button
        title="Privacy"
        onPress={() => router.push("/(tabs)/settings/privacy")}
      />
    </View>
  );
}
