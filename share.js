var backdrop=document.querySelector(".backdrop");
 var modal=document.querySelector(".modal");
 var plan_sec_button=document.querySelectorAll("#plan-sec button");
 var noButton=document.querySelector("#no");
 for(var i=0;i<plan_sec_button.length;i++)
 {
     plan_sec_button[i].addEventListener("click",function(){ 
        backdrop.style.display = "block";
        modal.style.display = "block";

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
    modal.style.display = "none";
 })
 noButton.addEventListener("click",function(){
    backdrop.style.display="none";
    modal.style.display = "none";
 })