import Header from "@/components/login/Header";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Success() {
  return (
    <ScrollView>
      <View>
        <Header
          title="Success!"
          subheading="Password reset completed"
          showBackButton={true}
        />
        <View className="flex-1 bg-white items-center justify-center px-8">
          {/* Success Icon */}
          <View className="w-28 h-28 rounded-full bg-green-100 items-center justify-center mb-8">
            <View className="w-20 h-20 rounded-full bg-green-500 items-center justify-center">
              <Ionicons name="checkmark" size={48} color="white" />
            </View>
          </View>

          {/* Main Title */}
          <Text className="text-3xl font-bold text-gray-800 text-center mb-4">
            Password Reset{"\n"}Successful!
          </Text>

          {/* Success Message */}
          <Text className="text-gray-600 text-base text-center leading-6 mb-10">
            Your password has been successfully reset.{"\n"}
            You can now log in to your ShopMart{"\n"}
            account with your new password.
          </Text>

          {/* Back to Login Button */}
          <TouchableOpacity
            className="bg-amethyst rounded-xl py-4 px-10 items-center flex-row shadow-md shadow-purple-500/30 active:bg-purple-700"
            onPress={() => router.push("/(app)/(auth)")}
          >
            <Ionicons
              name="arrow-back"
              size={20}
              color="white"
              style={{ marginRight: 8 }}
            />
            <Text className="text-white text-lg font-semibold">
              Back to Login
            </Text>
          </TouchableOpacity>

          {/* Optional extra spacing or branding */}
          <View className="mt-auto mb-6">
            <Text className="text-gray-400 text-sm">
              ShopMart • Secure & Simple
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
