$(document).ready(function(){
    $("#icon-menu").click(function(){
        $("#icon-menu").toggleClass("active");
        $("#block-main-navigation").toggleClass("menu-mobile");
    });
});

// let test = document.getElementById("picture-header").offsetHeight;
// let parent = document.getElementById("picture-header").parentNode;
// let scrollY = parent.scrollY;
// // console.log(parent);
// // console.log(test);
// parent.onescroll

var controller = new ScrollMagic.Controller();

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#scroll-transform", duration:"100%", triggerHook: "onCenter"})
					.setClassToggle("#block-main-navigation", "nav-transform") // add class toggle
					.addTo(controller);