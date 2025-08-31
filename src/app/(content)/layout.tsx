import Header from "@/components/organisms/Header";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="w-full max-w-xl m-auto h-full p-5">{children}</div>
    </>
  );
}
