//trick Mechacnic for radio-buttons in payment choose section
function trickMechForRadioButtonsInPaymentSection(){
    const paymentRadio = document.querySelectorAll(".cart-payment__select-btn-radio"); 

    if(paymentRadio === null){
        // console.log('it`s not cart page!');
    }else{
 
        for(let i = 0;i < paymentRadio.length; i++) { 
    
            if(paymentRadio[i].type=="radio") { 
                paymentRadio[i].onchange=function() { 
        
                    for(let i=0;i<paymentRadio.length;i++) { 
                        if(paymentRadio[i].type=="radio") { 
                            paymentRadio[i].checked=false; 
                        }
                        this.checked=true
                    }
                }
            }
        }
    }
}
trickMechForRadioButtonsInPaymentSection();

//green border when radio button checked
function trickMechForOptionBlockInPaymentSection(){
    const paymentOption = document.querySelectorAll('.cart-payment__option');

    if(paymentOption === null){

    }else{
        for(let i = 0; i < paymentOption.length; i++){
            const paymentOptionWrapper = paymentOption[i].querySelector('.cart-payment__option-info-wrapper');
            const paymentOptionRadioButton = paymentOption[i].querySelector('.cart-payment__select-btn');

            paymentOptionRadioButton.addEventListener('click', function(){
                const allPaymentOptionWrapper = document.querySelectorAll('.cart-payment__option-info-wrapper');
                allPaymentOptionWrapper.forEach(item => {
                    item.classList.remove('cart-payment__option-info-wrapper--active');
                })
                paymentOptionWrapper.classList.add('cart-payment__option-info-wrapper--active');
            });
        }
    }
}

trickMechForOptionBlockInPaymentSection()

//trick Mechacnic for radio-buttons in delivery choose section
function trickMechForRadioButtonsInDeliverySection(){
    const deliveryRadio = document.querySelectorAll(".cart-delivery__select-btn-radio"); 

    if(deliveryRadio === null){
        // console.log('it`s not cart page!');
    }else{
 
        for(let i = 0;i < deliveryRadio.length; i++) { 
    
            if(deliveryRadio[i].type=="radio") { 
                deliveryRadio[i].onchange=function() { 
        
                    for(let i=0;i<deliveryRadio.length;i++) { 
                        if(deliveryRadio[i].type=="radio") { 
                            deliveryRadio[i].checked=false; 
                        }
                        this.checked=true
                    }
                }
            }
        }
    }
}
trickMechForRadioButtonsInDeliverySection();

//green border when radio button checked
function trickMechForOptionBlockInDeliverySection(){
    const deliveryOption = document.querySelectorAll('.cart-delivery__option');

    if(deliveryOption === null){

    }else{
        for(let i = 0; i < deliveryOption.length; i++){
            const deliveryOptionWrapper = deliveryOption[i].querySelector('.cart-delivery__option-info-wrapper');
            const deliveryOptionRadioButton = deliveryOption[i].querySelector('.cart-delivery__select-btn');

            deliveryOptionRadioButton.addEventListener('click', function(){
                const allDeliveryOptionWrapper = document.querySelectorAll('.cart-delivery__option-info-wrapper');
                allDeliveryOptionWrapper.forEach(item => {
                    item.classList.remove('cart-delivery__option-info-wrapper--active');
                })
                deliveryOptionWrapper.classList.add('cart-delivery__option-info-wrapper--active');
            });
        }
    }
}
trickMechForOptionBlockInDeliverySection()

