import { Container } from "@/components/Container";
import SideBarMenu from "./_components/side-menu";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { useLocale } from "next-intl";

export default async function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale()
  const session = await auth()
  session === null && redirect(`/${locale}/login`)
  
  return (
    <Container className="flex flex-col my-4 gap-2  lg:flex-row mx-4 max-h-full">
      <div className="basis-1/4">
        <SideBarMenu />
      </div>
      <div className="basis-3/4">{children}</div>
    </Container>
  );
}
