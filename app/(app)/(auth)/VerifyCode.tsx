import Header from "@/components/login/Header";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function VerifyCode() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        className="flex-1 bg-white"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="flex-1 bg-white">
          {/* Header */}
          <Header
            title="Verify Code"
            subheading="Enter the code sent to your email"
            showBackButton={true}
          />

          {/* Main content */}
          <View className="flex-1 px-6 pt-10 pb-16">
            {/* Instruction text */}
            <Text className="text-gray-700 text-base leading-6 text-left mb-10">
              We've sent a 6-digit code to Shopowner@Gmail.com.{"\n"}
              Please enter it below.
            </Text>

            {/* OTP Label + Input */}
            <View className="mb-10">
              <Text className="text-gray-800 text-lg font-medium mb-3">
                Enter OTP
              </Text>

              <View className="flex-row items-center border border-gray-300 rounded-2xl px-4 py-4 bg-gray-50">
                <Ionicons
                  name="key-outline" // better icon for OTP/code
                  size={22}
                  color="#6B7280"
                  style={{ marginRight: 12 }}
                />

                <TextInput
                  placeholder="Enter 6-digit code"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="number-pad"
                  maxLength={6}
                  textAlign="center" // nicer for OTP
                  className="flex-1 text-center text-2xl font-medium tracking-widest text-gray-900"
                />
              </View>
            </View>

            {/* Verify Button */}
            <TouchableOpacity
              className="bg-amethyst rounded-xl py-4 items-center shadow-md shadow-purple-500/30 active:bg-purple-700"
              onPress={() => router.push("/(app)/(auth)/CreateNewPassword")}
            >
              <Text className="text-white text-lg font-semibold">
                Verify Code
              </Text>
            </TouchableOpacity>

            {/* Optional resend link */}
            <View className="items-center mt-8">
              <Text className="text-gray-600">
                Didn't receive code?{" "}
                <Text className="text-purple-600 font-medium">Resend</Text>
              </Text>
            </View>

            {/* Extra safe bottom padding */}
            <View className="flex-1 min-h-[120]" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
