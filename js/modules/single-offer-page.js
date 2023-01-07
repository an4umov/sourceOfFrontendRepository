function singleOfferSlider(){
    let slides = document.querySelectorAll('.activeSlide__slider-item');
    let prevBtn = document.querySelector('.activeSlide__prev-slide');
    let nextBtn = document.querySelector('.activeSlide__next-slide');

    if(slides){
  
      let thumbnailsContainer = document.querySelector('.vendor-slider__thumbnails-inner');
      let activeThumbnail = document.querySelector('.activeSlide__active-thumbnail');
      let slidesMassiveArray = slides.length;
      // console.warn('slidesMassiveArray');
      // console.warn(slidesMassiveArray);
      if(slidesMassiveArray < 1){
        // console.warn('slidesMassiveArray < 1');
        // console.warn(slidesMassiveArray);
      }else{

        // console.warn('singleOfferSlider run now');
        // console.warn(singleOfferSlider);
        let slideIndex = 1;
        showSlides(slideIndex);
        function nextSlide() {
            showSlides(slideIndex += 1);
        }
  
        function previousSlide() {
            showSlides(slideIndex -= 1);  
        }
  
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
  
        function showSlides(n){
            let i;
            
            if (n > slides.length) {
              slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
        
            for (let slide of slides) {
                slide.style.display = "none";
            }   
            let incapSlides  = slides[slideIndex - 1]
            if(incapSlides){
              incapSlides.style.display = "flex"; 
            }
        }  
        
        if(prevBtn){
          prevBtn.addEventListener('click', function(){
            activeThumbnail.style.display = 'none';
            showSlides(slideIndex -= 1);
          });
    
          nextBtn.addEventListener('click', function(){
              // removeVideoFromActiveThumb();
              activeThumbnail.style.display = 'none';
              showSlides(slideIndex += 1);
          });
        }

        //thumbnail initial
        slides.forEach(item => {  
            let currentItem = item;
            let slideThubmnail = document.createElement("div");
            thumbnailsContainer.appendChild(slideThubmnail);
            slideThubmnail.classList.add('vendor-slider__thumbnail');
            slideThubmnail.innerHTML = currentItem.innerHTML;
            let slideThumbnailImg = slideThubmnail.querySelector('img');
            if(slideThumbnailImg){
              slideThumbnailImg.style.objectFit = 'contain';
              slideThumbnailImg.style.width = '100%';
              slideThumbnailImg.style.height = '100%';
            }
        });
        hideArrows();
      }
    }
}
singleOfferSlider();

function hideArrows(){
  let prevArrow = document.querySelector('.activeSlide__prev-slide');
  let nextArrow = document.querySelector('.activeSlide__next-slide');
  let activeSlide = document.querySelector('.activeSlide');

  if (prevArrow) {
      activeSlide.addEventListener('mouseover', function(){      
        prevArrow.style.display = 'flex';
        nextArrow.style.display = 'flex';
    });

    activeSlide.addEventListener('mouseout', function(){    
        prevArrow.style.display = 'none';
        nextArrow.style.display = 'none';
    });
  } 
}

function thumbnailSliderPart(){
    let activeThumbnail = document.querySelector('.activeSlide__active-thumbnail');
    let thumbnails = document.querySelectorAll('.vendor-slider__thumbnail');
    let thumbnailsInner = document.querySelector('.vendor-slider__thumbnails-inner');
    let prevBtn = document.querySelector('.activeSlide__prev-slide');
    let nextBtn = document.querySelector('.activeSlide__next-slide');

    if(activeThumbnail) {
      for (let i = 0;i < thumbnails.length; i++){
        thumbnails[i].addEventListener('click', function(){
            let activeThumb = this;
            let activeThumbImg = activeThumb.querySelector('img');
            let activeThumbImgHeight = activeThumbImg.naturalHeight;
            let activeThumbImgWidth = activeThumbImg.naturalWidth;
            // console.warn('activeThumbImgWidth');
            // console.warn(activeThumbImgWidth);
            if(activeThumbImgWidth < 450){
                activeThumbnail.style.display ='flex';
                activeThumbnail.innerHTML = activeThumb.innerHTML;
                let activeThumbnailImg = activeThumbnail.querySelector('img');
                activeThumbnailImg.style.objectFit = 'none';
                activeThumbnailImg.style.width = 'auto';
                activeThumbnailImg.style.height = 'auto';
            }else{
                activeThumbnail.style.display ='flex';
                activeThumbnail.innerHTML = activeThumb.innerHTML;
                let activeThumbnailImg = activeThumbnail.querySelector('img');
            }
        });
      }
      if(thumbnails.length > 4){
        let thumbnailsCountNumber = thumbnails.length - 4;
        let thumbnailCounter = document.createElement('div');
        thumbnailCounter.classList.add('vendor-slider__thumbnail-counter')
        thumbnailCounter.innerHTML = `
              <span>${thumbnailsCountNumber}</span>  
        `;
        console.warn(' thumbnails.length');
        console.warn( thumbnails.length);
        thumbnails[3].after(thumbnailCounter);
        thumbnails[3].style.pointerEvents = 'none';
        let thumbnailCounterSpan = thumbnailCounter.querySelector('span');
        //show all thumbnails
        thumbnailCounterSpan.addEventListener('click', function(){
          thumbnailsInner.classList.remove('vendor-slider__thumbnails-inner');
          thumbnailsInner.classList.add('vendor-slider__thumbnails-inner--active');
          thumbnailCounter.style.display = 'none';
          thumbnails[3].style.pointerEvents = 'auto';
        });
  
        prevBtn.addEventListener('click', function(){
          thumbnailsInner.classList.add('vendor-slider__thumbnails-inner');
          thumbnailsInner.classList.remove('vendor-slider__thumbnails-inner--active');
          thumbnailCounter.style.display = 'flex';
      });
  
      nextBtn.addEventListener('click', function(){
        thumbnailsInner.classList.add('vendor-slider__thumbnails-inner');
        thumbnailsInner.classList.remove('vendor-slider__thumbnails-inner--active');
        thumbnailCounter.style.display = 'flex';
      });
      }
      
    }
}
thumbnailSliderPart();

// Video in slider
function generateVideoInSlider(){
    let videosBlock = document.querySelectorAll('.activeSlide__slider-video');

    if (videosBlock === null) {
        // console.log("sliderVideos left HTML");
      } else {
          
        for (let i = 0; i < videosBlock.length; i++) {
            setupVideo(videosBlock[i]);
        }

        function setupVideo(video) {
            let link = video.querySelector('.activeSlide__video-link');
            let media = video.querySelector('.activeSlide__media');
            let button = video.querySelector('.activeSlide__button');
      
      
            let id = parseMediaURL(media);
          
            video.addEventListener('click', () => {
                let iframe = createIframe(id);
                link.remove();
                button.remove();
                video.appendChild(iframe);
                link.removeAttribute('href');
                video.classList.add('video--enabled');
                videoControlSingleOfferPage();
            });
        }

        function parseMediaURL(media) {
            let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
            let url = media.src;
            let match = url.match(regexp);
            return match[1];
        }

        function createIframe(id) {
            let iframe = document.createElement('iframe');
          
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('allow', 'autoplay');
            iframe.setAttribute('src', generateURL(id));
            iframe.classList.add('video__media');
          
            return iframe;
        }

        function generateURL(id) {
            let query = '?rel=0&showinfo=0&autoplay=1&enablejsapi=1';
            return 'https://www.youtube.com/embed/' + id + query;
        }
      }
}
// generateVideoInSlider();
function videoControlSingleOfferPage(){
    let iframes = document.querySelectorAll('iframe');
    let nextBtn = document.querySelectorAll('.activeSlide__next-slide');
    let prevBtn = document.querySelectorAll('.activeSlide__prev-slide');

    let thumbnailPanel = document.querySelector('.vendor-slider__thumbnails')
  
    for(let i = 0; i < nextBtn.length; i++){
      nextBtn[i].addEventListener('click', function(){
        // console.warn('BAM!!');
        var stopAllYouTubeVideos = () => { 
          var iframes = document.querySelectorAll('iframe');
          Array.prototype.forEach.call(iframes, iframe => { 
            iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
          func: 'pauseVideo' }), '*');
         });
        }
        stopAllYouTubeVideos();
      });
    }
    
    for(let i = 0; i < prevBtn.length; i++){
      prevBtn[i].addEventListener('click', function(){
        // console.warn('BAM!!');
        var stopAllYouTubeVideos = () => { 
          var iframes = document.querySelectorAll('iframe');
          Array.prototype.forEach.call(iframes, iframe => { 
            iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
          func: 'pauseVideo' }), '*');
         });
        }
        stopAllYouTubeVideos();
      });
    }

    
    window.addEventListener('scroll', function(){
        let pauseAllYouTubeVideos = () => { 
          let iframes = document.querySelectorAll('iframe');
          Array.prototype.forEach.call(iframes, iframe => { 
            iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
          func: 'pauseVideo' }), '*');
         });
        }
    
        pauseAllYouTubeVideos();
    });

    thumbnailPanel.addEventListener('click', function(){
        let pauseAllYouTubeVideos = () => { 
          let iframes = document.querySelectorAll('iframe');
          Array.prototype.forEach.call(iframes, iframe => { 
            iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
          func: 'pauseVideo' }), '*');
         });
        }
    
        pauseAllYouTubeVideos();
    });
}

