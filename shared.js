var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNobutton = document.querySelector(".modal__action--negative")
var selectPlanbuttons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav= document.querySelector('.mobile-nav')

// console.dir(backdrop.style['background-image']);  


// console.dir(backdrop)
console.dir(selectPlanbuttons);
for (var i = 0; i < selectPlanbuttons.length; i++) {
    selectPlanbuttons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; //This will actually overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');


    });
}
backdrop.addEventListener("click",function(){
    // mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    closeModal();
})

if(modalNobutton)
{
    modalNobutton.addEventListener("click",closeModal);
}


function closeModal(){
    // backdrop.style.display="none";
    // modal.style.display="none";
    if(modal)
    {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click',function(){
    // mobileNav.style.display='block';
    // backdrop.style.display='block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');


})