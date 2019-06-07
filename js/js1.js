var $cursorDot = document.querySelector("#cursor-dot");
var $cursorBG = document.querySelector("#cursor-bg");
var $list = document.querySelector("#list");
var $listEl = $list.querySelectorAll("a");

//커서 움직이기

window.addEventListener("mousemove", onMouseMoveWindow);

function onMouseMoveWindow(e){
    var posX = e.pageX, posY=e.pageY
    TweenMax.to($cursorDot, 0.15,{css : {top:posY,left:posX}, ease : Quad.easeInOut});
    TweenMax.to($cursorBG, 0.15,{css : {top:posY,left:posX}, ease : Quad.easeInOut});

}

for(var i=0; i<$listEl.length;i++){
    $listEl[i].addEventListener('mouseenter',function(){
        console.log("enter");
        if(!$cursorBG.classList.contains('active')){
            $cursorBG.classList.add('active')
        }

    })
    $listEl[i].addEventListener('mouseleave',function(){
        console.log('leave');
        if(!$cursorBG.classList.contains('active'))
        {$cursorBG.classList.add('active')}
    })
}