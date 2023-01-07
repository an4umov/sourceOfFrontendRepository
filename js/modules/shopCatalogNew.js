//desktop functions
function shopCatalogMechDesktop() {
    let firstSection = document.querySelector('.shop-catalog-desktop__inner');
    let firstTitleOpen = document.querySelector('.shop-catalog-desktop__title-open');
    let firstTitleClose = document.querySelector('.shop-catalog-desktop__title-close');
    let firstTitleStatic = document.querySelector('.shop-catalog-desktop__title-static');
    let firstSectionItems = document.querySelectorAll('.shop-catalog-desktop__item');

    firstTitleOpen.style.display = 'none';
    firstTitleStatic.style.display = 'block';

    let models = document.querySelectorAll('.shop-catalog-desktop__item');

    let secondSections = document.querySelectorAll('.shop-catalog-desktop__inner--second');
    let secondTitleBlocks = document.querySelectorAll('.shop-catalog-desktop__title--second');
    let secondSectionItems = document.querySelectorAll('.shop-catalog-desktop__item--second');

    let thirdSections = document.querySelectorAll('.shop-catalog-desktop__inner--third');
    let thirdTitleBlocks = document.querySelectorAll('.shop-catalog-desktop__title--third');
    let thirdSectionItems = document.querySelectorAll('.shop-catalog-desktop__item--third');

    let fourthSections = document.querySelectorAll('.shop-catalog-desktop__inner--fourth');
    let fourthTitleBlocks = document.querySelectorAll('.shop-catalog-desktop__title--fourth');
    let fourthSectionsItems = document.querySelectorAll('.shop-catalog-desktop__item--fourth');


    //Active hover on items/models
    for (let i = 0; i < firstSectionItems.length; i++) {
        let firstItemsTextBlock = firstSectionItems[i].querySelector('.shop-catalog-desktop__item-text');

        firstSectionItems[i].addEventListener('mouseover', function () {
            let modelNoOffersBlock = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--model-no-offers');
            let itemNoModel = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--no-model');
            if(modelNoOffersBlock === null && itemNoModel === null){
                firstItemsTextBlock.classList.add('shop-catalog-desktop__item-text--hover');
            }            
        });

        firstSectionItems[i].addEventListener('mouseout', function () {
            let modelNoOffersBlock = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--model-no-offers');
            let itemNoModel = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--no-model');
            if(modelNoOffersBlock === null && itemNoModel === null){
                firstItemsTextBlock.classList.remove('shop-catalog-desktop__item-text--hover');
            } 
        });
    }

    for (let i = 0; i < secondSectionItems.length; i++) {
        let firstItemsTextBlock = secondSectionItems[i].querySelector('.shop-catalog-desktop__item-text');

        secondSectionItems[i].addEventListener('mouseover', function () {
            let modelNoOffersBlock = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--model-no-offers');
            let itemNoModel = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--no-model');
            if(modelNoOffersBlock === null && itemNoModel === null){
                firstItemsTextBlock.classList.add('shop-catalog-desktop__item-text--hover');
            }
        });

        secondSectionItems[i].addEventListener('mouseout', function () {
            let modelNoOffersBlock = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--model-no-offers');
            let itemNoModel = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--no-model');
            if(modelNoOffersBlock === null && itemNoModel === null){
                firstItemsTextBlock.classList.remove('shop-catalog-desktop__item-text--hover');
            }
        });
    }

    for (let i = 0; i < thirdSectionItems.length; i++) {
        let firstItemsTextBlock = thirdSectionItems[i].querySelector('.shop-catalog-desktop__item-text');

        thirdSectionItems[i].addEventListener('mouseover', function () {
            let modelNoOffersBlock = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--model-no-offers');
            let itemNoModel = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--no-model');
            if(modelNoOffersBlock === null && itemNoModel === null){
                firstItemsTextBlock.classList.add('shop-catalog-desktop__item-text--hover');
            }
        });

        thirdSectionItems[i].addEventListener('mouseout', function () {
            let modelNoOffersBlock = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--model-no-offers');
            let itemNoModel = firstItemsTextBlock.querySelector('.shop-catalog-desktop__tag-link--no-model');
            if(modelNoOffersBlock === null && itemNoModel === null){
                firstItemsTextBlock.classList.remove('shop-catalog-desktop__item-text--hover');
            }
        });
    }

    for (let i = 0; i < fourthSectionsItems.length; i++) {
        let firstItemsTextBlock = fourthSectionsItems[i].querySelector('.shop-catalog-desktop__item-text');

        fourthSectionsItems[i].addEventListener('mouseover', function () {
            firstItemsTextBlock.classList.add('shop-catalog-desktop__item-text--hover');
        });

        fourthSectionsItems[i].addEventListener('mouseout', function () {
            firstItemsTextBlock.classList.remove('shop-catalog-desktop__item-text--hover');
        });
    }

    // Click on each Model on the 1 lvl of catalog
    for (let i = 0; i < models.length; i++) {
        models[i].addEventListener('click', function (e) {
            e.preventDefault();
            ShopCatalogDesktopMetaHide();
            //clear second title/items defend after repeat
            function clearSecondTitlesItems(){
                secondTitleBlocks.forEach(item => {
                    item.style.display = 'none';
                });
    
                secondSectionItems.forEach(item => {
                    item.style.display = 'none';
                });
    
                thirdTitleBlocks.forEach(item => {
                    item.style.display = 'none';
                });
    
                thirdSectionItems.forEach(item => {
                    item.style.display = 'none';
                });
    
                fourthTitleBlocks.forEach(item => {
                    item.style.display = 'none';
                });
    
                fourthSectionsItems.forEach(item => {
                    item.style.display = 'none';
                });
    
                secondSections.forEach(item => {
                    item.style.display = 'none';
                });
    
                thirdSections.forEach(item => {
                    item.style.display = 'none';
                });
    
                fourthSections.forEach(item => {
                    item.style.display = 'none';
                });
            }
            clearSecondTitlesItems();

            function innerBlocksActivesClear1Stage(){
                secondSections.forEach(item => {
                    item.classList.remove('shop-catalog-desktop__inner--second-active');
                });
    
                thirdSections.forEach(item => {
                    item.classList.remove('shop-catalog-desktop__inner--third-active');
                });
    
                fourthSections.forEach(item => {
                    item.classList.remove('shop-catalog-desktop__inner--fourth-active');
                });
            }
            innerBlocksActivesClear1Stage();

            clearLastOfferData();
            fourthBlocksClear();
            thirdBlocksClear();
            secondBlocksClear();
            modelsClear();

            let model = this.querySelector("a");
            let modelTextBlock = this.querySelector('.shop-catalog-desktop__item-text');
            modelTextBlock.classList.add('shop-catalog-desktop__item-text--active');
            let modelData = model.dataset;
            
            secondSections.forEach(item => {
                if (item.dataset.code == model.dataset.code) {
                    
                    let currentSecondSection = item;
                    currentSecondSection.style.display = 'flex';
                    currentSecondSection.classList.add('shop-catalog-desktop__inner--second-active');
                    
                    //Smooth scroll to the proper position
                    const yOffset = -90; 
                    const y = currentSecondSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({top: y, behavior: 'smooth'});

                    let titleOfCurrentSecondBlock = currentSecondSection.querySelector('.shop-catalog-desktop__title--second');
                    let titleOpenOfCurrentSecondBlock = currentSecondSection.querySelector('.shop-catalog-desktop__title-open--second');
                    let titleCloseOfCurrentSecondBlock = currentSecondSection.querySelector('.shop-catalog-desktop__title-close--second');
                    let titleStaticCurrentSecondBlock = currentSecondSection.querySelector('.shop-catalog-desktop__title-static--second');

                    titleOfCurrentSecondBlock.style.display = 'flex';
                    titleOpenOfCurrentSecondBlock.style.display = 'none';
                    titleStaticCurrentSecondBlock.style.display = 'block';

                    firstTitleStatic.style.display = 'none';
                    firstTitleOpen.style.display = 'flex';

                    let itemsFromCurrentSecondSection = currentSecondSection.querySelectorAll('.shop-catalog-desktop__item--second');
                    itemsFromCurrentSecondSection.forEach(item => {
                        item.style.display = 'block';
                    });

                    // Click on each Item on the 2 lvl of catalog
                    for (let i = 0; i < secondSectionItems.length; i++) {
                        secondSectionItems[i].addEventListener('click', function (e) {
                            e.preventDefault();
                            //clear repeat / re-opened blocks
                            thirdTitleBlocks.forEach(item => {
                                item.style.display = 'none';
                            });

                            thirdSectionItems.forEach(item => {
                                item.style.display = 'none';
                            });
              
                            function innerBlocksActivesClear2Stage(){
                    
                                thirdSections.forEach(item => {
                                    item.classList.remove('shop-catalog-desktop__inner--third-active');
                                });
                    
                                fourthSections.forEach(item => {
                                    item.classList.remove('shop-catalog-desktop__inner--fourth-active');
                                });
                            }
                            innerBlocksActivesClear2Stage();

                            // titleStaticCurrentSecondBlock.style.display = 'none';
                            // titleOpenOfCurrentSecondBlock.style.display = 'block';

                            thirdSections.forEach(item => {
                                item.style.display = 'none';
                            });

                            fourthSections.forEach(item => {
                                item.style.display = 'none';
                            });

                            clearLastOfferData();
                            fourthBlocksClear();
                            thirdBlocksClear();
                            secondBlocksClear();

                            let secondItem = this.querySelector('a');
                            let secondTextBlock = this.querySelector('.shop-catalog-desktop__item-text');
                            secondTextBlock.classList.add('shop-catalog-desktop__item-text--active');

                            thirdSections.forEach(item => {
                                if (item.dataset.code == secondItem.dataset.code) {
                                    
                                    let currentThirdSection = item;
                                    currentThirdSection.style.display = 'flex';
                                    currentThirdSection.classList.add('shop-catalog-desktop__inner--third-active');
                    
                                    //Smooth scroll to the proper position
                                    const yOffset = -90; 
                                    const y = currentThirdSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

                                    window.scrollTo({top: y, behavior: 'smooth'});

                                    let titleOfCurrentThirdBlock = currentThirdSection.querySelector('.shop-catalog-desktop__title--third');
                                    let titleOpenOfCurrentThirdBlock = currentThirdSection.querySelector('.shop-catalog-desktop__title-open--third');
                                    let titleCloseOfCurrentThirdBlock = currentThirdSection.querySelector('.shop-catalog-desktop__title-close--third');
                                    let titleStaticCurrentThirdBlock = currentThirdSection.querySelector('.shop-catalog-desktop__title-static--third');

                                    titleOfCurrentThirdBlock.style.display = 'flex';
                                    titleOpenOfCurrentThirdBlock.style.display = 'none';
                                    titleStaticCurrentThirdBlock.style.display = 'flex';

                                    let itemsFromCurrentThirdSection = currentThirdSection.querySelectorAll('.shop-catalog-desktop__item--third');
                                    itemsFromCurrentThirdSection.forEach(item => {
                                        item.style.display = 'block';
                                    });
                                  
                                    // Click on each Item on the 3 lvl of catalog
                                    for (let i = 0; i < thirdSectionItems.length; i++) {
                                        thirdSectionItems[i].addEventListener('click', function (e) {
                                            e.preventDefault();
                                            fourthTitleBlocks.forEach(item => {
                                                item.style.display = 'none';
                                            });

                                            fourthSectionsItems.forEach(item => {
                                                item.style.display = 'none';
                                            });

                                            fourthSections.forEach(item => {
                                                item.style.display = 'none';
                                            });

                                            function innerBlocksActivesClear3Stage(){
                                    
                                                fourthSections.forEach(item => {
                                                    item.classList.remove('shop-catalog-desktop__inner--third-active');
                                                });
                                            }
                                            innerBlocksActivesClear3Stage();

                                            clearLastOfferData();
                                            fourthBlocksClear();
                                            thirdBlocksClear();

                                            // titleStaticCurrentThirdBlock.style.display = 'none';
                                            // titleOpenOfCurrentThirdBlock.style.display = 'flex';

                                            let thirdItem = this.querySelector('a');
                                            let thirdTextBlock = this.querySelector('.shop-catalog-desktop__item-text');
                                            thirdTextBlock.classList.add('shop-catalog-desktop__item-text--active');

                                            fourthSections.forEach(item => {
                                                if (item.dataset.code == thirdItem.dataset.code) {
                                                    let currentFourthSection = item;
                                                    currentFourthSection.style.display = 'flex';
                                                    currentFourthSection.classList.add('shop-catalog-desktop__inner--fourth-active');

                                                    //Smooth scroll to the proper position
                                                    const yOffset = -90; 
                                                    const y = currentFourthSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

                                                    window.scrollTo({top: y, behavior: 'smooth'});

                                                    let titleOfCurrentFourthBlock = currentFourthSection.querySelector('.shop-catalog-desktop__title--fourth');
                                                    let titleOpenOfCurrentFourthBlock = currentFourthSection.querySelector('.shop-catalog-desktop__title-open--fourth');
                                                    let titleCloseOfCurrentFourthBlock = currentFourthSection.querySelector('.shop-catalog-desktop__title-close--fourth');

                                                    titleOfCurrentFourthBlock.style.display = 'flex';

                                                    let itemsFromCurrentFourthSection = currentFourthSection.querySelectorAll('.shop-catalog-desktop__item--fourth');

                                                    itemsFromCurrentFourthSection.forEach(item => {
                                                        item.style.display = 'block';
                                                    });
                                                }
                                            });
                                        });
                                    }
                                }
                            });
                        });
                    }
                }
            });
        });
    }

    // Click on each Item on the 2 lvl of catalog
    for (let i = 0; i < secondSectionItems.length; i++) {
        secondSectionItems[i].addEventListener('click', function (e) {
            e.preventDefault();
            //clear repeat / re-opened blocks
            thirdTitleBlocks.forEach(item => {
                item.style.display = 'none';
            });

            thirdSectionItems.forEach(item => {
                item.style.display = 'none';
            });

            function innerBlocksActivesClear2Stage(){
    
                thirdSections.forEach(item => {
                    item.classList.remove('shop-catalog-desktop__inner--third-active');
                });
    
                fourthSections.forEach(item => {
                    item.classList.remove('shop-catalog-desktop__inner--fourth-active');
                });
            }
            innerBlocksActivesClear2Stage();

            // titleStaticCurrentSecondBlock.style.display = 'none';
            // titleOpenOfCurrentSecondBlock.style.display = 'block';

            thirdSections.forEach(item => {
                item.style.display = 'none';
            });

            fourthSections.forEach(item => {
                item.style.display = 'none';
            });

            clearLastOfferData();
            fourthBlocksClear();
            thirdBlocksClear();
            secondBlocksClear();

            let secondItem = this.querySelector('a');
            let secondTextBlock = this.querySelector('.shop-catalog-desktop__item-text');
            secondTextBlock.classList.add('shop-catalog-desktop__item-text--active');

            thirdSections.forEach(item => {
                if (item.dataset.code == secondItem.dataset.code) {
                    
                    let currentThirdSection = item;
                    currentThirdSection.style.display = 'flex';
                    currentThirdSection.classList.add('shop-catalog-desktop__inner--third-active');
    
                    //Smooth scroll to the proper position
                    const yOffset = -90; 
                    const y = currentThirdSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({top: y, behavior: 'smooth'});

                    let titleOfCurrentThirdBlock = currentThirdSection.querySelector('.shop-catalog-desktop__title--third');
                    let titleOpenOfCurrentThirdBlock = currentThirdSection.querySelector('.shop-catalog-desktop__title-open--third');
                    let titleCloseOfCurrentThirdBlock = currentThirdSection.querySelector('.shop-catalog-desktop__title-close--third');
                    let titleStaticCurrentThirdBlock = currentThirdSection.querySelector('.shop-catalog-desktop__title-static--third');

                    titleOfCurrentThirdBlock.style.display = 'flex';
                    titleOpenOfCurrentThirdBlock.style.display = 'none';
                    titleStaticCurrentThirdBlock.style.display = 'flex';

                    let itemsFromCurrentThirdSection = currentThirdSection.querySelectorAll('.shop-catalog-desktop__item--third');
                    itemsFromCurrentThirdSection.forEach(item => {
                        item.style.display = 'block';
                    });
                  
                    // Click on each Item on the 3 lvl of catalog
                    for (let i = 0; i < thirdSectionItems.length; i++) {
                        thirdSectionItems[i].addEventListener('click', function (e) {
                            e.preventDefault();
                            fourthTitleBlocks.forEach(item => {
                                item.style.display = 'none';
                            });

                            fourthSectionsItems.forEach(item => {
                                item.style.display = 'none';
                            });

                            fourthSections.forEach(item => {
                                item.style.display = 'none';
                            });

                            function innerBlocksActivesClear3Stage(){
                    
                                fourthSections.forEach(item => {
                                    item.classList.remove('shop-catalog-desktop__inner--third-active');
                                });
                    
                            }
                            innerBlocksActivesClear3Stage();

                            clearLastOfferData();
                            fourthBlocksClear();
                            thirdBlocksClear();

                            // titleStaticCurrentThirdBlock.style.display = 'none';
                            // titleOpenOfCurrentThirdBlock.style.display = 'flex';

                            let thirdItem = this.querySelector('a');
                            let thirdTextBlock = this.querySelector('.shop-catalog-desktop__item-text');
                            thirdTextBlock.classList.add('shop-catalog-desktop__item-text--active');

                            fourthSections.forEach(item => {
                                if (item.dataset.code == thirdItem.dataset.code) {
                                    let currentFourthSection = item;
                                    currentFourthSection.style.display = 'flex';
                                    currentFourthSection.classList.add('shop-catalog-desktop__inner--fourth-active');

                                    
                                    //Smooth scroll to the proper position
                                    const yOffset = -90; 
                                    const y = currentFourthSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

                                    window.scrollTo({top: y, behavior: 'smooth'});

                                    let titleOfCurrentFourthBlock = currentFourthSection.querySelector('.shop-catalog-desktop__title--fourth');
                                    let titleOpenOfCurrentFourthBlock = currentFourthSection.querySelector('.shop-catalog-desktop__title-open--fourth');
                                    let titleCloseOfCurrentFourthBlock = currentFourthSection.querySelector('.shop-catalog-desktop__title-close--fourth');

                                    titleOfCurrentFourthBlock.style.display = 'flex';

                                    let itemsFromCurrentFourthSection = currentFourthSection.querySelectorAll('.shop-catalog-desktop__item--fourth');

                                    itemsFromCurrentFourthSection.forEach(item => {
                                        item.style.display = 'block';
                                    });
                                }
                            });
                        });
                    }
                }
            });
        });
    }

    // Click on each Item on the 3 lvl of catalog
    for (let i = 0; i < thirdSectionItems.length; i++) {
        thirdSectionItems[i].addEventListener('click', function (e) {
            e.preventDefault();
            fourthTitleBlocks.forEach(item => {
                item.style.display = 'none';
            });

            fourthSectionsItems.forEach(item => {
                item.style.display = 'none';
            });

            fourthSections.forEach(item => {
                item.style.display = 'none';
            });

            function innerBlocksActivesClear3Stage(){
                fourthSections.forEach(item => {
                    item.classList.remove('shop-catalog-desktop__inner--fourth-active');
                });
            }
            innerBlocksActivesClear3Stage();

            clearLastOfferData();
            fourthBlocksClear();
            thirdBlocksClear();

            // titleStaticCurrentThirdBlock.style.display = 'none';
            // titleOpenOfCurrentThirdBlock.style.display = 'flex';

            let thirdItem = this.querySelector('a');
            let thirdTextBlock = this.querySelector('.shop-catalog-desktop__item-text');
            thirdTextBlock.classList.add('shop-catalog-desktop__item-text--active');

            fourthSections.forEach(item => {
                if (item.dataset.code == thirdItem.dataset.code) {
                    let currentFourthSection = item;
                    currentFourthSection.style.display = 'flex';
                    currentFourthSection.classList.add('shop-catalog-desktop__inner--fourth-active');

                    //Smooth scroll to the proper position
                    const yOffset = -90; 
                    const y = currentFourthSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({top: y, behavior: 'smooth'});

                    let titleOfCurrentFourthBlock = currentFourthSection.querySelector('.shop-catalog-desktop__title--fourth');
                    let titleOpenOfCurrentFourthBlock = currentFourthSection.querySelector('.shop-catalog-desktop__title-open--fourth');
                    let titleCloseOfCurrentFourthBlock = currentFourthSection.querySelector('.shop-catalog-desktop__title-close--fourth');

                    titleOfCurrentFourthBlock.style.display = 'flex';

                    let itemsFromCurrentFourthSection = currentFourthSection.querySelectorAll('.shop-catalog-desktop__item--fourth');

                    itemsFromCurrentFourthSection.forEach(item => {
                        item.style.display = 'block';
                    });
                }
            });
        });
    }
}

