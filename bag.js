onLoad();

function onLoad(){
    displayBagItems();
}

function displayBagItems(){
    
    let bagContainerElement=document.querySelector('.bag-items-container');
    bagContainerElement.innerHTML=`<div class="bag-item-container">
                <div class="item-left-part">
                    <img class="bag-item-img" src="cart images/4.jpg">
                </div>
                <div class="item-right-part">
                    <div class="company">ABIBAS</div>
                    <div class="item-name">Men Printed Polo Collar Indian Cricket ODI Jersy</div>
                    <div class="price-container">
                        <span class="current-price">Rs 999</span>
                        <span class="original-price">Rs 999</span>
                        <span class="discount-percentage">(0% off)</span>
                    </div>
                    <div class="return-period">
                        <span class="return-period-days">14 days</span>
                        return avilable
                    </div>
                    <div class="delivery-details">
                        Delivery by
                        <span class="delivery-details-days">10 Oct 2023</span>
                    </div>
            </div>

            <div class="remove-from-cart">X</div>
            </div>`
}
function generateItemHTML(item){

}

