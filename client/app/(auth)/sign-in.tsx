import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import AuthForm from "@/components/AuthForm";
import SignInIllustration from "@/assets/images/revenue-i4.png";

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const handleSignIn = async (email: string, password: string) => {
    if (!isLoaded) return;

    const attempt = await signIn.create({ identifier: email, password });
    if (attempt.status === "complete") {
      await setActive({ session: attempt.createdSessionId });
      router.replace("/");
    }
  };

  return (
    <AuthForm
      mode="sign-in"
      illustration={SignInIllustration}
      title="Welcome Back"
      onSubmit={handleSignIn}
      footerText="Don't have an account?"
      footerActionText="Sign up"
      onFooterAction={() => router.push("/sign-up")}
    />
  );
}
