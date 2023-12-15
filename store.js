var removeCartItemButtons = document.getElementsByClassName('remove-class')
console.log(removeCartItemButtons)

for (var i = 0; i < removeCartItemButtons.length; i++) {
	var button = removeCartItemButtons[i]
	button.addEventListener('click' , function(event){
		var buttonClicked = event.target
		buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
	})
}





function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-info')[0]
    var cartRows = cartItemContainer.getElementsByClassName('remove-class')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('remove-class')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total-price')[0].innerText = '$' + total
}

