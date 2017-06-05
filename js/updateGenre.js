$(document).ready(function() {


});

function delGener(itemId) {
	$('#'+itemId).remove();
}

/**
 * add Item button click
 */
function addNewGenre(genreId) {

	let genreTemplate = $("#genreTemplate").html();
	var genre = new Genre();
	genre.makeHtml("genreContent", genreTemplate, function() {
		console.log('genre call back!!..');
	});
}