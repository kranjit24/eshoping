$(function(){
	// Solving active menu problem using case
	
	switch (menu){
	case 'About Us':
		$('#active_about').addClass("active");
		break;
	case 'Our Contact':
		$('#active_contact').addClass("active");
		break;
	default:
		$('#nav_item').addClass("active");
	break;
	}
	
});