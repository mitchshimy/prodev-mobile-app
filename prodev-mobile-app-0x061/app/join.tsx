import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGO } from "@/constants";
import { styles } from "@/styles/_join";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Join() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconsection}>
          <Image source={HEROLOGO} />
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Join Now</Text>
          <Text style={styles.subText}>Create your account below</Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput style={styles.formControl} placeholder="Enter email" keyboardType="email-address" />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput style={styles.passwordControl} placeholder="Enter password" secureTextEntry />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Sign Up with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Sign Up with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text style={styles.signupSubTitleText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
