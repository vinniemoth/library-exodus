import BookGroup from "@/components/bookGroup";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Nav active="home" />
      <div className="bg-zinc-800 m-2 rounded-2xl text-white flex flex-col flex-2 p-5 gap-5 overflow-auto">
        <BookGroup category="Fantasia e Terror"></BookGroup>
        <BookGroup category="Biografias e Histórias Reais"></BookGroup>
        <BookGroup category="Política, Filosofia e Ciências Sociais"></BookGroup>
      </div>
    </div>
  );
}
