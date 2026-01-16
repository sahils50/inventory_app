import AppHeader from "@/components/common/AppHeader";
import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <AppHeader title="Privacy" showBack={true} rightContent="none" />
          ),
        }}
      />
      <Stack.Screen
        name="DataRetentionPolicy"
        options={{
                 header: () => (
                   <AppHeader title=" Data Retention Policy " showBack={true} rightContent="none" />
                 ),
               }}
      />
      <Stack.Screen
        name="DeleteAccountData"
         options={{
                 header: () => (
                   <AppHeader title=" Delete Account Data " showBack={true} rightContent="none" />
                 ),
               }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
       options={{
                 header: () => (
                   <AppHeader title="Privacy Policy" showBack={true} rightContent="none" />
                 ),
               }}
      />
      <Stack.Screen
        name="TermNConditions"
        options={{
                 header: () => (
                   <AppHeader title=" Terms & Conditions " showBack={true} rightContent="none" />
                 ),
               }}
      />
    </Stack>
  );
}
