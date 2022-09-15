const navLists = document.getElementById("nav-lists")
const listBtn = document.getElementById("list-btn")
const smallScreenList = document.getElementById("smaller-screen-list")

// when tab loads
window.addEventListener("DOMContentLoaded", function(){
  if(this.window.innerWidth < 500){
    navLists.style.display = "none"
    

  
  }else{
    navLists.style.display = "flex"
    listBtn.style.display = "none"
    
  }
})

// when the tab rezised 
window.addEventListener("resize", function(){
  if(this.window.innerWidth < 500){
    navLists.style.display = "none"
    listBtn.style.display ="flex"
    smallScreenList.style.display = "none"
  
  }else{
    navLists.style.display = "flex"
    listBtn.style.display ="none"
    
  }
})

listBtn.addEventListener("click", function(){
  if(smallScreenList.style.display === "none"){
    smallScreenList.style.display = "block"
    console.log("block")
  }else{
    smallScreenList.style.display = "none" 
    console.log("none")
  }
})


