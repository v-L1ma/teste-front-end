import './App.scss'
import CardParceiros from './components/cardParceiros/CardParceiros'
import Categorias from './components/categorias/Categorias'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MarcaCard from './components/marcaCard/MarcaCard'
import ProdutosSection from './components/produtosSection/ProdutosSection'

function App() {

  return (
    <>
      <Header></Header>

      <section id='heroSection'>
        <div>
          <h1>Venha conhecer nossas promoções</h1>
          <h2><strong>50% Off</strong> nos produtos</h2>
          <button>Ver produto</button>
        </div>
      </section>

      <Categorias></Categorias>

      <ProdutosSection filtros={true} title='Produtos relacionados'></ProdutosSection>

      <section id='parceirosSection'>
        <CardParceiros titulo='Parceiros' descricao='Lorem ipsum dolor sit 
        amet, consectetur'></CardParceiros>
        <CardParceiros titulo='Parceiros' descricao='Lorem ipsum dolor sit 
        amet, consectetur'></CardParceiros>
      </section>

      <ProdutosSection filtros={false} title='Produtos relacionados'></ProdutosSection>

      <section id='parceirosSection'>
        <CardParceiros titulo='Parceiros' descricao='Lorem ipsum dolor sit
        amet, consectetur'></CardParceiros>
        <CardParceiros titulo='Parceiros' descricao='Lorem ipsum dolor sit
        amet, consectetur'></CardParceiros>
      </section>

      <section id='marcasSection'>
        <h1 id='titulo'>Navegue por marcas</h1>
        <div id="lista">
          <MarcaCard imagePath='logoEconverse.png'></MarcaCard>
          <MarcaCard imagePath='logoEconverse.png'></MarcaCard>
          <MarcaCard imagePath='logoEconverse.png'></MarcaCard>
          <MarcaCard imagePath='logoEconverse.png'></MarcaCard>
          <MarcaCard imagePath='logoEconverse.png'></MarcaCard>
          
        </div>
      </section>

      <ProdutosSection filtros={false} title='Produtos relacionados'></ProdutosSection>

      <Footer></Footer>
    </>
  )
}

export default App
