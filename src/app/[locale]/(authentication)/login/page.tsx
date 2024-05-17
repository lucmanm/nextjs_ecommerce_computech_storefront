import { Container } from "@/components/Container";
import { LoginForm } from "../_components/LoginForm";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { useLocale } from "next-intl";

const Login = async () => {
  const locale = useLocale();
  
  const session = await auth();
  session && redirect(`/${locale}/my-account`);

  return (
    <Container className="flex h-full items-center justify-center">
      <LoginForm />
    </Container>
  );
};

export default Login;
