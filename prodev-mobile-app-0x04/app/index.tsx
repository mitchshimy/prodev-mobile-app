import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/_mainstyle";
import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.logoContainer}>
            <Image source={HEROLOGO} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find your favorite place here</Text>
            <View style={styles.titleSubTextContainer}>
              <Text style={styles.titleSubText}>The best prices for over 2 million properties worldwide</Text>
            </View>
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push("/join")}>
              <Text style={styles.buttonPrimaryText}>Join now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("/signin")}>
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
