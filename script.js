//type script animation
var typed = new Typed('#element', {
    strings: ['HTML','CSS','JAVASCRIPT','BOOTSTRAP','NODE.JS','MONGODB','REACT','MYSQL'],
    typeSpeed: 500,
  });

//gsap animation

var timelap=gsap.timeline();
timelap.from('#left , #right',{
    y:-100,
    duration:0.9,
    
    stagger:0.3
})

timelap.from(".left-section",{
    scale:0,
    duration:1
})

timelap.to('#downarrow',{
    y:-50,
    duration:0.5,
    repeat:Infinity,
    yoyo:true
})

gsap.to(".right-section img",{
    opacity:1,
    duration:4
})


//scroll trigger

gsap.to('#nav',{
    backgroundColor:" rgb(18, 18, 62)",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1       
    }
})

gsap.to(".right-section img,#downarrow", {
    scale:0, 
    duration:5,
    scrollTrigger: {
        trigger: ".second-section",
        scoller: "body",
        start: "top 40%",
        end: "top 10%",
        scrub:2
    }
})

gsap.from(".box",{
    x:-1300,
    duration:5,
    scrollTrigger:{
        trigger:'.box',
        scroller:'body',
        scrub:2,
        start:"top 400",
        end:"top 200"
    }
})


//basic javascript code
const menu=document.getElementById('menu');
const menulist=document.getElementById('menulist');
const header=document.getElementById('header');

menu.addEventListener('click',()=>{
    if(menulist.style.display=='none')
    {
        menulist.style.display='block';
        menulist.style.marginTop='75vh';
        header.style.height='100%';
       
    }
    else
    {
        menulist.style.display='none';
        menulist.style.marginTop=0;
        header.style.height=0;
    }
})