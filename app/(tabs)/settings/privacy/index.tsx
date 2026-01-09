import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Privacy() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-2xl font-bold text-blue-600">Privacy Screen</Text>
      <Button
        title="Data Retention Policy"
        onPress={() =>
          router.push("/(tabs)/settings/privacy/DataRetentionPolicy")
        }
      />
      <Button
        title="Delete Account Data"
        onPress={() =>
          router.push("/(tabs)/settings/privacy/DeleteAccountData")
        }
      />
      <Button
        title="Privacy Policy"
        onPress={() => router.push("/(tabs)/settings/privacy/PrivacyPolicy")}
      />
      <Button
        title="Terms and Conditions"
        onPress={() => router.push("/(tabs)/settings/privacy/TermNConditions")}
      />
    </View>
  );
}
