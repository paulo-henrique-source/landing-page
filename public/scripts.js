var nextPage = ''
let output = ''

async function getData(url) {
  try {
    const response = await fetch(`https://${url}`)
    const jsonResponse = await response.json()
    const products = await jsonResponse.products
    renderInnerHTML(products)
    nextPage = jsonResponse.nextPage
  } catch (error) {
    console.error('Error', error)
  }
}

function nextProducts() {
  getData(nextPage)
}

function renderInnerHTML(products) {
  for (let product of products) {
    output += `<div class="card__image-container">
                <div>
                <img class="image-src"
                    src="${product.image}"
                    alt="section image"></div>
                <div>
                    <div class="card_content">
                    <div>${product.name}</div>
                </div>
                <div class="card_info">
                    <p>${product.description}</p>
                </div>
                <div class="card_oldPrice">
                    <div>De: R$ ${product.oldPrice}</div>
                </div>
                <div class="card_Price">
                    <div><b>Por: R$ ${product.price}</b></div>
                </div>
                <div class="card_parcelingPrice">
                    <div>ou ${product.installments.count}x de R$ ${product.installments.value}</div>
                </div>
                <div class="buyButton">
                    <button class="buySubmit">Comprar</button>
                </div>
                </div>
            </div>`
  }

  document.getElementById('cards').innerHTML = output
}

function sendEmail() {
  Email.send({
    Host: 'smtp.mailtrap.io',
    Username: '9a7cec4da469ca',
    Password: 'e11d820ed23faf',
    To: 'paulohenrique1117@hotmail.com',
    From: 'deoxyss14@outlook.com',
    Subject: 'This is the subject',
    Body: `<div class="container">
        < div id = "mailBody" class="bodyMail" >
       <nav class="navBar">
         <div>
        <div class="navBarText-h4">
            <div>uma seleção de produtos</div>
        </div>
        <div class="navBarText-h2">
            <div>especial para você</div>
        </div>
        <div class="navBarText-h6">
            <div>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
            </div>
        </div>
        <div class="gridButtons">
            <div class="navBarButtons">
                <button class="buttonBody">Conheça a Linx</button>
            </div>
            <div class="navBarButtons">
                <button class="buttonBody">Ajude o algorítmo</button>
            </div>
            <div class="navBarButtons">
                <button class="buttonBody">Seus produtos</button>
            </div>
            <div class="navBarButtons">
                <button class="buttonBody">Compartilhe</button>
            </div>
        </div>

    </div>
</nav>
<div class="bodyMailContent">

    <div class="bodyMailHeader">
        <h1>Olá, Fulano</h1>
        <div class="bodyMailDescription">Fizemos uma lista especial de produtos apenas para você. Isso
                    mesmo:
                    nesta lista temos só
                    produtos que você pode gostar. Seu amigo Ciclano lhe recomendou essa lista especial. Olha só:
        </div>

    </div>
    <div class="bodyMail">
        <div class="mailGrid">
            <div class="card__image-containerMail">
                <div>
                    <img class="image-srcMail"
                        src="https://imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158"
                        alt="section image">
                </div>
                <div>
                    <div class="card_content">
                        <div>Product Number 0</div>
                    </div>
                    <div class="card_info">
                        <p>Product long description number 0 just to make more than one like of text.</p>
                    </div>
                    <div class="card_oldPrice">
                        <div>De: R$ 265
                        </div>
                    </div>
                    <div class="card_Price">
                        <div><b>Por: R$ 218</b></div>
                    </div>
                    <div class="card_parcelingPrice">
                        <div>ou 10x de R$ 21.8</div>
                    </div>
                    <div class="buyButton">
                        <button class="buySubmit">Comprar</button>
                    </div>
                </div>
            </div>

            <div class="card__image-containerMail">
                <div>
                    <img class="image-srcMail"
                        src="https://imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158"
                        alt="section image">
                </div>
                <div>
                    <div class="card_content">
                        <div>Product Number 1</div>
                    </div>
                    <div class="card_info">
                        <p>Product long description number 1 just to make more than one like of text.</p>
                    </div>
                    <div class="card_oldPrice">
                        <div>De: R$ 228</div>
                    </div>
                    <div class="card_Price">
                        <div><b>Por: R$ 197</b></div>
                    </div>
                    <div class="card_parcelingPrice">
                        <div>ou 10x de R$ 19.7</div>
                    </div>
                    <div class="buyButton">
                        <button class="buySubmit">Comprar</button>
                    </div>
                </div>

            </div>

        </div>
        <div class="moreItensMail">
            <button class="submitMoreItensMail">Tem muito mais aqui. Vem ver!</button>
        </div>


    </div>


</div>
<footer>
    <div class="footer-content">
        <div class="navBarText-h6">
            <div class="footer-text">Testando suas habilidades em HTML, CSS e JS. Linx Impulse </div>
            <div class="footer-lastText">2019</div>
        </div>
    </div>
</footer>
</div>

</div>`,
  }).then((message) => alert(message))
}

getData('frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
