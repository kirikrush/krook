function nextSlide(offset){
    if (!$(".photos img:nth-child(5)").hasClass("active")){
    let next = $(".photos .active").next();
    $(".photos .active").removeClass("active");
    next.addClass("active");
    slide++;
    $(".photos img").css("left",offset*-slide);
    }
}
let slide= 0;
function getOffset(){
    let offset = (+$(".photos img").width())+(+$(".photos img").css("margin-right").replace("px",""));
    console.log(offset);
    return offset;
}

function prevSlide(offset){
    if (!$(".photos img:first-child").hasClass("active")){
        slide--;
    let next = $(".photos .active").prev();
    $(".photos .active").removeClass("active");
    next.addClass("active");
    $(".photos img").css("left",offset*-slide);
    }
}

$("#right").click(function(){

  nextSlide(getOffset())  
  
})

$("#left").click(function(){
    prevSlide(getOffset())  
   
  })



  $(".burger").click(function(){
      $(".menu").toggleClass("active")
  })