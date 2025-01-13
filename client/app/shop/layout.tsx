import Sidebar from "@/components/sidebar";

export default function ShoeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-100 flex px-[350px] py-[50px] space-x-10">
      <Sidebar />
      {children}
    </div>
  );
}