//product cards mechs Desktop
//Quantity btn cart product card + price/cost values update
function cartDesktopProductCardQuantity(){
    const desktopProductCard = document.querySelectorAll('.cart-desktop-product');
    let desktopCartHeaderSpan = document.querySelector('.header-cart-desktop__shopping-cart span');

    //create metaBLock for metaData 
    const body = document.querySelector('body');
    const metaBlock = document.createElement('div');
    metaBlock.classList.add('metaBlock');
    metaBlock.style.visibility = 'hidden';
    body.appendChild(metaBlock);

    if(desktopProductCard === null){

    }else{
        for(let i = 0; i < desktopProductCard.length; i++){
            const desktopProductCardAvailabilityBlock = desktopProductCard[i].querySelector('.cart-desktop-product__shop');
            const desktopProductCardQuantityBlock = desktopProductCard[i].querySelector('.cart-desktop-product-quantity');
            const desktopProductCardBtnMinus = desktopProductCard[i].querySelector('.cart-desktop-product-quantity__btn-minus');
            const desktopProductCardBtnPlus = desktopProductCard[i].querySelector('.cart-desktop-product-quantity__btn-plus');
            const desktopProductCardInput = desktopProductCard[i].querySelector('.cart-desktop-product-quantity__default-input');
            const desktopProductCardFavoriteBtn = desktopProductCard[i].querySelector('.cart-desktop-product__favorite');
            const desktopProductCardRemoveBtn = desktopProductCard[i].querySelector('.cart-desktop-product__delete');
            

            const parentblock = desktopProductCardQuantityBlock.parentElement;
            let key = parentblock.dataset.key; 
            let availability = parentblock.dataset.availability;

            const cartDesktopCustomQuantityBlock = document.createElement('div');
            cartDesktopCustomQuantityBlock.classList.add('cart-desktop-product-quantity--custom');

            cartDesktopCustomQuantityBlock.innerHTML = `
                <div class="cart-desktop-product-quantity__back-btn"></div>
                <div class="cart-desktop-product-quantity__custom-input-wrapper">
                  <input class="cart-desktop-product-quantity__custom-input" pattern="[0-9]*" placeholder="1" type = "number" maxlength = "3" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength); this.value = !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : null">
                  <a class="cart-desktop-product-quantity__apply-btn"></a>
                </div>
            `;
            desktopProductCardQuantityBlock.after(cartDesktopCustomQuantityBlock);

            const cartDesktopCustomQuantityBackBtn = cartDesktopCustomQuantityBlock.querySelector('.cart-desktop-product-quantity__back-btn');
            const cartDesktopCustomQuantityInput = cartDesktopCustomQuantityBlock.querySelector('.cart-desktop-product-quantity__custom-input');
            const cartDesktopCustomQuantityRefresh = cartDesktopCustomQuantityBlock.querySelector('.cart-desktop-product-quantity__apply-btn');

            //Remove Disabled minus if availability is MANY
            function cartMinusAvailabilityManyFix(){
                if(availability === 'много'){
                    cartMinusBtnReset()
                }
            }
            cartMinusAvailabilityManyFix();

            //disable minus btn if input placeholder == '1'
            function cartMinusBtnDisable(){
                const metaCardInput = parentblock.querySelector('.cart-desktop-product-quantity__default-input');
                if(metaCardInput.placeholder <= '1'){

                    if(desktopProductCardBtnMinus === null){

                    }else{
                        desktopProductCardBtnMinus.classList.remove('cart-desktop-product-quantity__btn-minus');
                        desktopProductCardBtnMinus.classList.add('cart-desktop-product-quantity__btn-minus--disable');
                    }
                }
            }
            cartMinusBtnDisable();
            //minus btn disable state reset
            function cartMinusBtnReset(){
                if(desktopProductCardBtnMinus === null){

                }else{
                    desktopProductCardBtnMinus.classList.remove('cart-desktop-product-quantity__btn-minus--disable');
                    desktopProductCardBtnMinus.classList.add('cart-desktop-product-quantity__btn-minus');
                }
            }
            //disable plus btn if input placeholder > availability
            function cartPlusBtnDisable(){
                if(desktopProductCardBtnPlus){
                    desktopProductCardBtnPlus.classList.remove('cart-desktop-product-quantity__btn-plus');
                    desktopProductCardBtnPlus.classList.add('cart-desktop-product-quantity__btn-plus--disable');
                }
            }
            //reset plus btn
            function cartPlusBtnReset(){
                desktopProductCardBtnPlus.classList.remove('cart-desktop-product-quantity__btn-plus--disable');
                desktopProductCardBtnPlus.classList.add('cart-desktop-product-quantity__btn-plus');
            }
            //check emptiness of cart - if cart empty:reload page
            function cartDesktopCheckProductList(){
                let cartDesktopProductsList = document.querySelector('.cart__desktop-products-inner');
                let firstProductInTheList = cartDesktopProductsList.querySelector('li');
                if(firstProductInTheList === null){
                    document.location.reload();
                }else{
                    // console.log('something here, in the cart');
                }
            }
            //quantity button mech -/+/input/inputRefresh
            if(desktopProductCardBtnMinus){
                desktopProductCardBtnMinus.addEventListener('click', desktopProductCardBtnMinusMechFunc, false);

                function desktopProductCardBtnMinusMechFunc(){
                    const metaCardInput = parentblock.querySelector('.cart-desktop-product-quantity__default-input');
                    const metaCardInputPlaceholder = metaCardInput.placeholder;
    
                    if(metaCardInputPlaceholder == '1'){
                        cartMinusBtnDisable();
                    }else{
                        const params = new URLSearchParams();
                        params.set('id', key);
        
                        const xhr = new XMLHttpRequest();
                        xhr.open('POST', '/cart/reduce');
                        xhr.responseType = 'json';
        
                        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        
                        xhr.onload = () => {
                          if (xhr.status !== 200) {
                            console.warn('cardProduct MinusClick ajax error');
                          }else{
                          //  If 1 offer in afterBuyInputBlock checking
                            const response = xhr.response;
                            let countFromCart = response.count; 
                            desktopCartHeaderSpan.innerText = countFromCart;
                            stickyHeaderDesktopCartCountUpdateInCart();
                            --desktopProductCardInput.placeholder;
        
                            cartMinusBtnDisable();
                            cartPlusBtnReset();
                            desktopProductCardInput.style.pointerEvents = 'auto';
    
                            cartProductCardCostRefresh();
                          }
                        }
        
                        xhr.send(params);
                    }
                }
            }
            
            if(desktopProductCardBtnPlus){
                desktopProductCardBtnPlus.addEventListener('click', desktopProductCardBtnPlusMechFunc, false);

                function desktopProductCardBtnPlusMechFunc(){
                    const metaCardInput = parentblock.querySelector('.cart-desktop-product-quantity__default-input');
                    const metaCardInputPlaceholder = metaCardInput.placeholder;
                    cartMinusBtnReset();
    
                    if(availability == '1'){
                        //alert
                        desktopProductCardAvailabilityBlock.classList.remove('cart-desktop-product__shop');
                        desktopProductCardAvailabilityBlock.classList.add('cart-desktop-product__shop--alert');
    
                        function cardAvailableAlertDisapear(){
                            desktopProductCardAvailabilityBlock.classList.remove('cart-desktop-product__shop--alert');
                            desktopProductCardAvailabilityBlock.classList.add('cart-desktop-product__shop');
                        }
                        setTimeout(cardAvailableAlertDisapear, 7000);
    
                        cartPlusBtnDisable();
                        desktopProductCardInput.style.pointerEvents = 'none';
                    }else{
        
                        if(Number(metaCardInputPlaceholder) < Number(availability)){
                            //change
                            const params = new URLSearchParams();
                            params.set('id', key);
            
                            const xhr = new XMLHttpRequest();
                            xhr.open('POST', '/cart/add');
                            xhr.responseType = 'json';
            
                            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
     
                            xhr.onload = () => {
                              if (xhr.status !== 200) {
                                console.warn('offerCardMobileAfterBuyCounter MinusClick ajax error');
                              }else{
                                const response = xhr.response;
                                let countFromCart = response.count; 
                                desktopCartHeaderSpan.style.display = 'block';
                                desktopCartHeaderSpan.innerText = countFromCart;
                                stickyHeaderDesktopCartCountUpdateInCart();
    
                                ++metaCardInput.placeholder;
    
                                cartProductCardCostRefresh();
                              }
                            }
            
                            xhr.send(params);
                       
    
                        }else if(Number(metaCardInputPlaceholder) >= Number(availability)){
                            //alert
                            desktopProductCardAvailabilityBlock.classList.remove('cart-desktop-product__shop');
                            desktopProductCardAvailabilityBlock.classList.add('cart-desktop-product__shop--alert');
    
                            function cardAvailableAlertDisapear(){
                                desktopProductCardAvailabilityBlock.classList.remove('cart-desktop-product__shop--alert');
                                desktopProductCardAvailabilityBlock.classList.add('cart-desktop-product__shop');
                            }
                            setTimeout(cardAvailableAlertDisapear, 7000);
        
                            cartPlusBtnDisable();
                            desktopProductCardInput.style.pointerEvents = 'none';
    
                        }else if(availability === 'много' || availability === 'В наличии' || availability === 'По запросу'){
                            //change
                            const params = new URLSearchParams();
                            params.set('id', key);
            
                            const xhr = new XMLHttpRequest();
                            xhr.open('POST', '/cart/add');
                            xhr.responseType = 'json';
            
                            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
     
                            xhr.onload = () => {
                              if (xhr.status !== 200) {
                                console.warn('offerCardMobileAfterBuyCounter PlusClick ajax error');
                              }else{
                                const response = xhr.response;
                                let countFromCart = response.count; 
                                desktopCartHeaderSpan.style.display = 'block';
                                desktopCartHeaderSpan.innerText = countFromCart;
                                stickyHeaderDesktopCartCountUpdateInCart();
    
                                ++metaCardInput.placeholder;
    
                                cartProductCardCostRefresh();
                              }
                            }
            
                            xhr.send(params);
                        }
                    }
                }
            }
            
            desktopProductCardInput.addEventListener('click', function(){
                localStorage.setItem('cartDesktopCustomQuantityInputValue', '');
                if(availability == '1'){
                    //alert
                    desktopProductCardAvailabilityBlock.classList.remove('cart-desktop-product__shop');
                    desktopProductCardAvailabilityBlock.classList.add('cart-desktop-product__shop--alert');

                    function cardAvailableAlertDisapear(){
                        desktopProductCardAvailabilityBlock.classList.remove('cart-desktop-product__shop--alert');
                        desktopProductCardAvailabilityBlock.classList.add('cart-desktop-product__shop');
                    }
                    setTimeout(cardAvailableAlertDisapear, 7000);

                    cartPlusBtnDisable();
                    desktopProductCardInput.style.pointerEvents = 'none';
                }else{
                    desktopProductCardQuantityBlock.style.display = 'none';
                    cartDesktopCustomQuantityBlock.style.display = 'flex';

                    cartDesktopCustomQuantityInput.focus();
                    cartDesktopCustomQuantityInput.addEventListener('input', function updateCustomInputValueCartDesktop(e){
                        const cartDesktopCustomQuantityInputValue = cartDesktopCustomQuantityInput.value;

                        if(Number(cartDesktopCustomQuantityInputValue) < Number(availability)){
                            // console.warn(`КАСТОМНЫЙ ИНПУТ МЕНЬШЕ ОСТАТКА осталось ${availability} штук ТОВАР ДОБАВЛЯЕМ`);
                            localStorage.setItem('cartDesktopCustomQuantityInputValue', cartDesktopCustomQuantityInputValue);
                        }else if(Number(cartDesktopCustomQuantityInputValue) > Number(availability)){
                            // console.warn(`КАСТОМНЫЙ ИНПУТ БОЛЬШЕ ИЛИ РАВЕН ОСТАТКУ осталось ${availability} штук ТОВАР НЕ ДОБАВЛЯЕМ`);
                            desktopProductCardAvailabilityBlock.classList.remove('cart-desktop-product__shop');
                            desktopProductCardAvailabilityBlock.classList.add('cart-desktop-product__shop--alert');
        
                            function cardAvailableAlertDisapear(){
                                desktopProductCardAvailabilityBlock.classList.remove('cart-desktop-product__shop--alert');
                                desktopProductCardAvailabilityBlock.classList.add('cart-desktop-product__shop');
                            }
                            setTimeout(cardAvailableAlertDisapear, 7000);
        
                            cartDesktopCustomQuantityInput.value = availability;
                            localStorage.setItem('cartDesktopCustomQuantityInputValue', availability);
                        }else if(availability === 'много' || availability === 'В наличии' || availability === 'По запросу'){
                            localStorage.setItem('cartDesktopCustomQuantityInputValue', cartDesktopCustomQuantityInputValue);
                        }
                    }); 

                    cartDesktopCustomQuantityBackBtn.addEventListener('click', function(){
                        desktopProductCardQuantityBlock.style.display = 'flex';
                        cartDesktopCustomQuantityBlock.style.display = 'none';
                    });
                }
            });

            cartDesktopCustomQuantityRefresh.addEventListener('click', function(e){
                e.preventDefault();
                cartMinusBtnReset();
                cartDesktopCustomQuantityRefresh.classList.add('cart-desktop-product-quantity__apply-btn--rotate');
                function removeRotateClassFromCustomInputDelay(){
                    cartDesktopCustomQuantityRefresh.classList.remove('cart-desktop-product-quantity__apply-btn--rotate');
                }
                setTimeout(removeRotateClassFromCustomInputDelay, 500);
                
                let cartDesktopCustomQuantityInputValue = localStorage.getItem('cartDesktopCustomQuantityInputValue');

                if(cartDesktopCustomQuantityInputValue == ''){
                    // console.warn('cartDesktopCustomQuantityInputValue === empty string');
                }else{
                    const params = new URLSearchParams();
                    params.set('id', key);
                    params.append('qty', cartDesktopCustomQuantityInputValue);

                    let xhr = new XMLHttpRequest();

                    xhr.open('POST', '/cart/change');
                    xhr.responseType = 'json';

                    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                    xhr.onload = () => {
                      if (xhr.status !== 200) {
                        console.warn('cartDesktopCustomQuantityInputValue ajax error');
                      } else {
                        // console.warn('cartDesktopCustomQuantityInputValue ajax SUCCESS');
                        // dynamic data from cart
                        const response = xhr.response;
                        let countFromCart = response.count; 
                        desktopCartHeaderSpan.style.display = 'block';
                        desktopCartHeaderSpan.innerText = countFromCart;
                        stickyHeaderDesktopCartCountUpdateInCart();

                        desktopProductCardInput.placeholder = cartDesktopCustomQuantityInputValue;
                        function customInputSwitchBlocksDelay(){
                            cartDesktopCustomQuantityBlock.style.display = 'none';
                            desktopProductCardQuantityBlock.style.display = 'flex';
                        }
                        setTimeout(customInputSwitchBlocksDelay, 450);

                        cartProductCardCostRefresh();

                        //clear customInputValue
                        function clearCustomInputValue(){
                            localStorage.setItem('cartDesktopCustomQuantityInputValue', '');
                        }
                        setTimeout(clearCustomInputValue, 200);
                      }
                    }

                    xhr.send(params);
                }
            });

            //remove offer
            desktopProductCardRemoveBtn.addEventListener('click', function(){
                let closestSeparator = parentblock.nextElementSibling;

                const params = new URLSearchParams();
                params.set('id', key);

                let xhr = new XMLHttpRequest();
        
                xhr.open('POST', '/cart/remove');
                xhr.responseType = 'json';

                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                xhr.onload = () => {
                  if (xhr.status !== 200) {
                    // console.warn('offerCardDesktopquantityDeleteButtonMech ajax error');
                  }else{
                    
                    const response = xhr.response;
                    let countFromCart = response.count; 
                    desktopCartHeaderSpan.style.display = 'block';
                    desktopCartHeaderSpan.innerText = countFromCart;
                    
                    desktopProductCard[i].style.transition = '0.4s';
                    desktopProductCard[i].style.transform = 'translate(-130%, 0)';

                    function parentBlockWithSeparatorDisapear(){
                        desktopProductCard[i].remove();
                        closestSeparator.remove();
                        cartDesktopCheckProductList();
                    }
                    stickyHeaderDesktopCartCountUpdateInCart();
                    setTimeout(parentBlockWithSeparatorDisapear, 500);
                    setTimeout(cartDesktopStarterPriceRefresh, 600);
                  }
                }

                xhr.send(params);
            });

            //Refresh cost of product card == price * quantity
            function cartProductCardCostRefresh(){
                const desktopProductCardPrice = desktopProductCard[i].querySelector('.cart-desktop-product__price p');
                const desktopProductCardCost = desktopProductCard[i].querySelector('.cart-desktop-product__cost p');
                const desktopProductCardInput = desktopProductCard[i].querySelector('.cart-desktop-product-quantity__default-input');
                const desktopProductCardInputPlaceholder = desktopProductCardInput.placeholder;

                const desktopProductCardPriceOutput = desktopProductCardPrice.innerText;
                const desktopProductCardPriceOutputReplaced = desktopProductCardPriceOutput.split(' ').join('');
                const desktopProductCardPriceOutputReplacedNumber = Number(desktopProductCardPriceOutputReplaced);

                const mutantCostInTheRow = desktopProductCardPriceOutputReplacedNumber * Number(desktopProductCardInputPlaceholder);
                const reMutantCostInTheRowString = mutantCostInTheRow.toString();
                const reMutantCostInTheRow = reMutantCostInTheRowString.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
                // console.warn('reMutantCostInTheRow')
                // console.warn(reMutantCostInTheRow)
                desktopProductCardCost.innerHTML = reMutantCostInTheRow;

                cartDesktopStarterPriceRefresh()
            }

            //refresh starterPrice 
            function cartDesktopStarterPriceRefresh(){
                const starterPriceBlocks = document.querySelectorAll('.cart-desktop-starter-price__cost-output');
                const finalPriceBlocks = document.querySelectorAll('.cart-final-price__price-output');

                const desktopProductCardsCostsList = document.querySelectorAll('.cart-desktop-product__cost p');
                metaValueCartCostListCleaner();

                desktopProductCardsCostsList.forEach(item => {
                    const desktopProductCardsCostsListItemOutput = item.innerText;
                    const desktopProductCardsCostsListItemOutputReplaced = desktopProductCardsCostsListItemOutput.split(' ').join('');
                    const desktopProductCardsCostsListItemOutputReplacedNumber = Number(desktopProductCardsCostsListItemOutputReplaced);

                    item.dataset.value = desktopProductCardsCostsListItemOutputReplacedNumber;

                    let cartMetaValueCost = document.createElement('div');
                    cartMetaValueCost.classList.add('metaValueCartCost');
                    metaBlock.appendChild(cartMetaValueCost);
                    cartMetaValueCost.innerHTML = item.dataset.value;
                })
               
                const metaValueCartCostList = document.querySelectorAll('.metaValueCartCost');
                
                //sum of Costs
                let sumOfCosts = 0;
                for(let i = 0; i < metaValueCartCostList.length; i++){
                    let currentMetaValue = metaValueCartCostList[i].innerHTML;
                    let currentMetaValueNumber = Number(currentMetaValue);

                    sumOfCosts += currentMetaValueNumber;
                }
                // const starterPriceModified = metaValueCartCostList.reduce((a, b) => a + b, 0);
                const reMutantSumOfCosts = sumOfCosts.toString();
                const reMutantSumOfCostsFormated = reMutantSumOfCosts.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

                //replace value of starterPrice and finalPrice blocks
                starterPriceBlocks.forEach(item => {
                    item.innerHTML = reMutantSumOfCostsFormated;
                })

                finalPriceBlocks.forEach(item => {
                    item.innerHTML = reMutantSumOfCostsFormated;
                })
            }
            //function for removing metaData from previous iteration
            function metaValueCartCostListCleaner(){
                let metaValueCartCostList = document.querySelectorAll('.metaValueCartCost');
                if(metaValueCartCostList === null){

                }else{
                    metaValueCartCostList.forEach(item => {
                        item.remove();
                    })
                }
            }     
        }
    }
}
cartDesktopProductCardQuantity();