function tumbnailVideo(){
    let videosInSlider = document.querySelectorAll('.activeSlide__slider-video');
    let videosliderThubmnails = document.querySelectorAll('.vendor-slider__thumbnail');
    let activeThumbnail = document.querySelector('.activeSlide__active-thumbnail');

    if (videosInSlider === null || videosliderThubmnails === null || activeThumbnail === null) {
        // console.log("videoInSlider left HTML");
      } else {
        videosliderThubmnails.forEach(item => {  
            let videoInThumb = item.querySelector('.activeSlide__slider-video');

            if (videoInThumb === null){
                // console.log("No video in slider!");
            } else{
                let previewOfVideo = videoInThumb.querySelector('.activeSlide__video-link');
                item.classList.remove('vendor-slider__thumbnail');
                item.classList.add('vendor-slider__thumbnail--video');
                let videoThumb = item;
                // console.log(videoThumb);
                item.innerHTML = previewOfVideo.innerHTML;
            }
        });
      }
}

// tumbnailVideo();
//remove video from thumb
function removeVideoFromActiveThumb(){
    let activeThumbnail = document.querySelector('.activeSlide__active-thumbnail');
    let iframeActiveThumb = activeThumbnail.querySelector('iframe');

    if (activeThumbnail === null || iframeActiveThumb === null){
        // console.log('NO VIDEO IN ACTIVEThumb');
    } else {
        iframeActiveThumb.remove();
    }
}

