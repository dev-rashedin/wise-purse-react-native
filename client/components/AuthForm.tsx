// AuthForm.tsx
import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image as RNImage,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import { authStyles } from "../assets/styles/auth.styles";
import { COLORS } from "@/constants/colors";
import SignUpIllustration from "@/assets/images/revenue-i2.png";
import SignInIllustration from "@/assets/images/revenue-i4.png";
import { handleError } from "@/lib/utils";

export default function AuthForm({
  mode,
  onSubmit,
  onFooterAction,
  enableVerification = false,
}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [error, setError] = useState("");

  const handlePress = async () => {
    try {
      if (mode === "sign-up" && enableVerification && pendingVerification) {
        await onSubmit(email, password, code);
      } else {
        await onSubmit(email, password);
        if (mode === "sign-up" && enableVerification)
          setPendingVerification(true);
      }
    } catch (err: any) {
      handleError(err, setError);
  };
}

  // Verification UI
  if (mode === "sign-up" && pendingVerification && enableVerification) {
    return (
      <View style={authStyles.verificationContainer}>
        <Text style={authStyles.verificationTitle}>Verify your email</Text>
        {/* Error box */}
        {error ? (
          <View style={authStyles.errorBox}>
            <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
            <Text style={authStyles.errorText}>{error}</Text>
            <TouchableOpacity onPress={() => setError("")}>
              <Ionicons name="close" size={20} color={COLORS.textLight} />
            </TouchableOpacity>
          </View>
        ) : null}
        {/* Code input */}
        <TextInput
          style={[authStyles.verificationInput, error && authStyles.errorInput]}
          value={code}
          placeholder="Enter verification code"
          placeholderTextColor="#9A8478"
          onChangeText={setCode}
        />
        <TouchableOpacity onPress={handlePress} style={authStyles.button}>
          <Text style={authStyles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid
      enableAutomaticScroll
      extraScrollHeight={100}
    >
      <View style={authStyles.container}>
        <RNImage
          source={mode === "sign-up" ? SignUpIllustration : SignInIllustration}
          style={authStyles.illustration}
        />
        <Text style={authStyles.title}>
          {mode === "sign-up" ? "Create Account" : "Welcome Back"}
        </Text>

        {error ? (
          <View style={authStyles.errorBox}>
            <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
            <Text style={authStyles.errorText}>{error}</Text>
            <TouchableOpacity onPress={() => setError("")}>
              <Ionicons name="close" size={20} color={COLORS.textLight} />
            </TouchableOpacity>
          </View>
        ) : null}

        <TextInput
          style={[authStyles.input, error && authStyles.errorInput]}
          autoCapitalize="none"
          placeholder="Enter email"
          placeholderTextColor="#9A8478"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[authStyles.input, error && authStyles.errorInput]}
          placeholder="Enter password"
          placeholderTextColor="#9A8478"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={authStyles.button} onPress={handlePress}>
          <Text style={authStyles.buttonText}>
            {mode === "sign-up" ? "Sign Up" : "Sign In"}
          </Text>
        </TouchableOpacity>

        <View style={authStyles.footerContainer}>
          <Text style={authStyles.footerText}>
            {mode === "sign-up"
              ? "Already have an account?"
              : "Don't have an account?"}
          </Text>
          <TouchableOpacity onPress={onFooterAction}>
            <Text style={authStyles.linkText}>
              {mode === "sign-up" ? "Sign in" : "Sign up"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