//product cards mechs Mobile
//Quantity btn cart product card + price/cost values update
function cartMobileProductCardQuantity(){
    const mobileProductCardList = document.querySelectorAll('.cart-mobile-product');
    let mobileCartHeaderSpan = document.querySelector('.header-cart-mobile__shopping-cart span');

    //create metaBLock for metaData 
    const body = document.querySelector('body');
    const metaBlockMobile = document.createElement('div');
    metaBlockMobile.classList.add('metaBlockMobile');
    metaBlockMobile.style.visibility = 'hidden';
    body.appendChild(metaBlockMobile);

    if(mobileProductCardList === null){

    }else{ 
        for(let i = 0; i < mobileProductCardList.length; i++){
            const mobileProductCardAvailabilityBlock = mobileProductCardList[i].querySelector('.cart-mobile-product__shop');
            const mobileProductCardQantityBlock = mobileProductCardList[i].querySelector('.cart-mobile-product-quantity');
            const mobileProductCardBtnMinus = mobileProductCardList[i].querySelector('.cart-mobile-product-quantity__btn-minus');
            const mobileProductCardBtnPlus = mobileProductCardList[i].querySelector('.cart-mobile-product-quantity__btn-plus');
            const mobileProductCardInput = mobileProductCardList[i].querySelector('.cart-mobile-product-quantity__default-input');
            const mobileProductCardRemoveBtn = mobileProductCardList[i].querySelector('.cart-mobile-product__delete');

            const currentMobileproductCard = mobileProductCardList[i];
            let key = currentMobileproductCard.dataset.key; 
            let availability = currentMobileproductCard.dataset.availability;

            const cartMobileCustomQuantityBlock = document.createElement('div');
            cartMobileCustomQuantityBlock.classList.add('cart-mobile-product-quantity--custom');

            cartMobileCustomQuantityBlock.innerHTML = `          
                    <div class="cart-mobile-product-quantity__back-btn"></div>
                    <div class="cart-mobile-product-quantity__custom-input-wrapper">
                        <input class="cart-mobile-product-quantity__custom-input" pattern="[0-9]*" placeholder="1" type = "number" maxlength = "3" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength); this.value = !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : null">
                        <a class="cart-mobile-product-quantity__apply-btn"></a>
                    </div>
            `;
            
            mobileProductCardQantityBlock.after(cartMobileCustomQuantityBlock);

            const cartMobileCustomQuantityBackBtn = cartMobileCustomQuantityBlock.querySelector('.cart-mobile-product-quantity__back-btn');
            const cartMobileCustomQuantityInput = cartMobileCustomQuantityBlock.querySelector('.cart-mobile-product-quantity__custom-input');
            const cartMobileCustomQuantityRefresh = cartMobileCustomQuantityBlock.querySelector('.cart-mobile-product-quantity__apply-btn');

            //disable minus btn if input placeholder == '1'
            function cartMobileMinusBtnDisable(){
                const metaCardInput = currentMobileproductCard.querySelector('.cart-mobile-product-quantity__default-input');
                if(metaCardInput.placeholder <= '1'){
                    mobileProductCardBtnMinus.classList.remove('cart-mobile-product-quantity__btn-minus');
                    mobileProductCardBtnMinus.classList.add('cart-mobile-product-quantity__btn-minus--disable');
                }
            }
            cartMobileMinusBtnDisable();
            //minus btn disable state reset
            function cartMobileMinusBtnReset(){
                mobileProductCardBtnMinus.classList.add('cart-mobile-product-quantity__btn-minus');
                mobileProductCardBtnMinus.classList.remove('cart-mobile-product-quantity__btn-minus--disable');
            }
            //disable plus btn if input placeholder > availability
            function cartMobilePlusBtnDisable(){
                mobileProductCardBtnPlus.classList.remove('cart-mobile-product-quantity__btn-plus');
                mobileProductCardBtnPlus.classList.add('cart-mobile-product-quantity__btn-plus--disable');
            }
            //reset plus btn
            function cartMobilePlusBtnReset(){
                mobileProductCardBtnPlus.classList.add('cart-mobile-product-quantity__btn-plus');
                mobileProductCardBtnPlus.classList.remove('cart-mobile-product-quantity__btn-plus--disable');
            }
            //check emptiness of cart - if cart empty:reload page
            function cartMobileCheckProductList(){
                const cartMobileProductList = document.querySelector('.cart__mobile-products');
                const firstProductInTheList = cartMobileProductList.querySelector('li');
                if(firstProductInTheList === null){
                    document.location.reload();
                }
            }
            //quantity button mech -/+/input/inputRefresh
            mobileProductCardBtnMinus.addEventListener('click', function(){
                const metaCardInput = currentMobileproductCard.querySelector('.cart-mobile-product-quantity__default-input');
                const metaCardInputPlaceholder = metaCardInput.placeholder;

                if(metaCardInputPlaceholder == '1'){
                    cartMobileMinusBtnDisable();
                }else{
                    const params = new URLSearchParams();
                    params.set('id', key);
    
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', '/cart/reduce');
                    xhr.responseType = 'json';
    
                    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    
                    xhr.onload = () => {
                      if (xhr.status !== 200) {
                        console.warn('cardProductMobile MinusClick ajax error');
                      }else{
                      //  If 1 offer in afterBuyInputBlock checking
                        const response = xhr.response;
                        let countFromCart = response.count; 
                        mobileCartHeaderSpan.innerText = countFromCart;
                        stickyHeaderMobileCartCountUpdateInCart();;
                        --mobileProductCardInput.placeholder;
    
                        cartMobileMinusBtnDisable();
                        cartMobilePlusBtnReset()
                        mobileProductCardInput.style.pointerEvents = 'auto';

                        cartProductCardCostRefresh();
                      }
                    }
    
                    xhr.send(params);
                }
            });

            mobileProductCardBtnPlus.addEventListener('click', function(){
                const metaCardInput = currentMobileproductCard.querySelector('.cart-mobile-product-quantity__default-input');
                const metaCardInputPlaceholder = metaCardInput.placeholder;
                cartMobileMinusBtnReset();

                if(availability == '1'){
                    mobileProductCardAvailabilityBlock.classList.remove('cart-mobile-product__shop');
                    mobileProductCardAvailabilityBlock.classList.add('cart-mobile-product__shop--alert');

                    function cartMobileCardAvailabilityDisapear(){
                        mobileProductCardAvailabilityBlock.classList.add('cart-mobile-product__shop');
                        mobileProductCardAvailabilityBlock.classList.remove('cart-mobile-product__shop--alert');
                    }
                    setTimeout(cartMobileCardAvailabilityDisapear, 7000);

                    cartMobilePlusBtnDisable();
                    mobileProductCardInput.style.pointerEvents = 'none';
                }else{
                    if(Number(metaCardInputPlaceholder) < Number(availability)) {
                        //change
                        const params = new URLSearchParams();
                        params.set('id', key);
        
                        const xhr = new XMLHttpRequest();
                        xhr.open('POST', '/cart/add');
                        xhr.responseType = 'json';
        
                        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
 
                        xhr.onload = () => {
                          if (xhr.status !== 200) {
                            console.warn('offerCardMobileAfterBuyCounter PlusClick ajax error');
                          }else{
                            const response = xhr.response;
                            let countFromCart = response.count; 
                            mobileCartHeaderSpan.innerText = countFromCart;
                            stickyHeaderMobileCartCountUpdateInCart();

                            ++mobileProductCardInput.placeholder;

                            cartProductCardCostRefresh()
                          }
                        }
        
                        xhr.send(params);
                    }else if(Number(metaCardInputPlaceholder) >= Number(availability)){
                        //alert
                        mobileProductCardAvailabilityBlock.classList.remove('cart-mobile-product__shop');
                        mobileProductCardAvailabilityBlock.classList.add('cart-mobile-product__shop--alert');
    
                        function cartMobileCardAvailabilityDisapear(){
                            mobileProductCardAvailabilityBlock.classList.add('cart-mobile-product__shop');
                            mobileProductCardAvailabilityBlock.classList.remove('cart-mobile-product__shop--alert');
                        }
                        setTimeout(cartMobileCardAvailabilityDisapear, 7000);
    
                        cartMobilePlusBtnDisable();
                        mobileProductCardInput.style.pointerEvents = 'none';
                    }else if(availability === 'много' || availability === 'В наличии' || availability === 'По запросу'){
                        //change
                        const params = new URLSearchParams();
                        params.set('id', key);
        
                        const xhr = new XMLHttpRequest();
                        xhr.open('POST', '/cart/add');
                        xhr.responseType = 'json';
        
                        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                        xhr.onload = () => {
                            if (xhr.status !== 200) {
                                console.warn('offerCardMobileAfterBuyCounter PlusClick ajax error');
                            }else{
                                const response = xhr.response;
                                let countFromCart = response.count; 
                                mobileCartHeaderSpan.innerText = countFromCart;
                                stickyHeaderMobileCartCountUpdateInCart();

                                ++mobileProductCardInput.placeholder;

                                cartProductCardCostRefresh()
                            }
                        }
        
                        xhr.send(params);
                    }
                }
            });

            mobileProductCardInput.addEventListener('click', function(){
                localStorage.setItem('cartMobileCustomQuantityInputValue', '');
                if(availability == '1'){
                    //alert
                    mobileProductCardAvailabilityBlock.classList.remove('cart-mobile-product__shop');
                    mobileProductCardAvailabilityBlock.classList.add('cart-mobile-product__shop--alert');

                    function cartMobileCardAvailabilityDisapear(){
                        mobileProductCardAvailabilityBlock.classList.add('cart-mobile-product__shop');
                        mobileProductCardAvailabilityBlock.classList.remove('cart-mobile-product__shop--alert');
                    }
                    setTimeout(cartMobileCardAvailabilityDisapear, 7000);

                    cartMobilePlusBtnDisable();
                    mobileProductCardInput.style.pointerEvents = 'none';  
                }else{
                    mobileProductCardQantityBlock.style.display = 'none';
                    cartMobileCustomQuantityBlock.style.display = 'flex';

                    cartMobileCustomQuantityInput.focus();
                    cartMobileCustomQuantityInput.addEventListener('input', function updateCustomInputValueCartMobile(e){
                        const cartMobileCustomQuantityInputValue = cartMobileCustomQuantityInput.value;

                        if(Number(cartMobileCustomQuantityInputValue) < Number(availability)){
                            // console.warn(`КАСТОМНЫЙ ИНПУТ МЕНЬШЕ ОСТАТКА осталось ${availability} штук ТОВАР ДОБАВЛЯЕМ`);
                            localStorage.setItem('cartMobileCustomQuantityInputValue', cartMobileCustomQuantityInputValue);
                        }else if(Number(cartMobileCustomQuantityInputValue) > Number(availability)){
                            // console.warn(`КАСТОМНЫЙ ИНПУТ БОЛЬШЕ ИЛИ РАВЕН ОСТАТКУ осталось ${availability} штук ТОВАР НЕ ДОБАВЛЯЕМ`);
                            mobileProductCardAvailabilityBlock.classList.remove('cart-mobile-product__shop');
                            mobileProductCardAvailabilityBlock.classList.add('cart-mobile-product__shop--alert');
        
                            function cartMobileCardAvailabilityDisapear(){
                                mobileProductCardAvailabilityBlock.classList.add('cart-mobile-product__shop');
                                mobileProductCardAvailabilityBlock.classList.remove('cart-mobile-product__shop--alert');
                            }
                            setTimeout(cartMobileCardAvailabilityDisapear, 7000);
        
                            cartMobileCustomQuantityInput.value = availability;
                            localStorage.setItem('cartMobileCustomQuantityInputValue', availability);
                        }else if(availability === 'много' || availability === 'В наличии' || availability === 'По запросу'){
                            // console.warn(`КАСТОМНЫЙ ИНПУТ ограничен парметрами инпута - MAX_LENGTH = 3 | ТОВАР ДОБАВЛЯЕМ`);
                            localStorage.setItem('cartMobileCustomQuantityInputValue', cartMobileCustomQuantityInputValue);
                        }
                    })
                }
            })

            cartMobileCustomQuantityBackBtn.addEventListener('click', function(){
                cartMobileCustomQuantityBlock.style.display = 'none';
                mobileProductCardQantityBlock.style.display = 'flex';
            });
        
            cartMobileCustomQuantityRefresh.addEventListener('click', function(e){
                e.preventDefault();
                cartMobileMinusBtnReset();
                cartMobileCustomQuantityRefresh.classList.add('cart-mobile-product-quantity__apply-btn--rotate');
                function removeRotateClassFromCustomInputDelayMobile(){
                    cartMobileCustomQuantityRefresh.classList.remove('cart-mobile-product-quantity__apply-btn--rotate');
                }
                setTimeout(removeRotateClassFromCustomInputDelayMobile, 500);

                let cartMobileCustomQuantityInputValue = localStorage.getItem('cartMobileCustomQuantityInputValue');

                if(cartMobileCustomQuantityInputValue == ''){
                    console.warn('cartMobileCustomQuantityInputValue === empty string');
                }else{
                    const params = new URLSearchParams();
                    params.set('id', key);
                    params.append('qty', cartMobileCustomQuantityInputValue);

                    let xhr = new XMLHttpRequest();

                    xhr.open('POST', '/cart/change');
                    xhr.responseType = 'json';

                    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                    xhr.onload = () => {
                      if (xhr.status !== 200) {
                        console.warn('cartMobileCustomQuantityInputValue ajax error');
                      } else {
                        console.warn('cartMobileCustomQuantityInputValue ajax SUCCESS');
                        // dynamic data from cart
                        const response = xhr.response;
                        let countFromCart = response.count; 

                        mobileCartHeaderSpan.innerText = countFromCart;
                        stickyHeaderMobileCartCountUpdateInCart();

                        mobileProductCardInput.placeholder = cartMobileCustomQuantityInputValue;
                        function customInputSwitchBlocksDelayMobile(){
                            cartMobileCustomQuantityBlock.style.display = 'none';
                            mobileProductCardQantityBlock.style.display = 'flex';
                        }
                        setTimeout(customInputSwitchBlocksDelayMobile, 450);
                        
                        cartProductCardCostRefresh();

                        //clear customInputValue
                        function clearCustomInputValue(){
                            localStorage.setItem('cartMobileCustomQuantityInputValue', '');
                        }
                        setTimeout(clearCustomInputValue, 200);
                      }
                    }

                    xhr.send(params);
                }
            });

            //remove offer
            mobileProductCardRemoveBtn.addEventListener('click', function(){
                const closestSeparator = mobileProductCardList[i].nextElementSibling;

                const params = new URLSearchParams();
                params.set('id', key);

                let xhr = new XMLHttpRequest();
        
                xhr.open('POST', '/cart/remove');
                xhr.responseType = 'json';

                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                xhr.onload = () => {
                  if (xhr.status !== 200) {
                    // console.warn('offerCardInCartMobileDeleteButtonMech ajax error');
                  }else{
                    const response = xhr.response;
                    let countFromCart = response.count; 
                    mobileCartHeaderSpan.innerText = countFromCart;
                    stickyHeaderMobileCartCountUpdateInCart();
                    
                    mobileProductCardList[i].style.transition = '0.4s';
                    mobileProductCardList[i].style.transform = 'translate(-130%, 0)';

                    function parentBlockWithSeparatorDisapear(){
                        mobileProductCardList[i].remove();
                        closestSeparator.remove();
                        cartMobileCheckProductList();
                    }
                    setTimeout(parentBlockWithSeparatorDisapear, 500);
                    setTimeout(cartMobileStarterPriceRefresh, 600);
                    
                  }
                }
                xhr.send(params);
            });

            //Refresh cost of product card == price * quantity Mobile
            function cartProductCardCostRefresh(){
                const mobileProductCardPrice = mobileProductCardList[i].querySelector('.cart-mobile-product__price p');
                const mobileProductCardCost = mobileProductCardList[i].querySelector('.cart-mobile-product__cost p');
                const mobileProductCardInput = mobileProductCardList[i].querySelector('.cart-mobile-product-quantity__default-input');
                const mobileProductCardInputPlaceholder = mobileProductCardInput.placeholder;

                const mobileProductCardPriceOutput = mobileProductCardPrice.innerText;
                const mobileProductCardPriceOutputReplaced = mobileProductCardPriceOutput.split(' ').join('');
                const mobileProductCardPriceOutputReplacedNumber = Number(mobileProductCardPriceOutputReplaced);

                const mutantCostInTheRow = mobileProductCardPriceOutputReplacedNumber * Number(mobileProductCardInputPlaceholder);
                const reMutantCostInTheRowToString = mutantCostInTheRow.toString();
                const reMutantCostInTheRowFormat = reMutantCostInTheRowToString.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

                mobileProductCardCost.innerHTML = reMutantCostInTheRowFormat;

                cartMobileStarterPriceRefresh();
            }

            //refresh final price after +/-/refresh actions
            function cartMobileStarterPriceRefresh(){
                const starterPriceBlockMobile = document.querySelector('.cart-mobile-starter-price__cost-output');
                const finalPriceBlockMobile = document.querySelector('.cart-final-price__price-output');

                const mobileProductCardsCostsList = document.querySelectorAll('.cart-mobile-product__cost p');
                metaValueCartCostListCleanerMobile();

                mobileProductCardsCostsList.forEach(item => {
                    const mobileProductCardsCostsListItemOutput = item.innerText;
                    const mobileProductCardsCostsListItemOutputReplaced = mobileProductCardsCostsListItemOutput.split(' ').join('');
                    const mobileProductCardsCostsListItemOutputReplacedNumber = Number(mobileProductCardsCostsListItemOutputReplaced);

                    item.dataset.value = mobileProductCardsCostsListItemOutputReplacedNumber;

                    let cartMetaValueCostMobile = document.createElement('div');
                    cartMetaValueCostMobile.classList.add('metaValueCartCostMobile');
                    metaBlockMobile.appendChild(cartMetaValueCostMobile);
                    cartMetaValueCostMobile.innerHTML = item.dataset.value;
                })

                const metaValueCartCostListMobile = document.querySelectorAll('.metaValueCartCostMobile');
                //sum of Costs
                let sumOfCosts = 0;
                for(let i = 0; i < metaValueCartCostListMobile.length; i++){     
                    let currentMetaValue = metaValueCartCostListMobile[i].innerHTML;
                    let currentMetaValueNumber = Number(currentMetaValue);

                    sumOfCosts += currentMetaValueNumber;
                }

                const reMutantSumOfCosts = sumOfCosts.toString();
                const reMutantSumOfCostsFormated = reMutantSumOfCosts.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

                starterPriceBlockMobile.innerHTML = reMutantSumOfCostsFormated;
                // finalPriceBlockMobile.innerHTML = reMutantSumOfCostsFormated;
            }
            //function for removing metaData from previous iteration
            function metaValueCartCostListCleanerMobile(){
                let metaValueCartCostListMobile = document.querySelectorAll('.metaValueCartCostMobile');
                if(metaValueCartCostListMobile === null){

                }else{
                    metaValueCartCostListMobile.forEach(item => {
                    item.remove();
                })
               }
            }
        }
    }
}
cartMobileProductCardQuantity();

