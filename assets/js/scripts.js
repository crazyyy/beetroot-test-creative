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
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#000',
      'position': 'right',
      'tooltips': ['section1', 'section2', 'section3', 'section4']
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
  });
});
