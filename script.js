function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem");
    console.log(rightElems);

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            console.log(elem.childNodes)
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })


            elem.addEventListener("mousemove", function (dets) {
                console.log(elem.getBoundingClientRect().x)
                console.log(elem.getBoundingClientRect().y)

                gsap.to(elem.childNodes[3], {
                    x: dets.x - elem.getBoundingClientRect().x - 50,
                    y: dets.y - elem.getBoundingClientRect().y - 150
                })
            })
        })


    })
}

page2Animation();

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}


var sections = document.querySelectorAll(".sec-right")


page3VideoAnimation();


function page5VideoAnimation() {
    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}

page5VideoAnimation();


gsap.from(".btm7-parts h4", {
    x: 0,
    duration: 1.2,
    stagger: {
        amount: -0.7,
    },
    scrollTrigger: {
        trigger: ".btm7-parts",
        scroller: "body",
        scrub: 3,
    },

})