//favoriteMech Desktop
function cartDesktopFavBtnMech(){
    let favWrapperList = document.querySelectorAll('.cart-desktop-product__favorite-wrapper');
    let cartDesktopHeaderFavSpan = document.querySelector('.header-cart-desktop__favorites span');
    if(favWrapperList === null){
        // console.log('no offers on page');
    }else{
        for(let i = 0; i < favWrapperList.length; i++){
            const currentFavBtn = favWrapperList[i].querySelector('.cart-desktop-product__favorite');
            const currentFavBtnActive = favWrapperList[i].querySelector('.cart-desktop-product__favorite-active');

            let favBtnKey = currentFavBtn.dataset.key;

            currentFavBtn.addEventListener('click', function(){
                let xhr = new XMLHttpRequest();

                xhr.open('POST', '/favorite/add');
      
                xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
      
                xhr.onload = () => {
                  if (xhr.status !== 200) {
                    // console.warn('favoriteMobileMech ajax error');
                    // errorBannerMobileRemove();
                    // errorBannerMobile();
                  }else {
                    const jsonResponse = JSON.parse(xhr.responseText);;
                      
                    let countFavFromServer = ++jsonResponse.count;
                    cartDesktopHeaderFavSpan.innerText = countFavFromServer;
      
                    currentFavBtnActive.style.display = 'block';
                    // mobileFavoriteTooltip();
                    stickyHeaderDesktopFavoriteCountUpdateInCart();
                  }   
                }
                
                xhr.send('key=' + favBtnKey);
            }); 

            currentFavBtnActive.addEventListener('click', function(){
                let xhr = new XMLHttpRequest();

                xhr.open('POST', '/favorite/remove');
      
                xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
      
                xhr.onload = () => {
                  if (xhr.status !== 200) {
                    // console.warn('favoriteMobileMech ajax error');
                    // errorBannerMobileRemove();
                    // errorBannerMobile();
                  }else {
                    const jsonResponse = JSON.parse(xhr.responseText);;
                      
                    let countFavFromServer = --jsonResponse.count;
                      // console.warn(countFromFav)
                      cartDesktopHeaderFavSpan.innerText = countFavFromServer;
      
                    currentFavBtnActive.style.display = 'none';
                    currentFavBtn.style.display = 'block';
                    // mobileFavoriteTooltip();
                    stickyHeaderDesktopFavoriteCountUpdateInCart();
                  }   
                }
                
                xhr.send('key=' + favBtnKey);
            });
        }
    }
}
cartDesktopFavBtnMech();

