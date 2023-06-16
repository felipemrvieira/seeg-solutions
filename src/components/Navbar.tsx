import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white pt-3 pb-3 pl-11 pr-11">
            <div className="flex items-center flex-shrink-0 text-white mr-8">
                <Link href="/solutions" className=" pt-1 pb-1 mr-4">
                    <Image
                        src="/logo-seeg.png"
                        alt="Vercel Logo"
                        className=""
                        width={160}
                        height={90}
                        priority
                    />
                </Link>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link
                        href="/solutions"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-700 mr-4 text-base"
                    >
                        Visualizar todas as soluções
                    </Link>
                </div>
                <div>
                    <Link
                        href="/about"
                        className="inline-block text-sm leading-6 bg-orange-400 rounded-3xl text-white uppercase hover:text-gray-950 mt-4 lg:mt-0 pt-2 pb-2 pl-7 pr-7"
                    >
                        Voltar para a plataforma de emissões
                    </Link>
                </div>
            </div>
        </nav>
    );
}
