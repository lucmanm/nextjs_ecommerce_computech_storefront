"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useLocale } from "next-intl";
import Image from "next/image";

export const LoginForm = () => {
  const locale = useLocale();
  return (
    <section>
      <Button
        className="flex items-center justify-center gap-4 bg-blue-950 text-base hover:bg-blue-600"
        onClick={() =>
          signIn("google", { redirectTo: `/${locale}/my-account` })
        }
      >
        <div className="relative h-6 w-6">
          <Image
            src="/social-media/1298745_google_brand_branding_logo_network_icon.svg"
            alt="google icon"
            fill
          />
        </div>
        <span>Login with Google</span>
      </Button>
    </section>
  );
};
