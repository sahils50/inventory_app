import Header from "@/components/login/Header";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
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
            title="Welcome Back 👋"
            subheading="Sign in to manage your shop efficiently"
            showBackButton={false}
          />

          {/* Main content */}
          <View className="flex-1 px-6 pt-8 pb-12">
            <Text className="text-gray-800 text-lg font-medium mb-3">
              Email Address
            </Text>
            <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-2xl px-4 py-4 mb-6">
              <Ionicons name="mail-outline" size={22} color="#9CA3AF" />
              <Text className="ml-3 text-gray-700 text-base">
                Shopowner@Gmail.com
              </Text>
            </View>

            {/* Password */}
            <Text className="text-gray-800 text-lg font-medium mb-3">
              Password
            </Text>
            <View className="flex-row items-center justify-between bg-gray-50 border border-gray-300 rounded-2xl px-4 py-4 mb-6">
              <View className="flex-row items-center flex-1">
                <Ionicons
                  name="lock-closed-outline"
                  size={22}
                  color="#9CA3AF"
                />
                <Text className="ml-3 text-gray-500 text-base">
                  Enter Password
                </Text>
              </View>
              <Ionicons name="eye-off-outline" size={22} color="#9CA3AF" />
            </View>

            {/* Remember me + Forgot Password */}
            <View className="flex-row justify-between items-center mb-8">
              <View className="flex-row items-center">
                <View className="w-5 h-5 border border-gray-400 rounded mr-3" />
                <Text className="text-gray-700">Remember me</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push("/(app)/(auth)/ForgotPassword")}
              >
                <Text className="text-purple-600 font-medium">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity
              className="bg-amethyst rounded-xl py-4 items-center shadow-md shadow-purple-500/30 active:bg-purple-700"
              onPress={() => router.push("/(app)/(tabs)/home")}
            >
              <Text className="text-white text-lg font-semibold">Sign In</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center mb-8">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="mx-4 text-gray-500 text-sm">
                Or continue with
              </Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>

            {/* Social Buttons */}
            <View className="flex-row justify-center gap-8 mb-10">
              <View className="w-14 h-14 bg-gray-100 rounded-full items-center justify-center border border-gray-200">
                <Text className="text-red-600 text-2xl font-bold">G+</Text>
              </View>
              <View className="w-14 h-14 bg-gray-100 rounded-full items-center justify-center border border-gray-200">
                <Ionicons name="logo-facebook" size={30} color="#1877F2" />
              </View>
              <View className="w-14 h-14 bg-gray-100 rounded-full items-center justify-center border border-gray-200">
                <Ionicons name="logo-apple" size={32} color="black" />
              </View>
            </View>

            {/* Sign up link */}
            <View className="items-center mb-10">
              <Text className="text-gray-600">
                Don't have an account?{" "}
                <TouchableOpacity
                  onPress={() => router.push("/(app)/(auth)/Signup")}
                >
                  <Text className="text-purple-600 font-medium inline">
                    Sign up for free
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>

            {/* App Store Buttons */}
            <View className="flex-row justify-center gap-4">
              <TouchableOpacity className="flex-row items-center bg-black rounded-lg px-4 py-3">
                <Ionicons
                  name="logo-google-playstore"
                  size={28}
                  color="white"
                />
                <View className="ml-3">
                  <Text className="text-gray-300 text-xs">GET IT ON</Text>
                  <Text className="text-white font-medium">Google Play</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center bg-black rounded-lg px-4 py-3">
                <Ionicons name="logo-apple" size={28} color="white" />
                <View className="ml-3">
                  <Text className="text-gray-300 text-xs">Download on the</Text>
                  <Text className="text-white font-medium">App Store</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Extra bottom padding for scroll feel */}
            <View className="h-10" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