//Generate video from THUMB
function generateVideoInSliderFromThumb(){
    let activeThumb = document.querySelector('.activeSlide__active-thumbnail');
    let videoInSlide = document.querySelectorAll('.activeSlide__slider-video');
    let videoThumb = document.querySelectorAll('.vendor-slider__thumbnail--video');

    if(activeThumb === null || videoInSlide === null || videoThumb === null){
        // console.log('no Video in slider');
    }else{
        function setupVideo() {

            for(let i = 0; i < videoThumb.length; i++){ 
                videoThumb[i].addEventListener('click', function(){
                    let currentThumb = this;
                    
                    let media = currentThumb.querySelector('.activeSlide__media');
                    let button = currentThumb.querySelector('.activeSlide__button');

                    let id = parseMediaURL(media);
                    let iframe = createIframe(id);
                
                    
                    // button.remove();
                    activeThumb.style.display = 'flex';
                    activeThumb.appendChild(iframe);

                    
                });  
            }   
        }
    
        setupVideo();
    
        function parseMediaURL(media) {
            let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
            let url = media.src;
            let match = url.match(regexp);
          
            return match[1];
        }
    
        function createIframe(id) {
            let iframe = document.createElement('iframe');
          
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('allow', 'autoplay');
            iframe.setAttribute('src', generateURL(id));
            iframe.classList.add('video__media');
          
            return iframe;
        }
    
        function generateURL(id) {
            let query = '?rel=0&showinfo=0&autoplay=1&enablejsapi=1';
          
            return 'https://www.youtube.com/embed/' + id + query;
        }

        videoControlSingleOfferPage();
    }
}
// generateVideoInSliderFromThumb();


