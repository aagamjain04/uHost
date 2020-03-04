var backdrop=document.querySelector(".backdrop");
 var modal=document.querySelector(".modal");
 var plan_sec_button=document.querySelectorAll("#plan-sec button");
 var noButton=document.querySelector("#no");

//  • Access CSS styles on DOM
// elements via the style
// property
// • Access via camelCase
// notation (e.g.
// backgroundImage) or by
// using strings (e.g.
// 'background-image')

 for(var i=0;i<plan_sec_button.length;i++)
 {
     
     plan_sec_button[i].addEventListener("click",function(){ 
        backdrop.style.display = "block";
        modal.style.display = "block";
    //  var.classList.add/remove('class-name');---will do the same and new class should be
    //  made for that specific function
     });
 }
 var mobilenav=document.querySelector(".mobile-nav");
 var toggle=document.querySelector(".toggle-button");

 toggle.addEventListener("click",function(){
     mobilenav.style.display= "block";
     backdrop.style.display="block";
 })

 backdrop.addEventListener("click",function(){
    mobilenav.style.display= "none";
    backdrop.style.display="none";
   if(modal){ modal.style.display = "none";}
 })

 if(noButton){
 noButton.addEventListener("click",function(){
    backdrop.style.display="none";
    modal.style.display = "none";
 })
}
//  console.dir(backdrop);
// var clickBtn = document.getElementsByClassName('click')[0];
// var button = document.getElementById("button-green");
// button.disabled = true;

// //add event listener
// clickBtn.addEventListener('click', function(event) {
//     button.disabled = !button.disabled;
// });
// var button_green = document.getElementById("button-green");
// var btnClk = document.getElementsByClassName("click")[0];
// button_green.disabled = true;
// btnClk.addEventListener('click',function(){
//     button_green.disabled = !button_green.disabled;
// })
var button_green = document.getElementById("button-green");
var btnClk = document.getElementById("agree-terms");
button_green.disabled = true;
btnClk.addEventListener('click',function(){
    button_green.disabled = !button_green.disabled;
})