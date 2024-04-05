gsap.to(".page2 h1",{
    left : "-130%",
    duration : 2,
    scrollTrigger :{
        scroller :"body",
        trigger:".page2",
        start : "top 0%",
        end : "top -100%",
        markers:true,
        scrub: true,
        pin : true,


    }

})