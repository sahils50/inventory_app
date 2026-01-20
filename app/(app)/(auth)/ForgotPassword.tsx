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

export default function ForgotPassword() {
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
          {/* Your header */}
          <Header
            title="Reset Password"
            subheading="Secure your account with a new password"
            showBackButton={true}
          />

          {/* Main content */}
          <View className="flex-1 px-6 pt-10 pb-12">
            {/* Instruction text */}
            <Text className="text-gray-700 text-base leading-6 text-left mb-10">
              Enter the email address associated with your{"\n"}
              ShopMart account. We'll send a verification code{"\n"}
              to this email.
            </Text>

            {/* Email field */}
            <View className="mb-8">
              <Text className="text-gray-800 text-lg font-medium mb-3">
                Email Address
              </Text>

              <View className="flex-row items-center border border-gray-300 rounded-2xl px-4 py-4 bg-gray-50">
                <Ionicons
                  name="mail-outline"
                  size={22}
                  color="#6B7280"
                  style={{ marginRight: 12 }}
                />

                <TextInput
                  placeholder="your.email@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="#9CA3AF"
                  className="flex-1 text-base text-gray-900"
                />
              </View>
            </View>

            {/* Send button */}
            <TouchableOpacity
              className="bg-amethyst rounded-xl py-4 items-center shadow-md shadow-purple-500/30 active:bg-purple-700"
              onPress={() => {
                // TODO: handle send code logic
                // router.push('/verify-code');
              }}
            >
              <Text
                className="text-white text-lg font-semibold"
                onPress={() => router.push("/(app)/(auth)/VerifyCode")}
              >
                Send Verification Code
              </Text>
            </TouchableOpacity>

            {/* Bottom spacing / safe area buffer */}
            <View className="flex-1 min-h-[80]" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
