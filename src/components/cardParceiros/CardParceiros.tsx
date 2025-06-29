import "./CardParceiros.scss"

interface CardParceirosProps{
    titulo: string
    descricao: string
}

function CardParceiros({titulo, descricao}: CardParceirosProps){
    return(
        <div id="cardParceiro">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <button>CONFIRA</button>
        </div>
    )
}

export default CardParceiros