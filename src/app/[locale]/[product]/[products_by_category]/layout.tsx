export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="container my-4">{children}</section>;
}
