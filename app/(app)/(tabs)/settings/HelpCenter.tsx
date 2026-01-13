import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
export default function HelpCenter() {
  return (
    <View className="flex-1 bg-gray-50 px-5 pt-8 pb-10">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Popular Articles Section */}
        <View className="mb-10">
          <View className="flex-row items-center mb-4">
            <Ionicons name="flame-outline" size={22} color="#8b5cf6" />
            <Text className="text-lg font-semibold text-violet-700 ml-2">
              Popular Articles
            </Text>
          </View>

          <View className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <ArticleItem
              title="How to Set Up Your Store"
              description="Complete guide to setting up your shopmart store for the first time."
              icon="storefront-outline"
            />

            <View className="h-[1px] bg-gray-200 mx-5" />

            <ArticleItem
              title="Managing Stock Levels"
              description="Learn how to track inventory and set up low stock alerts."
              icon="layers-outline"
            />

            <View className="h-[1px] bg-gray-200 mx-5" />

            <ArticleItem
              title="Backup & Data Recovery"
              description="Protect your business data with regular backups."
              icon="cloud-upload-outline"
              last
            />
          </View>
        </View>

        <View className="mx-5 my-6 bg-white rounded-3xl p-7 shadow-xl shadow-purple-100 border border-purple-50 items-center">
          {/* Icon area */}
          <View className="bg-purple-100 rounded-full p-5 mb-6">
            <Text className="text-5xl">✋</Text>
            {/* or use real icon: <MaterialIcons name="support-agent" size={48} color="#7c3aed" /> */}
          </View>

          <Text className="text-2xl font-bold text-gray-800 mb-3">
            Still Need Help?
          </Text>

          <Text className="text-gray-600 text-center text-base leading-6 mb-8 px-4">
            Can't find what you're looking for?{"\n"}
            Our support team is ready to help.
          </Text>

          <TouchableOpacity
            activeOpacity={0.85}
            className="bg-purple-600 w-full max-w-[320px] py-4 rounded-2xl items-center shadow-lg shadow-purple-600/30"
            onPress={() => console.log("Contact support tapped")}
          >
            <Text className="text-white text-lg font-semibold tracking-wide">
              Contact Support
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// Reusable Article Item Component
type ArticleItemProps = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  last?: boolean;
};

function ArticleItem({
  title,
  description,
  icon,
  last = false,
}: ArticleItemProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex-row items-center p-5">
      <View className="bg-violet-100 p-3 rounded-xl mr-4">
        <Ionicons name={icon} size={26} color="#8b5cf6" />
      </View>

      <View className="flex-1">
        <Text className="font-medium text-gray-900 text-base">{title}</Text>
        <Text className="text-gray-600 text-sm mt-1 leading-5">
          {description}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
    </TouchableOpacity>
  );
}
