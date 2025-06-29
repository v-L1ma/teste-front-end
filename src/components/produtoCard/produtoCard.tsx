import { useState } from "react"
import "./produtoCard.scss"
import ModalProduto from "../modalProduto/modalProduto"

interface ProdutoCardProps{
    titulo: string
    preco: number
    precoDesconto: number
    precoParcelado: number
    imagePath: string
}

function ProdutoCard({titulo,preco,precoDesconto,precoParcelado, imagePath}:ProdutoCardProps){
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false)

    function openModal(){
        setIsModalOpen(!isModalOpen)
    }

    function formatarPreco(preco:number):string{
        const valorFormatado = (preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return valorFormatado;
    }

    return(
        <div>
            <div className="cardProduto">
                <img src={imagePath} alt="Foto do produto" />
                <p>{titulo}</p>
                <h2>{formatarPreco(preco*1.07)}</h2>
                <h1>{formatarPreco(precoDesconto)}</h1>
                <h3>ou 2x de {formatarPreco(precoParcelado/2)} sem juros</h3>
                <p><strong>Frete grátis</strong></p>
                <button onClick={openModal}>COMPRAR</button>
            </div>
            {
                isModalOpen && 
                    <ModalProduto 
                    titulo={titulo}
                    imagePath={imagePath}
                    preco={preco}
                    setIsModalOpen={setIsModalOpen}></ModalProduto>
            }
        </div>
    )
}

export default ProdutoCard