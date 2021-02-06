//start jquery codes
$(document).ready(function(){
    //nice scroll
   $('html').niceScroll();

   //hover on departments to show the name of dep
    $('.fic-depart .dep-cont .fc-cs').hover(function(){
        $(this).text('Computer science');
    })

         //arrow scrolling top
   // $(window).scroll(function(){
     //   var scrollingTop = $('.scrolling');
       // if($(this).scrollTop() >= 500){
         //   scrollingTop.fadeIn();
        //}else{
          //  scrollingTop.hide();
        //}
        //clicking on arrow
       // $('html,body').click(function(){
         //   $(this).animate({scrollTop : 0}, 600);
        //});
    //})
});
    //loading section
$(window).on('load',function(){
    $('.loading').fadeOut(2000);
});  



// start javascript

//to go the specific place by bullets
let clickBullets = document.querySelectorAll('.bullets .bullets-cont');
function bullets(elements){
    elements.forEach(ele => {
        ele.addEventListener('click',(e)=>{
         
            document.querySelector(e.target.dataset.pull).scrollIntoView({
                behavior : 'smooth'
            })
        })
    });
}
bullets(clickBullets);
//function to remove and add class to clickable button
function removeAddClass(ev){
    ev.target.parentElement.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active');
    });
    ev.target.classList.add('active');
}
//local storage for bullets
let local = localStorage.getItem('.bullets-toggle')
let spanSpin = document.querySelectorAll('.bullets-toggle span');
let bulletsToggle = document.querySelector('.bullets');
if(local !== null){
    spanSpin.forEach(span =>{
        span.classList.remove('active');
    });
    if(local === 'block'){
        bulletsToggle.style.display = 'block';
        document.querySelector('.bullets-toggle .yes').classList.add('active');
       
    }else{
        bulletsToggle.style.display = 'none';
        document.querySelector('.bullets-toggle .no').classList.add('active');
    }
}
//bullets toggle by clicking on it
spanSpin.forEach(span =>{
    span.addEventListener('click',(e)=>{
        removeAddClass(e);
        if(span.dataset.display === 'yes'){
            bulletsToggle.style.display = 'block';
            local.setItem('.bullets-toggle', 'block');
        }else{
            bulletsToggle.style.display = 'none';
            local.setItem('.bullets-toggle', 'none');
        }
    })
})
//setting toggle
let settingToggle = document.querySelector('.setting');
let iconTog = document.querySelector('.setting .fa-cog');
iconTog.onclick = function (){
    settingToggle.classList.toggle('open');
}

