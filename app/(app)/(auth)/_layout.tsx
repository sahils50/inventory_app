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
      <Stack.Screen
        name="ForgotPassword"
        options={{
          title: "Forgot Password",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateNewPassword"
        options={{
          title: "Create New Password",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        options={{
          title: "Sign Up",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VerifyCode"
        options={{
          title: "Verify Code",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Success"
        options={{
          title: "Success",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