function shopCatalogWithOutFirstTitle(){
    let firstTitle = document.querySelector('.shop-catalog-desktop__title');

    if(firstTitle === null){

    }else {           
        firstTitle.style.marginLeft = '-19.5%';
        firstTitle.style.visibility = 'hidden';
    }
}
shopCatalogWithOutFirstTitle();

function shopCatalogDesktopMetaCloser(){
    let firstSection = document.querySelector('.shop-catalog-desktop__inner');
    const innerSecondActive = document.querySelector('.shop-catalog-desktop__inner--second-active');   
    const innerThirdActive = document.querySelector('.shop-catalog-desktop__inner--third-active'); 
    const innerFourthActive = document.querySelector('.shop-catalog-desktop__inner--fourth-active'); 
    const finalItemActive = document.querySelector('.final-item--active');
    let intViewportWidth = window.innerWidth;
    const shopCatalogParent = document.querySelector('.shop-catalog-desktop');   

    let thirdSections = document.querySelectorAll('.shop-catalog-desktop__inner--third');


    if(innerFourthActive){
        const innerFirstActiveTitle = firstSection.querySelector('.shop-catalog-desktop__title');
        const innerSecondActiveTitle = innerSecondActive.querySelector('.shop-catalog-desktop__title--second');
        const innerThirdActiveTitle = innerThirdActive.querySelector('.shop-catalog-desktop__title--third');
        const innerFourthActiveTitle = innerFourthActive.querySelector('.shop-catalog-desktop__title--fourth');

        //CLONE First Meta Title  
        let firstActiveTitleMeta = innerFirstActiveTitle.cloneNode(true);
        firstActiveTitleMeta.classList.add('shop-catalog-desktop__title--first-meta');
        if(intViewportWidth > 1440){
            firstActiveTitleMeta.style.marginLeft = '20px';
        }else{
            firstActiveTitleMeta.style.marginLeft = '0px';
        }
        
        firstActiveTitleMeta.style.visibility = 'visible';
        //CLONE Second Meta Title  
        let secondActiveTitleMeta = innerSecondActiveTitle.cloneNode(true);
        secondActiveTitleMeta.classList.add('shop-catalog-desktop__title--second-meta');
        //Transform to OPEN Phase
        const innerSecondMetaTitleStaticBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--second');
        const innerSecondMetaTitleOpenBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--second');
        innerSecondMetaTitleStaticBlock.style.display = 'none';
        innerSecondMetaTitleOpenBlock.style.display = 'block';
        //CLONE Third Meta Title  
        const thirdActiveTitleMeta = innerThirdActiveTitle.cloneNode(true);
        thirdActiveTitleMeta.classList.add('shop-catalog-desktop__title--third-meta');
        //Transform to OPEN Phase
        const innerThirdMetaTitleStaticBlock = thirdActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--third');
        const innerThirdMetaTitleOpenBlock = thirdActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--third');
        innerThirdMetaTitleStaticBlock.style.display = 'none';
        innerThirdMetaTitleOpenBlock.style.display = 'block';
        // Clone Fourth Meta Title
        let fourthActiveTitleMeta = innerFourthActiveTitle.cloneNode(true);
        fourthActiveTitleMeta.classList.add('shop-catalog-desktop__title--fourth-meta');
        //Transform to OPEN Phase
        // const innerFourthMetaTitleStaticBlock = fourthActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--fourth');
        const innerFourthMetaTitleOpenBlock = fourthActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--fourth');
        // innerFourthMetaTitleStaticBlock.style.display = 'none';
        innerFourthMetaTitleOpenBlock.style.display = 'block';
        //Clone Final item ACTIVE
        const finalItemParent = finalItemActive.parentElement;
        const finalItemActiveMeta = finalItemParent.cloneNode(true);
        finalItemActiveMeta.classList.add('final-item--active-meta');
        finalItemActiveMeta.style.pointerEvents = 'none';
        finalItemActiveMeta.style.display = 'block';

        // console.warn(secondActiveTitleMeta);
        // console.warn(shopCatalogInnerThirdActiveTitleMeta);
        let metaInner = document.createElement('div');
        metaInner.classList.add('shop-catalog-desktop__inner--meta');
        firstSection.before(metaInner);
        
        metaInner.append(firstActiveTitleMeta);
        metaInner.append(secondActiveTitleMeta);
        metaInner.append(thirdActiveTitleMeta);
        metaInner.append(fourthActiveTitleMeta);
        metaInner.append(finalItemActiveMeta);

        firstSection.style.display = 'none';
        innerSecondActive.style.display = 'none';
        innerThirdActive.style.display = 'none';
        innerFourthActive.style.display = 'none';

        //Now OPEN
        //First level
        firstActiveTitleMeta.addEventListener('click', function(){
            firstSection.style.display = 'flex';
            clearLastOfferData();
            //Smooth scroll to the proper position
            const yOffset = -370; 
            const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});

            ShopCatalogDesktopMetaHide();
            finalItemActiveClear();
        });
        secondActiveTitleMeta.addEventListener('click', function(){
            firstSection.style.display = 'flex';
            innerSecondActive.style.display = 'flex';
            //Smooth scroll to the proper position
            const yOffset = -370; 
            const y = innerSecondActive.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});

            ShopCatalogDesktopMetaHide();
            finalItemActiveClear();
        });
        thirdActiveTitleMeta.addEventListener('click', function(){
            firstSection.style.display = 'flex';
            innerSecondActive.style.display = 'flex';
            innerThirdActive.style.display = 'flex';
            //Smooth scroll to the proper position
            const yOffset = -370; 
            const y = innerThirdActive.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});

            ShopCatalogDesktopMetaHide();
            finalItemActiveClear();
        });
        fourthActiveTitleMeta.addEventListener('click', function(){
            firstSection.style.display = 'flex';
            innerSecondActive.style.display = 'flex';
            innerThirdActive.style.display = 'flex';
            innerFourthActive.style.display = 'flex';
            //Smooth scroll to the proper position
            const yOffset = -370; 
            const y = innerFourthActive.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});

            ShopCatalogDesktopMetaHide();
            finalItemActiveClear();
        });

    }else if(innerThirdActive){
        const innerFirstActiveTitle = firstSection.querySelector('.shop-catalog-desktop__title');
        const innerSecondActiveTitle = innerSecondActive.querySelector('.shop-catalog-desktop__title--second');
        const innerThirdActiveTitle = innerThirdActive.querySelector('.shop-catalog-desktop__title--third');

        //CLONE First Meta Title  
        let firstActiveTitleMeta = innerFirstActiveTitle.cloneNode(true);
        firstActiveTitleMeta.classList.add('shop-catalog-desktop__title--first-meta');
        if(intViewportWidth > 1440){
            firstActiveTitleMeta.style.marginLeft = '20px';
        }else{
            firstActiveTitleMeta.style.marginLeft = '0px';
        }
        
        firstActiveTitleMeta.style.visibility = 'visible';
        //CLONE Second Meta Title  
        let secondActiveTitleMeta = innerSecondActiveTitle.cloneNode(true);
        secondActiveTitleMeta.classList.add('shop-catalog-desktop__title--second-meta');
        //Transform to OPEN Phase
        const innerSecondMetaTitleStaticBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--second');
        const innerSecondMetaTitleOpenBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--second');
        innerSecondMetaTitleStaticBlock.style.display = 'none';
        innerSecondMetaTitleOpenBlock.style.display = 'block';
        //CLONE Third Meta Title  
        const thirdActiveTitleMeta = innerThirdActiveTitle.cloneNode(true);
        thirdActiveTitleMeta.classList.add('shop-catalog-desktop__title--third-meta');
        //Transform to OPEN Phase
        const innerThirdMetaTitleStaticBlock = thirdActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--third');
        const innerThirdMetaTitleOpenBlock = thirdActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--third');
        innerThirdMetaTitleStaticBlock.style.display = 'none';
        innerThirdMetaTitleOpenBlock.style.display = 'block';
        //Clone Final item ACTIVE
        const finalItemParent = finalItemActive.parentElement;
        const finalItemActiveMeta = finalItemParent.cloneNode(true);
        finalItemActiveMeta.classList.add('final-item--active-meta');
        finalItemActiveMeta.style.pointerEvents = 'none';
        finalItemActiveMeta.style.display = 'block';

        // console.warn(secondActiveTitleMeta);
        // console.warn(shopCatalogInnerThirdActiveTitleMeta);
        let metaInner = document.createElement('div');
        metaInner.classList.add('shop-catalog-desktop__inner--meta');
        firstSection.before(metaInner);
        
        metaInner.append(firstActiveTitleMeta);
        metaInner.append(secondActiveTitleMeta);
        metaInner.append(thirdActiveTitleMeta);
        metaInner.append(finalItemActiveMeta);

        firstSection.style.display = 'none';
        innerSecondActive.style.display = 'none';
        innerThirdActive.style.display = 'none';

        //Now OPEN
        //First level
        firstActiveTitleMeta.addEventListener('click', function(){
            firstSection.style.display = 'flex';
            clearLastOfferData();
            //Smooth scroll to the proper position
            const yOffset = -370; 
            const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});

            ShopCatalogDesktopMetaHide();
            finalItemActiveClear();
        });
        secondActiveTitleMeta.addEventListener('click', function(){
            firstSection.style.display = 'flex';
            innerSecondActive.style.display = 'flex';
            //Smooth scroll to the proper position
            const yOffset = -370; 
            const y = innerSecondActive.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});

            ShopCatalogDesktopMetaHide();
            finalItemActiveClear();
        });
        thirdActiveTitleMeta.addEventListener('click', function(){
            firstSection.style.display = 'flex';
            innerSecondActive.style.display = 'flex';
            innerThirdActive.style.display = 'flex';
            //Smooth scroll to the proper position
            const yOffset = -370; 
            const y = innerThirdActive.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});

            ShopCatalogDesktopMetaHide();
            finalItemActiveClear();
        });
    }else if(innerThirdActive === null && innerFourthActive == null){
        const innerFirstActiveTitle = firstSection.querySelector('.shop-catalog-desktop__title');

        if(innerSecondActive){
            //CLONE First Meta Title  
            const innerSecondActiveTitle = innerSecondActive.querySelector('.shop-catalog-desktop__title--second');
            let firstActiveTitleMeta = innerFirstActiveTitle.cloneNode(true);
            firstActiveTitleMeta.classList.add('shop-catalog-desktop__title--first-meta');
            if(intViewportWidth > 1440){
                firstActiveTitleMeta.style.marginLeft = '20px';
            }else{
                firstActiveTitleMeta.style.marginLeft = '0px';
            }
            
            firstActiveTitleMeta.style.visibility = 'visible';
            //CLONE Second Meta Title  
            let secondActiveTitleMeta = innerSecondActiveTitle.cloneNode(true);
            secondActiveTitleMeta.classList.add('shop-catalog-desktop__title--second-meta');
            //Transform to OPEN Phase
            const innerSecondMetaTitleStaticBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--second');
            const innerSecondMetaTitleOpenBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--second');
            innerSecondMetaTitleStaticBlock.style.display = 'none';
            innerSecondMetaTitleOpenBlock.style.display = 'block';
            
            //Clone Final item ACTIVE
            const finalItemParent = finalItemActive.parentElement;
            const finalItemActiveMeta = finalItemParent.cloneNode(true);
            finalItemActiveMeta.classList.add('final-item--active-meta');
            finalItemActiveMeta.style.pointerEvents = 'none';
            finalItemActiveMeta.style.display = 'block';

            // console.warn(secondActiveTitleMeta);
            // console.warn(shopCatalogInnerThirdActiveTitleMeta);
            let metaInner = document.createElement('div');
            metaInner.classList.add('shop-catalog-desktop__inner--meta');
            firstSection.before(metaInner);
            
            metaInner.append(firstActiveTitleMeta);
            metaInner.append(secondActiveTitleMeta);
            metaInner.append(finalItemActiveMeta);

            firstSection.style.display = 'none';
            innerSecondActive.style.display = 'none';

            //Now OPEN
            //First level
            firstActiveTitleMeta.addEventListener('click', function(){
                firstSection.style.display = 'flex';
                clearLastOfferData();
                //Smooth scroll to the proper position
                const yOffset = -370; 
                const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});

                ShopCatalogDesktopMetaHide();
                finalItemActiveClear();
            });
            secondActiveTitleMeta.addEventListener('click', function(){
                firstSection.style.display = 'flex';
                innerSecondActive.style.display = 'flex';
                //Smooth scroll to the proper position
                const yOffset = -370; 
                const y = innerSecondActive.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'smooth'});

                ShopCatalogDesktopMetaHide();
                finalItemActiveClear();
            });
        }
    }
}

