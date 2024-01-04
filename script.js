/*gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
}) 

gsap.from("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
}) 
var t1=gsap.timeline()

t1.to("#box1",{
    x:600,
    rotate:360,
    scale:0.6,
    duration:2,
    delay:1
})
t1.to("#box2",{
    x:600,
    rotate:360,
    scale:0.6,
    duration:2,
    delay:1
})
t1.to("#box3",{
    x:600,
    rotate:360,
    scale:0.6,
    duration:2,
    delay:1
}) */
var t=gsap.timeline();
t.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:1,
})
t.from("#main h1",{
     x:-500,
     opacity:0,
     duration:0.8,
     stagger:0.4
})
t.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})