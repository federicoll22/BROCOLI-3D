var regresar = $("#go-top");

$(window).scroll(function (){
    if($(window).scrollTop() > 350){
        regresar.addClass("visible");
    }else{
        regresar.removeClass("visible")
    }
});

regresar.on("click", function (evento) {
    evento.preventDefault();
    $("html, body").animate ({scrollTop: 0}, 300);
})

const addtoshop = document.querySelectorAll('.btn-outline-secondary');
addtoshop.forEach((addTocardBtton) => {
addTocardBtton.addEventListener('click', addToCartClicked);
});

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.card-body');
      
    const itemTitle = card-body.querySelector('.item-title').textContent;
    const itemPrice = card-body.querySelector('.item-price').textContent;
    const itemImage = card-body.querySelector('.item-image').src;
      
    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShopingCard(itemTitle,itemPrice,itemImage){
    console.log(itemTitle,itemPrice,itemImage);
}

    



