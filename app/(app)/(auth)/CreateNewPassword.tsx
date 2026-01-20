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

export default function CreateNewPassword() {
  return (
    <ScrollView>
      <View>
        <Header
          title="New Password"
          subheading="Create a strong new password"
          showBackButton={true}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 bg-white"
        >
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 40 }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="px-6 pt-8 pb-10">
              {/* Title & Subtitle */}
              <Text className="text-3xl font-bold text-gray-800 mb-3 text-center">
                Create New Password
              </Text>
              <Text className="text-gray-600 text-base leading-6 text-center mb-10">
                Create a strong password to secure your{"\n"}
                ShopMart account. Make sure it's different{"\n"}
                from your previous passwords.
              </Text>

              {/* New Password Field */}
              <View className="mb-6">
                <Text className="text-gray-800 text-lg font-medium mb-3">
                  New Password
                </Text>

                <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-4 py-4">
                  <Ionicons
                    name="lock-closed-outline"
                    size={22}
                    color="#9CA3AF"
                    style={{ marginRight: 12 }}
                  />
                  <TextInput
                    placeholder="New Password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    className="flex-1 text-base text-gray-800"
                  />
                </View>
              </View>

              {/* Password Requirements */}
              <View className="mb-8">
                <Text className="text-gray-700 text-base font-medium mb-3">
                  Password Requirements:
                </Text>

                <View className="space-y-2 pl-2">
                  <View className="flex-row items-center">
                    <Ionicons
                      name="checkmark-circle-outline"
                      size={20}
                      color="#10B981"
                    />
                    <Text className="text-gray-700 ml-2">
                      At least 8 characters
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons
                      name="checkmark-circle-outline"
                      size={20}
                      color="#10B981"
                    />
                    <Text className="text-gray-700 ml-2">
                      One uppercase letter
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons
                      name="checkmark-circle-outline"
                      size={20}
                      color="#10B981"
                    />
                    <Text className="text-gray-700 ml-2">
                      One lowercase letter
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons
                      name="checkmark-circle-outline"
                      size={20}
                      color="#10B981"
                    />
                    <Text className="text-gray-700 ml-2">One number</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons
                      name="checkmark-circle-outline"
                      size={20}
                      color="#10B981"
                    />
                    <Text className="text-gray-700 ml-2">
                      One special character
                    </Text>
                  </View>
                </View>
              </View>

              {/* Confirm Password Field */}
              <View className="mb-10">
                <Text className="text-gray-800 text-lg font-medium mb-3">
                  Confirm Password
                </Text>

                <View className="flex-row items-center bg-gray-50 border border-gray-300 rounded-xl px-4 py-4">
                  <Ionicons
                    name="lock-closed-outline"
                    size={22}
                    color="#9CA3AF"
                    style={{ marginRight: 12 }}
                  />
                  <TextInput
                    placeholder="Confirm new password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    className="flex-1 text-base text-gray-800"
                  />
                </View>
              </View>

              {/* Reset Password Button */}
              <TouchableOpacity
                className="bg-amethyst rounded-xl py-4 items-center shadow-md shadow-purple-500/30 active:bg-purple-700"
                onPress={() => router.push("/(app)/(auth)/Success")}
              >
                <Text className="text-white text-lg font-semibold">
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
