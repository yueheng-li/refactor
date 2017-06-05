$(document).ready( function () {
    var table = $('#resultstable').DataTable( {
        "ajax": "data.txt",
        "columns": [
            { "data": "GenreID"},
            { "data": "LV0"},
            { "data": "LV1"},
            { "data": "LV2"},
			{ "data": "LV3"},
            { "data": "LV4"},
			{ "data": "LV5"},
			{ "data": "TEMPLATEID"},
			{ "data": "TEMPLATENAME"},
            { "data": "STATUS"},
            { "data": "STARTDAY"},
            { "data": "ENDDAY"}
        ],
        "columnDefs": [{
            "targets": 8,
            "data": "TEMPLATENAME",
            "render": function(data, type, row) {
                return "<a href='templateDetail.html?pageid=detail'>"+ data +"</a>";
            }
        }],
		"info": false,
        "autoWidth": true,
        "lengthChange": false,
		"order": [[0, 'asc']],
		"scrollY": 300,
        "scrollX": true,
		"searching": false,
		"select": true,
		"scrollCollapse": false
    } );
 
} );