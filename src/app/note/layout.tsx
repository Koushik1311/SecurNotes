import { Sono } from "next/font/google";
import LeftMenu from "@/components/note/left-bar/LeftMenu";

const sono = Sono({ subsets: ["latin"] });

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row">
      <LeftMenu />
      <div className="border-l border-slate-200 ml-5" />
      <div className={`${sono.className} flex-1`}>{children}</div>
    </div>
  );
}
