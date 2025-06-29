import { useState } from "react";
import "./modalProduto.scss";

interface ModalProdutoProps{
    titulo: string
    preco: number
    imagePath: string
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function ModalProduto({titulo, preco, imagePath, setIsModalOpen}:ModalProdutoProps){

    function fecharPopUp(){
        setIsModalOpen(false)
    }

    const [quantidade, setQuantidade] = useState<number>(0);

    function alterarQuantidade(quantidadeNova:number){
        if(quantidade===0 && quantidadeNova<0){
            return;
        }

        setQuantidade(quantidade+quantidadeNova)
    }

    function formatarPreco(preco:number):string{
        const valorFormatado = (preco*1.07).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return valorFormatado;
    }

    return( 
        <div id="background">
            <div id="modal">
                    <div id="fechar">
                        <button onClick={fecharPopUp}>X</button>
                    </div>
                    <div id="container">
                        <img src={imagePath} alt="" />
                        <div>
                            <h1>{titulo}</h1>
                            <h2>{formatarPreco(preco)}</h2>
                            <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
                            <p><strong>Veja mais detalhes do produto &gt;</strong></p>
                        
                            <div id="botoes">
                                <div id="input">
                                    <button onClick={()=>alterarQuantidade(-1)}>-</button>
                                    <input type="number" value={quantidade}/>
                                    <button onClick={()=>alterarQuantidade(+1)}>+</button>
                                </div>
                                <button>COMPRAR</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ModalProduto;