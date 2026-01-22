import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <View className="flex-1 items-center justify-center px-8">
        <Text className="text-8xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          404
        </Text>

        <Text className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-300 mb-4">
          Oops! Page Not Found
        </Text>

        <Text className="text-base text-center text-gray-600 dark:text-gray-400 mb-10">
          The page you're looking for doesn't exist or has been moved.
        </Text>

        <Link href="/" asChild>
          <TouchableOpacity className="bg-blue-600 px-8 py-4 rounded-full shadow-lg active:opacity-80">
            <Text className="text-white text-lg font-medium">Go Back Home</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
