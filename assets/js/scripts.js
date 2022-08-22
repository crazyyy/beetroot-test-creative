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
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: true,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){
      console.log("Section index " + index + " ended loading");
      $pagerNum.html('0' + index)
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

  // modal window
  const $contactButton = $('.header--contact-button');
  const $contactModalContainer = $('.modal--contact');

  $contactButton.on('click', function (e) {
    $contactButton.toggleClass('header--contact-button__active')
    $contactModalContainer.toggleClass('modal--contact__active')
  })

  Splitting();

  // Jobs slider carousel
  const $jobsCarouselContainer = document.querySelector('.jobs--carousel');
  const $jobsCarouselNav = document.querySelector('.jobs--carousel-nav');
  const $jobsCarouselNavNext = document.querySelector('.jobs--carousel-nav-next');
  const $jobsCarouselNavPrev = document.querySelector('.jobs--carousel-nav-prev');
  const jobsSlider = tns({
    container: $jobsCarouselContainer,
    controlsContainer: $jobsCarouselNav,
    prevButton: $jobsCarouselNavPrev,
    nextButton: $jobsCarouselNavNext,
    items: 3,
    // slideBy: 'page',
    autoplay: false,
    center: true,
    controls: true,
    nav: false,
    controlsText: ["", ""],
    // responsive: {
    //   640: {
    //     edgePadding: 20,
    //     gutter: 20,
    //     items: 2
    //   },
    //   700: {
    //     gutter: 30
    //   },
    //   900: {
    //     items: 3
    //   }
    // }
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


  // Teams slider carousel
  const $teamsCarouselContainer = document.querySelector('.teams--carousel');
  const $teamsCarouselNav = document.querySelector('.teams--carousel-nav');
  const $teamsCarouselNavNext = document.querySelector('.teams--carousel-nav-next');
  const $teamsCarouselNavPrev = document.querySelector('.teams--carousel-nav-prev');
  const teamsSlider = tns({
    container: $teamsCarouselContainer,
    controlsContainer: $teamsCarouselNav,
    prevButton: $teamsCarouselNavPrev,
    nextButton: $teamsCarouselNavNext,
    items: 3,
    // slideBy: 'page',
    autoplay: false,
    center: true,
    controls: true,
    nav: false,
    controlsText: ["", ""],
    // responsive: {
    //   640: {
    //     edgePadding: 20,
    //     gutter: 20,
    //     items: 2
    //   },
    //   700: {
    //     gutter: 30
    //   },
    //   900: {
    //     items: 3
    //   }
    // }
  });

  // slider.getInfo();

  const teamsSliderInfo = teamsSlider.getInfo(),
    // indexPrev = jobsSliderInfo.indexCached,
    indexTeamsCurrent = teamsSliderInfo.index;
  console.log(teamsSliderInfo)
  console.log(indexTeamsCurrent)
  // update style based on index
  // info.slideItems[indexPrev].classList.remove('jobs--carousel-item__active');
  teamsSliderInfo.slideItems[indexTeamsCurrent].classList.add('teams--carousel-item__active');

  $teamsCarouselNavNext.onclick = function () {
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

  $teamsCarouselNavPrev.onclick = function () {
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

  teamsSlider.events.on('indexChanged', function (info, eventName) {
    // console.log(info)
    // console.log(info.indexCached)
    // console.log(info.index)
    const indexCurrent = info.index;
    document.querySelector('.teams--carousel-item__active').classList.remove('teams--carousel-item__active');
    // info.slideItems[info.indexCached].classList.remove('jobs--carousel-item__active');
    info.slideItems[info.index].classList.add('teams--carousel-item__active');
  });


});
