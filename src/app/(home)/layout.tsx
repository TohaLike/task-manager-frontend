import { Container, HomeAppBar } from "@/shared/ui";
import { Metadata } from "next";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "Домашняя страница",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Provider>
        <HomeAppBar />
        <Container>{children}</Container>
      </Provider>
    </section>
  );
}
