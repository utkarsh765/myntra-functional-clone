let bagItems;
const items=[{
  id:'001',
  item_image:'cart images/1.jpg',
  rating:{
    stars:4.5,
    noOfReviews:1400,
  },
  company_name:'Carton London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  discounted_price:606,
  mrp:1045,
  off:42,
},
{
  id:'002',
  item_image:'cart images/2.jpg',
  rating:{
    stars:4.3,
    noOfReviews:24,
  },
  company_name:'CUKOO',
  item_name:'Women Padded Halter Neck Swimming Dress',
  discounted_price:1507,
  mrp:2599,
  off:42,
},
{
  id:'003',
  item_image:'cart images/3.jpg',
  rating:{
    stars:4.1,
    noOfReviews:249,
  },
  company_name:'NUEVOSDAMAS',
  item_name:'Women Red & White Printed A-Line Knee-Length Skirts',
  discounted_price:495,
  mrp:1599,
  off:69,
},
{
  id:'004',
  item_image:'cart images/4.jpg',
  rating:{
    stars:5.0,
    noOfReviews:10,
  },
  company_name:'ADIDAS',
  item_name:'Indian Cricket ODI Jersey',
  discounted_price:999,
  mrp:999,
  off:0,
},
{
  id:'005',
  item_image:'cart images/5.jpg',
  rating:{
    stars:4.2,
    noOfReviews:3500,
  },
  company_name:'Roadster',
  item_name:'Pure Cotton T-shirt',
  discounted_price:489,
  mrp:1399,
  off:65,
},
{
  id:'006',
  item_image:'cart images/6.jpg',
  rating:{
    stars:0.0,
    noOfReviews:0,
  },
  company_name:'Nike',
  item_name:'Men ReactX Running Shoess',
  discounted_price:14995,
  mrp:14995,
  off:0,
},
{
  id:'007',
  item_image:'cart images/7.jpg',
  rating:{
    stars:4.2,
    noOfReviews:388,
  },
  company_name:'The Indian Garage Co',
  item_name:'Men Slim Fit Regular Shorts',
  discounted_price:639,
  mrp:1599,
  off:60,
},
{
  id:'008',
  item_image:'cart images/8.jpg',
  rating:{
    stars:4.2,
    noOfReviews:5200,
  },
  company_name:'Nivea',
  item_name:'Men Fresh Deodrant 150ml',
  discounted_price:142,
  mrp:285,
  off:50,
}
];
onload();

function onload(){
  let bagItemStr=localStorage.getItem('bagItems');
  bagItems=bagItemStr ? JSON.parse(bagItemStr):[];
  displayItemOnHomePage();
  displayBagIcon();

}
function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();
}
function displayBagIcon(){
  let bagItemCountElement=document.querySelector('.bag-item-count');
  if(bagItems.length>0){
    bagItemCountElement.style.visibility='visible';
    bagItemCountElement.innerText=bagItems.length;
  }else{
    bagItemCountElement.style.visibility='hidden';
  }
}
function displayItemOnHomePage(){
  let itemsContainerElement=document.querySelector('.items-container');
  if(!itemsContainerElement){
    return;
  }
  let innerHtml='';
items.forEach(item=>{
        innerHtml+=`
    <div class="item-container">
        <img class="item-image" src="${item.item_image}" alt="item image">
        <div class="rating">
            ${item.rating.stars}⭐ | ${item.rating.noOfReviews}
        </div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="discounted-price" >Rs ${item.discounted_price}</span>
            <span class="mrp">Rs ${item.mrp}</span>
            <span class="off">(${item.off}% off)</span>
        </div>
        <button class="add-to-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`;
    });

itemsContainerElement.innerHTML=innerHtml;
}





