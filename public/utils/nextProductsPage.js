module.exports = nextPageHTML = (product) => {
  return `<div class="card__image-container">
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
