import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false, // Hide header on the main tab screen (recommended)
        }}
      />

      <Stack.Screen
        name="notifications"
        options={{
          title: "Notifications",
          // headerShown: true by default → shows back button + title
        }}
      />
    </Stack>
  );
}
