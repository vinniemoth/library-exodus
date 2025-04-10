import Image from "next/image";
import Nav from "@/components/nav";
import data from "@/data/data.json";
import NowReading from "@/components/nowReading";

interface Book {
  id: number;
  image: string;
  name: string;
  subtitle: string;
  series: string;
  author: string;
  category: string;
}

interface BookPageProps {
  params: {
    id: string;
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params;

  const bookId = parseInt(id);
  const book = data.find((book) => book.id === bookId);

  if (!book) {
    return <div>Livro não encontrado</div>;
  }

  return (
    <div className="text-white flex">
      <Nav />
      <div className="flex flex-2 h-screen overflow-y-auto scrollbar-thin rounded-2xl">
        <div className="flex flex-col bg-zinc-900 text-white font-bold ml-2 my-2 rounded-2xl gap-5 w-full"></div>
      </div>
      <NowReading book={book}></NowReading>
    </div>
  );
}
