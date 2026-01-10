import { Stack } from "expo-router";

export default function Auth() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
