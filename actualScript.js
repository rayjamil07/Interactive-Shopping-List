//initializing and calling our various elements
const form = document.querySelector('form');
const container = document.querySelector('.container');
const clear = document.getElementsByClassName('clear-list')[0];
const btns = document.getElementsByClassName('btn-sections')[0];

//making our empty array
let shoppingList = [];

//Function to display items in the shopping list
function displayItems(){
   container.innerHTML = '';

  shoppingList.forEach(function(item,index){
    const itemCard = 
   `<div class='item'>
     <div id='details.${index}' class=''>
        <h4 class='title'>${item.name}</h4>
       <div class='check>
         <input type='checkbox' id='mark-${index}' onclick='togglePurchased(${index})'/>//is togglePurchased a function or not and why is it being called back
         <label for='mark-${index}'>Mark as purchased</label>
        </div>
      </div>
    </div>`;
  container.insertAdjacentHTML('beforeend',itemCard);
  
});
}
//Adding an eventlistener to the clear button

clear.addEventListener('click', clearList);

function clearList(){
  container.innerHTML = '';
  if(items.length > 0){
  btns.classList.remove('hidden')
  } else {
   shoppingList = [];
   btns.classList.add('hidden');
  };
};

//function to toggle purchased status of items

function togglePurchased(index){
  const details = document.getElementById(`details.${index}`);
  const mark = docment.getElementById(`mark-${index}`);

  if(mark.checked){
     details.classList.add('purchased');
  } else {
     details.classList.remove('purchased');

  }
}
//event listener for form submission
form.addEventListener('submit',function(e){
    e.preventDefault();
    const itemName = e.target.product.value;
    const itemPrice = e.target.price.value;

    console.log('item Name:', itemName);
    console.log('Item Price:', itemPrice);

    if(itemName && itemPrice) {
    shoppingList.push({
        name: itemName,
        price: itemPrice,
    });
    form.reset();
    displayItems();
}
});


//initializing out items in our local storage
const storedItems = JSON.parse(localStorage.getItem('shoppingListItems'));
if(storedItems){
    items = storedItems;
    displayItems();
}
//saving items to local storage
localStorage.setItem('shoppingListItems',JSON.stringify(items));
