import Link from "next/link";
import {
  FaMagnifyingGlass,
  FaHouse,
  FaScroll,
  FaHeart,
  FaRocket,
  FaDragon,
  FaRedhat,
  FaHourglassHalf,
  FaUserPen,
  FaLandmarkDome,
  FaPeopleGroup,
  FaBrain,
  FaSackDollar,
  FaAtom,
  FaHandsPraying,
  FaPalette,
  FaUtensils,
  FaGraduationCap,
} from "react-icons/fa6";

export default function Nav() {
  return (
    <nav className="h-screen overflow-y-auto scrollbar-thin">
      <div className="flex flex-col bg-zinc-900 text-white font-bold m-2 p-5 rounded-2xl gap-5">
        <Link href="/" className="flex items-center gap-5">
          <FaHouse size={25} />
          Home
        </Link>
        <Link
          href="/"
          className="flex items-center text-zinc-400 gap-5 hover:text-zinc-50"
        >
          <FaMagnifyingGlass size={25} />
          Search
        </Link>
      </div>
      <div className="flex flex-col bg-zinc-900 text-zinc-400 font-bold m-2 p-5 rounded-2xl gap-5">
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaScroll size={25} />
          Literatura Clássica
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaHeart size={25} />
          Romance
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaRocket size={25} />
          Ficção Científica
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaDragon size={25} />
          Fantasia
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaRedhat size={25} />
          Suspense e Mistério
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaHourglassHalf size={25} />
          Ficção Histórica
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaUserPen size={25} />
          Biografia & Memórias
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaLandmarkDome size={25} />
          História
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaBrain size={25} />
          Filosofia
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaPeopleGroup size={25} />
          Sociologia
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaSackDollar size={25} />
          Negócios & Economia
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaAtom size={25} />
          Ciência & Tecnologia
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaHandsPraying size={25} />
          Religião & Espiritualidade
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaPalette size={25} />
          Artes & Cultura
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaUtensils size={25} />
          Gastronomia
        </Link>
        <Link
          href="#"
          className="flex items-center gap-5 hover:text-zinc-50 cursor-pointer"
        >
          <FaGraduationCap size={25} />
          Didáticos & Acadêmicos
        </Link>
      </div>
    </nav>
  );
}
