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
            <h2>DETALHES DO PRODUTO</h2>
            <p><strong>ID: </strong>{produto?.id}</p>
            <p><strong>Nome: </strong>{produto?.nome}</p>
            <p><strong>Quantidade: </strong>{produto?.quantidade}</p>
        </>
    )
}

export default detalhesProduto;