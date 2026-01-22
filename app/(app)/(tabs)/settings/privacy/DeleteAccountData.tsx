import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DeleteAccountData() {
  const retentionData = [
    {
      type: "Personal Information",
      time: "Immediate",
      impact: "Account cannot be recovered",
    },
    {
      type: "Store Data & Inventory",
      time: "Within 24 hours",
      impact: "All product and stock data lost",
    },
    {
      type: "Customer Information",
      time: "Within 24 hours",
      impact: "Customer database erased",
    },
    {
      type: "Reports & Analytics",
      time: "Within 24 hours",
      impact: "Historical data removed",
    },
  ];

  const data = [
    { id: "1", title: "Export all important data first" },
    { id: "2", title: "Cancel any active subscriptions" },
    { id: "3", title: "Notify your team members" },
    { id: "4", title: "Consider deactivating instead of deleting" },
  ];

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [comments, setComments] = useState<string>("");

  const [exported, setExported] = useState<boolean>(true);
  const [permanent, setPermanent] = useState<boolean>(true);
  const [irreversible, setIrreversible] = useState<boolean>(true);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ padding: 20 }} className="">
        <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

        <View className="items-center">
          <View className="w-96 h-24  bg-red-200 rounded-2xl px-5 justify-center   shadow-lg border-l-4 border-red-500">
            <Text className="text-black text-md font-bold">
              <Text className="font-extrabold">Warning:</Text> Account deletion
              is permanent and irreversible. All your data will be permanently
              deleted..
            </Text>
          </View>
        </View>

        {/* Title */}
        <Text className="text-purple-600 font-extrabold text-lg my-4">
          Retention By Data Type
        </Text>

        {/* Table Container */}
        <View className="border border-gray-200 rounded-xl overflow-hidden">
          {/* Header Row */}
          <View className="flex-row bg-gray-50 border-b border-gray-200">
            <Text className="flex-1 px-4 py-3 text-sm font-semibold text-purple-600">
              Data Type
            </Text>
            <Text className="flex-1 px-4 py-3 text-sm font-semibold text-purple-600">
              Deletion Timeframe
            </Text>
            <Text className="flex-1 px-4 py-3 text-sm font-semibold text-purple-600">
              Impact
            </Text>
          </View>

          {/* Data Rows */}
          {retentionData.map((item, index) => (
            <View
              key={index}
              className={`flex-row border-b border-gray-200 ${
                index === retentionData.length - 1 ? "border-b-0" : ""
              }`}
            >
              <Text className="flex-1 px-4 py-4 text-sm text-gray-600">
                {item.type}
              </Text>

              <Text className="flex-1 px-4 py-4 text-sm text-gray-600">
                {item.time}
              </Text>

              <Text className="flex-1 px-4 py-4 text-sm text-gray-600">
                {item.impact}
              </Text>
            </View>
          ))}
        </View>

        <View className="items-center my-5">
          <View className="w-96   bg-yellow-100 rounded-2xl py-4 px-5 justify-center   shadow-lg border-l-4 border-yellow-500">
            <Text className="text-black text-md font-extrabold">
              Before Deleting:
            </Text>
            <FlatList
              data={data}
              scrollEnabled={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="flex-row">
                  <Text className="mr-1 text-gray-700 text-lg font-extrabold ">
                    {"\u2022"}
                  </Text>
                  <Text className="text-lg my-[1px]">{item.title}</Text>
                </View>
              )}
            />
          </View>
        </View>
        {/* Email */}
        <View className="mb-5">
          <Text className="font-semibold text-gray-700 mb-2">
            Enter Email<Text className="text-red-500">*</Text>
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
          />
        </View>

        {/* Password */}
        <View className="mb-5">
          <Text className="font-semibold text-gray-700 mb-2">
            Password Confirmation<Text className="text-red-500">*</Text>
          </Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your Password"
            secureTextEntry
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
          />
        </View>

        {/* Reason */}
        <View className="mb-5">
          <Text className="font-semibold text-gray-700 mb-2">
            Reason for Deletion (optional)
          </Text>
          <TextInput
            value={reason}
            onChangeText={setReason}
            placeholder="Enter reason for deletion"
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800"
          />
        </View>

        {/* Additional Comments */}
        <View className="mb-6">
          <Text className="font-semibold text-gray-700 mb-2">
            Additional Comments
          </Text>
          <TextInput
            value={comments}
            onChangeText={setComments}
            placeholder="Tell us how we can improve"
            multiline
            textAlignVertical="top"
            className="border border-gray-300 rounded-lg px-4 py-3 h-32 text-gray-800"
          />
        </View>

        {/* Checkboxes */}
        <View className="gap-y-4">
          <View className="flex-row items-start gap-x-3">
            <Checkbox
              value={exported}
              onValueChange={setExported}
              color={exported ? "#7c3aed" : undefined}
            />
            <Text className="flex-1 text-sm text-gray-600 leading-5">
              I confirm that I have exported all important data I wish to keep
            </Text>
          </View>

          <View className="flex-row items-start gap-x-3">
            <Checkbox
              value={permanent}
              onValueChange={setPermanent}
              color={permanent ? "#7c3aed" : undefined}
            />
            <Text className="flex-1 text-sm text-gray-600 leading-5">
              I understand that all my data will be permanently deleted and
              cannot be recovered
            </Text>
          </View>

          <View className="flex-row items-start gap-x-3">
            <Checkbox
              value={irreversible}
              onValueChange={setIrreversible}
              color={irreversible ? "#7c3aed" : undefined}
            />
            <Text className="flex-1 text-sm text-gray-600 leading-5">
              I understand this action is irreversible and I accept all
              consequences
            </Text>
          </View>
        </View>
        <View className="items-center">
          <View className=" bg-red-500 py-4 flex-row w-96 justify-center gap-3 rounded-lg mt-4 ">
            <MaterialCommunityIcons name="delete" size={24} color="white" />
            <Text className="text-xl text-white font-semibold">
              Save retention setting
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
