const front = document.querySelector('.card');
const backButton = document.querySelector('.getBack');
const addToCart = document.querySelector('.cart');

front.addEventListener('click', ()=> {
    front.style.transform = 'rotateY(-180deg)'
    console.log('image clicked')
})

backButton.addEventListener('click', (e)=> {
    e.stopPropagation();
    console.log('back button clicked')
    front.style.transform = 'rotateY(0deg)'
})


addToCart.addEventListener('click', (e)=> {
    e.stopPropagation();
    console.log('add to cart clicked');
})
