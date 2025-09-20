let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
	searchForm.classList.toggle('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
	checkoutform.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
	shoppingCart.classList.toggle('active');
	searchForm.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
	checkoutform.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
	loginForm.classList.toggle('active');
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	navbar.classList.remove('active');
	checkoutform.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	checkoutform.classList.remove('active');
}
let checkoutform = document.querySelector('.checkout-form');

document.querySelector('#checkout-btn').onclick = () =>
{
	checkoutform.classList.toggle('active');
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
	
}

window.onscroll = () =>
{
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
	checkoutform.classList.remove('active');
}

function submitOrder() {
  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  const address = document.getElementById('custAddress').value;

  fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, phone, address })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => alert('Error placing order'));
}

