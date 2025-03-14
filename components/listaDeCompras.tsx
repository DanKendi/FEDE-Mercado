import { Item } from '../data/listaData';

type listaDeComprasProps = {
    itens: Item[];
}

function listaDeCompras(props: listaDeComprasProps) {
    return (
        <>{
            /*Aqui, estamos usando props.tens para acessaro array de itens qu e foi passado
            para o componente. Para cada item, exibimos o nome e quantidade
            'props'- nos permite "injetar" dados no componente.
            Conceito de props: "propriedades" enviadas de um compnente pai para o componente filho.
            */
        }
            <h2>Lista de Compras</h2>
            {props.itens.map(function (item) {
                return (
                    <div key={item.id}>
                        <p>Produtos: {item.nome}</p>
                        <p>Quantidade: {item.quantidade}</p>
                        <hr />
                    </div>
                );
            })}
        </>
    );
};

export default listaDeCompras;