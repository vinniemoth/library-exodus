"use client";

import { FastAverageColor } from "fast-average-color";
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

export default function NowReading({ book }: { book: Book }) {
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
      <div className="m-2 p-2 rounded-2xl bg-zinc-800">
        <Image
          width={300}
          height={250}
          alt=""
          src={book.image}
          className="rounded-2xl"
        />
        <div className="py-3">
          <h1 className="font-bold">{book.name}</h1>
          <h1 className="text-sm text-zinc-400">{book.author}</h1>
        </div>
        <div className="text-zinc-900">
          <div
            style={{
              background: `${color}`,
            }}
            className="rounded-md rounded-b-none w-full h-50 font-bold p-2"
          >
            Sobre o Autor
          </div>
          <div className=" bg-zinc-300 rounded-b-md p-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum
            repellat aut maxime harum? At doloribus quam laborum eligendi rerum
            cum ipsam eos. Voluptate, maiores. Fugiat at deleniti animi maxime!
          </div>
        </div>
      </div>
    </div>
  );
}
