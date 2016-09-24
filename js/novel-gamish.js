$("#novel-gamish").click(function () {
	if ($("#novel-gamish p.active").is("#novel-gamish :last-child")) {
		return;
	}
	if ($("#novel-gamish p.active").length == 0) {
		$("#novel-gamish p:first").addClass('active');
	}else{
		$("#novel-gamish p.active").removeClass('active').next().addClass('active');
	}
});