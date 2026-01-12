import AppHeader from "@/components/common/AppHeader";
import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <AppHeader title="Setting" showBack={true} rightContent="none" />
          ),
        }}
      />
      <Stack.Screen
        name="Aboutus"
        options={{
          title: "Aboutus",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Appearance"
        options={{
          header: () => (
            <AppHeader title="Appearance" showBack={true} rightContent="none" />
          ),
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        options={{
          title: "Change Password",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        options={{
          title: "Edit Profile",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HelpCenter"
        options={{
          title: "Help Center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Review"
        options={{
          title: "Review",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Security"
        options={{
          header: () => (
            <AppHeader title="Security" showBack={true} rightContent="none" />
          ),
        }}
      />
      <Stack.Screen
        name="privacy"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
