import './Categorias.scss'

function Categorias(){
    return(
        <section id='categorias'>

            <div className='card selected'>
                <div>
                    <img src="tecnologia.png" alt="Icone de tecnologia" />
                </div>
                <p>Tecnologia</p>
            </div>

            <div className='card'>
                <div>
                    <img src="supermercados.png" alt="Icone de supermercado" />
                </div>
                <p>Supermercado</p>
            </div>

            <div className='card'>
                <div>
                    <img src="whiskey.png" alt="Icone de bebida" />
                </div>
                <p>Bebidas</p>
            </div>

            <div className='card'>
                <div>
                    <img src="ferramentas.png" alt="Icone de duas ferramentas" />
                </div>
                <p>Ferramentas</p>
            </div>

            <div className='card'>
                <div>
                    <img src="cuidados-de-saude.png" alt="Icone de saúde" />
                </div>
                <p>Saúde</p>
            </div>

            <div className='card'>
                <div>
                    <img src="corrida.png" alt="Icone de pessoa correndo" />
                </div>
                <p>Esportes e Fitness</p>
            </div>

            <div className='card'>
                <div>
                    <img src="moda.png" alt="Icone de vestido" />
                </div>
                <p>Moda</p>
            </div>

        </section>
    )
}

export default Categorias