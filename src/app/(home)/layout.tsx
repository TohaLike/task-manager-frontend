import { Container, HomeAppBar } from "@/shared/ui";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <HomeAppBar />
      <Container>{children}</Container>
    </section>
  );
}
