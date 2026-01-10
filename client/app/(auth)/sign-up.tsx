import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import AuthForm from "@/components/AuthForm";


export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const handleSignUp = async (email: string, password: string, code?: string) => {
    if (!isLoaded) return;

    if (code) {
      // verification step
      const attempt = await signUp.attemptEmailAddressVerification({ code });
      if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId });
        router.replace("/");
      }
    } else {
      // initial sign-up
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      // AuthForm will automatically switch to verification UI
    }
  };

  return (
    <AuthForm
      mode="sign-up"
      onSubmit={handleSignUp}
      onFooterAction={() => router.back()}
      enableVerification
    />
  );
}
