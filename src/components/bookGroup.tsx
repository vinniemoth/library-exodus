import Link from "next/link";
import data from "../data/data.json";
import Image from "next/image";

interface BookGroupProps {
  category: string;
}

export default function BookGroup({ category }: BookGroupProps) {
  return (
    <div>
      <h1 className="font-bold mb-1">{category}</h1>
      <div className="flex gap-5">
        {data
          .filter((data) => data.category === category)
          .map((data) => (
            <Link
              href={`/book/${data.id}`}
              key={data.id}
              className="flex flex-col w-35 cursor-pointer hover:bg-zinc-700 transition-colors duration-300 p-3 rounded-2xl gap-2"
            >
              <Image
                src={data.image}
                width={120}
                height={180}
                alt=""
                className="rounded-lg"
              ></Image>
              <div className="flex flex-col">
                <p className="text-sm flex-wrap">{data.name}</p>
                <p className="text-xs text-zinc-400">{data.author}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
