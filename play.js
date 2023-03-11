var score = 0;

var box = document.querySelector('.box');
box.addEventListener('click', function() {
	score++;
	box.style.top = Math.random() * (window.innerHeight - 100) + 'px';
	box.style.left = Math.random() * (window.innerWidth - 100) + 'px';
});

setInterval(function() {
	alert('時間到！你的分數是：' + score);
	score = 0;
	box.style.top = Math.random() * (window.innerHeight - 100) + 'px';
	box.style.left = Math.random() * (window.innerWidth - 100) + 'px';
}, 10000);