//MetaCloser when link-onloaded
function shopCatalogDesktopMetaCloserFromLink(){
    let firstSection = document.querySelector('.shop-catalog-desktop__inner');
    let intViewportWidth = window.innerWidth;
    if(intViewportWidth > 1140){

        if(firstSection){
            const innerSeconds = document.querySelectorAll('.shop-catalog-desktop__inner--second');   
            const innerThirds = document.querySelectorAll('.shop-catalog-desktop__inner--third'); 
            const innerFourth = document.querySelectorAll('.shop-catalog-desktop__inner--fourth'); 
            const finalItemActive = document.querySelector('.final-item--active');
            let intViewportWidth = window.innerWidth;
            const shopCatalogParent = document.querySelector('.catalog__departament');   
    
            //Smooth scroll to the proper position
            const yOffset = -55; 
            const y = shopCatalogParent.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'instant'});
    
            //fourth block here
            innerFourth.forEach(item => {
                if(window.getComputedStyle(item).display == 'flex'){
                    item.classList.add('shop-catalog-desktop__inner--fourth-active');
                }
            });
    
            innerThirds.forEach(item => {
                if(window.getComputedStyle(item).display == 'flex'){
                    item.classList.add('shop-catalog-desktop__inner--third-active');
                }
            });
    
            //thirds block here
            innerSeconds.forEach(item => {
                //second block here
                if(window.getComputedStyle(item).display == 'flex'){
                    item.classList.add('shop-catalog-desktop__inner--second-active');
                }
            });
    
            //then generate meta block
            const innerSecondActive = document.querySelector('.shop-catalog-desktop__inner--second-active');   
            const innerThirdActive = document.querySelector('.shop-catalog-desktop__inner--third-active'); 
            const innerFourthActive = document.querySelector('.shop-catalog-desktop__inner--fourth-active'); 
    
            if(innerFourthActive && innerThirdActive){
                // console.warn('ONLY 4 n 3')
                const innerFirstActiveTitle = firstSection.querySelector('.shop-catalog-desktop__title');
                const innerSecondActiveTitle = innerSecondActive.querySelector('.shop-catalog-desktop__title--second');
                const innerThirdActiveTitle = innerThirdActive.querySelector('.shop-catalog-desktop__title--third');
                const innerFourthActiveTitle = innerFourthActive.querySelector('.shop-catalog-desktop__title--fourth');
        
                if(innerFourthActiveTitle){
                    //CLONE First Meta Title  
                    let firstActiveTitleMeta = innerFirstActiveTitle.cloneNode(true);
                    firstActiveTitleMeta.classList.add('shop-catalog-desktop__title--first-meta');
                    if(intViewportWidth > 1440){
                        firstActiveTitleMeta.style.marginLeft = '20px';
                    }else{
                        firstActiveTitleMeta.style.marginLeft = '0px';
                    }
                    
                    firstActiveTitleMeta.style.visibility = 'visible';
                    //CLONE Second Meta Title  
                    let secondActiveTitleMeta = innerSecondActiveTitle.cloneNode(true);
                    secondActiveTitleMeta.classList.add('shop-catalog-desktop__title--second-meta');
                    //Transform to OPEN Phase
                    const innerSecondMetaTitleStaticBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--second');
                    const innerSecondMetaTitleOpenBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--second');
                    innerSecondMetaTitleStaticBlock.style.display = 'none';
                    innerSecondMetaTitleOpenBlock.style.display = 'block';
                    //CLONE Third Meta Title  
                    const thirdActiveTitleMeta = innerThirdActiveTitle.cloneNode(true);
                    thirdActiveTitleMeta.classList.add('shop-catalog-desktop__title--third-meta');
                    // Clone Fourth Meta Title
                    let fourthActiveTitleMeta = innerFourthActiveTitle.cloneNode(true);
                    fourthActiveTitleMeta.classList.add('shop-catalog-desktop__title--fourth-meta');
                    //Transform to OPEN Phase
                    // const innerFourthMetaTitleStaticBlock = fourthActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--fourth');
                    const innerFourthMetaTitleOpenBlock = fourthActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--fourth');
                    // innerFourthMetaTitleStaticBlock.style.display = 'none';
                    innerFourthMetaTitleOpenBlock.style.display = 'block';
                    //Transform to OPEN Phase
                    const innerThirdMetaTitleStaticBlock = thirdActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--third');
                    const innerThirdMetaTitleOpenBlock = thirdActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--third');
                    innerThirdMetaTitleStaticBlock.style.display = 'none';
                    innerThirdMetaTitleOpenBlock.style.display = 'block';
                    //Clone Final item ACTIVE
                    const finalItemParent = finalItemActive.parentElement;
                    const finalItemActiveMeta = finalItemParent.cloneNode(true);
                    finalItemActiveMeta.classList.add('final-item--active-meta');
                    finalItemActiveMeta.style.pointerEvents = 'none';
                    finalItemActiveMeta.style.display = 'block';
        
        
                    let metaInner = document.createElement('div');
                    metaInner.classList.add('shop-catalog-desktop__inner--meta');
                    firstSection.before(metaInner);
                    
                    metaInner.append(firstActiveTitleMeta);
                    metaInner.append(secondActiveTitleMeta);
                    metaInner.append(thirdActiveTitleMeta);
                    metaInner.append(fourthActiveTitleMeta);
                    metaInner.append(finalItemActiveMeta);
        
                    firstSection.style.display = 'none';
                    innerSecondActive.style.display = 'none';
                    innerThirdActive.style.display = 'none';
                    innerFourthActive.style.display = 'none';
        
                    //Now OPEN
                    //First level
                    firstActiveTitleMeta.addEventListener('click', function(){
                        firstSection.style.display = 'flex';
                        clearLastOfferData();
                        //Smooth scroll to the proper position
                        const yOffset = -370; 
                        const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({top: y, behavior: 'smooth'});
        
                        ShopCatalogDesktopMetaHide();
                        finalItemActiveClear();
                    });
                    secondActiveTitleMeta.addEventListener('click', function(){
                        firstSection.style.display = 'flex';
                        innerSecondActive.style.display = 'flex';
                        //Smooth scroll to the proper position
                        const yOffset = -370; 
                        const y = innerSecondActive.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
                        window.scrollTo({top: y, behavior: 'smooth'});
        
                        ShopCatalogDesktopMetaHide();
                        finalItemActiveClear();
                    });
                    thirdActiveTitleMeta.addEventListener('click', function(){
                        firstSection.style.display = 'flex';
                        innerSecondActive.style.display = 'flex';
                        innerThirdActive.style.display = 'flex';
                        //Smooth scroll to the proper position
                        const yOffset = -370; 
                        const y = innerThirdActive.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
                        window.scrollTo({top: y, behavior: 'smooth'});
        
                        ShopCatalogDesktopMetaHide();
                        finalItemActiveClear();
                    });
                    fourthActiveTitleMeta.addEventListener('click', function(){
                        firstSection.style.display = 'flex';
                        innerSecondActive.style.display = 'flex';
                        innerThirdActive.style.display = 'flex';
                        innerFourthActive.style.display = 'flex';
                        //Smooth scroll to the proper position
                        const yOffset = -370; 
                        const y = innerFourthActive.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
                        window.scrollTo({top: y, behavior: 'smooth'});
        
                        ShopCatalogDesktopMetaHide();
                        finalItemActiveClear();
                    });
                }
            }
            
            if(innerThirdActive && innerSecondActive && innerFourthActive === null){
                console.warn('ONLY 3 n 2')
                const innerFirstActiveTitle = firstSection.querySelector('.shop-catalog-desktop__title');
                const innerSecondActiveTitle = innerSecondActive.querySelector('.shop-catalog-desktop__title--second');
                const innerThirdActiveTitle = innerThirdActive.querySelector('.shop-catalog-desktop__title--third');
    
                if(innerThirdActiveTitle){
                    //CLONE First Meta Title  
                    let firstActiveTitleMeta = innerFirstActiveTitle.cloneNode(true);
                    firstActiveTitleMeta.classList.add('shop-catalog-desktop__title--first-meta');
                    if(intViewportWidth > 1440){
                        firstActiveTitleMeta.style.marginLeft = '20px';
                    }else{
                        firstActiveTitleMeta.style.marginLeft = '0px';
                    }
                    
                    firstActiveTitleMeta.style.visibility = 'visible';
                    //CLONE Second Meta Title  
                    let secondActiveTitleMeta = innerSecondActiveTitle.cloneNode(true);
                    secondActiveTitleMeta.classList.add('shop-catalog-desktop__title--second-meta');
                    //Transform to OPEN Phase
                    const innerSecondMetaTitleStaticBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--second');
                    const innerSecondMetaTitleOpenBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--second');
                    innerSecondMetaTitleStaticBlock.style.display = 'none';
                    innerSecondMetaTitleOpenBlock.style.display = 'block';
                    //CLONE Third Meta Title  
                    const thirdActiveTitleMeta = innerThirdActiveTitle.cloneNode(true);
                    thirdActiveTitleMeta.classList.add('shop-catalog-desktop__title--third-meta');
            
                    //Transform to OPEN Phase
                    const innerThirdMetaTitleStaticBlock = thirdActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--third');
                    const innerThirdMetaTitleOpenBlock = thirdActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--third');
                    innerThirdMetaTitleStaticBlock.style.display = 'none';
                    innerThirdMetaTitleOpenBlock.style.display = 'block';
                    //Clone Final item ACTIVE
                    const finalItemParent = finalItemActive.parentElement;
                    const finalItemActiveMeta = finalItemParent.cloneNode(true);
                    finalItemActiveMeta.classList.add('final-item--active-meta');
                    finalItemActiveMeta.style.pointerEvents = 'none';
                    finalItemActiveMeta.style.display = 'block';
        
        
                    let metaInner = document.createElement('div');
                    metaInner.classList.add('shop-catalog-desktop__inner--meta');
                    firstSection.before(metaInner);
                    
                    metaInner.append(firstActiveTitleMeta);
                    metaInner.append(secondActiveTitleMeta);
                    metaInner.append(thirdActiveTitleMeta);
                    metaInner.append(finalItemActiveMeta);
        
                    firstSection.style.display = 'none';
                    innerSecondActive.style.display = 'none';
                    innerThirdActive.style.display = 'none';
        
                    //Now OPEN
                    //First level
                    firstActiveTitleMeta.addEventListener('click', function(){
                        firstSection.style.display = 'flex';
                        clearLastOfferData();
                        //Smooth scroll to the proper position
                        const yOffset = -370; 
                        const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({top: y, behavior: 'smooth'});
        
                        ShopCatalogDesktopMetaHide();
                        finalItemActiveClear();
                    });
                    secondActiveTitleMeta.addEventListener('click', function(){
                        firstSection.style.display = 'flex';
                        innerSecondActive.style.display = 'flex';
                        //Smooth scroll to the proper position
                        const yOffset = -370; 
                        const y = innerSecondActive.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
                        window.scrollTo({top: y, behavior: 'smooth'});
        
                        ShopCatalogDesktopMetaHide();
                        finalItemActiveClear();
                    });
                    thirdActiveTitleMeta.addEventListener('click', function(){
                        firstSection.style.display = 'flex';
                        innerSecondActive.style.display = 'flex';
                        innerThirdActive.style.display = 'flex';
                        //Smooth scroll to the proper position
                        const yOffset = -370; 
                        const y = innerThirdActive.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
                        window.scrollTo({top: y, behavior: 'smooth'});
        
                        ShopCatalogDesktopMetaHide();
                        finalItemActiveClear();
                    });
                }
            }else if(innerSecondActive && innerThirdActive === null){
                console.warn('ONLY  2')
                const innerFirstActiveTitle = firstSection.querySelector('.shop-catalog-desktop__title');
                const innerSecondActiveTitle = innerSecondActive.querySelector('.shop-catalog-desktop__title--second');
    
                if(innerSecondActiveTitle){
                    //CLONE First Meta Title  
                    let firstActiveTitleMeta = innerFirstActiveTitle.cloneNode(true);
                    firstActiveTitleMeta.classList.add('shop-catalog-desktop__title--first-meta');
                    if(intViewportWidth > 1440){
                        firstActiveTitleMeta.style.marginLeft = '20px';
                    }else{
                        firstActiveTitleMeta.style.marginLeft = '0px';
                    }
                    
                    firstActiveTitleMeta.style.visibility = 'visible';
                    //CLONE Second Meta Title  
                    let secondActiveTitleMeta = innerSecondActiveTitle.cloneNode(true);
                    secondActiveTitleMeta.classList.add('shop-catalog-desktop__title--second-meta');
                    //Transform to OPEN Phase
                    const innerSecondMetaTitleStaticBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-static--second');
                    const innerSecondMetaTitleOpenBlock = secondActiveTitleMeta.querySelector('.shop-catalog-desktop__title-open--second');
                    innerSecondMetaTitleStaticBlock.style.display = 'none';
                    innerSecondMetaTitleOpenBlock.style.display = 'block';
                   
                    //Clone Final item ACTIVE
                    const finalItemParent = finalItemActive.parentElement;
                    const finalItemActiveMeta = finalItemParent.cloneNode(true);
                    finalItemActiveMeta.classList.add('final-item--active-meta');
                    finalItemActiveMeta.style.pointerEvents = 'none';
                    finalItemActiveMeta.style.display = 'block';
        
        
                    let metaInner = document.createElement('div');
                    metaInner.classList.add('shop-catalog-desktop__inner--meta');
                    firstSection.before(metaInner);
                    
                    metaInner.append(firstActiveTitleMeta);
                    metaInner.append(secondActiveTitleMeta);
                    metaInner.append(finalItemActiveMeta);
        
                    firstSection.style.display = 'none';
                    innerSecondActive.style.display = 'none';
        
                    //Now OPEN
                    //First level
                    firstActiveTitleMeta.addEventListener('click', function(){
                        firstSection.style.display = 'flex';
                        clearLastOfferData();
                        //Smooth scroll to the proper position
                        const yOffset = -370; 
                        const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({top: y, behavior: 'smooth'});
        
                        ShopCatalogDesktopMetaHide();
                        finalItemActiveClear();
                    });
                    secondActiveTitleMeta.addEventListener('click', function(){
                        firstSection.style.display = 'flex';
                        innerSecondActive.style.display = 'flex';
                        //Smooth scroll to the proper position
                        const yOffset = -370; 
                        const y = innerSecondActive.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
                        window.scrollTo({top: y, behavior: 'smooth'});
        
                        ShopCatalogDesktopMetaHide();
                        finalItemActiveClear();
                    });
                }
            }
        }
    }
}
setTimeout(shopCatalogDesktopMetaCloserFromLink, 70);