function singleOfferPageAskButtonTip(){
    const askBtns = document.querySelectorAll('.single-vendor-description__panel--ask');

    if(askBtns){
        for(let i = 0; i < askBtns.length; i++){
            askBtns[i].addEventListener('mouseover', function(){
              let currentTip = this.querySelector('.single-vendor-description__panel--ask-tip');
      
              currentTip.style.visibility = 'visible';
              currentTip.style.opacity = '1';
            });
      
            askBtns[i].addEventListener('mouseout', function(){
              let currentTip = this.querySelector('.single-vendor-description__panel--ask-tip');
      
              currentTip.style.visibility = 'hidden';
              currentTip.style.opacity = '0';
            });
        }
    }
}
singleOfferPageAskButtonTip();

function singleOfferPageShareButtonTip(){
    const shareBtns = document.querySelectorAll('.single-vendor-description__panel--share');

    if(shareBtns){
        for(let i = 0; i < shareBtns.length; i++){
            shareBtns[i].addEventListener('mouseover', function(){
              let currentTip = this.querySelector('.single-vendor-description__panel--share-tip');
      
              currentTip.style.visibility = 'visible';
              currentTip.style.opacity = '1';
            });
      
            shareBtns[i].addEventListener('mouseout', function(){
              let currentTip = this.querySelector('.single-vendor-description__panel--share-tip');
      
              currentTip.style.visibility = 'hidden';
              currentTip.style.opacity = '0';
            });
        }
    }
}
singleOfferPageShareButtonTip();

function singleOfferPageFavoriteButtonTip(){
    const favoriteBtns = document.querySelectorAll('.single-vendor-description__panel--favorite');

    if(favoriteBtns){
        for(let i = 0; i < favoriteBtns.length; i++){
            favoriteBtns[i].addEventListener('mouseover', function(){
              let currentTip = this.querySelector('.single-vendor-description__panel--favorite-tip');
      
              currentTip.style.visibility = 'visible';
              currentTip.style.opacity = '1';
            });
      
            favoriteBtns[i].addEventListener('mouseout', function(){
              let currentTip = this.querySelector('.single-vendor-description__panel--favorite-tip');
      
              currentTip.style.visibility = 'hidden';
              currentTip.style.opacity = '0';
            });
        }
    }
}
singleOfferPageFavoriteButtonTip();

