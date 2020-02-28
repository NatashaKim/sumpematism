let small = anime({
  targets: '.small_square',
  translateX: -400,
  translateY: -400,
  rotate: [-34, 180],
  skew:[9,0],
  backgroundColor: '#b72201',
  borderRadius: [0, '50%'],
  duration : 6700,
  easing: 'linear',
  loop:true,
  direction: 'alternate'
})

let trap = anime({
  targets: '.black_rectangle3',
  translateX: -30,
  translateY: -70,
  duration: 1500,
  rotate: [144, 150],
  easing: 'easeInOutQuad',
  autoplay: true,
  loop: true,
  direction: 'alternate'
})

let red = anime({
  targets: '.red_rectangle',
  translateX: -30,
  translateY: -40,
  duration: 600,
  rotate: [-129, -128],
  easing: 'spring(1, 20, 2, 1)',
  autoplay: true,
  loop: true,
  direction: 'alternate'
})

let rect  = anime.timeline({
  easing: 'easeOutExpo',
  direction: 'alternate',
  duration: 1700
});

rect
.add({
  targets: '.red_line3',
  delay: 1100,
  rotate: [-24, 165],
  duration: 2200,
  autoplay: true,
  loop: true,
})
.add({
  targets: '.red_line4',
  rotate: [-17, 186],
  autoplay: true
})

let black = anime({
  targets: '.red_line',

  scale: {
    value: 1.6,
    easing: "easeInOutQuad",
    duration: 1000
  },

  rotate: {
    value: 360,
    duration: 2000,
    easing: "easeInOutSine"
  },

  direction: "alternate",
   loop: true
})

let brown = anime({
  targets: '.big_square',
  scale: 1.1,
  autoplay: true,
  loop:true,
  duration: 1000,
  direction: 'alternate',
  rotate: [56, 60],
  skew: [3, 4],
})

var tl = anime.timeline({
  targets: '.el',
  delay: function(el, i) { return i * 200 },
  duration: 500,
  easing: 'easeOutExpo',
  direction: 'alternate',
  loop: true
});

tl
.add({
  translateX: 250,
  easing: 'spring',
})
.add({
  opacity: .5,
  scale: 2
})
.add({
  targets: '.el .red_line4',
  rotate: 180
})
.add({
  translateX: 0,
  scale: 1
});


// rectangleGreen

// .add({
//   targets: '.rectangle__big__green',
//   rotate: [-360,-340]
// })
// .add({
//   targets: '.rectangle__big__green',
//   delay: 4400,
//   backgroundColor: '#1b4793'
// })
// .add({
//   targets: '.rectangle__big__green',
//   scale: 1.5,
//   delay: 2800,
// })
// .add({
//   targets: '.rectangle__big__green',
//   scale: 1,
//   delay: 1000,
// })
// .add({
//   targets: '.rectangle__big__green',
//   delay: 2000,
//   backgroundColor: '#064426'
// })
// .add({
//   targets: '.rectangle__big__green',
//   scale: 1.5,
//   delay: 1000,
// })
// .add({
//   targets: '.rectangle__big__green',
//   scale: 1,
//   delay: 1000,
// })


let controller = new ScrollMagic.Controller()

let box1 = document.querySelector('#box-1')
let box1Animation = anime({
  targets: box1,
  rotate: [-123, -123],
  scale: 1.6,
  easing: "easeInOutQuad",
  duration: 1500,
  autoplay: false
})


new ScrollMagic.Scene({
  triggerElement: box1
})
.addTo(controller)
.on('enter', () => box1Animation.play())


// EXAMPLE 2

let box2 = document.querySelector('#box-2')
let box2Animation = anime({
  targets: box2,
  translateX: '-50vw',
  rotate: [-39, 360],
  easing: 'linear',
  autoplay: false
})
let section3 = document.querySelector('#section-3')
new ScrollMagic.Scene({
  triggerElement: section3,
  duration: section3.getBoundingClientRect().height
})
.addTo(controller)
.setPin(box2)
.on('progress', e => {
  box2Animation.seek(box2Animation.duration * e.progress)
})
