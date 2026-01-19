import { Redirect } from "expo-router";
const isLoggedIn = true;
export default function Index() {
  if (isLoggedIn) {
    return <Redirect href="/(app)/(tabs)/home" />;
  }
  return <Redirect href="/(app)/(auth)" />;
}
