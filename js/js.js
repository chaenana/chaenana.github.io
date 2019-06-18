console.log("load");
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        //hash 라는건 알아서 다음꺼로 계산을 해주는? 그런거인듯함
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });



  //스크롤이 제일 위에 오면 옆에 있는 to top이 사라짐

  document.addEventListener("scroll", yScroll);

function yScroll() {

  var yPos = window.pageYOffset;

  if (yPos > 10) {
    document.getElementById("top-btn").style.bottom = "10px";
  } else {
    document.getElementById("top-btn").style.bottom = "-60px";
  }
}

function ScrollTop() {

  var i = window.pageYOffset;

  var intervalTimer = setInterval(function() {
    if (i > 0) {
      window.scrollTo(0, i);
      i -= 15;
    } else {
      document.getElementById("top-btn").style.bottom = "-60px";
      clearInterval(intervalTimer);
    }
  }, 0.5);
}


/*옆에서 텍스트 쭉 커짐*/


$(function(){
  $(".title").addClass("active");
});


//옆에서 스르륵 나타남


$(document).ready(function() {
  $(window).scroll( function(){
      $('.fade-up').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'30px'},1500);
          }
          
      }); 
  });
});



$(document).ready(function() {
  $(window).scroll( function(){
      $('.rev').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-top':'0px'}, 1500);
          }
          
      }); 
  });
});



$(document).ready(function() {
  $(window).scroll( function(){
      $('.view-container').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-left':'12%'}, 1800);
          }
          
      }); 
  });
});





//마우스 커서
var $cursorDot = document.querySelector("#cursor-dot");
var $cursorBG = document.querySelector("#cursor-bg");

window.addEventListener("mousemove", onMouseMoveWindow);

function onMouseMoveWindow(e) {
    var posX = e.clientX, posY = e.clientY;
    TweenMax.to($cursorDot, 0.15,{css : {top:posY,left:posX}, ease : Quad.easeInOut});
    TweenMax.to($cursorBG, 0.15,{css : {top:posY,left:posX}, ease : Quad.easeInOut});

}



//클릭시 팝업 나옴



// var $viewmore1 = document.getElementsByClassName(".Btnviewmore1");
// $viewmore1.addEventListener("click",onClickBtnmore1);
// function onClickBtnmore1(e){
//   e.preventDefault();
//   var popup1 = document.getElementsByClassName("hidden1");
//   popup1[0].classList.toggle("show");

// }







/*
var $btnview = document.querySelector("button#btn-add-item");
$btnAddItem.addEventListener("click", onClickBtnAddItem);
function onClickBtnAddItem(e) {

    var number = prompt("숫자를 입력해주세요.");
    var $ulList = document.querySelector("ul#list");
    if(number !== null && number !== '' && !isNaN(Number(number))){
        $ulList.innerHTML = ''; //요소의 HTML 내용 지우기.
        number = Number(number);
        for(var i = 0; i < number; i++){
            var $li = document.createElement("li"); // 가상의 <li></li> 생성.
            $li.classList.add("item"); // $li.className = "item";
            $li.innerText = i + 1;
            $ulList.appendChild($li);
        }
    }
}

*/




/*
var $hidden = document.querySelector("viewmore2")

window.addEventListener("click", onClickhidden1)

function onClickhidden1(e) {
  e.preventDefault();
  var popup1 = document.getElementsByClassName("hidden2");
  console.log("popup1");
  popup1[0].classList.toggle("show1");
}

*/