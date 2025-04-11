import Link from "next/link";
import books from "../data/books.json";
import Image from "next/image";

interface BookGroupProps {
  category: string;
}

export default function BookGroup({ category }: BookGroupProps) {
  return (
    <div>
      <h1 className="font-bold mb-1">{category}</h1>
      <div className="flex gap-5">
        {books
          .filter((book) => book.category === category)
          .map((book) => (
            <Link
              href={`/book/${book.id}`}
              key={book.id}
              className="flex flex-col w-35 cursor-pointer hover:bg-zinc-700 transition-colors duration-300 p-3 rounded-2xl gap-2"
            >
              <Image
                src={book.image}
                width={120}
                height={180}
                alt=""
                className="rounded-lg"
              ></Image>
              <div className="flex flex-col">
                <p className="text-sm flex-wrap">{book.name}</p>
                <p className="text-xs text-zinc-400">{book.author}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
