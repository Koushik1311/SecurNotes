import LeftMenu from "@/components/note/left-bar/LeftMenu";

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row space-x-5">
      <LeftMenu />
      <div className="border-l border-slate-200" />
      <div className="flex-1">{children}</div>
    </div>
  );
}
