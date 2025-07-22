// var elm1= document.querySelector('#elm1')
// var img1= document.querySelector("#elm1 img")

// elm1.addEventListener("mousemove", function (dets){
//     img1.style.left= dets.x +"px"
//     img1.style.top= dets.y +"px"

// })

// elm1.addEventListener('mouseenter', function(dets){
//     img1.style.opacity=1
// })

// elm1.addEventListener('mouseleave',function(dets){
//     img1.style.opacity=0
// })


var elm= document.querySelectorAll('.elm')

elm.forEach(function(val){


   val.addEventListener('mouseenter',function(){
    val.childNodes[3].style.opacity=1   
})

    val.addEventListener('mouseleave',function(){
     val.childNodes[3].style.opacity=0  
   })

   val.addEventListener('mousemove',function(dets){
     val.childNodes[3].style.left= dets.x+'px'
     val.childNodes[3].style.top= dets.y+'px'
   })
})

// elm.addEventListener('mouseneter',function(val){
//     val.childNode[3].style.opacity=1
// })

// elm.addEventListener('mouseleave',function(val){
//     val.childNode[3].style.opacity=0
// })

// elm.addEventListener('mousemove',function(val){
//     val.childNode[3].style.left= dets.x+'px'
//     val.childNode[3].style.top= dets.y+'px'
// })