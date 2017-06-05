$(document).ready(function() {
	var rt = request.QueryString("pageid");
	console.log(rt);
	if (rt == 'detail') {
		$("#createOrupdate").hide();
		$("#detele").hide();
		$("#download").hide();

	} else if (rt == 'delete') {
		$("#detail").hide();
		$("#createOrupdate").hide();
		$("#download").hide();
	} else if (rt == 'download') {
		$("#detail").hide();
		$("#detele").hide();
		$("#createOrupdate").hide();
	} else if (rt == 'createOrupdate') {
		$("#detail").hide();
		$("#detele").hide();
		$("#download").hide();

	}



	$('#delete').click(function() {
		self.location = "templateDetail.html?pageid=delete";
	});

	$('#update').click(function() {
		self.location = "templateDetail.html?pageid=createOrupdate";
	});

	$('#cfrYes').click(function() {
		self.location = "templateCompleted.html";
	});

	$('#cfrNo').click(function() {
		window.history.go(-1);
	});

	$('#UcfrYes').click(function() {
		self.location = "templateCompleted.html";
	});

	$('#UcfrNo').click(function() {
		window.history.go(-1);
	});

	$('#DcfrYes').click(function() {
		self.location = "templateCompleted.html";
	});

	$('#DcfrNo').click(function() {
		window.history.go(-1);
	});
});