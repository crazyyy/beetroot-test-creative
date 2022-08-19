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


});
