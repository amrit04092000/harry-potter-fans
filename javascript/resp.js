burger = document.querySelector(".burger")
navBar = document.querySelector(".navbar")
navList = document.querySelector(".navList")
rightNav = document.querySelector(".rightNav")


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('visibilityResp');
    navList.classList.toggle('visibilityResp');
    navBar.classList.toggle('heightNavResp');

})