//favoriteMech Mobile
function cartMobileFavBtnMech(){
    let favWrapperListMobile = document.querySelectorAll('.cart-mobile-product__favorite-wrapper');
    let mobileCartHeaderFavSpan = document.querySelector('.header-cart-mobile__favorites span');

    if(favWrapperListMobile === null){

    }else{
        for (let i = 0; i < favWrapperListMobile.length; i++) {
            const currentFavBtnMobile = favWrapperListMobile[i].querySelector('.cart-mobile-product__favorite');
            const currentFavBtnActiveMobile = favWrapperListMobile[i].querySelector('.cart-mobile-product__favorite-active');
            
            let favBtnKey = currentFavBtnMobile.dataset.key;

            currentFavBtnMobile.addEventListener('click', function(){
                let xhr = new XMLHttpRequest();

                xhr.open('POST', '/favorite/add');
      
                xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
      
                xhr.onload = () => {
                  if (xhr.status !== 200) {
                    // console.warn('favoriteMobileMech ajax error');
                    // errorBannerMobileRemove();
                    // errorBannerMobile();
                  }else {
                    const jsonResponse = JSON.parse(xhr.responseText);;
                      
                    let countFavFromServer = ++jsonResponse.count;
                    mobileCartHeaderFavSpan.innerText = countFavFromServer;
      
                    currentFavBtnActiveMobile.style.display = 'block';
                    // mobileFavoriteTooltip();
                    stickyHeaderMobileFavCountUpdateInCart();
                  }   
                }
                
                xhr.send('key=' + favBtnKey);
            });

            currentFavBtnActiveMobile.addEventListener('click', function(){
                let xhr = new XMLHttpRequest();

                xhr.open('POST', '/favorite/remove');
      
                xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
      
                xhr.onload = () => {
                  if (xhr.status !== 200) {
                    // console.warn('favoriteMobileMech ajax error');
                    // errorBannerMobileRemove();
                    // errorBannerMobile();
                  }else {
                    const jsonResponse = JSON.parse(xhr.responseText);;
                      
                    let countFavFromServer = --jsonResponse.count;
                    mobileCartHeaderFavSpan.innerText = countFavFromServer;
      
                    currentFavBtnActiveMobile.style.display = 'none';
                    currentFavBtnMobile.style.display = 'block';
                    // mobileFavoriteTooltip();
                    stickyHeaderMobileFavCountUpdateInCart();
                  }   
                }
                
                xhr.send('key=' + favBtnKey);
            });
        }
    }
}
cartMobileFavBtnMech()

//refresh buttons mech on Desktop
function cartDesktopRefreshButtons(){
    const refreshBtn = document.querySelector('.cart__refresh-btn');
    const refreshBtnFromStarterPrice = document.querySelector('.cart-desktop-starter-price__refresh-btn');

    if(refreshBtn === null || refreshBtnFromStarterPrice === null){
        // console.log('all gone');
    }else{
        refreshBtn.addEventListener('click', function(e){
            e.preventDefault();
            document.location.reload();
        })
        refreshBtnFromStarterPrice.addEventListener('click', function(e){
            e.preventDefault();    
            document.location.reload();
        })
    }
}
cartDesktopRefreshButtons()
 