//clear final-item active
function finalItemActiveClear(){
    const finalItemsActive = document.querySelectorAll('.final-item--active');
    if(finalItemsActive === null){

    }else{
        finalItemsActive.forEach(item =>{
            item.classList.remove('final-item--active');
        });
    }
}

//hide Inner Meta block
function ShopCatalogDesktopMetaHide(){
    let innerMetaBlock = document.querySelector('.shop-catalog-desktop__inner--meta');

    if(innerMetaBlock === null){

    }else{
        innerMetaBlock.remove();
    }
}

//Final item fetching from server | Desktop
function shopCatalogFetchDesktop() {
    let finalItems = document.querySelectorAll('.final-item');
    let offersContainer = document.querySelector('.offersContainer');
    let preloaderContainer = document.querySelector('.preloader-container');
    const catalogDepBlock = document.querySelector('.catalog__departament');

    for (let i = 0; i < finalItems.length; i++) {
        finalItems[i].addEventListener('click', function(e){
            e.preventDefault();
            fourthBlocksClear();
            clearLastOfferData() ;

            const finalItem = this;
            const finalItemParent = finalItem.parentElement;
            if(finalItemParent.classList.contains('shop-catalog-desktop__item') || finalItemParent.classList.contains('shop-catalog-desktop__item--second')){
                console.warn('Final item in first or second section!');
                console.warn(finalItemParent);
                finalItem.classList.add('final-item--active');
                const finalItemCode = finalItem.dataset.code;
                const finalItemUrl = finalItem.getAttribute("href");
                let requestUrl = `/catalog/offers/${finalItemCode}`;

                let finalItemTextBlock = this.querySelector('.shop-catalog-desktop__item-text');
                finalItemTextBlock.classList.add('shop-catalog-desktop__item-text--active');

                preloaderContainer.style.display = 'flex';
                preloaderContainer.style.paddingTop = '80px';

                //meta mech
                shopCatalogDesktopMetaCloser();
            
                //Smooth scroll to the proper position
                const yOffset = -60; 
                const y = preloaderContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'instant'});

                function fetchingOffers(){

                    const xhr = new XMLHttpRequest();

                    xhr.open("POST", requestUrl, true);

                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    // const offerContainer = document.querySelector('.offersContainer');

                    xhr.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {

                            const response = xhr.response;
                            let responseHtml = document.createElement("div");
                            responseHtml.innerHTML = response;
                            
                            shopCatalogMechDesktop();
                            offersContainer.appendChild(responseHtml);

                            hideFirstSeparatorOnMobile();
                            hideFirstSeparatorOnDesktop();

                            offerCardMobileOpen();                                   
                            offerCardMobileInfoOpen();
                            
                            offerCardDesktopOpen();
                            offerCardDesktopInfoOpen();

                            offerCardMobileBuyButtonMech();
                            offerCardDesktopBuyButtonMech();

                            offerCardDesktopBuyButtonTooltip();
                            offerCardDesktopBuyButtonDoneTooltip();

                            offerCardMobileFastBuy();
                            offerCardDesktopFastBuy();

                            offerCardDesktopBuyButtonTooltip();
                            offerCardDesktopFastBuyTooltipMech();

                            desktopCardMoreBtn();

                            offersCardDesktopFavoriteBtnAdd();
                            offersCardDesktopFavoriteBtnRemove();

                            offerCardFavoriteBtnMobileAdd();
                            offerCardFavoriteBtnMobileRemove();

                            offersCatalogSortByPriceMechDesktop();
                            offersCatalogSortByPriceMechMobile();

                            shopCatalogPager();
                            generateNextOfferBtn();
                            
                            preloaderContainer.style.display = 'none';
                            offersContainer.style.display = 'block';
                        }
                    } 
                    xhr.send(finalItemUrl);
                }
                setTimeout(fetchingOffers, 1000);  
            }else{
                console.warn('Final item on usual place');
                console.warn(finalItemParent);
                finalItem.classList.add('final-item--active');
                const finalItemCode = finalItem.dataset.code;
                const finalItemUrl = finalItem.getAttribute("href");
                let requestUrl = `/catalog/offers/${finalItemCode}`;

                let finalItemTextBlock = this.querySelector('.shop-catalog-desktop__item-text');
                finalItemTextBlock.classList.add('shop-catalog-desktop__item-text--active');

                preloaderContainer.style.display = 'flex';
                preloaderContainer.style.paddingTop = '80px';

                //meta mech
                shopCatalogDesktopMetaCloser();
            
                //Smooth scroll to the proper position
                const yOffset = -15; 
                const y = catalogDepBlock.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'instant'});

                function fetchingOffers(){

                    const xhr = new XMLHttpRequest();

                    xhr.open("POST", requestUrl, true);

                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    // const offerContainer = document.querySelector('.offersContainer');

                    xhr.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {

                            const response = xhr.response;
                            let responseHtml = document.createElement("div");
                            responseHtml.innerHTML = response;
                            
                            shopCatalogMechDesktop();
                            offersContainer.appendChild(responseHtml);

                            hideFirstSeparatorOnMobile();
                            hideFirstSeparatorOnDesktop();

                            offerCardMobileOpen();                                   
                            offerCardMobileInfoOpen();
                            
                            offerCardDesktopOpen();
                            offerCardDesktopInfoOpen();

                            offerCardMobileBuyButtonMech();
                            offerCardDesktopBuyButtonMech();

                            offerCardDesktopBuyButtonTooltip();
                            offerCardDesktopBuyButtonDoneTooltip();

                            offerCardMobileFastBuy();
                            offerCardDesktopFastBuy();

                            offerCardDesktopBuyButtonTooltip();
                            offerCardDesktopFastBuyTooltipMech();

                            desktopCardMoreBtn();

                            offersCardDesktopFavoriteBtnAdd();
                            offersCardDesktopFavoriteBtnRemove();

                            offerCardFavoriteBtnMobileAdd();
                            offerCardFavoriteBtnMobileRemove();

                            offersCatalogSortByPriceMechDesktop();
                            offersCatalogSortByPriceMechMobile();

                            shopCatalogPager();
                            generateNextOfferBtn();
                            
                            preloaderContainer.style.display = 'none';
                            offersContainer.style.display = 'block';
                        }
                    } 
                    xhr.send(finalItemUrl);
                }
                setTimeout(fetchingOffers, 1000);  
            
            } 
        });
    }
}

