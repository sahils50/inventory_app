import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function PrivacyPolicy() {
  const listItems0 = [
    "Provide and maintain our inventory management services",
    "Process transactions and generate reports",
    "Improve app functionality and user experience",
    "Send important updates and security alerts",
    "Prevent fraud and ensure security",
    "Comply with legal obligations",
    "Provide customer support",
  ];

  const listItems1 = [
    "End-to-end encryption for sensitive data ",
    "Regular security audits and penetration testing",
    "Access controls and authentication protocols",
    "Secure data centers with 24/7 monitoring",
    "Regular backups and disaster recovery plans",
  ];

  const listItems2 = [
    "Access your personal data",
    "Correct inaccurate data",
    "Request data deletion",
    "Object to data processing",
    "Data portability",
    "Withdraw consent",
    "Lodge complaints with authorities",
  ];

  const listItems3 = [
    "Email: privacy@shopsmart.com",
    "Data Protection Officer: dpo@shopsmart.com",
    "Address: ShopSmart Inc., 123 Privacy Lane, San Francisco, CA 94107",
    "Phone: +91 82732 12123",
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      <ScrollView className="flex-1">
        <View className=" items-center pt-8 ">
          <View className="w-96 h-28 bg-purple-200 rounded-2xl px-5 justify-center  mb-6 shadow-lg border-l-4 border-purple-500">
            <Text className="text-black text-md font-bold">
              <Text className="font-extrabold">Important:</Text> This Privacy
              Policy explains how ShopSmart collects, uses, and protects your
              personal information when you use our services.
            </Text>
          </View>
        </View>

        <View className=" px-5">
          <Text className="text-xl font-extrabold text-purple-500">
            1. Information We Collect
          </Text>
          <Text className="mt-0 ml-4 mb-4 text-sm font-medium text-gray-500">
            We collect the following types of information:
          </Text>
        </View>

        <View className=" items-center ">
          <View className="w-96 h-24 bg-blue-200 rounded-2xl px-5 justify-center  mb-3 shadow-lg border-l-4 border-blue-500">
            <Text className="text-black text-md font-bold">
              <Text className="font-extrabold">Personal Information:</Text>
               Name, email, phone number, business details, address, and payment
              information.
            </Text>
          </View>

          <View className="w-96 h-24 bg-blue-200 rounded-2xl px-5 justify-center  mb-3 shadow-lg border-l-4 border-blue-500">
            <Text className="text-black text-md font-bold">
              <Text className="font-extrabold">Business Data:</Text>  Inventory
              information, sales records, customer data, supplier information,
              and financial transactions..
            </Text>
          </View>

          <View className="w-96 h-20 bg-blue-200 rounded-2xl px-5 justify-center  mb-3 shadow-lg border-l-4 border-blue-500">
            <Text className="text-black text-md font-bold">
              <Text className="font-extrabold">Device Information::</Text>Device
              type, operating system, IP address, and mobile carrier.
            </Text>
          </View>

          <View className="w-96 h-24 bg-blue-200 rounded-2xl px-5 justify-center  mb-3 shadow-lg border-l-4 border-blue-500">
            <Text className="text-black text-md font-bold">
              <Text className="font-extrabold">Usage Data:</Text>How you
              interact with our app, features used, time spent, and performance
              metrics
            </Text>
          </View>
        </View>

        <View className="px-5">
          <Text className="text-xl font-extrabold text-purple-500 mb-3">
            2. How We Use Your Information
          </Text>
          <View className="p-2 bg ">
            {listItems0.map((item, index) => (
              <View key={index} className="flex-row items-start mb-2">
                <Text className="mr-3 text-gray-700 text-base leading-relaxed">
                  {"\u2022"}
                </Text>
                <Text className="flex-1 text-gray-800 text-md leading-relaxed">
                  {item}
                </Text>
              </View>
            ))}
          </View>
          <Text className="text-xl font-extrabold text-purple-500 mb-3">
            3. Data Security
          </Text>
          <View className="p-2 bg ">
            {listItems1.map((item, index) => (
              <View key={index} className="flex-row items-start mb-2">
                <Text className="mr-3 text-gray-700 text-base leading-relaxed">
                  {"\u2022"}
                </Text>
                <Text className="flex-1 text-gray-800 text-md leading-relaxed">
                  {item}
                </Text>
              </View>
            ))}
          </View>

          <Text className="text-xl font-extrabold text-purple-500 mb-3">
            4. Your Rights
          </Text>
          <View className="p-2 bg ">
            {listItems2.map((item, index) => (
              <View key={index} className="flex-row items-start mb-2">
                <Text className="mr-3 text-gray-700 text-base leading-relaxed">
                  {"\u2022"}
                </Text>
                <Text className="flex-1 text-gray-800 text-md leading-relaxed">
                  {item}
                </Text>
              </View>
            ))}
          </View>

          <Text className="text-xl font-extrabold text-purple-500 mb-3">
            5. Contact Us
          </Text>
          <View className="p-2 bg ">
            {listItems3.map((item, index) => (
              <View key={index} className="flex-row items-start mb-2">
                <Text className="mr-3 text-gray-700 text-base leading-relaxed">
                  {"\u2022"}
                </Text>
                <Text className="flex-1 text-gray-800 text-md leading-relaxed">
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View className=" flex-row justify-center mb-3">
         <Ionicons name="time-outline" size={24} color= 'gray'  className="pt-[2px]" />
          <Text className="text-lg font-medium text-gray-500"> Last updated: January 15, 2024</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// huzaifa working
