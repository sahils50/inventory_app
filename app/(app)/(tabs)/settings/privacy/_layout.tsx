import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Privacy",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DataRetentionPolicy"
        options={{
          title: "Data Retention Policy",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DeleteAccountData"
        options={{
          title: "Delete Account Data",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        options={{
          title: "Privacy Policy",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TermNConditions"
        options={{
          title: "Terms and Conditions",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