//mechs for disabled cards
function cartDesktopProductDisabledCard(){
    const disabledDesktopProductCard = document.querySelectorAll('.cart-desktop-product-disabled');
    let desktopCartHeaderSpan = document.querySelector('.header-cart-desktop__shopping-cart span');

    //check emptiness of cart
    function cartDesktopCheckProductList(){
        let cartDesktopProductsList = document.querySelector('.cart__desktop-products-inner');
        let firstProductInTheList = cartDesktopProductsList.querySelector('li');
        if(firstProductInTheList === null){
            document.location.reload();
        }else{
            // console.log('something here, in the cart');
        }
    }

    if(disabledDesktopProductCard === null){

    }else{
        for(let i = 0;i < disabledDesktopProductCard.length; i++){
            const desktopProductCardFavoriteBtn = disabledDesktopProductCard[i].querySelector('.cart-desktop-product__favorite');
            const desktopProductCardRemoveBtn = disabledDesktopProductCard[i].querySelector('.cart-desktop-product__delete');
            const desktopProductCardButtonsBlock = disabledDesktopProductCard[i].querySelector('.cart-desktop-product-disabled__action');

            const parentblock = desktopProductCardButtonsBlock.parentElement;
            let key = parentblock.dataset.key; 
            let availability = parentblock.dataset.availability;

            desktopProductCardRemoveBtn.addEventListener('click', function(){
                let closestSeparator = parentblock.nextElementSibling;

                const params = new URLSearchParams();
                params.set('id', key);

                let xhr = new XMLHttpRequest();
        
                xhr.open('POST', '/cart/remove');
                xhr.responseType = 'json';

                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                xhr.onload = () => {
                  if (xhr.status !== 200) {
                    // console.warn('offerCardDesktopquantityDeleteButtonMech ajax error');
                  }else{
                    
                    const response = xhr.response;
                    let countFromCart = response.count; 
                    desktopCartHeaderSpan.style.display = 'block';
                    desktopCartHeaderSpan.innerText = countFromCart;
                    
                    disabledDesktopProductCard[i].style.transition = '0.4s';
                    disabledDesktopProductCard[i].style.transform = 'translate(-130%, 0)';

                    function parentBlockWithSeparatorDisapear(){
                        disabledDesktopProductCard[i].remove();
                        closestSeparator.remove();
                        cartDesktopCheckProductList();
                    }
                    setTimeout(parentBlockWithSeparatorDisapear, 500);
                  }
                }

                xhr.send(params);
            });
        }
    }
}
cartDesktopProductDisabledCard();

//ios phone number fix
function cartHeaderNumberFix(){
    const mobileCartHeaderPhone = document.querySelector('.header-cart-mobile__phone');
    if(mobileCartHeaderPhone === null){

    }else{
        mobileCartHeaderPhone.innerHTML = `+7 (495) &zwj;649 60 60`;
    }
}
cartHeaderNumberFix();

//cart-delivery cart-delivery__option-inner MARGIN without TITLE
function cartDeliveryOptionInnerWithOutTitleMargin(){
    const optionInners = document.querySelectorAll('.cart-delivery__option-inner');
    
    if(optionInners){
        let intViewportWidth = window.innerWidth;
        if(intViewportWidth > 1100){

            optionInners.forEach( item => {
                const optionInnerTitle = item.querySelector('.cart-delivery__option-info-title');
                const optionInnerInfo = item.querySelector('.cart-delivery__info');
    
                if(optionInnerTitle === null){
                    optionInnerInfo.style.margin = "0px 0 0 25px";
                }
            });
        }
    }
}
cartDeliveryOptionInnerWithOutTitleMargin();

//from Back-end || formSubmit
function cartFormSubmit(formName, link) {
    event.preventDefault();
    let form = '';
    if (formName !== '') {
      form = document.forms[formName];
    } else {
      form = document.forms[link.getAttribute("data-form")];
    }
    if (link !== undefined) {
      form.setAttribute("action", link.getAttribute("href"));
    }
    form.submit();
}

function suBmitFormSwitchForDeliverySection(){
    const deliveryTabRadio = document.querySelectorAll(".cart-delivery__tab-input");
    const headerCartNavItem = document.querySelectorAll(".header-cart-desktop .header-cart-desktop__nav-item a");
    if(deliveryTabRadio === null){
        // console.log('it`s not cart page!');
    } else {
        for(let i = 0;i < deliveryTabRadio.length; i++) { 
            if(deliveryTabRadio[i].type=="radio") { 
              deliveryTabRadio[i].onchange=function() { 
                  var formId = this.getAttribute("id").replace(/[^0-9]/g,'');
                  headerCartNavItem.forEach(
                    function(x){ 
                      x.setAttribute("data-form", 'shop_order_form_'+formId);
                    }
                  )
                }
            }
        }
    }
}
suBmitFormSwitchForDeliverySection();

//cart-confirmation disabled button
function cartConfirmationDisabledBtn(){
    const nextBtnDisabled = document.querySelectorAll('.cart-confirmation-send-order-btn--disabled');

    if(nextBtnDisabled === null){

    }else{
        for(let i = 0;i < nextBtnDisabled.length; i++){
            nextBtnDisabled[i].addEventListener('click', function(e){
                e.preventDefault();
            });

            const disabledNextBtnTip = nextBtnDisabled[i].querySelector('.cart-confirmation-send-order-btn--disabled-tip')

            if(disabledNextBtnTip === null){

            }else{
                nextBtnDisabled[i].addEventListener('mouseover', function(e){
                    disabledNextBtnTip.style.opacity = '1';
                    disabledNextBtnTip.style.visibility = 'visible';
                });
                
                nextBtnDisabled[i].addEventListener('mouseout', function(e){
                    disabledNextBtnTip.style.opacity = '0';
                    disabledNextBtnTip.style.visibility = 'hidden';
                });
            }
        }
    }
}
cartConfirmationDisabledBtn()

//DADATA.RU Find with INN для ИП *12 символов
function findDataFromInnForIp(){
    const firstTabcontentBlock = document.querySelector('.cart-customer__radio-btn-content-1');

    if(firstTabcontentBlock){
        let firstInnInput = firstTabcontentBlock.querySelector('.cart-customer-organisation-data__input-inn');
        let secondOrganizationNameInput = firstTabcontentBlock.querySelector('.cart-customer-organisation-data__input-organization-name');
        let thirdAdressInput = firstTabcontentBlock.querySelector('.cart-customer-organisation-data__input-address');
        
        let firstInnHint = firstTabcontentBlock.querySelector('.cart-customer-organisation-data__input-hint');

        firstInnInput.addEventListener('change', function(e){

            if(firstInnInput.value.length !== 12){
                firstInnHint.innerHTML = `Некорректная длинна ИНН`;
                firstInnInput.classList.add('cart-customer-organisation-data__input-field--alert');
                function removeFirstInnInputAlertDelay(){
                    firstInnInput.classList.remove('cart-customer-organisation-data__input-field--alert');
                    firstInnHint.innerHTML = `Введите ИНН, и мы найдем Вашу организацию`;
                }
                setTimeout(removeFirstInnInputAlertDelay, 5000);
            }else{
                let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
                let token = "7d7a4b089cea1b122a5a6e748afc75458f420444";
                let query = firstInnInput.value;
            
                let options = {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Token " + token
                    },
                    body: JSON.stringify({query: query})
                }
            
                fetch(url, options)
                .then(response => response.json())
                .then((data) => {
                    let address = data.suggestions[0].data.address.value;
                    let ipOrganization = data.suggestions[0].value;
                    console.log(data);
                    thirdAdressInput.value = address;
                    secondOrganizationNameInput.value = ipOrganization;
                })
                .catch(error => {
                    firstInnHint.innerHTML = `Проверьте правильность введенных данных`;
                    firstInnInput.classList.add('cart-customer-organisation-data__input-field--alert');
                    function removeFirstInnInputAlertDelay(){
                        firstInnInput.classList.remove('cart-customer-organisation-data__input-field--alert');
                        firstInnHint.innerHTML = `Введите ИНН, и мы найдем Вашу организацию`;
                    }
                    setTimeout(removeFirstInnInputAlertDelay, 5000);
                });
            }
        });
    }
}
findDataFromInnForIp();

//DADATA.RU Find with INN для ЮР Лиц *10 символов
function findDataFromInnForUr(){
    const secondTabcontentBlock = document.querySelector('.cart-customer__radio-btn-content-2');

    if(secondTabcontentBlock){
        let firstInnInput = secondTabcontentBlock.querySelector('.cart-customer-organisation-data__input-inn');
        let secondKppInput = secondTabcontentBlock.querySelector('.cart-customer-organisation-data__input-kpp');
        let thirdOrganizationNameInput = secondTabcontentBlock.querySelector('.cart-customer-organisation-data__input-organization-name');
        let fourthAdressInput = secondTabcontentBlock.querySelector('.cart-customer-organisation-data__input-address');
        
        let firstInnHint = secondTabcontentBlock.querySelector('.cart-customer-organisation-data__input-hint');

        firstInnInput.addEventListener('change', function(e){

            if(firstInnInput.value.length !== 10){
                firstInnHint.innerHTML = `Некорректная длинна ИНН`;
                firstInnInput.classList.add('cart-customer-organisation-data__input-field--alert');
                function removeFirstInnInputAlertDelay(){
                    firstInnInput.classList.remove('cart-customer-organisation-data__input-field--alert');
                    firstInnHint.innerHTML = `Введите ИНН, и мы найдем Вашу организацию`;
                }
                setTimeout(removeFirstInnInputAlertDelay, 5000);
            }else{
                let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
                let token = "7d7a4b089cea1b122a5a6e748afc75458f420444";
                let query = firstInnInput.value;
            
                let options = {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Token " + token
                    },
                    body: JSON.stringify({query: query})
                }
            
                fetch(url, options)
                .then(response => response.json())
                .then((data) => {
                    let kpp = data.suggestions[0].data.kpp;
                    let address = data.suggestions[0].data.address.value;
                    let organizationName = data.suggestions[0].data.name.full;
                    console.log(data);

                    secondKppInput.value = kpp;
                    thirdOrganizationNameInput.value = organizationName;
                    fourthAdressInput.value = address;
                })
                .catch(error => {
                    firstInnHint.innerHTML = `Проверьте правильность введенных данных`;
                    firstInnInput.classList.add('cart-customer-organisation-data__input-field--alert');
                    function removeFirstInnInputAlertDelay(){
                        firstInnInput.classList.remove('cart-customer-organisation-data__input-field--alert');
                        firstInnHint.innerHTML = `Введите ИНН, и мы найдем Вашу организацию`;
                    }
                    setTimeout(removeFirstInnInputAlertDelay, 5000);
                });
            }
        });
    }
}
findDataFromInnForUr();

