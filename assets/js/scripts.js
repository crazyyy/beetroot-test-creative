// Avoid `console` errors in browsers that lack a console.
( function() {
  let method;
  const noop = function() {};
  const methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    'trace',
    'warn'
  ];
  let length = methods.length;
  const console = window.console = window.console || {};

  while ( length-- ) {
    method = methods[length];

    // Only stub undefined methods.
    if ( !console[method] ) {
      console[method] = noop;
    }
  }
} )();
if ( typeof jQuery === 'undefined' ) {
  console.warn( "jQuery hasn't loaded" );
} else {
  console.log( `jQuery ${jQuery.fn.jquery} has loaded` );
}
// Place any jQuery/helper plugins in here.

$(document).ready(function() {
  // https://github.com/alvarotrigo/pagePiling.js
  const $onePageContainer = $('#pagepiling');
  const $pagerNum = $('.footer--page-num span');
  const $pagerTitle = $('.footer--page-title span');

  $onePageContainer.pagepiling({
    menu: '.header--menu',
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [],
    anchors: ['home', 'about', 'jobs', 'teams'],
    scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: false,
    // navigation: {
    //   'textColor': '#000',
    //   'bulletsColor': '#000',
    //   'position': 'right',
    //   'tooltips': ['section1', 'section2', 'section3', 'section4']
    // },
    normalScrollElements: '#element1, .element2',
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: true,

    //events
    onLeave: function(index, nextIndex, direction){
    },
    afterLoad: function(anchorLink, index){
      // console.log("Section index " + index + " ended loading");
      $pagerNum.html(`0${index}`)
      $pagerTitle.html(anchorLink)
      if(anchorLink == 'home'){
        console.log("Section home ended loading");
      } else if(anchorLink == 'about'){
        console.log("Section about ended loading");
      } else if(anchorLink == 'jobs'){
        console.log("Section jobs ended loading");
      } else if(anchorLink == 'teams'){
        console.log("Section teams ended loading");
      }
    },
    afterRender: function(){},
  });

  Splitting();

  // Jobs slider carousel
  const $jobsCarouselContainer = document.querySelector('.jobs--carousel');
  const $jobsCarouselNav = document.querySelector('.jobs--carousel-nav');
  const $jobsCarouselNavNext = document.querySelector('.jobs--carousel-nav-next');
  const $jobsCarouselNavPrev = document.querySelector('.jobs--carousel-nav-prev');

  // https://github.com/ganlanyuan/tiny-slider
  const jobsSlider = tns({
    container: $jobsCarouselContainer,
    controlsContainer: $jobsCarouselNav,
    prevButton: $jobsCarouselNavPrev,
    nextButton: $jobsCarouselNavNext,
    autoplay: false,
    center: true,
    controls: true,
    nav: false,
    animateDelay: 3000,
    controlsText: ["", ""],
    responsive: {
      320: {
        items: 1
      },
      993: {
        items: 3
      }
    }
  });

  // slider.getInfo();

  const jobsSliderInfo = jobsSlider.getInfo(),
    // indexPrev = jobsSliderInfo.indexCached,
    jobsIndexCurrent = jobsSliderInfo.index;
  console.log(jobsIndexCurrent)
  // update style based on index
  // info.slideItems[indexPrev].classList.remove('jobs--carousel-item__active');
  jobsSliderInfo.slideItems[jobsIndexCurrent].classList.add('jobs--carousel-item__active');

  $jobsCarouselNavNext.onclick = function () {
    // get slider info
    // const info = slider.getInfo(),
    //   indexPrev = info.indexCached,
    //   indexCurrent = info.index;
    // const indexCurrent = info.index;
    // console.log(indexCurrent)
    // update style based on index
    // info.slideItems[indexPrev].classList.remove('jobs--carousel-item__active');
    // document.querySelector('.jobs--carousel-item__active').classList.remove('jobs--carousel-item__active');
    // info.slideItems[indexCurrent].classList.add('jobs--carousel-item__active');
  };

  $jobsCarouselNavPrev.onclick = function () {
    // get slider info
    // const info = slider.getInfo(),
    //   indexPrev = info.indexCached,
    //   indexCurrent = info.index;
    // const indexCurrent = info.index;
    // console.log(indexCurrent)
    // update style based on index
    // info.slideItems[indexPrev].classList.remove('jobs--carousel-item__active');
    // document.querySelector('.jobs--carousel-item__active').classList.remove('jobs--carousel-item__active');
    // info.slideItems[indexCurrent].classList.add('jobs--carousel-item__active');
  };

  jobsSlider.events.on('indexChanged', function (info, eventName) {
    // console.log(info)
    // console.log(info.indexCached)
    // console.log(info.index)
    const indexCurrent = info.index;
    document.querySelector('.jobs--carousel-item__active').classList.remove('jobs--carousel-item__active');
    // info.slideItems[info.indexCached].classList.remove('jobs--carousel-item__active');
    info.slideItems[info.index].classList.add('jobs--carousel-item__active');
  });

  // Teams section
  // Enable Slider carousel for Teams Section
  const $teamsCarouselContainer = document.querySelector('.teams--carousel');
  const $teamsCarouselNav = document.querySelector('.teams--carousel-nav');
  const $teamsCarouselNavNext = document.querySelector('.teams--carousel-nav-next');
  const $teamsCarouselNavPrev = document.querySelector('.teams--carousel-nav-prev');

  // https://github.com/ganlanyuan/tiny-slider
  const teamsSlider = tns({
    container: $teamsCarouselContainer,
    controlsContainer: $teamsCarouselNav,
    prevButton: $teamsCarouselNavPrev,
    nextButton: $teamsCarouselNavNext,
    autoplay: false,
    center: true,
    controls: true,
    nav: false,
    controlsText: ["", ""],
    responsive: {
      320: {
        items: 1
      },
      993: {
        items: 3
      }
    }
  });

  const teamsSliderInfo = teamsSlider.getInfo(),
    indexTeamsCurrent = teamsSliderInfo.index;
  // update class based on active index
  teamsSliderInfo.slideItems[indexTeamsCurrent].classList.add('teams--carousel-item__active');

  teamsSlider.events.on('indexChanged', function (info, eventName) {
    // console.log(info)
    // console.log(info.indexCached)
    // console.log(info.index)
    const indexCurrent = info.index;
    document.querySelector('.teams--carousel-item__active').classList.remove('teams--carousel-item__active');
    info.slideItems[info.index].classList.add('teams--carousel-item__active');
  });

  // Set min-height for carousel elements by active element
  SetMinHeightElements('.teams--carousel-item');

  function SetMinHeightElements(selector) {
    const $elementsArray = [...document.querySelectorAll(selector)];
    let minHeight = 0;
    $elementsArray.forEach(($element) => {
      const height = $element.offsetHeight;
      // console.log('height: ' + height)
      if (height > minHeight) {
        minHeight = height;
      }
    })
    // console.log('minHeight: ' + minHeight)
    $elementsArray.forEach(($element) => {
      $element.style.minHeight = minHeight + 'px';
    })
  }

  // Modal window
  // Contact button modal window
  const $contactButton = document.querySelector('.header--contact-button');
  const $contactModalContainer = document.querySelector('.modal--contact');

  $contactButton.addEventListener("click", function(){
    if ($contactModalContainer.classList.contains('modal--contact__active')) {
      $contactModalContainer.classList.add('modal--contact__close');
      $contactButton.classList.remove('header--contact-button__active');
      setTimeout(function() {
        $contactModalContainer.classList.remove('modal--contact__active');
        $contactModalContainer.classList.remove('modal--contact__close');
      }, 500);
    } else {
      $contactButton.classList.add('header--contact-button__active');
      $contactModalContainer.classList.add('modal--contact__active');
    }
  });

  // Projects modal window
  const $modalProjectContainer = document.querySelector('.modal--project')
  const $modalProjectCat = document.querySelector('.modal--project-cat')
  const $modalProjectTitle = document.querySelector('.modal--project-title')
  const $jobsBtnMoreArray = [...document.querySelectorAll('.jobs--carousel-item-more')];
  $jobsBtnMoreArray.forEach(($jobsBtnMore) => {
    $jobsBtnMore.addEventListener("click", function(event){
      const $projectsContainer = event.target.parentNode.parentNode;
      const projectId = $projectsContainer.dataset.project
      const $currentTitleContainer = $projectsContainer.querySelector('.jobs--carousel-item-title')
      const currentTitle = $currentTitleContainer.innerHTML
      console.log(projectId)
      console.log(currentTitle)
      $modalProjectContainer.classList.add('modal--project__active');
      $modalProjectTitle.innerHTML = currentTitle
    });
  })

  const $modalProjectBtnClose = document.querySelector('.modal--project-close-button')
  $modalProjectBtnClose.addEventListener("click", function(){
    $modalProjectContainer.classList.add('modal--project__close');
    setTimeout(function() {
      $modalProjectContainer.classList.remove('modal--project__active');
      $modalProjectContainer.classList.remove('modal--project__close');
    }, 500);
  });

  // Next / Prev Projects
  const $modalProjectBtnNext = document.querySelector('.modal--project-btn-next')
  const $modalProjectBtnPrev = document.querySelector('.modal--project-btn-prev')
  const $modalProjectTitleNav = document.querySelector('.modal--project-nav-title')
  const $modalProjectTitleDirect = document.querySelector('.modal--project-nav-title span')

  $modalProjectBtnNext.addEventListener("mouseover", (event) => {
    $modalProjectTitleDirect.innerHTML = 'Next'
    $modalProjectTitleNav.classList.add('modal--project-nav-title__next');
  }, false);

  $modalProjectBtnNext.addEventListener("mouseout", (event) => {
    $modalProjectTitleNav.classList.remove('modal--project-nav-title__next');
  }, false);

  $modalProjectBtnPrev.addEventListener("mouseover", (event) => {
    $modalProjectTitleDirect.innerHTML = 'Previous'
    $modalProjectTitleNav.classList.add('modal--project-nav-title__prev');
  }, false);

  $modalProjectBtnPrev.addEventListener("mouseout", (event) => {
    $modalProjectTitleNav.classList.remove('modal--project-nav-title__prev');
  }, false);

  $modalProjectBtnNext.addEventListener("click", function(){
    const projectSliderInfo = jobsSlider.getInfo(),
      // indexPrev = jobsSliderInfo.indexCached,
      projectIndexCurrent = projectSliderInfo.index;
    console.log(projectIndexCurrent)
    jobsSlider.goTo('next');
    const $projectSlideNew = document.querySelector('.jobs--carousel-item__active')
    const newProjectId = $projectSlideNew.dataset.project
    const $newTitleContainer = $projectSlideNew.querySelector('.jobs--carousel-item-title')
    const newCurrentTitle = $newTitleContainer.innerHTML
    console.log('projectId: ', newProjectId)
    console.log('currentTitle: ', newCurrentTitle)
    $modalProjectTitle.innerHTML = newCurrentTitle
  });

  $modalProjectBtnPrev.addEventListener("click", function(){
    const projectSliderInfo = jobsSlider.getInfo(),
      // indexPrev = jobsSliderInfo.indexCached,
      projectIndexCurrent = projectSliderInfo.index;
    console.log(projectIndexCurrent)
    jobsSlider.goTo('prev');
    const $projectSlideNew = document.querySelector('.jobs--carousel-item__active')
    const newProjectId = $projectSlideNew.dataset.project
    const $newTitleContainer = $projectSlideNew.querySelector('.jobs--carousel-item-title')
    const newCurrentTitle = $newTitleContainer.innerHTML
    console.log('projectId: ', newProjectId)
    console.log('currentTitle: ', newCurrentTitle)
    $modalProjectTitle.innerHTML = newCurrentTitle
  });

});
