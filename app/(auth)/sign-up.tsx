import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const SignUp = () => {
    return (
        <View>
            <Text>sign-up</Text>
            <Link href="/(auth)/sign-in">
                <Text>Sign in</Text>
            </Link>
        </View>
    )
}

export default SignUp