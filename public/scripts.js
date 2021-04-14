var nextPage = ''
let sectionProducts = ''

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
        sectionProducts += `<div class="card__image-container">
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

    document.getElementById('cards').innerHTML = sectionProducts
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

function sendEmail() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const htmlMailBody =
        `<div style="position: relative;
  width: 100%;
  background-color: var(--backgroundLightColor);
  min-height: 100vh;
  overflow: hidden;">
  <div id="mailBody" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-style: normal; font-variant: normal; 
    font-weight: 700; 
    line-height: 26.4px; 
    color:var(--textGreyColor);">
    <nav style=" color: white;
      padding: 69px 370px 129px 370px;
      display: flex;
      justify-content: center;
      background-image: linear-gradient(185deg, var(--backgroundDarkColor) 72%, var(--backgroundLightColor) 33%);">
      <div>
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 20px;
          font-style: normal; 
          font-variant: normal; 
          font-weight: 700; 
          margin-bottom: 5px; 
          text-align:center;">
          <div>uma seleção de produtos</div>
        </div>
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 40px;
          font-style: normal; 
          font-variant: normal; 
          font-weight: 700; 
          margin-bottom: 30px; 
          text-align:center;">
          <div>especial para você</div>
        </div>
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;
          font-style: normal; font-variant: normal; font-weight: 400; margin-bottom: 5px; text-align:
          center;">
          <div>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
          </div>
        </div>
        <div style="display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          justify-content: center;
          width: 55vw;">
          <div style="padding: 15px;">
            <button style="padding: 12px 24px;
              border-radius: 5px;
              color: var(--textGreyColor)">Conheça a Linx</button>
          </div>
          <div style="padding: 15px;">
            <button style="padding: 12px 24px;
              border-radius: 5px;
              color: var(--textGreyColor)">Ajude o algorítmo</button>
          </div>
          <div style="padding: 15px;">
            <button style="padding: 12px 24px;
              border-radius: 5px;
              color: var(--textGreyColor)">Seus produtos</button>
          </div>
          <div style="padding: 15px;">
            <button style="padding: 12px 24px;
              border-radius: 5px;
              color: var(--textGreyColor)">Compartilhe</button>
          </div>
        </div>
      </div>
    </nav>
    <div style="margin: 40px 160px 0px;">
      <div style="margin-bottom: 70px;">
        <h1>Olá, ${name}</h1>
        <div style=" font-size: 16px;
          font-weight: 400;
          width: 70vw;
          margin-top: 20px;">Fizemos uma lista especial de produtos apenas para você. Isso mesmo: nesta lista temos só produtos que você pode gostar. Seu amigo Ciclano lhe recomendou essa lista especial. Olha só:
        </div>
      </div>
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 24px; font-style:
        normal; font-variant: normal; font-weight: 700; line-height: 26.4px; color: var(--textGreyColor);">
        <div style=" display: grid;
          grid-template-columns: 1fr 1fr;">
          <div style="width: 500px;
            height: 440px;">
            <div>
              <img style="width: 500px;
                height: 440px;
                border: 1px solid var(--backgroundDarkColor);
                background: #FFFFFF 0% 0% no-repeat padding-box;" src="https://imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158" alt="section image">
            </div>
            <div>
              <div style="margin-top: 10px;
                font-size: 16px;">
                <div>Product Number 0</div>
              </div>
              <div style=" margin-top: 10px;
                font-size: 12px;">
                <p>Product long description number 0 just to make more than one like of text.</p>
              </div>
              <div style=" margin-top: 3px;
                font-size: 12px;">
                <div>De: R$ 265
                </div>
              </div>
              <div style="margin-top: 3px;
                font-size: 14px;">
                <div><b>Por: R$ 218</b></div>
              </div>
              <div style="  margin-top: 3px;
                font-size: 12px;">
                <div>ou 10x de R$ 21.8</div>
              </div>
              <div class="buyButton">
                <button style=" height: 30px;
                  width: 175px;
                  background-color: transparent;
                  border: solid 1px var(--backgroundDarkColor);
                  color: var(--backgroundDarkColor);
                  border-radius: 5px;
                  margin-top: 10px;
                  cursor: pointer;">Comprar</button>
              </div>
            </div>
          </div>
          <div style=" width: 500px;
            height: 440px;">
            <div>
              <img style=" width: 500px;
                height: 440px;
                border: 1px solid var(--backgroundDarkColor);
                background: #FFFFFF 0% 0% no-repeat padding-box;" src="https://imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158" alt="section image">
            </div>
            <div>
              <div style="margin-top: 10px;
                font-size: 16px;">
                <div>Product Number 1</div>
              </div>
              <div style="margin-top: 10px;
                font-size: 12px;">
                <p>Product long description number 1 just to make more than one like of text.</p>
              </div>
              <div style=" margin-top: 3px;
                font-size: 12px;">
                <div>De: R$ 228</div>
              </div>
              <div style="margin-top: 3px;
                font-size: 14px;">
                <div><b>Por: R$ 197</b></div>
              </div>
              <div style=" margin-top: 3px;
                font-size: 12px;">
                <div>ou 10x de R$ 19.7</div>
              </div>
              <div class="buyButton">
                <button style=" height: 30px;
                  width: 175px;
                  background-color: transparent;
                  border: solid 1px var(--backgroundDarkColor);
                  color: var(--backgroundDarkColor);
                  border-radius: 5px;
                  margin-top: 10px;
                  cursor: pointer;">Comprar</button>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex;
          justify-content: center;
          align-items: center;
          margin: 50px 0px 138px;
          padding-top: 250px;
          padding-right: 200px;">
          <button style=" height: 40px;
            width: 440px;
            background-color: transparent;
            border: solid 1px var(--backgroundDarkColor);
            color: var(--backgroundDarkColor);
            border-radius: 5px;
            justify-content: center;
            align-items: center;
            cursor: pointer;">Tem muito mais aqui. Vem ver!</button>
        </div>
      </div>
    </div>
    <footer>
      <div style="margin-top: 200px;">
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;
          font-style: normal; font-variant: normal; font-weight: 400; margin-bottom: 5px; text-align:
          center;">
          <div style="width: 260px;">Testando suas habilidades em HTML, CSS e JS. Linx Impulse </div>
          <div style="text-align: center;">2019</div>
        </div>
      </div>
    </footer>
  </div>
</div>`

    if (validateEmail(email)) {
        Email.send({
            Host: 'smtp.mailtrap.io',
            Username: '9a7cec4da469ca',
            Password: 'e11d820ed23faf',
            To: email,
            From: 'deoxyss14@outlook.com',
            Subject: 'This is the subject',
            Body: htmlMailBody,
        }).then((message) => alert(message))
    } else {
        alert('Email Inválido.')
    }
}

getData('frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')