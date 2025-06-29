import "./Footer.scss"

function Footer(){
    return(
        <footer>
            <section id="newsletter">
                <div>
                    <h1>Inscreva-se na nossa newsletter</h1>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>

                <div id="form">
                    <div>
                        <input type="text" placeholder="Digite seu nome"/>
                        <input type="text" placeholder="Digite seu e-mail"/>
                        <button>INSCREVER</button>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <p>Aceito os termos e condições</p>
                    </div>
                </div>
            </section>

            <section id="menus">
                <div id="empresa">
                    <img src="logoEconverse.png" alt="Logo Econverse" id="logo"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div>
                        <img src="instagram.png" alt="" />
                        <img src="facebook.png" alt="" />
                        <img src="linkedin.png" alt="" />
                    </div>
                </div>

                <hr />

                <div id="items">
                    <ul>
                        <h1>Institucional</h1>
                        <li>Sobre Nós</li>
                        <li>Movimento</li>
                        <li>Trabalhe conosco</li>
                    </ul>
                    <ul>
                        <h1>Ajuda</h1>
                        <li>Suporte</li>
                        <li>Fale Conosco</li>
                        <li>Perguntas Frequentes</li>
                    </ul>
                    <ul>
                        <h1>Termos</h1>
                        <li>Termos e Condições</li>
                        <li>Política de Privacidade</li>
                        <li>Troca e Devolução</li>
                    </ul>
                </div>
            </section>

            <section id="direitos">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
        </footer>
    )
}

export default Footer