const menu = document.querySelector('.sobre');
const miniMenu = document.querySelector('.menu');
menu.onclick = function () {
    miniMenu.classList.toggle('ativo');
}
const bg = document.querySelector('.hbg');
const list = document.querySelector('.a')
bg.onclick = function () {
    list.classList.toggle('ativo');
}
$('.a a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});