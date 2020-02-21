var backdrop=document.querySelector(".backdrop");
 var modal=document.querySelector(".modal");
 var plan_sec_button=document.querySelectorAll("#plan-sec button");
 for(var i=0;i<plan_sec_button.length;i++)
 {
     plan_sec_button[i].addEventListener("click",function(){ 
        backdrop.style.display = "block";
        modal.style.display = "block";

     });
 }