function clearLastOfferData() {
    let offersContainer = document.querySelector('.offersContainer');
    let lastFetchedOffer = offersContainer.querySelector('div');
    
    if(lastFetchedOffer === null) {
        // console.log("offersContainer is empty"); 
    } else {
        // console.log('offersContainer is NOT empty');
        offersContainer.removeChild(lastFetchedOffer);
    }
}

//text-block clear functions
function modelsClear() {
    let firstSect = document.querySelectorAll('.shop-catalog-desktop__item');
    firstSect.forEach(item => {
        let modelTextBlock = item.querySelector('.shop-catalog-desktop__item-text');
        modelTextBlock.classList.remove('shop-catalog-desktop__item-text--active');
    });
}

function secondBlocksClear() {
    let secondSect = document.querySelectorAll('.shop-catalog-desktop__item--second');
    secondSect.forEach(item => {
        let secTextBlock = item.querySelector('.shop-catalog-desktop__item-text');
        secTextBlock.classList.remove('shop-catalog-desktop__item-text--active');
    });
}

function thirdBlocksClear() {
    let thirdSect = document.querySelectorAll('.shop-catalog-desktop__item--third');
    thirdSect.forEach(item => {
        let thirdTextBlock = item.querySelector('.shop-catalog-desktop__item-text');
        thirdTextBlock.classList.remove('shop-catalog-desktop__item-text--active');
    });
}

function fourthBlocksClear() {
    let fourthSect = document.querySelectorAll('.shop-catalog-desktop__item--fourth');
    fourthSect.forEach(item => {
        let fourthTextBlock = item.querySelector('.shop-catalog-desktop__item-text');
        fourthTextBlock.classList.remove('shop-catalog-desktop__item-text--active');
    });
}

