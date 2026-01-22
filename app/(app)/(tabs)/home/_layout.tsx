import AppHeader from "@/components/common/AppHeader";
import { Stack } from "expo-router";
export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

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
      <Stack.Screen
        name="ScanBill"
        options={{
          header: () => (
            <AppHeader
              title="Scan Bill"
              showBack={true}
              rightContent="none"
            />
          ),
        }}
      />
    </Stack>
  );
}