//DADATA.RU Find With BIK
function findDataFromBikIp(){
    const firstTabcontentBlock = document.querySelector('.cart-customer__radio-btn-content-1');

    if(firstTabcontentBlock){
        let firstBikInput = firstTabcontentBlock.querySelector('.cart-customer-payment-details-data__input-bik');
        let secondBankInput = firstTabcontentBlock.querySelector('.cart-customer-payment-details-data__input-bank');
        let thirdCorrespondentAccountInput = firstTabcontentBlock.querySelector('.cart-customer-payment-details-data__input-correspondent-account');

        let firstBikHint = firstTabcontentBlock.querySelector('.cart-customer-payment-details-data__input-hint-bik');

        firstBikInput.addEventListener('change', function(){
            if(firstBikInput.value.length !== 9){
                firstBikHint.innerHTML = `Некорректная длинна БИК`;
                firstBikInput.classList.add('cart-customer-payment-details-data__input-field--alert');
                function removeFirstInnInputAlertDelay(){
                    firstBikInput.classList.remove('cart-customer-payment-details-data__input-field--alert');
                    firstBikHint.innerHTML = `Введите БИК, и мы найдем Ваш банк`;
                }
                setTimeout(removeFirstInnInputAlertDelay, 5000);
            }else{

                let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/bank";
                let token = "7d7a4b089cea1b122a5a6e748afc75458f420444";
                let query = firstBikInput.value;
    
                let options = {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Token " + token
                    },
                    body: JSON.stringify({query: query})
                }
    
                fetch(url, options)
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    let bank = data.suggestions[0].value;
                    let correspondentAccount = data.suggestions[0].data.correspondent_account;

                    secondBankInput.value = bank;
                    thirdCorrespondentAccountInput.value = correspondentAccount;
                })
                .catch(error => {
                    firstBikHint.innerHTML = `Проверьте правильность введенных данных`;
                    firstBikInput.classList.add('cart-customer-payment-details-data__input-field--alert');
                    function removeFirstInnInputAlertDelay(){
                        firstBikInput.classList.remove('cart-customer-payment-details-data__input-field--alert');
                        firstBikHint.innerHTML = `Введите БИК, и мы найдем Ваш банк`;
                    }
                    setTimeout(removeFirstInnInputAlertDelay, 5000);
                });
            }
        });
    }
}
findDataFromBikIp();

function findDataFromBikUr(){
    const secondTabcontentBlock = document.querySelector('.cart-customer__radio-btn-content-2');

    if(secondTabcontentBlock){
        let firstBikInput = secondTabcontentBlock.querySelector('.cart-customer-payment-details-data__input-bik');
        let secondBankInput = secondTabcontentBlock.querySelector('.cart-customer-payment-details-data__input-bank');
        let thirdCorrespondentAccountInput = secondTabcontentBlock.querySelector('.cart-customer-payment-details-data__input-correspondent-account');

        let firstBikHint = secondTabcontentBlock.querySelector('.cart-customer-payment-details-data__input-hint-bik');

        firstBikInput.addEventListener('change', function(){
            if(firstBikInput.value.length !== 9){
                firstBikHint.innerHTML = `Некорректная длинна БИК`;
                firstBikInput.classList.add('cart-customer-payment-details-data__input-field--alert');
                function removeFirstInnInputAlertDelay(){
                    firstBikInput.classList.remove('cart-customer-payment-details-data__input-field--alert');
                    firstBikHint.innerHTML = `Введите БИК, и мы найдем Ваш банк`;
                }
                setTimeout(removeFirstInnInputAlertDelay, 5000);
            }else{

                let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/bank";
                let token = "7d7a4b089cea1b122a5a6e748afc75458f420444";
                let query = firstBikInput.value;
    
                let options = {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Token " + token
                    },
                    body: JSON.stringify({query: query})
                }
    
                fetch(url, options)
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    let bank = data.suggestions[0].value;
                    let correspondentAccount = data.suggestions[0].data.correspondent_account;

                    secondBankInput.value = bank;
                    thirdCorrespondentAccountInput.value = correspondentAccount;
                })
                .catch(error => {
                    firstBikHint.innerHTML = `Проверьте правильность введенных данных`;
                    firstBikInput.classList.add('cart-customer-payment-details-data__input-field--alert');
                    function removeFirstInnInputAlertDelay(){
                        firstBikInput.classList.remove('cart-customer-payment-details-data__input-field--alert');
                        firstBikHint.innerHTML = `Введите БИК, и мы найдем Ваш банк`;
                    }
                    setTimeout(removeFirstInnInputAlertDelay, 5000);
                });
            }
        });
    }
}
findDataFromBikUr();

//DADATA.ru Tooltip about banks
function findDataAboutBank(){
    let firstBikInput = document.querySelector('#shoporder-legal_bank');
    if(firstBikInput){
        firstBikInput.addEventListener('change', function(){
            let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank";
            let token = "7d7a4b089cea1b122a5a6e748afc75458f420444";
            let query = firstBikInput.value;
            
            let options = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                body: JSON.stringify({query: query})
            }
            
            fetch(url, options)
            .then(response => response.json())
            .then(result => console.log(result))

            
            .catch(error => console.log("error", error));
        });
    }
}
// findDataAboutBank()

//mobile header closer
function toggleHiddenMenuBtnCart() {
    let hiddenMenuBtnCart = document.querySelector('.header-cart-mobile__hamburger-btn-icon');
    let hiddenMenuCart = document.querySelector('.header-cart-mobile__hamburger-menu');
    let headerCart = document.querySelector('.header-cart');
    let body = document.querySelector('body');

    if (hiddenMenuBtnCart){
        let glassBackground = document.createElement("div");
        glassBackground.classList.add('header-blur-wrap');
        headerCart.after(glassBackground);

        hiddenMenuBtnCart.addEventListener('click', function () {
            this.classList.toggle('active');
            hiddenMenuCart.style.display = 'flex';
            function delayTramsition(){
                hiddenMenuCart.classList.toggle('header-cart-mobile__hamburger-menu--on');
                glassBackground.classList.toggle('header-blur-wrap--on');
                body.classList.toggle('page-body__no-scroll');
            }
            setTimeout(delayTramsition, 50);
        });

        glassBackground.addEventListener('click', function () {
            hiddenMenuBtnCart.classList.remove('active');
            hiddenMenuCart.style.display = 'none';
            function delayTramsition(){
                hiddenMenuCart.classList.remove('header-cart-mobile__hamburger-menu--on');
                glassBackground.classList.remove('header-blur-wrap--on');
                body.classList.remove('page-body__no-scroll');
            }
            setTimeout(delayTramsition, 50);
        });
    }
}
toggleHiddenMenuBtnCart();

function headerContactUsModalCart() {
    let contactUsModal = document.querySelector('.header-contact-us');
    let contactUsModalClose = document.querySelector('.header-contact-us__close');

    let contactUsMobileHeaderNumber = document.querySelector('.header-cart-mobile__phone');
    let contactUsDesktopHeaderNumbers = document.querySelectorAll('.header-cart-desktop__number');

    let contactUsHeaderMobileHidden = document.querySelector('.header-cart-mobile__hamburger-call-btn');
   

    let contactUsHeaderGlassBack = document.querySelector('.header-contact-us__blur');

    let body = document.querySelector('body');

    if (contactUsDesktopHeaderNumbers) {
        for (let i = 0; i < contactUsDesktopHeaderNumbers.length; i++) {
            contactUsDesktopHeaderNumbers[i].addEventListener('click', function (e) {
                e.preventDefault();
                contactUsModal.style.display = 'block';
                body.classList.add('page-body__no-scroll');
            });
        }
        if(contactUsHeaderMobileHidden){
            contactUsHeaderMobileHidden.addEventListener('click', function () {
                contactUsModal.style.display = 'block';
                body.classList.add('page-body__no-scroll');
            });
    
            contactUsMobileHeaderNumber.addEventListener('click', function () {
                contactUsModal.style.display = 'block';
                body.classList.add('page-body__no-scroll');
            });
            
            if(contactUsModalClose){
                contactUsModalClose.addEventListener('click', function () {
                    contactUsModal.style.display = 'none';
                    body.classList.remove('page-body__no-scroll');
                });
        
                contactUsHeaderGlassBack.addEventListener('click', function () {
                    contactUsModal.style.display = 'none';
                    body.classList.remove('page-body__no-scroll');
                });
            }
        }
    } 
}
headerContactUsModalCart();


//Dadata autoComplete in Cart
//delievery to Moscow adress
function addressToMoscowAutoComplete(){
    let adressInputMoscow = document.querySelector('.cart-delivery-primary-data__input input');
    if(adressInputMoscow){
        adressInputMoscow.classList.add('cart-delivery-primary-data__input-field--moscow');
        dadataAutoAddressInCartDeliveryMoscow();
        function delaySuggestionStyles(){
            let suggestParent = document.querySelector('.suggestions-wrapper');
            let intViewportWidth = window.innerWidth;
            if(suggestParent){

                if((intViewportWidth < 768)){
                    let suggestChild = suggestParent.querySelector('.suggestions-suggestions');
                    suggestParent.style.left = '1px';
                    suggestParent.style.top = '70px';
                    suggestChild.style.width = '365px';
                    suggestChild.style.paddingLeft = '15px';
                    suggestChild.style.fontSize = '14px';
                    suggestChild.style.border = '1.5px solid #0A51A5';
                    suggestChild.style.borderRadius = '5px';
                }else if(intViewportWidth < 1800){
                    let suggestChild = suggestParent.querySelector('.suggestions-suggestions');
                    suggestParent.style.left = '299.5px';
                    suggestParent.style.top = '50px';
                    suggestChild.style.width = '446px';
                    suggestChild.style.paddingLeft = '20px';
                    suggestChild.style.fontSize = '15px';
                    suggestChild.style.border = '1.5px solid #0A51A5';
                    suggestChild.style.borderRadius = '5px';
                }else if(intViewportWidth > 1800){
                    let suggestChild = suggestParent.querySelector('.suggestions-suggestions');
                    suggestParent.style.left = '374.5px';
                    suggestParent.style.top = '67px';
                    suggestChild.style.width = '600px';
                    suggestChild.style.paddingLeft = '20px';
                    suggestChild.style.fontSize = '18px';
                    suggestChild.style.border = '1.5px solid #0A51A5';
                    suggestChild.style.borderRadius = '5px';
                }
            }
        }
        adressInputMoscow.addEventListener('click', function(){
            delaySuggestionStyles()
        });
    }
}
addressToMoscowAutoComplete();

