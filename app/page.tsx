import ListaDeCompras from "@/components/listaDeCompras";
import { listaData, listaFrutas } from "@/data/listaData";

function page() {
  return (
    <>
      <h1>Mercado</h1>
      <ListaDeCompras itens={listaData} />
      <ListaDeCompras itens={listaFrutas} />
    </>
  )
};

export default page;