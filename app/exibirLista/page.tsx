import { listaData } from "@/data/listaData";
import Link from "next/link";

function exibirLista() {
    return (
        <>
            <h1>LISTA DE PRODUTOS EM TABELA</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {listaData.map(function (item) {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>
                                    <Link href={'/detalhesProduto/' + item.id}>VER DETALHES
                                    </Link>
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