// app/contact-support.tsx
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ContactSupportScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [storeName, setStoreName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "+918001234567";
  const emailAddress = "support@shopsmart.com";

  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${emailAddress}?subject=Support Request`);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView className="flex-1" keyboardShouldPersistTaps="handled">
          <View className="px-5 py-8">
            {/* Header Section */}
            <View className="items-center mb-10">
              <View className="w-16 h-16 bg-purple-100 rounded-full items-center justify-center mb-4">
                <Ionicons
                  name="chatbubble-ellipses"
                  size={32}
                  color="#7c3aed"
                />
              </View>
              <Text className="text-2xl font-bold text-gray-800">
                Contact Support
              </Text>
              <Text className="text-gray-600 mt-2 text-center">
                Get in touch with our support team.{"\n"}We're here to help you
                24/7
              </Text>
            </View>

            {/* Quick Contact Options */}
            <View className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
              <View className="p-5 border-b border-gray-100 flex-row items-center">
                <View className="w-10 h-10 bg-purple-100 rounded-full items-center justify-center mr-3">
                  <Ionicons name="call" size={22} color="#7c3aed" />
                </View>
                <Text className="text-lg font-semibold text-gray-800">
                  Contact Support
                </Text>
              </View>

              <View className="p-5 flex-row justify-between gap-4">
                <TouchableOpacity
                  onPress={handleCall}
                  className="flex-1 bg-purple-50 border border-purple-200 rounded-xl p-4 items-center"
                >
                  <Ionicons name="call-outline" size={28} color="#7c3aed" />
                  <Text className="text-purple-700 font-medium mt-2">
                    Call Us
                  </Text>
                  <Text className="text-gray-600 text-sm mt-1">
                    {phoneNumber}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleEmail}
                  className="flex-1 bg-purple-50 border border-purple-200 rounded-xl p-4 items-center"
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={28}
                    color="#7c3aed"
                  />
                  <Text className="text-purple-700 font-medium mt-2">
                    Email Us
                  </Text>
                  <Text className="text-gray-600 text-sm mt-1 text-center">
                    support@shopsmart.com
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Send Message Form */}
            <View className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <View className="p-5 border-b border-gray-100 flex-row items-center">
                <View className="w-10 h-10 bg-purple-100 rounded-full items-center justify-center mr-3">
                  <Ionicons
                    name="paper-plane-outline"
                    size={22}
                    color="#7c3aed"
                  />
                </View>
                <Text className="text-lg font-semibold text-gray-800">
                  Send Message
                </Text>
              </View>

              <View className="p-5">
                <InputField
                  label="Your Name *"
                  value={name}
                  onChangeText={setName}
                  placeholder="Your name"
                  required
                />

                <InputField
                  label="Email Address *"
                  value={email}
                  onChangeText={setEmail}
                  placeholder="your.email@example.com"
                  keyboardType="email-address"
                  required
                />

                <InputField
                  label="Store Name"
                  value={storeName}
                  onChangeText={setStoreName}
                  placeholder="Your store name"
                />

                <InputField
                  label="Subject *"
                  value={subject}
                  onChangeText={setSubject}
                  placeholder="Brief subject of your query"
                  required
                />

                <View className="mb-6">
                  <Text className="text-gray-700 font-medium mb-2">
                    Message <Text className="text-red-500">*</Text>
                  </Text>
                  <TextInput
                    className="min-h-[120px] border border-gray-300 rounded-xl p-4 text-base text-gray-800 bg-gray-50"
                    placeholder="Describe your issue or question in detail..."
                    placeholderTextColor="#9ca3af"
                    multiline
                    textAlignVertical="top"
                    value={message}
                    onChangeText={setMessage}
                  />
                </View>

                <TouchableOpacity
                  className="bg-purple-600 py-4 rounded-xl items-center shadow-md active:opacity-90"
                  onPress={() => {
                    // Here you would normally send the message
                    console.log({ name, email, storeName, subject, message });
                  }}
                >
                  <View className="flex-row items-center">
                    <Ionicons
                      name="send"
                      size={20}
                      color="white"
                      className="mr-2"
                    />
                    <Text className="text-white text-lg font-semibold">
                      Send Message
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <Text className="text-center text-gray-500 text-sm mt-8 mb-12">
              We'll get back to you as soon as possible
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Reusable Input Component
type InputFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  required?: boolean;
  keyboardType?: "default" | "email-address" | "phone-pad";
};

function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  required = false,
  keyboardType = "default",
}: InputFieldProps) {
  return (
    <View className="mb-6">
      <Text className="text-gray-700 font-medium mb-2">
        {label}
        {required && <Text className="text-red-500"> *</Text>}
      </Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3.5 bg-gray-50 text-base text-gray-800"
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={keyboardType === "email-address" ? "none" : "words"}
      />
    </View>
  );
}
