import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RateReviewScreen() {
  const [rating, setRating] = useState(3); // default 3 stars
  const [reviewText, setReviewText] = useState("");

  const handleStarPress = (selected: number) => {
    setRating(selected);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 items-center justify-center px-6 py-12">
            {/* Logo / Icon */}
            <View className="w-28 h-28 bg-amethyst rounded-full items-center justify-center mb-8 shadow-xl">
              <Ionicons name="star" size={52} color="white" />
            </View>

            <Text className="text-3xl font-bold text-gray-800 mb-2">
              Rate & Review
            </Text>

            <Text className="text-gray-600 text-center text-base mb-10">
              Share your experience with ShopSmart.{"\n"}
              Your feedback helps us improve.
            </Text>

            {/* Stars */}
            <View className="flex-row mb-12">
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleStarPress(star)}
                  activeOpacity={0.7}
                  className="px-2.5"
                >
                  <Ionicons
                    name={star <= rating ? "star" : "star-outline"}
                    size={48}
                    color={star <= rating ? "#fbbf24" : "#d1d5db"}
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* Review Input Section */}
            <View className="w-full mb-10">
              <Text className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Share Your Review
              </Text>

              <View className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <TextInput
                  className="min-h-[140px] p-5 text-base text-gray-800"
                  placeholder="Share details of your experiences with shopsmart..."
                  placeholderTextColor="#9ca3af"
                  multiline
                  textAlignVertical="top"
                  value={reviewText}
                  onChangeText={setReviewText}
                  maxLength={500}
                />
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              className={`w-full py-4 rounded-2xl items-center justify-center shadow-md ${
                rating >= 1 ? "bg-amethyst" : "bg-gray-400"
              }`}
              disabled={rating < 1}
              activeOpacity={0.8}
            >
              <Text className="text-white text-lg font-semibold">
                Submit Review
              </Text>
            </TouchableOpacity>

            {/* Optional small note */}
            <Text className="text-gray-500 text-sm mt-8 text-center">
              Thank you for helping us make ShopSmart better!
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
