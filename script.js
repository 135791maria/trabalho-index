const form = document.getElementById("form");
const productEl = document.getElementById("product");
const priceEl = document.getElementById("price");
const responseEl = document.getElementById("response")


function gerarValor(event){
event.preventDefault()

const product = productEl.value
const price = priceEl.value

if(product =="" ||(price =="" || isNaN(price))){
alert("por favor informe o nome e o preço d produto")
return

}

const priceOff = price*(50/100)
const promotionPrice = (price*3)-priceOff


//responseEl.textContent = "promoçâo" + product +"-Leve 3 por R$" + promotionPrice.toFixed(2) + "."+
//"O 3° produto custa apenas R$"+ priceOff.toFixed(2)


responseEl.innerHTML = `<p class="bg-indigo-200 p-3 font-medium">
promoçâo ${product}-Leve 3por ${promotionPrice.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}.\n
O 3° produto custa apenas ${priceOff.toLocaleString("pt-br",{style:"currency", currency:"BRL"})};

</p>` 
}



form.addEventListener("submit",gerarValor)






