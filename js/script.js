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

// Abrir o modal do Carrinho
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
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