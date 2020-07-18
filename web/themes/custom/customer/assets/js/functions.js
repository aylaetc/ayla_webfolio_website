// var slider = tns({
//     // disable slider on small viewport
//     disable: true,
//     responsive: {
//       1280: {
//         // enable slider on big viewport
//         disable: false,
//         container: '.slider',
//         items: 3,
//         slideBy: 'page'
//       }
//     }
//   });


$(document).ready(function(){
    $("#icon-menu").click(function(){
        $("#icon-menu").toggleClass("active");
        $("#block-main-navigation").toggleClass("menu-mobile");
    });
});
