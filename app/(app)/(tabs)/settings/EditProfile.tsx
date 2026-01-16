import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function ProfileEditScreen() {
  return (
    <ScrollView
      className="flex-1 px-5"
      contentContainerStyle={{
        paddingBottom: 10, 
      }}
      keyboardShouldPersistTaps="handled" 
      showsVerticalScrollIndicator={false}
    >
      <View className="items-center mb-10">
        <View className="relative">
          <View className="w-28 h-28 bg-purple-100 rounded-full items-center justify-center border-4 border-white shadow-lg">
            <Ionicons name="person" size={52} color="#7c3aed" />
          </View>
          <TouchableOpacity
            className={`
                absolute bottom-0 right-0 
                bg-purple-600 
                w-10 h-10 
                rounded-full 
                items-center justify-center 
                border-4 border-white
                shadow-md
              `}
          >
            <Ionicons name="camera" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <Text className="mt-3 text-base font-medium text-gray-600">
          Change Photo
        </Text>
      </View>

      <View className="space-y-6">
        <View>
          <Text className="text-gray-700 font-medium mb-1.5">Full Name*</Text>
          <TextInput
            value="Rajesh Kumar"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-base"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Email */}
        <View>
          <Text className="text-gray-700 font-medium mb-1.5">
            Email Address*
          </Text>
          <TextInput
            value="rajesh123@gmail.com"
            keyboardType="email-address"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-base"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Phone Number */}
        <View>
          <Text className="text-gray-700 font-medium mb-1.5">
            Phone Number*
          </Text>
          <TextInput
            value="1234567890"
            keyboardType="phone-pad"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-base"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Password (with change action) */}
        <View>
          <Text className="text-gray-700 font-medium mb-1.5">Password</Text>
          <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-4">
            <TextInput
              value="••••••••••"
              secureTextEntry
              className="flex-1 py-3.5 text-base"
              editable={false} // usually not editable directly
            />
            <TouchableOpacity className="py-3 pl-2">
              <Text className="text-purple-600 font-medium">Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Store Name */}
        <View>
          <Text className="text-gray-700 font-medium mb-1.5">Store Name*</Text>
          <TextInput
            value="Dana Bazar"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-base"
          />
        </View>

        {/* GSTIN */}
        <View>
          <Text className="text-gray-700 font-medium mb-1.5">GSTIN Number</Text>
          <TextInput
            value="12JAB488972323H2Z8"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-base"
            autoCapitalize="characters"
          />
        </View>

        {/* Shop Address */}
        <View>
          <Text className="text-gray-700 font-medium mb-1.5">Shop Address</Text>
          <TextInput
            value="123 Main Street, Mumbai, Maharashtra 400001"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
            className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-base min-h-[90px]"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          className={`
              bg-purple-600 
              rounded-xl 
              py-4 
              mt-8 
              items-center 
              flex-row justify-center 
              gap-2
              shadow-md shadow-purple-500/30
              active:bg-purple-700
            `}
        >
          <Ionicons name="save-outline" size={22} color="white" />
          <Text className="text-white font-semibold text-lg">Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
