import { AuthContainer, Container, HomeAppBar } from "@/shared/ui";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Авторизация",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <AuthContainer>{children}</AuthContainer>
    </section>
  );
}
