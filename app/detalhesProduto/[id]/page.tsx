// caminho -> app/detalhesProdutos/[id]/page.tsx
import { listaData } from "@/data/listaData";

// em next.js 13 os parâmetros de rota são recebidos
// através do objeto 'params' passado como propriedade

type detalhesProdutoProps = {
    params: {
        id: string;
    }
}

function detalhesProduto(props: detalhesProdutoProps) {
    //Convert do id(string) para inteiro
    var produtoID = parseInt(props.params.id);
    //Procurar em um array listaData o produto com id correspondente.
    var produto = listaData.find(function (item) {
        return item.id === produtoID;
    });
    //se o produto é encontrado exibe detalhes dele
    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 min-h-screen">
                <div className="bg-white rounded-lg">
                    <div className="bg-blue-500 p-4">
                        <h2 className="text-white text-x1 font-bold">DETALHES DO PRODUTO</h2> </div>
                    <p className="text-gray-700"><strong>ID: </strong>{produto?.id}</p>
                    <p className="text-gray-700"><strong>Nome: </strong>{produto?.nome}</p>
                    <p className="text-gray-700"><strong>Quantidade: </strong>{produto?.quantidade}</p>
                </div>
            </div>
        </>
    )
}

export default detalhesProduto;