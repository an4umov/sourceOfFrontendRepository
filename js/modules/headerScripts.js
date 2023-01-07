// toogle hidding menu button
function toggleHiddenMenuBtn(){
  let hiddenMenuBtn = document.querySelector('.hidden-btn__icon');
  let hiddenMenu = document.querySelector('.user-wrapper__hidden-menu');
  let header = document.querySelector('.header');
  let body = document.querySelector('body');

  if(hiddenMenuBtn){
    let glassBackground = document.createElement("div");
    glassBackground.classList.add('header-blur-wrap');
    header.after(glassBackground);

    hiddenMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      hiddenMenu.classList.toggle('hidden-menu--on');
      glassBackground.classList.toggle('header-blur-wrap--on');
      body.classList.toggle('page-body__no-scroll');
    });

    glassBackground.addEventListener('click', function(){
      hiddenMenuBtn.classList.remove('active');
      hiddenMenu.classList.remove('hidden-menu--on');
      glassBackground.classList.remove('header-blur-wrap--on');
      body.classList.remove('page-body__no-scroll');
    });
  }
}
toggleHiddenMenuBtn();

//ContactUsModalOpener
function headerContactUsModal(){
  let mainHeader = document.querySelector('.header');
  if(mainHeader){
    let contactUsModal = document.querySelector('.header-contact-us');
    let contactUsModalClose = document.querySelector('.header-contact-us__close');
  
    let contactUsDesktopHeaderNumbers = document.querySelectorAll('.contacts__number');
  
    let contactUsHeaderMobileHidden = document.querySelector('.hidden-menu__call-btn');
    let contactUsHeaderMobileRightPanelNumber = document.querySelector('.right-panel__info');
  
    let contactUsHeaderGlassBack = document.querySelector('.header-contact-us__blur');
  
    let body = document.querySelector('body');
  
    if(contactUsModal === null || contactUsModalClose === null){
      // console.log('No Header modal on the page');
    } else {
  
      for(let i = 0; i < contactUsDesktopHeaderNumbers.length; i++){
        contactUsDesktopHeaderNumbers[i].addEventListener('click', function(e){
          e.preventDefault();
          contactUsModal.style.display = 'block';
          body.classList.add('page-body__no-scroll');
        });
      }
  
      contactUsHeaderMobileHidden.addEventListener('click', function(){
        contactUsModal.style.display = 'block';
        body.classList.add('page-body__no-scroll');
      });
  
      contactUsHeaderMobileRightPanelNumber.addEventListener('click', function(){
        contactUsModal.style.display = 'block';
        body.classList.add('page-body__no-scroll');
      });
  
      contactUsModalClose.addEventListener('click', function(){
        contactUsModal.style.display = 'none';
        body.classList.remove('page-body__no-scroll');
      });
  
      contactUsHeaderGlassBack.addEventListener('click', function(){
        contactUsModal.style.display = 'none';
        body.classList.remove('page-body__no-scroll');
      });
    }
  }
}
headerContactUsModal();

//Green navigation arrow mech
function navArrowMech(){
  let navLeftArrow = document.querySelector('.navigation__arrow-left');
  let navRightArrow = document.querySelector('.navigation__arrow-right');
  let navFirstItem = document.querySelector('.navigation__nav-item');
  let navItemsList = document.querySelectorAll('.navigation__nav-item');
  let navItemsListParent = document.querySelector('.navigation__nav-list');
  

  if(navLeftArrow === null || navRightArrow === null || navFirstItem === null){
    // console.log('no navigation on the page');
  }else{

    let lastItem = navItemsList[navItemsList.length - 1];
    
    let intViewportWidth = window.innerWidth;
    // console.warn(intViewportWidth);

    if(intViewportWidth > 1140){

      let coordOfLastItem = lastItem.getBoundingClientRect();
  
      
      
      if(coordOfLastItem.right > intViewportWidth){
        // console.warn('last item out of viewport');

        navRightArrow.style.display = 'block';

        navRightArrow.addEventListener('click', function(){
          lastItem.scrollIntoView({ block: 'end',  behavior: 'smooth' });
          navRightArrow.style.display = 'none';
          navLeftArrow.style.display = 'block';
        });

        navLeftArrow.addEventListener('click', function(){
          navFirstItem.scrollIntoView({ block: 'end', inline: 'end',  behavior: 'smooth' });
          navLeftArrow.style.display = 'none';
          navRightArrow.style.display = 'block';
          
        });

      } else{
        console.warn('last item in viewport');

        let summ = 0;
        for(let i = 0; i < navItemsList.length; i++){
          summ += navItemsList[i].offsetWidth;
        }

        let summPlusPl = summ + 550;
        // console.log('sum of items width ' + summPlusPl + 'px');
        // console.log(intViewportWidth);

        if(intViewportWidth > summPlusPl ){
          navItemsListParent.style.justifyContent = 'flex-end';
          navItemsListParent.style.paddingRight = '40px';
          navRightArrow.style.display = 'none';
          navLeftArrow.style.display = 'none';
        }
      }
    } else {
      console.warn('mobile viewport');
    }
  }
}

