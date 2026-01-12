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
          header: () => (
            <AppHeader
              title="Change Password"
              showBack={true}
              rightContent="none"
            />
          ),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        options={{
          header: () => (
            <AppHeader
              title="Edit Profile"
              showBack={true}
              rightContent="none"
            />
          ),
        }}
      />
      <Stack.Screen
        name="HelpCenter"
        options={{
          header: () => (
            <AppHeader
              title="Help Center"
              showBack={true}
              rightContent="none"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Review"
        options={{
          header: () => (
            <AppHeader title="Security" showBack={true} rightContent="none" />
          ),
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
          header: () => (
            <AppHeader title="Privacy" showBack={true} rightContent="none" />
          ),
        }}
      />
      <Stack.Screen
        name="ContactSupport"
        options={{
          header: () => (
            <AppHeader
              title="Contact Support"
              showBack={true}
              rightContent="none"
            />
          ),
        }}
      />
    </Stack>
  );
}
