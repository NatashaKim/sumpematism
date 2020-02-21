let small = anime({
  targets: '.small_square',
  translateX: 450,
  translateY: -100,
  rotate: [56, 180],
  skew:[9,0],
  backgroundColor: '#b72201',
  borderRadius: [0, '50%'],
  duration : 6700,
  easing: 'linear',
  loop:true,
  direction: 'alternate'
})

let red = anime({
  targets: '.red_rectangle',
  translateX: 460,
  duration: 600,
  rotate: [-39, -30],
  easing: 'spring(2, 30, 4, 1)',
  autoplay: true,
  loop:true,
  direction: 'alternate'
})

let black = anime({
  targets: '.black_rectangle2',
  translateX: 200,
  translateY: -100,
  rotate: [50, 45],
  duration: 6700,
  easing: 'easeOutElastic',
  autoplay: true,
  loop:true,
  direction: 'alternate'
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
