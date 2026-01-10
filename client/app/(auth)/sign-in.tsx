import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import AuthForm from "@/components/AuthForm";


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
      onSubmit={handleSignIn}
      onFooterAction={() => router.push("/sign-up")}
    />
  );
}
