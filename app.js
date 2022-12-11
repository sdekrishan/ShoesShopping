const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];
let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        //change current slide 
        wrapper.style.transform = `translateX(${-100 * index }vw)`

        // change the choosen product

        choosenProduct = products[index];

        //change text of current Product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = `$ ${choosenProduct.price}`;
        currentProductImg.src = choosenProduct.colors[0].img;
        console.log(choosenProduct);
        //assign new color
        currentProductColor.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})


currentProductColor.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
});

currentProductSize.forEach((size,index)=>{
    size.addEventListener('click',()=>{
        currentProductSize.forEach((size,i)=>{
        size.style.backgroundColor='white';
        size.style.color='black'
        })
        size.style.backgroundColor='black';
            size.style.color='white'
    });
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close");

productButton.addEventListener('click',()=>{
    payment.style.display='flex';
});

close.addEventListener('click',()=>{
    payment.style.display='none';
})