//dadataHeaderCity init;
function dadataModalSuccessInit(){
  //check lacalStorage parametr dadataModalSuccessConfirmCity which contain chosen city
  const dadataModalSuccessConfirmCity = localStorage.getItem('dadataModalSuccessConfirmCity');
  if(dadataModalSuccessConfirmCity){
    let userLocationHeader = document.querySelector('.search-panel__user-location span');
    userLocationHeader.classList.add('search-panel__user-location--confirm-location');
    userLocationHeader.innerText = dadataModalSuccessConfirmCity;
    dadataPopUpsDesktopGenerate();
  }else{
    console.warn('dadataModalSuccessConfirmCity NO PARAMS');
    dadataHeaderCity();
  }
}
// dadataModalSuccessInit();

//Dadata header current IP and City func
function dadataHeaderCity(){  
  const currentIp = fetch('https://ipwho.is/')
  .then((responce) => responce.json())
  .then((data) => {
      const currentIpResult = data.ip
      const currentIpCountry = data.country
      let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
      let token = "7d7a4b089cea1b122a5a6e748afc75458f420444";
      let query = currentIpResult;
  
      let options = {
          method: "GET",
          mode: "cors",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token " + token
          }
      }

      if(currentIpCountry === 'Russia'){
        fetch(url + query, options)
        .then(response => response.json())
        .then((result) => {
          // console.log(result.location.data.city)
          const currentCity = result.location.data.city
          //First change of user location
          let userLocationHeader = document.querySelector('.search-panel__user-location span');
          let userLocationHeaderMobile = document.querySelector('.search-panel-mobile__user-location span');
          userLocationHeader.classList.add('search-panel__user-location--ask-fadeInOut-span');

          if(userLocationHeader){
            userLocationHeader.innerText = currentCity;               
            userLocationHeaderMobile.innerText = currentCity;   
            //DESKTOP WAY OUT
            dadataPopUpsDesktopGenerate();            
          }else{
            let userLocationCartHeader = document.querySelector('.header-cart-desktop__user-location span');
            let userLocationCartHeaderMobile = document.querySelector('.header-cart-mobile__user-location span');
            userLocationCartHeader.innerText = currentCity;
            userLocationCartHeaderMobile.innerText = currentCity;
          }
        })
        .catch(error => {
          let userLocationHeader = document.querySelector('.search-panel__user-location ');
          let userLocationHeaderMobile = document.querySelector('.search-panel-mobile__user-location ');
          if(userLocationHeader){
            userLocationHeader.innerText = 'Доставляем везде, куда только руки дотянутся!*error';  
            userLocationHeaderMobile.innerText = 'Доставляем везде, куда только руки дотянутся!*error';    
          }else{
            let userLocationCartHeader = document.querySelector('.header-cart-desktop__user-location ');
            let userLocationCartHeaderMobile = document.querySelector('.header-cart-mobile__user-location ');
            userLocationCartHeader.innerText = 'Доставляем везде, куда только руки дотянутся!*error';
            userLocationCartHeaderMobile.innerText = 'Доставляем везде, куда только руки дотянутся!*error';
          }
        });
      }else{
        console.warn('ВЫ НАХОДИТЕСЬ ЗА ПРЕДЕЛАМИ РФ!');
      }
  });      
}

