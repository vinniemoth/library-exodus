import Image from "next/image";
import Nav from "@/components/nav";
import books from "@/data/books.json";
import NowReading from "@/components/nowReading";
import PdfViewer from "@/components/pdfViewer";

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
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <div>Livro não encontrado</div>;
  }

  return (
    <div className="text-white flex">
      <Nav />
      <div className="flex flex-2 w-screen h-screen overflow-y-auto  scrollbar-thin rounded-2xl">
        <div className="bg-zinc-900 m-2 text-white font-bold rounded-2xl gap-5 w-full h-full">
          <PdfViewer file={book.driveUrl}></PdfViewer>
        </div>
      </div>
      <NowReading book={book}></NowReading>
    </div>
  );
}
