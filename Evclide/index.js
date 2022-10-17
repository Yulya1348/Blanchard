document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-work__item-btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.section-work__card').forEach(function(tabContent) {
                tabContent.classList.remove('section-work__card__active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-work__card__active')

            document.querySelectorAll('.section-work__item-btn').forEach(function(activeBtn) {
                activeBtn.classList.remove('section-work__item-btn__active')
            })
            event.currentTarget.classList.add('section-work__item-btn__active')
        })
    })
})   

window.addEventListener('DOMContentLoaded', function() {    
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('is-active')
    })
})

const burger = document.querySelector('.burger')

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active')
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
})

$( function() {
    $( "#accordion" ).accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
    })
})