import { listaData } from "@/data/listaData";
import Link from "next/link";

function exibirLista() {
    return (
        <>
            <h1 className="font-bold text-center">LISTA DE PRODUTOS EM TABELA</h1>
            {
                /*
                min-w-full -> largura mínima é 100%
                */
            }
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="uppercase">ID</th>
                        <th className="uppercase">Produto</th>
                        <th className="uppercase">Detalhes</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {listaData.map(function (item) {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td className="text-sm text-blue-600">
                                    <Link href={'/detalhesProduto/' + item.id}>VER DETALHES </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default exibirLista;