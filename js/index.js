// Плавный переход к блокам

$(document).ready(function() {
  $("#menu-top").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});


// Бургер-меню
    
document.querySelector(".header__burger").addEventListener("click", function() {
  document.querySelector(".header__burger-menu").classList.add("active");
  document.querySelector("#scroll").classList.add("body-scroll")
});

document.querySelector(".header__burger-nav").addEventListener("click", function() {
  document.querySelector(".header__burger-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
});


// Строка поиска

document.querySelector(".header__search-top__btn").addEventListener("click", function() {
  document.querySelector(".header__form-top").classList.add("header__form-top__active");
  this.classList.add("is-active");
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form-top");
  if (!target.closest(".header__form-container__top")) {
    form.classList.remove("header__form-top__active");
    form.querySelector(".header__form-top__input").value = "";
    document.querySelector(".header__search-top__btn").classList.remove("is-active")
  };
});

document.querySelector(".header__form-btn__close").addEventListener("click", function() {
  document.querySelector(".header__form-top").classList.add("in-active");
  document.querySelector(".header__search-top__btn").classList.remove("is-active")
});


// Нижнее меню хедера 

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__menu-btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__dropdown-container");
      
      document.querySelectorAll(".header__menu-btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("header__menu-btn__active");
        };
      });
      
      document.querySelectorAll(".header__dropdown-container").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("header__dropdown__active");
        };
      });
      dropdown.classList.toggle("header__dropdown__active");
      btn.classList.toggle("header__menu-btn__active");
    });
  });

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header__menu-list")) {
      document.querySelectorAll(".header__dropdown-container").forEach(el => {
          el.classList.remove("header__dropdown__active");
      });
      document.querySelectorAll(".list--item__btn").forEach(el => {
          el.classList.remove("header__menu-btn__active");
      });
    };
  });
});


// Плавный переход к карте

$(document).ready(function() {
  $("#mailing").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 2500);
  });
});


// Слайдер hero

const swiper = new Swiper('.section-hero__swiper', {
  slidesPerView: 1,
  loop: true,
  
  autoplay: {   
    delay: 2000,      
  }
});


// Селектор галерея

const element = document.querySelector('.js-choice');

const choices = new Choices(element, {
    searchEnabled : false,
    itemSelectText: "",
});


// Слайдер галерея

let gallerySlider = new Swiper(".section-gallery__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1
  },
  spaceBetween: 38,

  pagination: {
    el: ".section-gallery__pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".section-gallery__btn-right",
    prevEl: ".section-gallery__btn-left"
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 38,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    },
  },

  a11y: {
    enabled: true,

    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  },

});


// Аккордион Каталог

$( function() {
  $( "#accordion" ).accordion({
    active: 0,
    collapsible: true,
    heightStyle: "content"
  });
});


// Аккордион табы

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-catalog__accordion-content__tab').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path
          
          document.querySelectorAll('.section-catalog__artist').forEach(function(tabContent) {
              tabContent.classList.remove('section-catalog__artist__active')
          });
          document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__artist__active');

          document.querySelectorAll('.section-catalog__accordion-content__tab').forEach(function(activeBtn) {
              activeBtn.classList.remove('section-catalog__accordion-content__tab-active')
          });
          event.currentTarget.classList.add('section-catalog__accordion-content__tab-active')
      });
  });
});


// Слайдер события

let eventsSlider = new Swiper(".section-events__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  
  navigation: {
    nextEl: ".section-events__btn-right",
    prevEl: ".section-events__btn-left"
  },

  pagination: {
    el: ".section-events__swiper-pagination",
    type: "bullets",
    clickable: true
  },

  breakpoints: { 
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 27,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  },
});


// Тултипы Проекты

tippy('#tooltip-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'accent'
  
});

tippy('#tooltip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'accent'
});

tippy('#tooltip-3', {
  content: 'В стремлении повысить качество',
  theme: 'accent'
});



// Слайдер Проекты

let projectsSlider = new Swiper(".section-projects__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  
  navigation: {
    nextEl: ".section-projects__btn-right",
    prevEl: ".section-projects__btn-left"
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  },
});


// Поле ввода 

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");

im.mask(selector);

new JustValidate('.section-contacts__form', {
  rules: {
    name: {
      required: "Заполните поле",
      minLength: 3,
      maxLenght: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
      }
    },
  },

  messages: {
    name: 'Недопустимый формат',
    tel: 'Недопустимый формат', 
  },
});


// Карта

ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 14,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/Marker_map.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);

    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small",
        right: 10
      }
    });
    myMap.controls.add(zoomControl);

    myMap.controls.add('geolocationControl');
};