import "./MarcaCard.scss"

interface MarcaCardProps{
    imagePath:string
}

function MarcaCard({imagePath}:MarcaCardProps){
    return(
        <div className="MarcaCard">
            <img src={imagePath} alt="" />
        </div>
    )
}

export default MarcaCard;