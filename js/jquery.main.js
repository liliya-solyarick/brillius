// DOM ready
 $(function() {
   var mainNav = $('#main-nav');
   if(mainNav){
    mainNav.find('ul').addClass('visible-sm visible-md visible-lg')
   }
    // Create the dropdown base
    $("<select />").appendTo(mainNav);

    var selectNew = mainNav.find('select');
    
    // // Create default option "Go to..."
    // $("<option />", {
    //    "selected": "selected",
    //    "value"   : "",
    //    "text"    : "Home"
    // }).appendTo(selectNew)
    
    // Populate dropdown with menu items
    $("#main-nav a").each(function() {
     var el = $(this);
     $("<option />", {
         "value"   : el.attr("href"),
         "text"    : el.text()
     }).appendTo(selectNew);
    });
    
   // To make dropdown actually work
   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
    selectNew.change(function() {
      window.location = $(this).find("option:selected").val();
    });
 });

 $(function() {
   var mainNav = $('#footer-nav');
   if(mainNav){
    mainNav.find('ul').addClass('visible-sm visible-md visible-lg')
   }
    // Create the dropdown base
    $("<select />").appendTo(mainNav);

    var selectNew = mainNav.find('select');
    
    // // Create default option "Go to..."
    // $("<option />", {
    //    "selected": "selected",
    //    "value"   : "",
    //    "text"    : "Home"
    // }).appendTo(selectNew)
    
    // Populate dropdown with menu items
    $("#footer-nav a").each(function() {
     var el = $(this);
     $("<option />", {
         "value"   : el.attr("href"),
         "text"    : el.text()
     }).appendTo(selectNew);
    });
    
   // To make dropdown actually work
   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
    selectNew.change(function() {
      window.location = $(this).find("option:selected").val();
    });
 });
