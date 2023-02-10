gsap.registerPlugin(ScrollTrigger);

function page1animation(){


var tl=gsap.timeline({

    scrollTrigger:{
        trigger:"#home",
        start:"top top",
        scrub:1.2,
        pin :true
    }
})
tl
.from("#page1 #cimage",{
    x:470,
    duration:3,
    ease:Power1,

})
.to("#page1 #circle #bottom img",{
        rotate: "-180deg",
        scale: .6,
        stagger: .4,
        ease: Power1,
        duration:10
    }, "same")
.to("#page1 #circle #top img", {
        scale: .6,
        duration:10,
        ease: Power1
}, "same")

.to("#circle",{
    scale:.8,
    ease:Power1,
    duration:3,
    
},"same")

.to("#page1 #cimage img",{
    duration:5,
    scale:0,
    delay:.1,
    ease:Power1,
    
},"same")
.to("#page1 #cimage",{
    opacity:0,
    delay:01,
    duration:3,
    duration:2,
    ease:Power1,
    
},"same")
.from("#page1 #purp1",{
    y:500,
    scale:0,
    opacity:0,
    duration:2,
    ease:Power1,
    
    
},"same")
.to("#page1 #gallery",{
    y:100,
    opacity:0,
    duration:5,
    ease:Power1,
    
},"same")



.from("#page1>#image",{
    scale:1.4,
    ease:Power1,
    duration:4,

},"same")
.from("#page1 #pinkf",{
    y:1000,
    rotate:45,   
    delay:0.8,
    duration:5,
    ease:Power1,
},"same")
.to("#page1 #purp1",{
    opacity:0,
    ease:Power1,

},"a")
.to("#circle",{
    scale:0,
    ease:Power1,
    duration:3,
    delay:0.4

},"a")
.to("#page1>#pinkbox",{
    top:"-100%",
    duration:10,
    scrub:1,
    ease:Power1,
    delay:1
},"a")
// .to("#page1",{
//     top:"-100%",
//     duration:4,
//     scrub:1,
//     ease:Power1,
// })

}
page1animation()

function page2animation(){

var tl2=gsap.timeline({
    scrollTrigger:{
            trigger: "#page2",
            pin: true,
            scrub: 1,
            start: "top top",
            delay:1
    }
})
tl2.to(".pcircle",{
    stagger:3,
    top:"30vh",
    delay:5,
    duration:5,
    ease:Power1,

})
.to(".pcircle",{
    duration:5,
    ease:Power1,
    delay:5,
    left:"50vw",

})
.to(".pcircle",{
    scale:0.9,
    delay:5,
    duration:5
})
.to(".pcircle",{
    scale:10,
    duration:10,
    delay:1,
    scrub:5,
    ease:Power1,

},"b")
.to(".pcircle",{
    scrub:1,
    delay:1,
    ease:Power1,
    duration:10,
    background: `linear-gradient(to right,#D5A7B4, #B4AAD5)`,
},"b")
.to("#page2>h1",{
    delay:5,
    ease:Power1,
    duration:10,
    left:"-200vw",
},"b")
.to("#page2 #bnav #count #c1",{
    ease:Power1,
    opacity:0,
    y:-50,
    duration:5
    
},"b")
.to("#page2 #bnav #text1 ",{
    ease:Power1,
    duration:5,
    opacity:0
},"b")
.to("#page2 #bnav #text2 ",{
    ease:Power1,
    opacity:1,
    delay:5,
    duration:5
    
},"b")
.to("#page2 #bnav #text2 ",{
    ease:Power1,
    opacity:1,
    delay:5,
    duration:5
    
},"b")

.to("#page2 #bnav #count #c2",{
    ease:Power1,
    opacity:1,
    // y:0,
    // delay:5, 
    duration:5
    
},"b")
.to("#page2 #bnav #count #c2",{
    ease:Power1,
    y:-50,
    opacity:0,
    duration:1

})
.to("#page2 #bnav #count #c3",{
    ease:Power1,
    opacity:1,
    // y:-10,
    // delay:5,
    duration:10
    
})
.to(".lc",{
    stagger:1,
    top:"0vh",
    duration:5,
    delay:5,
    ease:Power1,

})
.to(".sc",{
    stagger:1,
    left:"-40%",
    duration:5,
    delay:5,
    ease:Power1,

})
.to(".ssc",{
    stagger:1,
    left:"-40%",
    duration:5,
    delay:5,
    ease:Power1,

})

}
page2animation()