import './Header.scss'

function Header() {

  return (
    <header>
        <section id='vantagens'>
            <span>
                <img src="ShieldCheck.png" alt="Icone de um escudo" />
                <p>Compra <strong>100% segura</strong></p>
            </span>

            <span>
                <img src="Truck.png" alt="Icone de um caminhão" />
                <p><strong>Frete grátis</strong> acima de R$ 200</p>
            </span>

            <span>
                <img src="CreditCard.png" alt="Icone cartão de credito" />
                <p><strong>Parcele</strong> suas compras</p>
            </span>
        </section>

        <section id='barraDePesquisa'>
            <img src="logoEconverse.png" alt="logo da Econverse " id='logo'/>

            <div id='barra'>
                <input type="text" placeholder='O que você está buscando?'/>
            </div>

            <div id='botoes'>
                <button>
                    <img src="Group.png" alt="" />
                </button>
                <button>
                    <img src="Heart.png" alt="" />
                </button>
                <button>
                    <img src="UserCircle.png" alt="" />
                </button>
                <button>
                    <img src="ShoppingCart.png" alt="" />
                </button>
            </div>
        </section>

        <nav>
            <ul>
                <li>Todas Categorias</li>
                <li>Supermercado</li>
                <li>Livros</li>
                <li>Moda</li>
                <li>Lançamentos</li>
                <li className='selected'>Ofertas do dia</li>
                <li>Assinatura</li>
            </ul>
        </nav>

    </header>
  )
}

export default Header