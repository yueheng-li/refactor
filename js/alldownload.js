$(document).ready(function() {
	
	$('#cfrYes').click(function() {
		self.location = "templateCompleted.html";
	});

	$('#cfrNo').click(function() {
		window.history.go(-1);
	});
});