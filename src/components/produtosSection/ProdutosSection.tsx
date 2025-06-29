import { useEffect, useState } from "react"
import ProdutoCard from "../produtoCard/produtoCard"
import "./produtosSection.scss"

interface ProdutosSectionProps {
    filtros: boolean
    title: string
}

type produto = {
    descriptionShort: string,
    photo: string,
    productName: string,
    price: number
}

function ProdutosSection({filtros, title}:ProdutosSectionProps){
    
    const [produtos, setProdutos] = useState<produto[]>([])
    const [index, setIndex] = useState<number>(0)
    const [produtosPorPagina, setProdutosPorPagina] = useState<number>(4)

    async function fetchProdutos() {
        try {
            const response = await fetch("/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json");
            const data = await response.json();
            setProdutos(data.products);
            console.log(data.products)
        } catch (error) {
            console.error("Erro:", error);
        }
    }

     useEffect(() => {
        const verificarTamanho = () => {
            if (window.innerWidth <= 768) {
                setProdutosPorPagina(1);
                return;
            }

            if (window.innerWidth <= 1000) {
                setProdutosPorPagina(2);
                return;
            }

            setProdutosPorPagina(4);
        };

        verificarTamanho();
        window.addEventListener("resize", verificarTamanho);

        return () => window.removeEventListener("resize", verificarTamanho);
    }, []);

    useEffect(()=>{

        fetchProdutos()

    }, [])
    
    const produtosVisiveis = produtos.slice(index, index + produtosPorPagina)

    function navegarProximo(){
        setIndex((prev)=> prev + produtosPorPagina)
    }

    function navegarAnterior(){
        setIndex((prev)=> prev- produtosPorPagina)
    }

    return(
        <div id="produtosSection">
            <h1 id="titulo">{title}</h1>
            
            {
                filtros ?(
                    <ul className="filtros">
                        <li className="selected">CELULAR</li>
                        <li>ACESSÓRIOS</li>
                        <li>TABLETS</li>
                        <li>NOTEBOOKS</li>
                        <li>TVS</li>
                        <li>VER TODOS</li>
                    </ul>
                ) : (
                    <p className="filtros">Ver todos</p>
                )
            }

            <div id="lista">
                <button className="buttonNavegar" 
                onClick={navegarAnterior}
                disabled={index === 0}>
                    <img src="lArrow.png" alt="" />
                    </button>
                <div id="produtos">
                    {
                    produtosVisiveis.map((produto)=>(
                        <ProdutoCard 
                        titulo={produto.productName} 
                        preco={produto.price} 
                        precoDesconto={produto.price} 
                        precoParcelado={produto.price} 
                        imagePath={produto.photo}>
                        </ProdutoCard>
                    ))
                }

                </div>
                
                <button  className="buttonNavegar" onClick={navegarProximo} disabled={index + 4 > produtos.length}>
                    <img src="rArrow.png" alt="" />
                </button>
            </div>
            
        </div>
    )
}

export default ProdutosSection