function dadataAutoAddressInCartDeliveryMoscow(){
    //jquery to dadata
    const scriptHeaderDadataJquery = document.createElement('script');
    scriptHeaderDadataJquery.async = false;
    scriptHeaderDadataJquery.innerHTML = `
    jQuery(document).ready(function($){
          let token = "7d7a4b089cea1b122a5a6e748afc75458f420444";
          let type  = "address";
          let $city = $(".cart-delivery-primary-data__input-field--moscow");
          let $address = $("#address") ;
          
          function iplocate() {
            let serviceUrl = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
            let params = {
              type: "GET",
              contentType: "application/json",
              headers: {
                "Authorization": "Token " + token
              }
            };
            return $.ajax(serviceUrl, params);
          }
          
          // город и населенный пункт
          $city.suggestions({
            token: token,
            type: type,
            hint: false,
            bounds: "city",
            constraints: {
              locations: "city",
            },
          });

          // console.warn( '$city.suggestions ')
          // console.warn( $city.suggestions() )
      });
    `;
   
    document.body.appendChild(scriptHeaderDadataJquery);
}

//activate script when tab open
function addressToAllRussiaAutoCompleteStarter(){
    const deliveryTabs = document.querySelectorAll('.cart-delivery__tab-label');
    let secondTab =  deliveryTabs[2]
    // console.warn('deliveryTabs');
    // console.warn(deliveryTabs);
    if(secondTab){
        secondTab.addEventListener('click', function(){
            //click on 3 delivery tab
            setTimeout(addressToAllRussiaAutoComplete, 1000);
        });
    }
} 
addressToAllRussiaAutoCompleteStarter();
//delievery to all city across Russia adress
function addressToAllRussiaAutoComplete(){
    let deliveryParent = document.querySelectorAll('.cart-delivery__primary-data');
    let secondDeliveryParentOfAllRussia = deliveryParent[1];
    // console.warn('secondDeliveryParentOfAllRussia');
    // console.warn(secondDeliveryParentOfAllRussia);
    if(secondDeliveryParentOfAllRussia){
        let inputs = secondDeliveryParentOfAllRussia.querySelectorAll('.cart-delivery-primary-data__input input');
        let cityInput = inputs[0];
        // console.warn('secondDeliveryParentOfAllRussia');
        // console.warn(secondDeliveryParentOfAllRussia);
        //auto fill city
        const dadataModalSuccessConfirmCity = localStorage.getItem('dadataModalSuccessConfirmCity');
        if(dadataModalSuccessConfirmCity){
            cityInput.value = dadataModalSuccessConfirmCity;
        }

        //auto fill address
        let adressInput = inputs[1];
        adressInput.classList.add('cart-delivery-primary-data__input-field--allRussia');
        dadataAutoAddressInCartDeliveryAllRussia();
        function delaySuggestionStylesAllRussia(){
            let suggestParent = document.querySelectorAll('.suggestions-wrapper');
            let secondSuggestParent = suggestParent[1];

            let intViewportWidth = window.innerWidth;
            if(suggestParent){

                let suggestWrapper = adressInput.nextSibling;
                let suggestSuggestInsideWrapper = suggestWrapper.querySelector('div');;
                // console.warn('adressInput');
                // console.warn(adressInput);
                // console.warn('suggestWrapper');
                // console.warn(suggestWrapper);
                // console.warn('suggestSuggestInsideWrapper');
                // console.warn(suggestSuggestInsideWrapper);
                if((intViewportWidth < 768)){
                    
                    suggestWrapper.style.left = '1px';
                    suggestWrapper.style.top = '70px';
                    suggestSuggestInsideWrapper.style.width = '365px';
                    suggestSuggestInsideWrapper.style.paddingLeft = '15px';
                    suggestSuggestInsideWrapper.style.fontSize = '14px';
                    suggestSuggestInsideWrapper.style.border = '1.5px solid #0A51A5';
                    suggestSuggestInsideWrapper.style.borderRadius = '5px';
                }else if(intViewportWidth < 1800){
                
                    suggestWrapper.style.left = '299.5px';
                    suggestWrapper.style.top = '50px';
                    suggestSuggestInsideWrapper.style.width = '446px';
                    suggestSuggestInsideWrapper.style.paddingLeft = '20px';
                    suggestSuggestInsideWrapper.style.fontSize = '15px';
                    suggestSuggestInsideWrapper.style.border = '1.5px solid #0A51A5';
                    suggestSuggestInsideWrapper.style.borderRadius = '5px';
                }else if(intViewportWidth > 1800){
       
                    suggestWrapper.style.left = '374.5px';
                    secondSuggesuggestWrapperstParent.style.top = '67px';
                    suggestSuggestInsideWrapper.style.width = '600px';
                    suggestSuggestInsideWrapper.style.paddingLeft = '20px';
                    suggestSuggestInsideWrapper.style.fontSize = '18px';
                    suggestSuggestInsideWrapper.style.border = '1.5px solid #0A51A5';
                    suggestSuggestInsideWrapper.style.borderRadius = '5px';
                }
            }
        }

        adressInput.addEventListener('click', function(){
            delaySuggestionStylesAllRussia();
        });
    }
}
// addressToAllRussiaAutoComplete()

function dadataAutoAddressInCartDeliveryAllRussia(){
    //jquery to dadata
    const scriptHeaderDadataJquery = document.createElement('script');
    scriptHeaderDadataJquery.async = false;
    scriptHeaderDadataJquery.innerHTML = `
    jQuery(document).ready(function($){
          let token = "7d7a4b089cea1b122a5a6e748afc75458f420444";
          let type  = "address";
          let $city = $(".cart-delivery-primary-data__input-field--allRussia");
          let $address = $("#address") ;
          
          function iplocate() {
            let serviceUrl = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
            let params = {
              type: "GET",
              contentType: "application/json",
              headers: {
                "Authorization": "Token " + token
              }
            };
            return $.ajax(serviceUrl, params);
          }
          
          // город и населенный пункт
          $city.suggestions({
            token: token,
            type: type,
            hint: false,
            bounds: "city",
            constraints: {
              locations: "city",
            },
          });

          // console.warn( '$city.suggestions ')
          // console.warn( $city.suggestions() )
      });
    `;
   
    document.body.appendChild(scriptHeaderDadataJquery);
}

//recommended-installation-service activete
function recommendedInstallServiceActivation(){
    let installationBtnInner = document.querySelector('.recommended-installation-service__btn-inner');
    if(installationBtnInner){
        let hiddenInput = installationBtnInner.querySelector('input');
        let installationBtn = installationBtnInner.querySelector('.recommended-installation-service__btn');
        installationBtn.addEventListener('click', function(e){
            e.preventDefault();
            installationBtn.classList.toggle('recommended-installation-service__btn--active');
            // hiddenInput.value = 1;
            function toggleInputValue(){
                if(hiddenInput.value == '0'){
                    console.warn('INPUT VALUE = 0');
                    hiddenInput.value = 1;
                }else{
                    console.warn('INPUT VALUE = 1');
                    hiddenInput.value = 0;
                }
            }
            toggleInputValue()
        });
    }
}
recommendedInstallServiceActivation();


//REMOVE BEFORE RELEASE TESTING PORPOSE ONLY!!!
//Imitation of click on available method of paying in cart/payment
function cartPaymentClickToAvailable(){
    let cartPaymentsTabs = document.querySelector('.cart-payment__tabs');
    if(cartPaymentsTabs){
        let switchButton = document.querySelector('.cartPaymentSwitchBtn');
        let secondPaymentTab = document.querySelector('#cart-payment-tab-2');

        switchButton.addEventListener('click', function(e){
            e.preventDefault();
            secondPaymentTab.click();
        });
    }
}
cartPaymentClickToAvailable();

//trick Mechacnic for radio-buttons in Customer choose section
function trickMechForRadioButtonsInPaymentSection(){
    const paymentRadio = document.querySelectorAll(".cart-payment__select-btn-radio"); 

    if(paymentRadio){
        for(let i = 0;i < paymentRadio.length; i++) { 
    
            if(paymentRadio[i].type=="radio") { 
                paymentRadio[i].onchange=function() { 
        
                    for(let i=0;i<paymentRadio.length;i++) { 
                        if(paymentRadio[i].type=="radio") { 
                            paymentRadio[i].checked=false; 
                        }
                        this.checked=true
                    }
                }
            }
        }
    }
}
trickMechForRadioButtonsInPaymentSection();

//clear chosen variations after changing payment tab
function refreshChoosenPaymentMathod(){
    let paymentTab = document.querySelectorAll('.cart-payment__tab-label');

    if(paymentTab){
        function clearChosenVariations(){
            let greenConfrimBlock = document.querySelectorAll('.cart-payment__option-info-wrapper');
            let paymentRadio = document.querySelectorAll(".cart-payment__select-btn-radio"); 

            if(greenConfrimBlock){
                greenConfrimBlock.forEach(item => {
                    item.classList.remove('cart-payment__option-info-wrapper--active');
                });
                paymentRadio.forEach(item => {
                    item.checked=false;
                });
            }
        }
        paymentTab.forEach(item =>{
            item.addEventListener('click', function(){
                clearChosenVariations();
            });
        });
    }
}

refreshChoosenPaymentMathod()