/*!
 * Mobile Navigation
 * JavaScript Library
 * Version 1.0.0
 * Roderic Linguri <linguri@digices.com>
 */

/** GLOBAL VARS **/
var width;


var partHeight = 42;
var deptCount = 0;
var catgCount = 0;
var itemCount = 0;
var menu = $('#menu');
var menuSelected = 0;
var deptSelected = 0;
var catgSelected = 0;

function collapseCatgs() {
  catgSelected = 0;
  $('.catg-disc').removeClass('exp');
  $('.item-sect').css('height', '0');
  $('.catg-sect').css('height', partHeight + 'px');
  expandDept(deptSelected);
  var menuHeight = (deptCount * partHeight) + (catgCount * partHeight);
  menu.css('height', menuHeight + 'px');
}

function expandCatg(i) {
  // collapse all other categories
  collapseCatgs();
  // calculate selected catg
  catgSelected = i;
  // identify the catg components
  var dept = $('#dept-sect-' + deptSelected + '-0-0');
  var deptBody = $('#dept-body-' + deptSelected + '-0-0');
  var sect = $('#catg-sect-' + deptSelected + '-' + i + '-0');
  var head = $('#catg-head-' + deptSelected + '-' + i + '-0');
  var body = $('#catg-body-' + deptSelected + '-' + i + '-0');
  // calculate the number of categories
  itemCount = body.children().length;
  // calculate heights of each part
  var bodyHeight = itemCount * partHeight; // category body
  var sectHeight = partHeight + bodyHeight; // category section
  var deptBodyHeight = (partHeight * (catgCount -1)) + sectHeight;
  var deptHeight = partHeight + deptBodyHeight;
  var menuHeight = (partHeight * deptCount) + deptHeight;
  // set the heights
  body.children().each(function() {
    $(this).css('height', partHeight + 'px');
  });
  body.css('height', bodyHeight + 'px');
  head.css('height', partHeight + 'px');
  sect.css('height', sectHeight + 'px');
  deptBody.css('height', deptBodyHeight + 'px');
  dept.css('height', deptHeight + 'px');
  menu.css('height', menuHeight + 'px');
  $('#catg-disc-' + deptSelected + '-' + catgSelected + '-0').addClass('exp');
}

function toggleCatg(i) {
  if (i == catgSelected) {
    expandDept(deptSelected);
    collapseCatgs();
  } else {
    catgSelected = i;
    expandCatg(i);
  }
}

function expandDept(i) {
  // collapse all other department
  collapseDepts();
  // calculate selected dept
  deptSelected = i;
  // identify the dept components
  var sect = $('#dept-sect-' + i + '-0-0');
  var head = $('#dept-head-' + i + '-0-0');
  var body = $('#dept-body-' + i + '-0-0');
  // calculate the number of categories
  catgCount = body.children().length;
  // calculate heights of each part
  var bodyHeight = catgCount * partHeight;
  var headHeight = partHeight;
  var sectHeight = headHeight + bodyHeight;
  var menuHeight = (deptCount * partHeight) + bodyHeight;
  // set the heights
  body.children().each(function() {
    $(this).css('height', partHeight + 'px');
  });
  body.css('height', bodyHeight + 'px');
  body.css('z-index', '900');
  head.css('height', headHeight + 'px');
  head.css('z-index', '800');
  sect.css('height', sectHeight + 'px');
  sect.css('z-index', '700');
  menu.css('height', menuHeight + 'px');
  $('#dept-disc-' + deptSelected + '-0-0').addClass('exp');
  // highlight current department
  head.css('background-color','#644448');
  
}

function collapseDepts() {
  deptSelected = 0;
  catgSelected = 0;
  $('.catg-disc').removeClass('exp');
  $('.dept-disc').removeClass('exp');
  var itms = $('.item-sect');
  itms.css('height', '0');
  itms.css('z-index', '0');
  var ctgs = $('.catg-sect');
  ctgs.css('height', '0');
  ctgs.css('z-index', '0');
  var dpts = $('.dept-sect');
  dpts.css('height', partHeight + 'px');
  dpts.css('z-index', '0');
  $('.dept-head').css('background-color','');
  var menuHeight = (deptCount * partHeight);
  menu.css('height', menuHeight + 'px');
}

function toggleDept(i) {
  if (i == deptSelected) {
    collapseDepts();
  } else {
    deptSelected = i;
    expandDept(i);
  }
}

function expandMenu() {
  menuSelected = 1;
  menu.css('height', (deptCount * partHeight) + 'px');	
}

function collapseMenu() {
  menuSelected = 0;
  deptSelected = 0;
  catgSelected = 0;
  $('.dept-sect').css('height', partHeight + 'px');
  $('.catg-sect').css('height', '0');
  $('.item-sect').css('height', '0');
  $('.dept-disc').removeClass('exp');
  $('.catg-disc').removeClass('exp');
  menu.css('height','0');	
}

function toggleMenu() {
  if (menuSelected > 0) {
    collapseMenu();
  } else {
    expandMenu();
  }
}

$('document').ready(function() {

  $(window).on('resize',function() {
      collapseMenu();
	  width = window.innerWidth;
	  if (width > 600) {
	    $('#menu').css('height', partHeight + 'px');
	  } else {
	    $('#menu').css('height', '0');
	  }
  });

  // count the departments
  deptCount = menu.children().length;
  
  $('.dept-sect').css('height', partHeight + 'px');
  $('.catg-sect').css('height', '0');
  $('.item-sect').css('height', '0');

  // listen for menu toggle click
  $('#toggle').on('click',function() {
      toggleMenu();
  });
  
  // listen for dept head click
  $('.dept-head').on('click',function() {
    var id = $(this).attr('id');
    toggleDept(id.charAt(10));
  });

  // listen for catg head click
  $('.catg-disc').on('click',function() {
    var id = $(this).attr('id');
    deptSelected = id.charAt(10);
    toggleCatg(id.charAt(12));
  });

});