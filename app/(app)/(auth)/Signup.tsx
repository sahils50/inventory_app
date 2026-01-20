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

export default function SignUp() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        className="flex-1 bg-white"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
      >
        {/* Header */}
        <Header
          title="Create Account"
          subheading="Join us to manage your inventory"
          showBackButton={true}
        />

        {/* Form content */}
        <View className="flex-1 px-6 pt-6 pb-10">
          {/* Full Name */}
          <View className="mb-6">
            <Text className="text-gray-700 text-base font-medium mb-2">
              Full Name <Text className="text-red-500">*</Text>
            </Text>
            <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-4 py-4">
              <Ionicons
                name="person-outline"
                size={22}
                color="#9CA3AF"
                style={{ marginRight: 12 }}
              />
              <TextInput
                placeholder="Enter your full name"
                placeholderTextColor="#9CA3AF"
                className="flex-1 text-base text-gray-800"
              />
            </View>
          </View>

          {/* Email Address */}
          <View className="mb-6">
            <Text className="text-gray-700 text-base font-medium mb-2">
              Email Address <Text className="text-red-500">*</Text>
            </Text>
            <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-4 py-4">
              <Ionicons
                name="mail-outline"
                size={22}
                color="#9CA3AF"
                style={{ marginRight: 12 }}
              />
              <TextInput
                placeholder="Enter your gmail address"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                className="flex-1 text-base text-gray-800"
              />
            </View>
          </View>

          {/* Phone Number */}
          <View className="mb-6">
            <Text className="text-gray-700 text-base font-medium mb-2">
              Phone Number <Text className="text-red-500">*</Text>
            </Text>
            <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-4 py-4">
              <Ionicons
                name="call-outline"
                size={22}
                color="#9CA3AF"
                style={{ marginRight: 12 }}
              />
              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                className="flex-1 text-base text-gray-800"
              />
            </View>
          </View>

          {/* Shop Name */}
          <View className="mb-6">
            <Text className="text-gray-700 text-base font-medium mb-2">
              Shop Name <Text className="text-red-500">*</Text>
            </Text>
            <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-4 py-4">
              <Ionicons
                name="storefront-outline"
                size={22}
                color="#9CA3AF"
                style={{ marginRight: 12 }}
              />
              <TextInput
                placeholder="Enter your shop name"
                placeholderTextColor="#9CA3AF"
                className="flex-1 text-base text-gray-800"
              />
            </View>
          </View>

          {/* GSTIN Number */}
          <View className="mb-6">
            <Text className="text-gray-700 text-base font-medium mb-2">
              GSTIN Number
            </Text>
            <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-4 py-4">
              <Ionicons
                name="document-text-outline"
                size={22}
                color="#9CA3AF"
                style={{ marginRight: 12 }}
              />
              <TextInput
                placeholder="12JABAS6972322H8"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="characters"
                className="flex-1 text-base text-gray-800"
              />
            </View>
          </View>

          {/* Shop Address (Optional) */}
          <View className="mb-8">
            <Text className="text-gray-700 text-base font-medium mb-2">
              Shop Address{" "}
              <Text className="text-gray-500 text-sm">(Optional)</Text>
            </Text>
            <View className="flex-row items-start bg-gray-50 border border-gray-300 rounded-xl px-4 py-4">
              <Ionicons
                name="location-outline"
                size={22}
                color="#9CA3AF"
                style={{ marginRight: 12, marginTop: 2 }}
              />
              <TextInput
                placeholder="Enter your shop address"
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={3}
                className="flex-1 text-base text-gray-800 min-h-[80px]"
              />
            </View>
          </View>

          {/* Terms Checkbox */}
          <View className="flex-row items-start mb-10">
            <View className="w-6 h-6 border border-gray-400 rounded mt-1 mr-3 items-center justify-center bg-white">
              {/* Uncomment when implementing state */}
              {/* <Ionicons name="checkmark" size={18} color="#7C3AED" /> */}
            </View>
            <Text className="text-gray-600 text-base flex-1 leading-6">
              I agree to the{" "}
              <Text className="text-purple-600 font-medium">
                Terms of Services
              </Text>{" "}
              and{" "}
              <Text className="text-purple-600 font-medium">
                Privacy Policy
              </Text>
            </Text>
          </View>

          {/* Create Account Button */}
          <TouchableOpacity
            className="bg-amethyst rounded-xl py-4 items-center shadow-md shadow-purple-500/30 active:bg-purple-700"
            onPress={() => router.push("/(app)/(auth)/VerifyCode")}
          >
            <Text className="text-white text-lg font-semibold">
              Create Account
            </Text>
          </TouchableOpacity>

          {/* Already have account */}
          <View className="items-center mt-8">
            <Text className="text-gray-600">
              Already have an account?{" "}
              <Text
                className="text-purple-600 font-medium"
                onPress={() => router.push("/(app)/(auth)")}
              >
                Login
              </Text>
            </Text>
          </View>

          {/* Extra bottom padding */}
          <View className="h-12" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
