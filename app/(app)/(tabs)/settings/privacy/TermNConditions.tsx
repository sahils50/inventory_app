import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TermNConditions() {
  const accountRegistration = [
    "Provide accurate and complete information",
    "Maintain the security of your account credentials",
    "Notify us immediately of any unauthorized access",
    "Be at least 18 years old or have parental consent",
    "Not create accounts for others without permission",
  ];

  const serviceDescription = [
    "Inventory tracking and management",
    "Sales and purchase order processing",
    "Customer and supplier management",
    "Reporting and analytics",
    "Multi-store management",
    "Mobile access and offline capabilities",
  ];

  const userResponsibilities = [
    "Use the service only for lawful purposes",
    "Not engage in fraudulent activities",
    "Not interfere with service operation",
    "Not attempt to reverse engineer the software",
    "Not use the service to store illegal content",
    "Comply with all applicable laws and regulations",
  ];

  const intellectualProperty = [
    "Software, code, and algorithms",
    "User interface and design elements",
    "Documentation and training materials",
    "Branding and trademarks",
  ];

  const limitationOfLiability = [
    "Business losses or damages",
    "Indirect or consequential damages",
    "Data loss not caused by our negligence",
    "Third-party service disruptions",
  ];

  const terminationConditions = [
    "You violate these terms",
    "Required by law",
    "You request account deletion",
    "Non-payment for 30 days (paid plans)",
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      <ScrollView className="flex-1  px-4 ">
        <View className="my-6 items-center">
        <View className="w-96 h-28 bg-purple-200 rounded-2xl px-5 justify-center    shadow-lg border-l-4 border-amethyst">
          <Text className="text-black text-md font-bold">
            <Text className="font-extrabold">Important:</Text> By using
            ShopSmart, you agree to these Terms of Service. Please read them
            carefully.
          </Text>
        </View>
        </View>

        {/* 1. Acceptance of Terms */}
        <Text className="text-amethyst font-extrabold text-base mb-2">
          1. Acceptance of Terms
        </Text>
        <Text className="text-gray-600 text-sm mb-6 leading-5">
          By accessing or using ShopSmart services, you agree to be bound by
          these Terms of Service and our Privacy Policy. If you disagree with
          any part, you may not access our services.
        </Text>

        {/* 2. Account Registration */}
        <Text className="text-amethyst font-extrabold text-base mb-2">
          2. Account Registration
        </Text>
        <Text className="text-gray-600 text-sm mb-2">You must:</Text>

        <View className="ml-3 mb-6">
          {accountRegistration.map((item, index) => (
            <View key={index} className="flex-row mb-1">
              <Text className="text-gray-600 mr-2">{"\u2022"}</Text>
              <Text className="text-gray-600 text-sm flex-1 leading-5">
                {item}
              </Text>
            </View>
          ))}
        </View>

        {/* 3. Service Description */}
        <Text className="text-amethyst font-extrabold text-base mb-2">
          3. Service Description
        </Text>
        <Text className="text-gray-600 text-sm mb-2">
          ShopSmart provides inventory management solutions including:
        </Text>

        <View className="ml-3 mb-6">
          {serviceDescription.map((item, index) => (
            <View key={index} className="flex-row mb-1">
              <Text className="text-gray-600 mr-2">{"\u2022"}</Text>
              <Text className="text-gray-600 text-sm flex-1 leading-5">
                {item}
              </Text>
            </View>
          ))}
        </View>

        {/* 4. User Responsibilities */}
        <Text className="text-amethyst font-extrabold text-base mb-2">
          4. User Responsibilities
        </Text>
        <Text className="text-gray-600 text-sm mb-2">You agree to:</Text>

        <View className="ml-3 mb-6">
          {userResponsibilities.map((item, index) => (
            <View key={index} className="flex-row mb-1">
              <Text className="text-gray-600 mr-2">{"\u2022"}</Text>
              <Text className="text-gray-600 text-sm flex-1 leading-5">
                {item}
              </Text>
            </View>
          ))}
        </View>

        {/* 5. Intellectual Property */}
        <Text className="text-amethyst font-extrabold text-base mb-2">
          5. Intellectual Property
        </Text>

        <View className="ml-3 mb-1 ">
          {intellectualProperty.map((item, index) => (
            <View key={index} className="flex-row mb-1 ">
              <Text className="text-gray-600 mr-2">{"\u2022"}</Text>
              <Text className="text-gray-600 text-sm flex-1 leading-5">
                {item}
              </Text>
            </View>
          ))}
          <Text className="text-gray-600 text-sm mt-2 leading-5">
            You retain rights to your business data.
          </Text>
        </View>

        {/* 6. Limitation of Liability */}
        <Text className="text-amethyst font-extrabold text-base mb-2">
          6. Limitation of Liability
        </Text>

        <View className="flex-row bg-yellow-100 rounded-xl border-l-4  border-yellow-500 mb-6">
          {/* Left accent bar */}
         

          <View className="flex-1 px-4 py-3">
            <Text className="text-gray-700 text-sm mb-2 leading-5">
              <Text className="font-semibold">Disclaimer: </Text>
              ShopSmart is provided “as is” without warranties of any kind. We
              are not liable for:
            </Text>

            {limitationOfLiability.map((item, index) => (
              <View key={index} className="flex-row mb-1">
                <Text className="text-gray-600 mr-2">{"\u2022"}</Text>
                <Text className="text-gray-600 text-sm flex-1 leading-5">
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* 7. Termination */}
        <Text className="text-amethyst font-extrabold text-base mb-2">
          7. Termination
        </Text>

        <Text className="text-gray-600 text-sm mb-2">
          We may terminate your account if:
        </Text>

        <View className="ml-3 mb-6">
          {terminationConditions.map((item, index) => (
            <View key={index} className="flex-row mb-1">
              <Text className="text-gray-600 mr-2">{"\u2022"}</Text>
              <Text className="text-gray-600 text-sm flex-1 leading-5">
                {item}
              </Text>
            </View>
          ))}
        </View>

        <View className=" flex-row justify-center mb-3">
         <Ionicons name="time-outline" size={24} className="text-gray-500  pt-[2px]" />
          <Text className="text-lg font-medium text-gray-500"> Last updated: January 15, 2024</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
