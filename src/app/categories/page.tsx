import Nav from "@/components/nav";
import categories from "@/data/categories.json";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="flex h-screen">
      <Nav active="categories" />
      <div className="flex flex-2 w-full">
        <div className="w-full grid grid-cols-4 bg-zinc-800 m-2 rounded-2xl text-white p-5 gap-5 overflow-auto">
          {categories.map((categoria) => {
            return (
              <Link
                href={`/categories/#`}
                key={categoria.id}
                className="font-bold p-5 gap-2 h-40 bg-zinc-900 hover:bg-zinc-700 cursor-pointer rounded-xl"
              >
                <h2>{categoria.name}</h2>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
