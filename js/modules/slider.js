function slider() {

    const slidersList = document.querySelectorAll('.slider');
	if (slidersList === null) {
		// console.log("Slider left html");
	} else {
        for(let i = 0; i < slidersList.length; i++){
            let slideIndex = 1,
            slides = slidersList[i].querySelectorAll('.slider__item'),
            dotsWrap = slidersList[i].querySelector('.slider__dots'),
            dots = slidersList[i].querySelectorAll('.dot');
            const currentSlider = slidersList[i];
            const autoScrollTimer = currentSlider.dataset.timer;

            showSlides(slideIndex);

            function showSlides(n) {

                if (n > slides.length) {
                    slideIndex = 1;
                }
                if (n < 1) {
                    slideIndex = slides.length;
                }

                slides.forEach((item) => item.style.display = 'none');
                // for (var i = 0; i < slides.length; i++) {
                //     slides[i].style.display = 'none';
                // }
                dots.forEach((item) => item.classList.remove('dot-active'));

                slides[slideIndex - 1].style.display = 'block';
                dots[slideIndex - 1].classList.add('dot-active');
            }

            function plusSlides(n) {
                showSlides(slideIndex += n); 
            }
            
            function currentSlide(n) {
                showSlides(slideIndex = n);
            }

            // function plusAutoSlides(n) {
            //     showSlides(slideIndex += 1);
            // }

            // if(Number(autoScrollTimer) <= 0 || autoScrollTimer === "null"){
            //     console.warn('data-timer 0 or less')
            // }else{

            //     window.sliderTimer = setInterval(plusAutoSlides, Number(autoScrollTimer));

            //     currentSlider.addEventListener('mouseenter', function(){
            //         // console.warn('СЛАЙДЕР, ПРИКАЗЫВАЮ ТЕБЕ, ЗАМРИ!!!')
            //         clearInterval(window.sliderTimer);
            //     });

            //     currentSlider.addEventListener('mouseleave', function(){
            //         // console.warn('СЛАЙДЕР, ОТОМРИ, ОКАЯНЫЙ!!!')
            //         window.sliderTimer = setInterval(plusAutoSlides, Number(autoScrollTimer));
            //     });
            // }
            
            //click on dots
            dotsWrap.addEventListener('click', function(event) {
                for (let i = 0; i < dots.length + 1; i++) {
                    if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                        currentSlide(i);
                    }
                }
            });
        }
    }
}

slider();

function videoInBubbleSlider(){
    let bubbleVideos = document.querySelectorAll('.slider__item-video');

    if (bubbleVideos === null) {
      // console.log("sliderVideos left HTML");
    } else {
      for (let i = 0; i < bubbleVideos.length; i++) {
        setupVideo(bubbleVideos[i]);
      }
  
  
      function setupVideo(bubbleVideos) {
        let link = bubbleVideos.querySelector('.slider__item-video-link');
        let media = bubbleVideos.querySelector('.slider__item-video-media');
        let button = bubbleVideos.querySelector('.slider__item-video-button');
  
        let id = parseMediaURL(media);
      
        bubbleVideos.addEventListener('click', () => {
          let iframe = createIframe(id);
      
          link.remove();
          button.remove();
          bubbleVideos.appendChild(iframe);
  
          link.removeAttribute('href');
          bubbleVideos.classList.add('bubbleVideo--enabled');   
         
          videoControlBubble();
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
        iframe.classList.add('bubbleVideo__media');
        iframe.setAttribute("id", "bubbleVideo");
      
        return iframe;
      }
      
      function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1&enablejsapi=1';
      
        return 'https://www.youtube.com/embed/' + id + query;
      } 
    }
}
videoInBubbleSlider()

function videoControlBubble(){

    // console.warn('videoCntrl function');
    let iframes = document.querySelectorAll('iframe');
    // console.log(iframes);
    let dotsWrap = document.querySelectorAll('.slider__dots');
   
    dotsWrap.forEach(item => {
        item.addEventListener('click', function(){
            console.warn('BAM!!');
            let pauseAllYouTubeVideos = () => { 
             let iframes = document.querySelectorAll('iframe');
             Array.prototype.forEach.call(iframes, iframe => { 
             iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
              func: 'pauseVideo' }), '*');
            });
        }
            pauseAllYouTubeVideos();
        }); 
    });
  
  
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
}