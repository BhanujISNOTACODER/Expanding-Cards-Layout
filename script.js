let panels = document.querySelectorAll('.panel');
panels.forEach(panel=>{
    panel.addEventListener('mouseover',()=>{
        removeActive();
        panel.classList.add('active')
    })
})
panels.forEach(panel=>{
    panel.addEventListener('mouseleave',()=>{
        removeActive();
    })
})
function removeActive(){
   panels.forEach(panel=>{
    panel.classList.remove("active");
})
}