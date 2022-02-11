var w = window.innerWidth , h = window.innerHeight,
		container = document.getElementById("containers"),
		sizes = ["Small", "Medium", "Large"],
		types = ["round", "star", "real", "sharp", "ring"],
		snowflakes = 50;

for (var i = 0; i < snowflakes; i++) {
		var snowflakeDiv = document.createElement('div');
		var sizeIndex = Math.ceil(Math.random() * 3) -1; //get random number between 0 and 2
		var size = sizes[sizeIndex]; //get random size
		var typeIndex = Math.ceil(Math.random() * 5) -1;
		var type = types[typeIndex];
		TweenMax.set(snowflakeDiv, {attr: {class: type + size}, x: R(0,w), y: R(-200,-150) });
		container.appendChild(snowflakeDiv);
		snowing(snowflakeDiv);
}
        
function snowing(element) {
	 TweenMax.to(element, R(5,12), {y: h+100, ease: Linear.easeNone, repeat:-1, delay: -15});
	 TweenMax.to(element, R(4,8), {x: '+=100', repeat: -1, yoyo: true, ease: Sine.easeInOut});
	 TweenMax.to(element, R(2,8), {rotation: R(0,360), repeat: -1, yoyo: true, ease:Sine.easeInOut, delay: -5});
};

function R(min,max) {
	return min + Math.random() * (max-min)
};

TweenMax.set($('.box-center'),{opacity:0 });
TweenMax.staggerTo($('.box-center'),5,{opacity:1},0.1);

$('.box-card').click(function(){
TweenMax.staggerTo($('.box-card'),1,{y:-700},0.1);
});

$(".box").on("mouseenter", function() {
    var duration = 1;
    TweenMax.to(this, duration / 4, {y:-50, ease:Power2.easeOut});
    TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});
  });
  
  var bounce_obj = $(".bounce");
  var duration = 1;
  var tl = new TimelineMax({repeat:-1, repeatDelay:1});
  
  tl.set(bounce_obj, {y: 0})
  .to(bounce_obj, duration / 4, {y:+20, ease:Power2.easeOut}, "bounceme")
  .to(bounce_obj, duration / 2, { y:0, ease:Bounce.easeOut, delay:duration / 4 }, "bounceme");