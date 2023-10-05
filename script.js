const wrap=document.querySelectorAll(".wrap")

// for(i = 0; i < wrap.length; i++){
//     wrap[i].addEventListener("click", function(){
//      this.classList.toggle("active")
//     })
// };

wrap.forEach((item, i)=>{
    item.addEventListener("click", ()=>{
        wrap[i].classList.toggle("active");
    })
})