//mobile functions
function shopCatalogMechMobile(){
    let modelsMobile = document.querySelectorAll('.shop-catalog-mobile-item');

    let secondSectionsMobile = document.querySelectorAll('.shop-catalog-mobile__inner--second');
    let secondSectionItemsMobile = document.querySelectorAll('.shop-catalog-mobile-item--second');

    let thirdSectionsMobile = document.querySelectorAll('.shop-catalog-mobile__inner--third');
    let thirdSectionItemsMobile = document.querySelectorAll('.shop-catalog-mobile-item--third');

    let fourthSectionsMobile = document.querySelectorAll('.shop-catalog-mobile__inner--fourth');
    let fourthSectionItemsMobile = document.querySelectorAll('.shop-catalog-mobile-item--fourth');


    // click on each model mobile 1lvl
    for (let i = 0; i < modelsMobile.length; i++) {
        modelsMobile[i].addEventListener('click', function (e) {
            e.preventDefault();  
            fourthBlokcsMobileClear();
            thirdBlokcsMobileClear();        
            secondBlocksMobileClear();
            modelsMobileClear();
            clearLastOfferData();
            //clear opened second sections
            secondSectionsMobile.forEach(item => {
                item.style.display = 'none';
            })
            //clear opened third sections
            thirdSectionsMobile.forEach(item => {
                item.style.display = 'none';
            })
            //clear opened fourth sections
            fourthSectionsMobile.forEach(item => {
                item.style.display = 'none';
            })

            let modelMobile = this.querySelector('a');
            let modelMobileText = this.querySelector('.shop-catalog-mobile-item__text');
            modelMobileText.classList.add('shop-catalog-mobile-item__text--active');

            function innerBlocksActivesClear1StageMobile(){
                secondSectionsMobile.forEach(item => {
                    item.classList.remove('shop-catalog-mobile__inner--second-active');
                });
                thirdSectionsMobile.forEach(item => {
                    item.classList.remove('shop-catalog-mobile__inner--third-active');
                });
    
                fourthSectionsMobile.forEach(item => {
                    item.classList.remove('shop-catalog-mobile__inner--fourth-active');
                });
            }
            innerBlocksActivesClear1StageMobile();

            
            if(modelMobile.classList.contains('final-item-mobile')){
                // console.log('this is final - only load offers')
            }else{
                secondSectionsMobile.forEach(item => {
                    if(item.dataset.code == modelMobile.dataset.code) {
                        let currentSecondSectionMobile = item;
                        currentSecondSectionMobile.style.display = 'block';
                        currentSecondSectionMobile.classList.add('shop-catalog-mobile__inner--second-active');
                        currentSecondSectionMobile.scrollIntoView({behavior: "smooth"});
                    }
                })
            }
        })
    }

    // click on each item in 2lvl
    for (let i = 0; i < secondSectionItemsMobile.length; i++){
        secondSectionItemsMobile[i].addEventListener('click', function(e){
            e.preventDefault();
            //clear opened third sections
            thirdSectionsMobile.forEach(item => {
                item.style.display = 'none';
            })
            //clear opened fourth sections
            fourthSectionsMobile.forEach(item => {
                item.style.display = 'none';
            })

            fourthBlokcsMobileClear();
            thirdBlokcsMobileClear();
            secondBlocksMobileClear();
            clearLastOfferData();

            let currentSecondItemMobile = this.querySelector('a');
            let currentSecondItemMobileText = this.querySelector('.shop-catalog-mobile-item__text');
            currentSecondItemMobileText.classList.add('shop-catalog-mobile-item__text--active');

            function innerBlocksActivesClear2StageMobile(){  
                thirdSectionsMobile.forEach(item => {
                    item.classList.remove('shop-catalog-mobile__inner--third-active');
                });
                fourthSectionsMobile.forEach(item => {
                    item.classList.remove('shop-catalog-mobile__inner--fourth-active');
                });
            }
            innerBlocksActivesClear2StageMobile();

            if(currentSecondItemMobile.classList.contains('final-item-mobile')){
                // console.log('this is final - only load offers')
            }else{
                thirdSectionsMobile.forEach(item => {
                    if(item.dataset.code == currentSecondItemMobile.dataset.code){
                        let currentThirdSectionMobile = item;
                        currentThirdSectionMobile.style.display = 'block';
                        currentThirdSectionMobile.classList.add('shop-catalog-mobile__inner--third-active');
                        currentThirdSectionMobile.scrollIntoView({behavior: "smooth"});
                    }
                })
            }
        })
    }

    // click on each item in 3lvl
    for (let i = 0; i < thirdSectionItemsMobile.length; i++){
        thirdSectionItemsMobile[i].addEventListener('click', function(e){
            e.preventDefault();
            //clear opened fourth sections
            fourthSectionsMobile.forEach(item => {
                item.style.display = 'none';
            })

            fourthBlokcsMobileClear();
            thirdBlokcsMobileClear();
            clearLastOfferData();

            let currentThirdItemMobile = this.querySelector('a');
            let currentThirdItemMobileText = this.querySelector('.shop-catalog-mobile-item__text');
            currentThirdItemMobileText.classList.add('shop-catalog-mobile-item__text--active');

            function innerBlocksActivesClear3StageMobile(){  
                fourthSectionsMobile.forEach(item => {
                    item.classList.remove('shop-catalog-mobile__inner--fourth-active');
                });
            }
            innerBlocksActivesClear3StageMobile();

            currentThirdItemMobile.classList.add('shop-catalog-mobile__inner--third-active');

            if(currentThirdItemMobile.classList.contains('final-item-mobile')){
                // console.log('this is final - only load offers')
            }else{
                fourthSectionsMobile.forEach(item => {
                    if(item.dataset.code == currentThirdItemMobile.dataset.code){
                        let currentFourthSectionMobile = item;
                        currentFourthSectionMobile.style.display = 'block';
                        currentFourthSectionMobile.classList.add('shop-catalog-mobile__inner--fourth-active');
                        currentFourthSectionMobile.scrollIntoView({behavior: "smooth"});
                    }
                })
            }
        })
    }

    // click on each item in 4lvl
    for (let i = 0; i < fourthSectionItemsMobile.length; i++){
        fourthSectionItemsMobile[i].addEventListener('click', function(e){
            e.preventDefault();
            fourthBlokcsMobileClear();
            clearLastOfferData();

            let currentFourthItemMobile = this.querySelector('a');
            let currentFourthItemMobileText = this.querySelector('.shop-catalog-mobile-item__text');
            currentFourthItemMobileText.classList.add('shop-catalog-mobile-item__text--active');
        })
    }
}

