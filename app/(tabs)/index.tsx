import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
                <Link href="/onboarding">
                    <Text>Onboarding</Text>
                </Link>
                <Link href="/(auth)/sign-in">
                    <Text>Sign in</Text>
                </Link>
                <Link href="/(auth)/sign-up">
                    <Text>Sign up</Text>
                </Link>
            </Text>

        </SafeAreaView>
    );
}