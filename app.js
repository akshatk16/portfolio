
const words = [
                
                "Akshat Kumar Agarwal.",
                "A Coder.",
                "A Designer.",
                "A Developer.",
                "A Student."
              ]

let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: -1}).pause()
let boxTl = gsap.timeline()

boxTl.from('.hi', {duration:2, y:"17vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"0.7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
  .to('.box', {duration:2, autoAlpha:0.5, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 1.2, text: word})
  masterTl.add(tl)
})