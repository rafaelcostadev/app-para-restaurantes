const menu = document.getElementById("menu")
// CartBtn é o botao do Footer
const cartBtn = document.getElementById("cart-btn")
// Modal onde a caixa do carrinho abre como um popup
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal= document.getElementById("cart-total")
const  checkoutBtn= document.getElementById("checkout-btn")
const  closeModalBtn= document.getElementById("close-modal-btn")
const  cartCounter= document.getElementById("cart-count")
const  addressInput= document.getElementById("address")
const  adressWarn= document.getElementById("address-warn")

//Criando uma lista de produtos

let cart = [];

// Abrir o modal do Carrinho
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
    // upDateCartModal();
});

// Fechar o modal quando clicar fora
cartModal.addEventListener("click", function(event){
  if(event.target === cartModal){
        cartModal.style.display = "none"
  }
})

//  Botao de fechar dentro do modal
closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

// vamos pegar dentro do menu o botao do carrinho

menu.addEventListener("click", function(event){
    // console.log(event.target)
    let parentButton = event.target.closest(".add-to-cart-btn")
     if(parentButton){
        const name =  parentButton.getAttribute("data-name")
        const price =  parseFloat(parentButton.getAttribute("data-price"))        

        // Vamos adicionar no carrinho os valores acima de nome e valor do produto
        addToCart(name, price)
     }
})


//funcao para adcionar tudo ao carrinho

function addToCart(name, price){
    // Vamos verificar se o item já existe na lista e nao duplicar o mesmo
    const existItem = cart.find(item => item.name === name )

    if(existItem){
        //se o item já existir, aumenta apenas a quantidade +1
        existItem.quantify += 1;        
    }else{
        //Adcionamos (push) os itens abaixo dentro do carrinho [array] escrito global lá em cima
        cart.push({
            name,
            price,
            quantify: 1,
     })

    }

     upDateCartModal()

}

//atualizando o carrinho no front
function upDateCartModal(){
    let total = 0;

    cart.forEach(item =>{
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-bettween", "mb-4", "flex-col")

        cartItemElement.innerHTML = `
            <div class= "flex items-center justify-between">
                <div>
                    <p class="font-medium">${item.name}</p>
                    <p>Qtd: ${item.quantify}</p>
                    <p class="font-medium mt-2">${item.price.toFixed(2)}</p>
                </div>
                
                <button>
                    Remover
                </button>
            </div>    
        `
    total += item.price * item.quantify;

    cartItemsContainer.appendChild(cartItemElement)

    })
    // Formatando o total para valor em moeda Brasil
    cartTotal.textContent = total.toLocaleString("Pt-BR", {
        style: "currency",
        currency:"BRL"
});

}