import { User as AuthUser } from "next-auth";
import { LogOutIcon, User } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "../ui/button";
import { signIn, signOut } from "@/lib/auth";

type TSessionProps = {
  user: AuthUser | undefined;
};

export const SignInSignOutButton: React.FC<TSessionProps> = ({ user }) => {
  const locale = useLocale();
  // const router = useRouter();
  return (
    <>
      {user ? (
        <form
          action={async () => {
            "use server";
            await signOut({redirectTo: "/"});
          }}
        >
          <Button className="inset-0 flex space-x-2" type="submit">
            <span>
              <LogOutIcon />
            </span>
            <span>Sign Out</span>
          </Button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button className="inset-0 flex space-x-2" type="submit">
            <span>
              <User />
            </span>
            <span>Sign In</span>
          </Button>
        </form>
      )}
    </>
  );
};
