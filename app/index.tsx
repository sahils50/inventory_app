import { Redirect } from "expo-router";

export default function Index() {
  //Routes to (app) index and that will decide the next route based on auth status
  return <Redirect href="/(app)" />;
}
