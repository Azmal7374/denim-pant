const button = document.getElementById('myButton');
const button2 = document.getElementById('myOrder')
const phone = document.getElementById('phone');
const allOrder = document.getElementById('allOrder');

const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

const form = document.getElementById("orderForm");

const nameInput = document.getElementById("name");
const  contactInput = document.getElementById("contact");
const  addressInput = document.getElementById("address");
const dressInput= document.getElementById("dressName")
const sizeInput = document.getElementById("size")
const prizeInput = document.getElementById("dressPrize")
const  aria1Input = document.getElementById("aria1");
const subTotalInput = document.getElementById("subTotal")
const  aria2Input = document.getElementById("aria2");
const  totalInput = document.getElementById("total");

 



function handleButton() {
  alert('পুরুষ এবং মহিলাদের জন্য ডেনিম জিন্স');
  setTimeout(function() {
    button.style.backgroundColor = randomColor; 
  }, 1500); 
  button.style.backgroundColor='tomato';
}

button.addEventListener('click', handleButton);


;

function handleClick() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  prompt('Conform Oreder!');
  button2.style.backgroundColor = randomColor;
}

button2.addEventListener('click', handleClick);


function handlePhone() {
   prompt('Conform Oreder!');
}

phone.addEventListener('click', handlePhone);



//form submit
// Add a submit event handler
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  const name = nameInput.value;
  const contact = contactInput.value;
  const address = addressInput.value;
  const aria1 = aria1Input.textContent;
  const aria2 = aria2Input.textContent;
  const dressName =dressInput.textContent
  const size = sizeInput.textContent;
   const prize = prizeInput.textContent;
   const subTotal = subTotalInput.textContent
  const total = totalInput.textContent;
   console.log(location)
   console.log(aria1)
  console.log({
    Name: name,
    Contact: contact,
    Address: address,
    DressName:dressName,
    DressSize:size,
    DressPrize: prize,
    SubTotal: subTotal,
    Delivdery : aria1 ? aria2 : 'N0',
    Total: total
  });

//   // message.textContent = "Hello, " + name + "! Form submitted.";
});