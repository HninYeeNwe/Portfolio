$(document).ready(function() {
	$win = $(window);
	$header = $('#header');
	$toggle_btn = $('.toggle-button');

	toggle_onclick($win,$header);

	$win.resize(function() {
		toggle_onclick($win,$header);
	});

	$toggle_btn.click(function() {
		$header.toggleClass('toggle-left');
	})
})

function toggle_onclick($win,$header) {
	if ($win.width() < 768) {
		$header.css({left:"-200px"});
		// $header.css({left:'-'+width+'px'});
	// }else {
	// 	$header.css({left:"0px"});
	}
}

var typed = new Typed('#typed',{
	strings:[
		'Web Developer',
		'Freelancer'
		],
		typeSpeed:50,
		backSpeed:50,
		loop:true
	});
var typed = new Typed('#typed2',{
	strings:[
		'Web Developer',
		'Freelancer'
		],
		typeSpeed:50,
		backSpeed:50,
		loop:true
	});