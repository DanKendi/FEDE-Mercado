import Link from "next/link";

function Header() {
    return (
        <>
            <header className="bg-blue-600 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">PROJETO MERCADO</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li> <Link href="/">HOME</Link> </li>
                            <li> <Link href="/exibirLista">LISTA DE COMPRAS</Link> </li>
                            <li> <Link href="/sobre">SOBRE</Link> </li>
                            <li> <Link href="/contato">CONTATO</Link> </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default Header;