//meta for mobile
function shopCatalogMobileMetaCloser(){
    let firstSection = document.querySelector('.shop-catalog-mobile__inner');
    const innerSecondActive = document.querySelector('.shop-catalog-mobile__inner--second-active');   
    const innerThirdActive = document.querySelector('.shop-catalog-mobile__inner--third-active'); 
    const innerFourthActive = document.querySelector('.shop-catalog-mobile__inner--fourth-active'); 
    const finalItemActive = document.querySelector('.final-item-mobile--active');

    if(innerFourthActive){
        console.warn('4 lvl mobile meta go');
        const innerFirstActiveTitle = firstSection.querySelector('.shop-catalog-mobile__title');
        const innerSecondActiveTitle = innerSecondActive.querySelector('.shop-catalog-mobile__title');
        const innerThirdActiveTitle = innerThirdActive.querySelector('.shop-catalog-mobile__title');
        const innerFourthActiveTitle = innerFourthActive.querySelector('.shop-catalog-mobile__title');
        //Create first title meta
        let firstMetaItem = document.createElement('div');
        firstMetaItem.classList.add('shop-catalog-mobile__meta-item');
        firstMetaItem.innerText = innerFirstActiveTitle.innerText;
        //Create second title meta
        let secondMetaItem = document.createElement('div');
        secondMetaItem.classList.add('shop-catalog-mobile__meta-item');
        secondMetaItem.innerText = innerSecondActiveTitle.innerText;
        //Create third title meta
        let thirdMetaItem = document.createElement('div');
        thirdMetaItem.classList.add('shop-catalog-mobile__meta-item');
        thirdMetaItem.innerText = innerThirdActiveTitle.innerText;
        // Clone Fourth Meta Title
        let fourthMetaItem = document.createElement('div');
        fourthMetaItem.classList.add('shop-catalog-mobile__meta-item');
        fourthMetaItem.innerText = innerFourthActiveTitle.innerText;

        //Clone finalItem mobile
        const finalItemParent = finalItemActive.parentElement;
        const finalItemActiveMeta = finalItemParent.cloneNode(true);
        finalItemActiveMeta.classList.add('final-item--active-meta');
        finalItemActiveMeta.style.pointerEvents = 'none';
        finalItemActiveMeta.style.display = 'block';
        //generate and past meta block
        let metaInnerMobile = document.createElement('div');
        metaInnerMobile.classList.add('shop-catalog-mobile__meta-inner');
        firstSection.before(metaInnerMobile);

        metaInnerMobile.append(firstMetaItem);
        metaInnerMobile.append(secondMetaItem);
        metaInnerMobile.append(thirdMetaItem);
        metaInnerMobile.append(fourthMetaItem);
        metaInnerMobile.append(finalItemActiveMeta);
        
        firstSection.style.display = 'none';
        innerSecondActive.style.display = 'none';
        innerThirdActive.style.display = 'none';
        innerFourthActive.style.display = 'none';

        firstMetaItem.addEventListener('click', function(){
            firstSection.style.display = 'block';
            clearLastOfferData();
            
            function scrollToFirstTitleMobile(){
                const y = firstSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
            setTimeout(scrollToFirstTitleMobile, 100);

            ShopCatalogMobileMetaHide();
            finalItemActiveClearMobile();
        });

        secondMetaItem.addEventListener('click', function(){
            firstSection.style.display = 'block';
            innerSecondActive.style.display = 'block';
            clearLastOfferData();

            function scrollToSecondTitleMobile(){
                const y = innerSecondActive.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
            setTimeout(scrollToSecondTitleMobile, 100);

            ShopCatalogMobileMetaHide();
            finalItemActiveClearMobile();
        });

        thirdMetaItem.addEventListener('click', function(){
            firstSection.style.display = 'block';
            innerSecondActive.style.display = 'block';
            innerThirdActive.style.display = 'block';
            clearLastOfferData();

            function scrollToThirdTitleMobile(){
                const y = innerThirdActive.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
            setTimeout(scrollToThirdTitleMobile, 100);

            ShopCatalogMobileMetaHide();
            finalItemActiveClearMobile();
        });

        fourthMetaItem.addEventListener('click', function(){
            firstSection.style.display = 'block';
            innerSecondActive.style.display = 'block';
            innerThirdActive.style.display = 'block';
            innerFourthActive.style.display = 'block';
            clearLastOfferData();

            function scrollToThirdTitleMobile(){
                const y = innerFourthActive.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
            setTimeout(scrollToThirdTitleMobile, 100);

            ShopCatalogMobileMetaHide();
            finalItemActiveClearMobile();
        });
    }else if(innerThirdActive){
        console.warn('3 lvl mobile meta go');
        const innerFirstActiveTitle = firstSection.querySelector('.shop-catalog-mobile__title');
        const innerSecondActiveTitle = innerSecondActive.querySelector('.shop-catalog-mobile__title');

        const innerThirdActiveTitle = innerThirdActive.querySelector('.shop-catalog-mobile__title');

        if(innerThirdActiveTitle){
            //Create first title meta
            let firstMetaItem = document.createElement('div');
            firstMetaItem.classList.add('shop-catalog-mobile__meta-item');
            firstMetaItem.innerText = innerFirstActiveTitle.innerText;
            //Create second title meta
            let secondMetaItem = document.createElement('div');
            secondMetaItem.classList.add('shop-catalog-mobile__meta-item');
            secondMetaItem.innerText = innerSecondActiveTitle.innerText;
            //Create third title meta
            let thirdMetaItem = document.createElement('div');
            thirdMetaItem.classList.add('shop-catalog-mobile__meta-item');
            thirdMetaItem.innerText = innerThirdActiveTitle.innerText;

            //Clone finalItem mobile
            const finalItemParent = finalItemActive.parentElement;
            const finalItemActiveMeta = finalItemParent.cloneNode(true);
            finalItemActiveMeta.classList.add('final-item--active-meta');
            finalItemActiveMeta.style.pointerEvents = 'none';
            finalItemActiveMeta.style.display = 'block';
            //generate and past meta block
            let metaInnerMobile = document.createElement('div');
            metaInnerMobile.classList.add('shop-catalog-mobile__meta-inner');
            firstSection.before(metaInnerMobile);

            metaInnerMobile.append(firstMetaItem);
            metaInnerMobile.append(secondMetaItem);
            metaInnerMobile.append(thirdMetaItem);
            metaInnerMobile.append(finalItemActiveMeta);
            
            firstSection.style.display = 'none';
            innerSecondActive.style.display = 'none';
            innerThirdActive.style.display = 'none';

            firstMetaItem.addEventListener('click', function(){
                firstSection.style.display = 'block';
                clearLastOfferData();
                
                function scrollToFirstTitleMobile(){
                    const y = firstSection.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }
                setTimeout(scrollToFirstTitleMobile, 100);

                ShopCatalogMobileMetaHide();
                finalItemActiveClearMobile();
            });

            secondMetaItem.addEventListener('click', function(){
                firstSection.style.display = 'block';
                innerSecondActive.style.display = 'block';
                clearLastOfferData();

                function scrollToSecondTitleMobile(){
                    const y = innerSecondActive.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }
                setTimeout(scrollToSecondTitleMobile, 100);

                ShopCatalogMobileMetaHide();
                finalItemActiveClearMobile();
            });

            thirdMetaItem.addEventListener('click', function(){
                firstSection.style.display = 'block';
                innerSecondActive.style.display = 'block';
                innerThirdActive.style.display = 'block';
                clearLastOfferData();

                function scrollToThirdTitleMobile(){
                    const y = innerThirdActive.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }
                setTimeout(scrollToThirdTitleMobile, 100);

                ShopCatalogMobileMetaHide();
                finalItemActiveClearMobile();
            });
        }
    }else if(innerThirdActive === null && innerFourthActive == null){
        console.warn('2 lvl mobile meta go');
        const innerFirstActiveTitle = firstSection.querySelector('.shop-catalog-mobile__title');
        if(innerSecondActive){
            const innerSecondActiveTitle = innerSecondActive.querySelector('.shop-catalog-mobile__title');
            //Create first title meta
            let firstMetaItem = document.createElement('div');
            firstMetaItem.classList.add('shop-catalog-mobile__meta-item');
            firstMetaItem.innerText = innerFirstActiveTitle.innerText;
            //Create second title meta
            let secondMetaItem = document.createElement('div');
            secondMetaItem.classList.add('shop-catalog-mobile__meta-item');
            secondMetaItem.innerText = innerSecondActiveTitle.innerText;
    
            //Clone finalItem mobile
            const finalItemParent = finalItemActive.parentElement;
            const finalItemActiveMeta = finalItemParent.cloneNode(true);
            finalItemActiveMeta.classList.add('final-item--active-meta');
            finalItemActiveMeta.style.pointerEvents = 'none';
            finalItemActiveMeta.style.display = 'block';
            //generate and past meta block
            let metaInnerMobile = document.createElement('div');
            metaInnerMobile.classList.add('shop-catalog-mobile__meta-inner');
            firstSection.before(metaInnerMobile);
    
            metaInnerMobile.append(firstMetaItem);
            metaInnerMobile.append(secondMetaItem);
            metaInnerMobile.append(finalItemActiveMeta);
            
            firstSection.style.display = 'none';
            innerSecondActive.style.display = 'none';
    
            firstMetaItem.addEventListener('click', function(){
                firstSection.style.display = 'block';
                clearLastOfferData();
                
                function scrollToFirstTitleMobile(){
                    const y = firstSection.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }
                setTimeout(scrollToFirstTitleMobile, 100);
    
                ShopCatalogMobileMetaHide();
                finalItemActiveClearMobile();
            });
    
            secondMetaItem.addEventListener('click', function(){
                firstSection.style.display = 'block';
                innerSecondActive.style.display = 'block';
                clearLastOfferData();
    
                function scrollToSecondTitleMobile(){
                    const y = innerSecondActive.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }
                setTimeout(scrollToSecondTitleMobile, 100);
    
                ShopCatalogMobileMetaHide();
                finalItemActiveClearMobile();
            });
        }
    }
}

//clear final-item on mobile
function finalItemActiveClearMobile(){
    const finalItemsActiveMobile = document.querySelectorAll('.final-item-mobile--active');

    if(finalItemsActiveMobile === null){

    }else{
        finalItemsActiveMobile.forEach(item =>{
            item.classList.remove('final-item-mobile--active');
        });
    }
}

//hide Inner Meta block on nMobile
function ShopCatalogMobileMetaHide(){
    let innerMetaBlockMobile = document.querySelector('.shop-catalog-mobile__meta-inner');

    if(innerMetaBlockMobile === null){

    }else{
        innerMetaBlockMobile.remove();
    }
}

//Final item fetching from server | Mobile
function shopCatalogFetchMobile() {
    let finalItemsMobile = document.querySelectorAll('.final-item-mobile');
    let offersContainer = document.querySelector('.offersContainer');
    let preloaderContainer = document.querySelector('.preloader-container');
    const mobileShopCatalogParent = document.querySelector('.shop-catalog-mobile');

    for (let i = 0; i < finalItemsMobile.length; i++) {
        finalItemsMobile[i].addEventListener('click', function(e){
            e.preventDefault(); 
            clearLastOfferData();

            const finalItemMobile = this;
            const finalItemMobileCode = finalItemMobile.dataset.code;
            finalItemMobile.classList.add('final-item-mobile--active');
            const finalItemUrlMobile = finalItemMobile.getAttribute("href");
            let requestUrlMobile = `/catalog/offers/${finalItemMobileCode}`;
            // console.log(requestUrl);
            preloaderContainer.style.display = 'flex';
            const yOffset = 20; 
            const y = preloaderContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'instant'});
            

            shopCatalogMobileMetaCloser();
            function fetchingOffersMobile() {
                
                const xhr = new XMLHttpRequest();

                xhr.open("POST", requestUrlMobile, true);

                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                xhr.onreadystatechange = function() {

                    if (this.readyState == 4 && this.status == 200) {

                        const response = xhr.response;
                        let responseHtml = document.createElement("div");
                        responseHtml.innerHTML = response;
                        offersContainer.appendChild(responseHtml);

                        hideFirstSeparatorOnMobile();
                        hideFirstSeparatorOnDesktop();

                        offerCardMobileOpen();                                   
                        offerCardMobileInfoOpen();
                        
                        offerCardDesktopOpen();
                        offerCardDesktopInfoOpen();

                        offerCardMobileBuyButtonMech();
                        offerCardDesktopBuyButtonMech();

                        offerCardMobileFastBuy();
                        offerCardDesktopFastBuy();

                        desktopCardMoreBtn();

                        offersCardDesktopFavoriteBtnAdd();
                        offersCardDesktopFavoriteBtnRemove();

                        offerCardFavoriteBtnMobileAdd();
                        offerCardFavoriteBtnMobileRemove();

                        offersCatalogSortByPriceMechDesktop();
                        offersCatalogSortByPriceMechMobile();

                        shopCatalogPager();
                        generateNextOfferBtn();

                        
                        preloaderContainer.style.display = 'none';
                        offersContainer.style.display = 'block';
                        const yOffset = -7; 
                        const y = offersContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({top: y, behavior: 'instant'});
                    }
                } 
                xhr.send(finalItemUrlMobile);
            }

            setTimeout(fetchingOffersMobile, 1000);
        })
    }
}

//text-block clear functions
function modelsMobileClear() {
    let firstSectionMobile = document.querySelector('.shop-catalog-mobile__inner');
    let firstSectionMobileItems = firstSectionMobile.querySelectorAll('.shop-catalog-mobile-item');

    firstSectionMobileItems.forEach(item => {
        let modelTextBlock = item.querySelector('.shop-catalog-mobile-item__text');
        modelTextBlock.classList.remove('shop-catalog-mobile-item__text--active');
    })
}

function secondBlocksMobileClear() {
    let secondSectionsMobileItems = document.querySelectorAll('.shop-catalog-mobile-item--second');
    
    secondSectionsMobileItems.forEach(item => {
        let secTextBlockMobile = item.querySelector('.shop-catalog-mobile-item__text');
        secTextBlockMobile.classList.remove('shop-catalog-mobile-item__text--active');
    })
}

function thirdBlokcsMobileClear() {
    let thirdSectionsMobileItems = document.querySelectorAll('.shop-catalog-mobile-item--third');

    thirdSectionsMobileItems.forEach(item => {
        let thirdTextBlockMobile = item.querySelector('.shop-catalog-mobile-item__text');
        thirdTextBlockMobile.classList.remove('shop-catalog-mobile-item__text--active');
    })
}

function fourthBlokcsMobileClear() {
    let fourthSectionsMobileItems = document.querySelectorAll('.shop-catalog-mobile-item--fourth');

    fourthSectionsMobileItems.forEach(item => {
        let fourthTextBlockMobile = item.querySelector('.shop-catalog-mobile-item__text');
        fourthTextBlockMobile.classList.remove('shop-catalog-mobile-item__text--active');
    })
}

//Scroll to up locate in shopCatalogMechMobile function HIDE Sinse 12.4.2021
function scrollUpToTop(){
    let scrollUpTotopBlock = document.querySelector('.scroll-up');

    if(scrollUpTotopBlock === null){

    }else{
        scrollUpTotopBlock.style.display = 'none';
    }
}

//change url
function changeUrlShopCatalog() {
    let finalItem = document.querySelectorAll('.final-item');

    for(let i = 0; i < finalItem.length; i++){
        finalItem[i].addEventListener('click', function(e){
            e.preventDefault();
            let thisFinalItemHref = this.getAttribute("href");
            
            history.pushState("state", "title", thisFinalItemHref);
        })
    }
}

function changeUrlShopCatalogMobile(){
    let finalItemMobile = document.querySelectorAll('.final-item-mobile');

    for(let i = 0; i < finalItemMobile.length; i++){
        finalItemMobile[i].addEventListener('click', function(e){
            e.preventDefault();
            let thisFinalItemHref = this.getAttribute("href");
            
            history.pushState("state", "title", thisFinalItemHref);
        })
    }
}

function shopCatalogSwitcher(){
    // shop-catalog desktop mechanics
    let shopCatalogSect = document.querySelector('.shop-catalog-desktop');

    if(shopCatalogSect === null){
        //   console.log("shop catalog just left html");
        }else {

            shopCatalogMechDesktop();
            shopCatalogFetchDesktop();
            shopCatalogMechMobile();
            shopCatalogFetchMobile();
            changeUrlShopCatalog();
            changeUrlShopCatalogMobile();
        
            let footer = document.querySelector('.footer');
            footer.style.marginTop = "250px";
        }
}

shopCatalogSwitcher();

function tagLinkModelNoOffersAdaptive(){
    let shopCatalogItems = document.querySelectorAll('.shop-catalog-desktop__item');
    let shopCatalogItemsSecond = document.querySelectorAll('.shop-catalog-desktop__item--second');
    let shopCatalogItemsThird = document.querySelectorAll('.shop-catalog-desktop__item--third');

    if(shopCatalogItems === null){

    } else{
        for(let i = 0; i < shopCatalogItems.length; i++){
            let noOffersBlock = shopCatalogItems[i].querySelector('.shop-catalog-desktop__tag-link--model-no-offers');
            if(noOffersBlock === null) {

            }else{
                let itemRect = shopCatalogItems[i].getBoundingClientRect();
                let itemHeight = itemRect.height;
                console.log(noOffersBlock);
                console.log(itemHeight);
    
                noOffersBlock.style.minHeight = itemHeight + 'px';
            }
            
        }

        for(let i = 0; i < shopCatalogItemsSecond.length; i++){
            let noOffersBlock = shopCatalogItemsSecond[i].querySelector('.shop-catalog-desktop__tag-link--model-no-offers');
            if(noOffersBlock === null) {

            }else{
                let itemRect = shopCatalogItemsSecond[i].getBoundingClientRect();
                let itemHeight = itemRect.height;
                console.log(noOffersBlock);
                console.log(itemHeight);
    
                noOffersBlock.style.minHeight = itemHeight + 'px';
            }
            
        }
    } 
}

//tag-link--model-no-offers replacement link mech in First row (lvl) in catalog
function tagLinkNoOffersLinkReplacementFirst() {
    let catalogItemsFirstRow = document.querySelectorAll('.shop-catalog-desktop__item');

    if(catalogItemsFirstRow === null){

    }else{
        for(let i = 0; i < catalogItemsFirstRow.length; i++){
            let tagLinkNoOffersBlockLinkBtn = catalogItemsFirstRow[i].querySelector('.shop-catalog-desktop__tag-link-btn');
            let catalogItemsFirstRowLink = catalogItemsFirstRow[i].querySelector('a');
            if(tagLinkNoOffersBlockLinkBtn === null){
                // console.log('NOT TAG LINK BLOCKS');
            }else{
                let tagLinkBtnDataLink = tagLinkNoOffersBlockLinkBtn.dataset.link;
                // console.log(tagLinkBtnDataLink);
                // console.log(catalogItemsSecondRowLink);
                delete catalogItemsFirstRowLink.dataset.code;
                catalogItemsFirstRowLink.href =  `http://final.lr.ru${tagLinkBtnDataLink}`;
                catalogItemsFirstRowLink.addEventListener('click', function(e){
                    e.preventDefault();
                    window.location = this.href;
                })
            }
        }
    }
}
//tag-link--model-no-offers replacement link mech in Second row (lvl) in catalog
function tagLinkNoOffersLinkReplacementSecond() {
    let catalogItemsSecondRow = document.querySelectorAll('.shop-catalog-desktop__item--second');

    if(catalogItemsSecondRow === null){

    }else{
        for(let i = 0; i < catalogItemsSecondRow.length; i++){
            let tagLinkNoOffersBlockLinkBtn = catalogItemsSecondRow[i].querySelector('.shop-catalog-desktop__tag-link-btn');
            let catalogItemsSecondRowLink = catalogItemsSecondRow[i].querySelector('a');
            if(tagLinkNoOffersBlockLinkBtn === null){
                // console.log('NOT TAG LINK BLOCKS');
            }else{
                let tagLinkBtnDataLink = tagLinkNoOffersBlockLinkBtn.dataset.link;
                // console.log(tagLinkBtnDataLink);
                // console.log(catalogItemsSecondRowLink);
                delete catalogItemsSecondRowLink.dataset.code;
                catalogItemsSecondRowLink.href =  `http://final.lr.ru${tagLinkBtnDataLink}`;
                catalogItemsSecondRowLink.addEventListener('click', function(e){
                    e.preventDefault();
                    window.location = this.href;
                })
            }
        }
    }
}
//tag-link--model-no-offers replacement link mech in Third row (lvl) in catalog
function tagLinkNoOffersLinkReplacementThird() {
    let catalogItemsThirdRow = document.querySelectorAll('.shop-catalog-desktop__item--third');

    if(catalogItemsThirdRow === null){

    }else{
        for(let i = 0; i < catalogItemsThirdRow.length; i++){
            let tagLinkNoOffersBlockLinkBtn = catalogItemsThirdRow[i].querySelector('.shop-catalog-desktop__tag-link-btn');
            let catalogItemsThirdRowLink = catalogItemsThirdRow[i].querySelector('a');
            if(tagLinkNoOffersBlockLinkBtn === null){
                // console.log('NOT TAG LINK BLOCKS');
            }else{
                let tagLinkBtnDataLink = tagLinkNoOffersBlockLinkBtn.dataset.link;
                // console.log(tagLinkBtnDataLink);
                // console.log(catalogItemsSecondRowLink);
                delete catalogItemsThirdRowLink.dataset.code;
                catalogItemsThirdRowLink.href =  `http://final.lr.ru${tagLinkBtnDataLink}`;
                catalogItemsThirdRowLink.addEventListener('click', function(e){
                    e.preventDefault();
                    window.location = this.href;
                })
            }
        }
    }
}
//tag-link--model-no-offers replacement link mech in Fourth row (lvl) in catalog
function tagLinkNoOffersLinkReplacementFourth() {
    let catalogItemsThourthRow = document.querySelectorAll('.shop-catalog-desktop__item--fourth');

    if(catalogItemsThourthRow === null){
        
    }else{
        for(let i = 0; i < catalogItemsThourthRow.length; i++){
            let tagLinkNoOffersBlockLinkBtn = catalogItemsThourthRow[i].querySelector('.shop-catalog-desktop__tag-link-btn');
            let catalogItemsThourthRowLink = catalogItemsThourthRow[i].querySelector('a');
            if(tagLinkNoOffersBlockLinkBtn === null){
                // console.log('NOT TAG LINK BLOCKS');
            }else{
                let tagLinkBtnDataLink = tagLinkNoOffersBlockLinkBtn.dataset.link;
                // console.log(tagLinkBtnDataLink);
                // console.log(catalogItemsSecondRowLink);
                delete catalogItemsThourthRowLink.dataset.code;
                catalogItemsThourthRowLink.href =  `http://final.lr.ru${tagLinkBtnDataLink}`;
                catalogItemsThourthRowLink.addEventListener('click', function(e){
                    e.preventDefault();
                    window.location = this.href;
                })
            }
        }
    }
}

tagLinkNoOffersLinkReplacementFirst();
tagLinkNoOffersLinkReplacementSecond();
tagLinkNoOffersLinkReplacementThird();
tagLinkNoOffersLinkReplacementFourth();

//tag-link--backward link replacement link mech in First row (lvl) in catalog
function tagLinkBackwardLinkReplacementFirst() {
    let catalogItemsFirstRow = document.querySelectorAll('.shop-catalog-desktop__item');

    if(catalogItemsFirstRow === null){

    }else{
        for(let i = 0; i < catalogItemsFirstRow.length; i++){
            let tagLinkBackwardBlock = catalogItemsFirstRow[i].querySelector('.shop-catalog-desktop__tag-link--backward');
            let catalogItemsFirstRowLink = catalogItemsFirstRow[i].querySelector('a');
            if(tagLinkBackwardBlock === null){
                // console.log('NOT TAG LINK BLOCKS');
            }else{
                let tagLinkBtnDataLink = tagLinkBackwardBlock.dataset.link;
                // console.log(tagLinkBtnDataLink);
                // console.log(catalogItemsSecondRowLink);
                delete catalogItemsFirstRowLink.dataset.code;
                catalogItemsFirstRowLink.href =  `http://final.lr.ru${tagLinkBtnDataLink}`;
                catalogItemsFirstRowLink.addEventListener('click', function(e){
                    e.preventDefault();
                    window.location = this.href;
                })
            }
        }
    }
}
//tag-link--backward link replacement link mech in Second row (lvl) in catalog
function tagLinkBackwardLinkReplacementSecond() {
    let catalogItemsSecondRow = document.querySelectorAll('.shop-catalog-desktop__item--second');

    if(catalogItemsSecondRow === null){

    }else{
        for(let i = 0; i < catalogItemsSecondRow.length; i++){
            let tagLinkBackwardBlock = catalogItemsSecondRow[i].querySelector('.shop-catalog-desktop__tag-link--backward');
            let catalogItemsSecondRowLink = catalogItemsSecondRow[i].querySelector('a');
            if(tagLinkBackwardBlock === null){
                // console.log('NOT TAG LINK BLOCKS');
            }else{
                let tagLinkBtnDataLink = tagLinkBackwardBlock.dataset.link;
                // console.log(tagLinkBtnDataLink);
                // console.log(catalogItemsSecondRowLink);
                delete catalogItemsSecondRowLink.dataset.code;
                catalogItemsSecondRowLink.href =  `http://final.lr.ru${tagLinkBtnDataLink}`;
                catalogItemsSecondRowLink.addEventListener('click', function(e){
                    e.preventDefault();
                    window.location = this.href;
                })
            }
        }
    }
}
//tag-link--backward link replacement link mech in Third row (lvl) in catalog
function tagLinkBackwardLinkReplacementThird() {
    let catalogItemsThirdRow = document.querySelectorAll('.shop-catalog-desktop__item--third');

    if(catalogItemsThirdRow === null){

    }else{
        for(let i = 0; i < catalogItemsThirdRow.length; i++){
            let tagLinkBackwardBlock = catalogItemsThirdRow[i].querySelector('.shop-catalog-desktop__tag-link--backward');
            let catalogItemsThirdRowLink = catalogItemsThirdRow[i].querySelector('a');
            if(tagLinkBackwardBlock === null){
                // console.log('NOT TAG LINK BLOCKS');
            }else{
                let tagLinkBtnDataLink = tagLinkBackwardBlock.dataset.link;
                // console.log(tagLinkBtnDataLink);
                // console.log(catalogItemsSecondRowLink);
                delete catalogItemsThirdRowLink.dataset.code;
                catalogItemsThirdRowLink.href =  `http://final.lr.ru${tagLinkBtnDataLink}`;
                catalogItemsThirdRowLink.addEventListener('click', function(e){
                    e.preventDefault();
                    window.location = this.href;
                })
            }
        }
    }
}
//tag-link--backward link replacement link mech in Fourth row (lvl) in catalog
function tagLinkBackwardLinkReplacementFourth() {
    let catalogItemsFourthRow = document.querySelectorAll('.shop-catalog-desktop__item--fourth');

    if(catalogItemsFourthRow === null){

    }else{
        for(let i = 0; i < catalogItemsFourthRow.length; i++){
            let tagLinkBackwardBlock = catalogItemsFourthRow[i].querySelector('.shop-catalog-desktop__tag-link--backward');
            let catalogItemsFourthRowLink = catalogItemsFourthRow[i].querySelector('a');
            if(tagLinkBackwardBlock === null){
                // console.log('NOT TAG LINK BLOCKS');
            }else{
                let tagLinkBtnDataLink = tagLinkBackwardBlock.dataset.link;
                // console.log(tagLinkBtnDataLink);
                // console.log(catalogItemsSecondRowLink);
                delete catalogItemsFourthRowLink.dataset.code;
                catalogItemsFourthRowLink.href =  `http://final.lr.ru${tagLinkBtnDataLink}`;
                catalogItemsFourthRowLink.addEventListener('click', function(e){
                    e.preventDefault();
                    window.location = this.href;
                })
            }
        }
    }
}

tagLinkBackwardLinkReplacementFirst();
tagLinkBackwardLinkReplacementSecond();
tagLinkBackwardLinkReplacementThird();
tagLinkBackwardLinkReplacementFourth();