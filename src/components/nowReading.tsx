"use client";

import { FastAverageColor } from "fast-average-color";
import authors from "@/data/authors.json";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Book {
  id: number;
  image: string;
  name: string;
  subtitle: string;
  series: string;
  author: string;
  category: string;
}

const DEFAULT_COLOR = "#9f9fa9";
const DEFAULT_AUTHOR_IMAGE =
  "https://m.media-amazon.com/images/I/01Kv-W2ysOL._SY230_CR0%2C0%2C230%2C230_.png";

export default function NowReading({ book }: { book: Book }) {
  const author = authors.find((author) => author.name === book.author);

  const [color, setColor] = useState(DEFAULT_COLOR);
  const fac = new FastAverageColor();

  useEffect(() => {
    let isMounted = true;

    const getColors = async () => {
      try {
        const color = await fac.getColorAsync(book.image);

        if (isMounted) {
          setColor(color.hex);
        }
      } catch (error) {
        console.error("Erro ao extrair cores:", error);
        if (isMounted) setColor(DEFAULT_COLOR);
      }
    };

    getColors();

    return () => {
      isMounted = false;
      fac.destroy();
    };
  }, [book.image]);

  return (
    <div className="w-70 h-screen overflow-y-auto scrollbar-thin ">
      <div className="m-2 p-2 rounded-2xl bg-zinc-900">
        <Image
          width={300}
          height={250}
          alt=""
          src={book.image}
          draggable="false"
          className="rounded-2xl select-none"
        />
        <div className="py-3">
          <h1 className="font-bold">{book.name}</h1>
          <h1 className="text-sm cursor-pointer hover:underline text-zinc-400 w-fit">
            {book.author}
          </h1>
        </div>
        <div className="text-zinc-900">
          <Image
            alt={book.author}
            src={
              author?.image && author?.image !== "none"
                ? author.image
                : DEFAULT_AUTHOR_IMAGE
            }
            width={243}
            height={200}
            quality={100}
            draggable="false"
            className="object-cover rounded-t-xl"
          />
          <div className="bg-zinc-800 text-white rounded-b-xl p-2 text-sm">
            {author?.desc}
          </div>
        </div>
      </div>
    </div>
  );
}