// generate dadata pop-ups
function dadataPopUpsDesktopGenerate(){
  let userLocationHeader = document.querySelector('.search-panel__user-location span');
  if(userLocationHeader){
    //calculate position of header location block
    let userLocationHeaderPosition = userLocationHeader.getBoundingClientRect();
    let userLocationHeaderText = userLocationHeader.innerText;
    let userLocationHeaderPositionTop = parseInt(userLocationHeaderPosition.top);
    let userLocationHeaderPositionRight = parseInt(userLocationHeaderPosition.right);
    let userLocationHeaderTextFromStorageChosenCity = localStorage.getItem('dadataModalSuccessConfirmCity');
    if(userLocationHeaderTextFromStorageChosenCity === null){
        //generate success and find pop-ups
        let dadataModalSuccess = document.createElement('div');
        dadataModalSuccess.classList.add('search-panel__user-location--dadataModalSuccess');
        dadataModalSuccess.innerHTML = `
          <div class="search-panel__user-location--dadataModalSuccess-wrapper">
            <div class="search-panel__user-location--dadataModalSuccess-question">
                Ваш город ${userLocationHeaderText}?
            </div>

            <div class="search-panel__user-location--dadataModalSuccess-inner">
                <div class="search-panel__user-location--dadataModalSuccess-confirmBtn">Все верно!</div>
                <div class="search-panel__user-location--dadataModalSuccess-anotherCity">Выбрать город</div>
            </div>
          </div> 
        `;
        dadataModalSuccess.style.top = userLocationHeaderPositionTop + -12 + 'px';
        dadataModalSuccess.style.left = userLocationHeaderPositionRight + 20 + 'px';
        userLocationHeader.after(dadataModalSuccess);
    }else{
        //generate success and find pop-ups
        let userLocationHeaderTextFromStorageChosenCityFresh = localStorage.getItem('dadataModalSuccessConfirmCity');

        let dadataModalSuccess = document.createElement('div');
        dadataModalSuccess.classList.add('search-panel__user-location--dadataModalSuccess');
        dadataModalSuccess.innerHTML = `
          <div class="search-panel__user-location--dadataModalSuccess-wrapper">
            <div class="search-panel__user-location--dadataModalSuccess-question">
                Ваш город ${userLocationHeaderTextFromStorageChosenCityFresh}?
            </div>

            <div class="search-panel__user-location--dadataModalSuccess-inner">
                <div class="search-panel__user-location--dadataModalSuccess-confirmBtn">Все верно!</div>
                <div class="search-panel__user-location--dadataModalSuccess-anotherCity">Выбрать город</div>
            </div>
          </div> 
        `;
        dadataModalSuccess.style.top = userLocationHeaderPositionTop + -12 + 'px';
        dadataModalSuccess.style.left = userLocationHeaderPositionRight + 20 + 'px';
        userLocationHeader.after(dadataModalSuccess);
    }

    //generate ask and find pop-ups
    let dadataModalFind = document.createElement('div');
    dadataModalFind.classList.add('search-panel__user-location--dadataModalFind');
    dadataModalFind.innerHTML = `
      <div class="search-panel__user-location--dadataModalFind-wrapper">
          <img src="../img/search-icon-dadataFind.svg" alt="">
          <div class="search-panel__user-location--dadataModalFind-confirmBtn"></div> 
          <input type="text" id="dadataHeaderCity" placeholder="Введите название вашего города">
          
          <ul class="search-panel__user-location--dadataModalFind-quickPickList">
              <li class="search-panel__user-location--dadataModalFind-quickPickItem">Москва</li>
              <li class="search-panel__user-location--dadataModalFind-quickPickItem">Санкт-Петербург</li>
              <li class="search-panel__user-location--dadataModalFind-quickPickItem">Новосибирск</li>
              <li class="search-panel__user-location--dadataModalFind-quickPickItem">Екатеринбург</li>
              <li class="search-panel__user-location--dadataModalFind-quickPickItem">Казань</li>
              <li class="search-panel__user-location--dadataModalFind-quickPickItem">Нижний Новгород</li>
              <li class="search-panel__user-location--dadataModalFind-quickPickItem">Челябинск</li>
          </ul>
          
          <a>*Хочу доставку в Другую страну</a>
      </div>
    `;
    dadataModalFind.style.top = userLocationHeaderPositionTop + -12 + 'px';
    dadataModalFind.style.left = userLocationHeaderPositionRight + 20 + 'px';
    userLocationHeader.after(dadataModalFind);

    //show succeess modal
    userLocationHeader.addEventListener('click', function(){
      dadataModalSuccess.style.display = 'flex';
      dadataModalFind.style.display = 'none';
    });

    //confirm city/set local storage + show find modal
    const dadataModalSuccess = document.querySelector('.search-panel__user-location--dadataModalSuccess');
    const dadataModalSuccessConfirmBtn = document.querySelector('.search-panel__user-location--dadataModalSuccess-confirmBtn');
    const dadataModalSuccessAnoterCity = document.querySelector('.search-panel__user-location--dadataModalSuccess-anotherCity');
    const dadataModalFindInput = document.querySelector('.search-panel__user-location--dadataModalFind-wrapper input');
    const dadataModalFindInputImg = document.querySelector('.search-panel__user-location--dadataModalFind-wrapper img');
    const dadataModalFindInputConfirmBtn = document.querySelector('.search-panel__user-location--dadataModalFind-confirmBtn');
  
    dadataModalSuccessConfirmBtn.addEventListener('click', function(){
      localStorage.setItem('dadataModalSuccessConfirmCity', userLocationHeaderText);
      dadataModalSuccess.remove();
      dadataModalFind.remove();
      setTimeout(dadataPopUpsDesktopGenerateReplay, 1000);
      userLocationHeader.classList.remove('search-panel__user-location--ask-fadeInOut-span');
      userLocationHeader.classList.add('search-panel__user-location--confirm-location');
    });

    dadataModalSuccessAnoterCity.addEventListener('click', function(){
      dadataModalSuccess.style.display = 'none';
      dadataModalFind.style.display = 'block';
    });

    //confirm and choose from find input
    dadataModalFindInput.addEventListener('click', function(){
      dadataModalFindInputImg.style.display = 'none';
      dadataModalFindInputConfirmBtn.style.display = 'block';
    });

    dadataModalFindInputConfirmBtn.addEventListener('click', function(){
      const dadataModalFindInputValue = dadataModalFindInput.value;
      if(dadataModalFindInputValue){
        // console.warn('dadataModalFindInputValue');
        // console.warn(dadataModalFindInputValue);
        userLocationHeader.classList.remove('search-panel__user-location--ask-fadeInOut-span');
        userLocationHeader.classList.add('search-panel__user-location--confirm-location');
        dadataModalSuccess.remove();
        dadataModalFind.remove();
        setTimeout(dadataPopUpsDesktopGenerateReplay, 1000);
        localStorage.setItem('dadataModalSuccessConfirmCity', dadataModalFindInputValue);
        userLocationHeader.innerText = dadataModalFindInputValue;
        
      }else{
        //false
        console.warn('dadataModalFindInputValue');
        console.warn(dadataModalFindInputValue);
      }
    });

    //quick choose find btns
    const modalFindQuickChooseBtn = document.querySelectorAll('.search-panel__user-location--dadataModalFind-quickPickItem');
    modalFindQuickChooseBtn.forEach(item => {
      const itemText = item.innerText;
      item.addEventListener('click', function(){
        dadataModalFindInput.value = itemText;
        dadataModalFindInputImg.style.display = 'none';
        dadataModalFindInputConfirmBtn.style.display = 'block';
      });

    });

    setTimeout(dadataAutoCity, 2000);
  }
}