function singleOfferVendorPageBuyButtonMechDesktop(){
  //check if single slider here
  let singleSlider = document.querySelector('.single-offer-vendor-page__inner');
  if(singleSlider){
    const offersFullCardList = document.querySelectorAll('.desktop-card-item');
    let body = document.querySelector('body');
    let cartBtnDesktopMainHeaderSpan = document.querySelector('.user__shopping-cart span');
    for(let i = 0; i < offersFullCardList.length; i++){
      let offerManufacturer = offersFullCardList[i].querySelector('.desktop-properties__manufacturer');
      let offerPrice  = offersFullCardList[i].querySelector('.desktop-card-item__price');
      let offerbuyBtns  = offersFullCardList[i].querySelectorAll('.desktop-buy__buy-btn');

      for (let i = 0; i < offerbuyBtns.length; i++){
          offerbuyBtns[i].addEventListener('click', function buyBtnFunc(e) {
            e.preventDefault();
            localStorage.setItem('noModalCustomQuantityInputValue', '');
            let thisBtn = this;
            thisBtn.classList.remove('desktop-buy__buy-btn');
            thisBtn.classList.add('desktop-buy__buy-btn--load');
            thisBtn.innerHTML = `<div class="desktop-buy__buy-btn-preloader"></div>`;
            
            let key = encodeURIComponent(thisBtn.dataset.key);
            let availability = thisBtn.dataset.availability;
            
            function sendOfferToCart() {
              const params = new URLSearchParams();
              params.set('id', key);

              let xhr = new XMLHttpRequest();
      
              xhr.open('POST', '/cart/add');
              xhr.responseType = 'json';

              xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

              xhr.onload = () => {
                if (xhr.status !== 200) {
                  console.warn('offerCardDesktopBuyButtonMech ajax error');
                  errorBannerDesktopRemove();
                  errorBannerDesktop();
                  thisBtn.classList.remove('desktop-buy__buy-btn--load');
                  thisBtn.classList.add('desktop-buy__buy-btn');
                  thisBtn.innerHTML = ` `;
                }else{
                  const response = xhr.response;
                  let currentPreloader = thisBtn.querySelector('.desktop-buy__buy-btn-preloader');
                  currentPreloader.remove();
        
                  thisBtn.classList.remove('desktop-buy__buy-btn--load');
                  thisBtn.classList.add('desktop-buy__buy-btn');
                  thisBtn.innerHTML = ` `;

                  let parentBuyBlockDesktop = thisBtn.parentElement;  
                  let currentFastBtn = parentBuyBlockDesktop.querySelector('.desktop-buy__fast-buy-btn');
                  let desktopCardItemInner = parentBuyBlockDesktop.parentElement;
                  //Availability sign of offer
                  let offerCardAvailableSign = desktopCardItemInner.querySelector('.desktop-description__shop');

                  //Hide buttons
                  thisBtn.style.display = 'none';
                  currentFastBtn.style.display = 'none';

                  //dynamic data from cart
                  let countFromCart = response.count;
                  cartBtnDesktopMainHeaderSpan.style.visibility = 'visible';
                  cartBtnDesktopMainHeaderSpan.innerText = countFromCart;
                  // console.warn(cartBtnDesktopMainHeaderSpan);
                  stickyHeaderDesktopCartCountUpdate();

                  
                  
                  //Add quantity btns instead buy btn
                  let quantityParent = document.createElement('div');
                  quantityParent.classList.add('desktop-buy-quantity');

                  let quantityCustomParent = document.createElement('div');
                  quantityCustomParent.classList.add('desktop-buy-quantity--custom');
                  
                  quantityParent.innerHTML = `
                    <div class="desktop-buy-quantity__btn-minus" data-key="${key}"></div>
                    <input class="desktop-buy-quantity__default-input" placeholder="1">
                    <div class="desktop-buy-quantity__btn-plus" data-key="${key}"></div>
                  `;

                  quantityCustomParent.innerHTML = `
                    <div class="desktop-buy-quantity__back-btn"></div>

                    <div class="desktop-buy-quantity__custom-input-wrapper">
                      <input class="desktop-buy-quantity__custom-input" pattern="[0-9]*" placeholder="1" type = "number" maxlength = "3" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength); this.value = !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : null">
                      <a class="desktop-buy-quantity__buy-btn"></a>
                    </div>
                  `;

                  parentBuyBlockDesktop.appendChild(quantityParent);
                  parentBuyBlockDesktop.appendChild(quantityCustomParent);

                  const afterBuyMinusButton = parentBuyBlockDesktop.querySelector('.desktop-buy-quantity__btn-minus');
                  const afterBuyInput = parentBuyBlockDesktop.querySelector('.desktop-buy-quantity__default-input');
                  const afterBuyPlusButton = parentBuyBlockDesktop.querySelector('.desktop-buy-quantity__btn-plus');
                  const afterBuyQuantityBuyButton = parentBuyBlockDesktop.querySelector('.desktop-buy-quantity__buy-btn');


                  afterBuyMinusButton.addEventListener('click', function(){
                      //Mechanic after click on Minus button
                    if(afterBuyInput.placeholder == '1'){

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
                          //dynamic data from cart
                          let countFromCart = response.count;
                          cartBtnDesktopMainHeaderSpan.style.visibility = 'visible';
                          cartBtnDesktopMainHeaderSpan.innerText = countFromCart;
                          // console.warn(cartBtnDesktopMainHeaderSpan);
                          stickyHeaderDesktopCartCountUpdate();
                          
                          //Quantity + - hidden
                          quantityParent.remove();
                          quantityCustomParent.remove();
                          //Fast buy & buy btn onn
                          currentFastBtn.style.display = 'block';
                          thisBtn.style.display = 'block';
                        }
                      }

                      xhr.send(params);
                    }else{
                      const params = new URLSearchParams();
                      params.set('id', key);
                      
                      const xhr = new XMLHttpRequest();

                      xhr.open('POST', '/cart/reduce');
                      xhr.responseType = 'json';

                      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                      xhr.onload = () => {
                        if (xhr.status !== 200) {
                          console.warn('offerCardMobileAfterBuyCounter MinusClick ajax error');
                        }else{
                        //  If 1 offer in afterBuyInputBlock checking
                          const response = xhr.response;
                          let countFromCart = response.count; 
                          cartBtnDesktopMainHeaderSpan.style.visibility = 'visible';
                          cartBtnDesktopMainHeaderSpan.innerText = countFromCart;
                          // console.warn(cartBtnDesktopMainHeaderSpan);
                          stickyHeaderDesktopCartCountUpdate();
                          cartBtnDesktopMainHeaderSpan.style.visibility = 'visible';
                          --afterBuyInput.placeholder;

                          afterBuyPlusButton.classList.remove('desktop-buy-quantity__btn-plus--disable');
                          afterBuyPlusButton.classList.add('desktop-buy-quantity__btn-plus');
                          afterBuyInput.style.pointerEvents = 'auto';
                        }
                      }
      
                      xhr.send(params);
                    }
                  });

                  afterBuyPlusButton.addEventListener('click', function(){
                    let afterBuyInput = parentBuyBlockDesktop.querySelector('.desktop-buy-quantity__default-input');
                    let afterBuyInputPlaceholder = afterBuyInput.placeholder;

                    if(availability == '1'){

                    offerCardAvailableSign.classList.add('desktop-description__shop--alert');

                    function offerCardAvailableSignAlertDisapear(){
                      offerCardAvailableSign.classList.remove('desktop-description__shop--alert');
                    }
                    setTimeout(offerCardAvailableSignAlertDisapear, 7000);

                    afterBuyPlusButton.classList.remove('desktop-buy-quantity__btn-plus');
                    afterBuyPlusButton.classList.add('desktop-buy-quantity__btn-plus--disable');
                    afterBuyInput.style.pointerEvents = 'none';
                    }else{

                    if(Number(afterBuyInputPlaceholder) < Number(availability)){
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
                          //dynamic data from cart
                          let countFromCart = response.count;
                          cartBtnDesktopMainHeaderSpan.style.visibility = 'visible';
                          cartBtnDesktopMainHeaderSpan.innerText = countFromCart;
                        //  console.warn(cartBtnDesktopMainHeaderSpan);
                          stickyHeaderDesktopCartCountUpdate();
                          cartBtnDesktopMainHeaderSpan.style.visibility = 'visible';

                          ++afterBuyInput.placeholder;
                        }
                      }
      
                      xhr.send(params);
                    }else if(Number(afterBuyInputPlaceholder) >= Number(availability)){
                      offerCardAvailableSign.classList.add('desktop-description__shop--alert');

                      function offerCardAvailableSignAlertDisapear(){
                        offerCardAvailableSign.classList.remove('desktop-description__shop--alert');
                      }
                      setTimeout(offerCardAvailableSignAlertDisapear, 7000);

                      afterBuyPlusButton.classList.remove('desktop-buy-quantity__btn-plus');
                      afterBuyPlusButton.classList.add('desktop-buy-quantity__btn-plus--disable');
                      afterBuyInput.style.pointerEvents = 'none';
                    }else if(availability === 'много' || availability === 'В наличии' || availability === 'По запросу'){
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
                          //dynamic data from cart
                          let countFromCart = response.count;
                          cartBtnDesktopMainHeaderSpan.style.visibility = 'visible';
                          cartBtnDesktopMainHeaderSpan.innerText = countFromCart;
                        //  console.warn(cartBtnDesktopMainHeaderSpan);
                          stickyHeaderDesktopCartCountUpdate();

                          ++afterBuyInput.placeholder;
                        }
                      }
      
                      xhr.send(params);
                    }
                    }
                  });

                  afterBuyInput.addEventListener('click', function(){

                    if(availability == '1'){
                      offerCardAvailableSign.classList.add('desktop-description__shop--alert');

                      function offerCardAvailableSignAlertDisapear(){
                        offerCardAvailableSign.classList.remove('desktop-description__shop--alert');
                      }
                      setTimeout(offerCardAvailableSignAlertDisapear, 7000);
                      afterBuyInput.style.pointerEvents = 'none';
                      
                      afterBuyPlusButton.classList.remove('desktop-buy-quantity__btn-plus');
                      afterBuyPlusButton.classList.add('desktop-buy-quantity__btn-plus--disable');

                    }else{
                      quantityParent.style.display = 'none';
                      quantityCustomParent.style.display = 'flex';

                      const afterBuyCustomQuantityInput = parentBuyBlockDesktop.querySelector('.desktop-buy-quantity__custom-input');
                      const afterBuyCustomQuantityBackBtn = parentBuyBlockDesktop.querySelector('.desktop-buy-quantity__back-btn');

                      afterBuyCustomQuantityInput.focus();
                      afterBuyCustomQuantityInput.addEventListener('input', function updateCustomInputValue(e){

                        const afterBuyCustomQuantityInputValue = afterBuyCustomQuantityInput.value;

                        if(Number(afterBuyCustomQuantityInput.value) < Number(availability)){
                          // console.warn(`КАСТОМНЫЙ ИНПУТ МЕНЬШЕ ОСТАТКА осталось ${availability} штук ТОВАР ДОБАВЛЯЕМ`);
                          // console.warn(`КАСТОМНЫЙ ИНПУТ ${afterBuyCustomQuantityInputValue}`);
                          // console.warn(`ОСТАТОК ${availability}`);

                          localStorage.setItem('noModalCustomQuantityInputValue', afterBuyCustomQuantityInputValue);

                        }else if(Number(afterBuyCustomQuantityInput.value) > Number(availability)){
                          console.warn(`КАСТОМНЫЙ ИНПУТ БОЛЬШЕ ИЛИ РАВЕН ОСТАТКУ осталось ${availability} штук ТОВАР НЕ ДОБАВЛЯЕМ`);
                          // console.warn(`КАСТОМНЫЙ ИНПУТ ${afterBuyCustomQuantityInputValue}`);
                          // console.warn(`ОСТАТОК ${availability}`);
                          offerCardAvailableSign.classList.add('desktop-description__shop--alert');

                          function offerCardAvailableSignAlertDisapear(){
                            offerCardAvailableSign.classList.remove('desktop-description__shop--alert');
                          }
                          setTimeout(offerCardAvailableSignAlertDisapear, 7000);

                          afterBuyCustomQuantityInput.value = availability;
                          localStorage.setItem('noModalCustomQuantityInputValue', availability);

                        }else if(availability === 'много' || availability === 'В наличии' || availability === 'По запросу'){

                          localStorage.setItem('noModalCustomQuantityInputValue', afterBuyCustomQuantityInputValue);

                        }
                      });

                      afterBuyCustomQuantityBackBtn.addEventListener('click', function(){
                        quantityCustomParent.style.display = 'none';
                        quantityParent.style.display = 'flex';
                      });
                    }
                  });

                  afterBuyQuantityBuyButton.addEventListener('click', function(e){
                    e.preventDefault();

                    let noModalCustomQuantityInputValue = localStorage.getItem('noModalCustomQuantityInputValue');

                    if(noModalCustomQuantityInputValue == ''){
                      // console.warn('noModalCustomQuantityInputValue === empty string');

                    }else{
                      // console.warn('noModalCustomQuantityInputValue');
                      // console.warn(noModalCustomQuantityInputValue);
                      let thisBtn = this;
                      thisBtn.classList.remove('desktop-buy-quantity__buy-btn');
                      thisBtn.classList.add('desktop-buy-quantity__buy-btn--load');
                      thisBtn.innerHTML = `<div class="desktop-custom-quantity-buy__buy-btn-preloader"></div>`;

                      function sendOfferToCartDesktopCustomQuamnity(){
                        const params = new URLSearchParams();
                        params.set('id', key);
                        params.append('qty', noModalCustomQuantityInputValue);

                        let xhr = new XMLHttpRequest();

                        xhr.open('POST', '/cart/change');
                        xhr.responseType = 'json';

                        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                        xhr.onload = () => {
                          if (xhr.status !== 200) {
                            // console.warn('modalCustomQuantityBuyButtonMech ajax error');
                          } else {
                            // console.warn('modalCustomQuantityBuyButtonMech ajax SUCCESS');
                            thisBtn.classList.remove('desktop-buy-quantity__buy-btn--load');
                            thisBtn.classList.add('desktop-buy-quantity__buy-btn');
                            thisBtn.innerHTML = ` `;
                            // dynamic data from cart
                            const response = xhr.response;
                            let countFromCart = response.count; 
                            cartBtnDesktopMainHeaderSpan.style.visibility = 'visible';
                            cartBtnDesktopMainHeaderSpan.innerText = countFromCart;
                            console.warn(cartBtnDesktopMainHeaderSpan);
                            stickyHeaderDesktopCartCountUpdate();

                            afterBuyInput.placeholder = noModalCustomQuantityInputValue;

                            quantityParent.style.display = 'flex';
                            quantityCustomParent.style.display = 'none';
                          }
                        }

                        xhr.send(params);
                      }
                      setTimeout(sendOfferToCartDesktopCustomQuamnity, 300);
                    }
                  });
                  
                  //init parent + add tooltip       
                  offerCardDesktopBuyModalLocalStorageSwitcherHide();  
                }
              }

              xhr.send(params);
            }
      
            setTimeout(function(){
              sendOfferToCart();
            }, 400);     
          });
      }
    }
  }

}
singleOfferVendorPageBuyButtonMechDesktop();

//share btn copy link
function shareBtnCopyLink(){
  const modalShareBtn = document.querySelector('.modal-share__btn');

  if(modalShareBtn){
    const modalShareParent = document.querySelector('.modal-share__id-field');
    const modalShareLink = document.querySelector('.modal-share__output');
    //remove after adding to back
    let copyTip = document.createElement('div');
    copyTip.classList.add('modal-share__copy-tip');
    copyTip.innerHTML = `Ссылка скопирована! <span>&#x2713;</span>`;
    modalShareParent.appendChild(copyTip);

    modalShareBtn.addEventListener('click', function(){
      console.warn(modalShareLink.innerHTML);
      navigator.clipboard.writeText(modalShareLink.innerHTML);
      copyTip.style.visibility = 'visible';
    });
  }
}

shareBtnCopyLink()

