import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="flex max-h-screen">
      <Nav />
      <div className="bg-zinc-800 m-2 rounded-2xl text-white flex-2">
        Content
      </div>
    </div>
  );
}