// generate dadata pop-ups replay
function dadataPopUpsDesktopGenerateReplay(){
  dadataModalSuccessInit();
}

//inject jQuery on page for real-time suggestion
function dadataAutoCity(){
    //jquery to dadata
    const scriptHeaderDadataJquery = document.createElement('script');
    scriptHeaderDadataJquery.async = false;
    scriptHeaderDadataJquery.innerHTML = `
    jQuery(document).ready(function($){
          let token = "7d7a4b089cea1b122a5a6e748afc75458f420444";
          let type  = "address";
          let $city = $("#dadataHeaderCity");
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


function searchModalToggle() {
	const searchForm = document.querySelectorAll('form[action="/search"]');
	let settingBtn, settingsModalWrapper;

	if (searchForm !== null) {
		searchForm.forEach(item => {
			settingBtn = item.querySelector('.toggle-settings');
			if (settingBtn !== null) {
				settingBtn.addEventListener('click', function (e) {
					e.preventDefault();
					settingsModalWrapper = e.target.parentElement.querySelector('.search__modal-wrapper');
					settingsModalWrapper.classList.toggle("search__modal-wrapper--visible");
					this.classList.toggle("search__setting--active");
				});
			}
		});
		
		document.onclick = function (e) {
			searchForm.forEach(item => {
				settingsModalWrapper = item.querySelector('.search__modal-wrapper');
				settingBtn = item.querySelector('.toggle-settings');
				if (settingsModalWrapper !== null) {
					if (!settingsModalWrapper.contains(e.target) && !e.target.classList.contains('toggle-settings') || e.target.classList.contains('search__modal-close')) {
						settingsModalWrapper.classList.remove("search__modal-wrapper--visible");
						settingBtn.classList.remove("search__setting--active");
					}
				}
			});
		}
	}
}
searchModalToggle();