let propsAnim01 = anime({
  targets: '.small_square',
  translateX: 450,
  translateY: -100,
  rotate: [56, 180],
  skew:[9,0],
  backgroundColor: '#b72201',
  borderRadius: [0, '50%'],
  duration : 6700,
  easing: 'linear',
  loop:true
})

let valsAnim01 = anime({
  targets: '.red_rectangle',
  translateX: 460,
  duration: 600,
  rotate: [-39, -30],
  easing: 'spring(5, 90, 10, 2)',
  autoplay: true,
  loop:true
})

let vals = anime({
  targets: '.black_rectangle2',
  translateX: 200,
  translateY: -100,
  rotate: [50, 45],
  duration: 6700,
  easing: 'easeOutElastic',
  autoplay: true,
  loop:true
})
