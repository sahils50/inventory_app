// app/(tabs)/home/_layout.tsx
import AppHeader from "@/components/common/AppHeader";
import { Stack } from "expo-router";
export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      {/* Main Home screen – no back button */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      {/* Notifications sub-screen – with back button */}
      <Stack.Screen
        name="notifications"
        options={{
          header: () => (
            <AppHeader
              title="Notifications"
              showBack={true}
              rightContent="none"
            />
          ),
        }}
      />
    </Stack>
  );
}
