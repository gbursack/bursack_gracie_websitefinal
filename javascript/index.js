gsap.registerPlugin(ScrollTrigger);

gsap.from('.card', { 
    y: 400,
    opacity: 0, 
    duration: 5,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".container-flex",
        start: "top 80%",
        markers: false,
        scrub: true,
    }
});

gsap.from('#image', {
    xPercent: -100,
    duration: 5,
    ease: "power4.out",
})

gsap.from('#text', {
    xPercent: 100,
    duration: 5,
    ease: "power4.out",
    scollTrigger: {
        trigger: ".col-6",
        start: "top 80%",
        markers: true,
    }
});

gsap.from('.scale--anim', {
    scale: 100,
    duration: 10,

})