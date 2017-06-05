$(document).ready(function() {

	$("#dialog").dialog({
		autoOpen: false,
		modal: true
	});

	// default dispaly(item area)
	itemAreaHide('template1Item1');

	$("#create").click(function(e) {
		self.location = "templateDetail.html?pageid=createOrupdate";
	});

	$("#createTemplate").click(function(e) {
		self.location = "templateCreate.html";
	});

});


/**
 * radio button change
 */
function changeOnRadio(itemArea, value) {
	var fadeSeconds = 1000;
	//var value = $('input[name=' + itemArea + 'fieldRadio]:checked', '#createForm').val();
	if (value == '1' || value == '2' || value == '3') {
		$('#' + itemArea + 'radioShow1').fadeIn(fadeSeconds);
		$('#' + itemArea + 'radioShow2').fadeOut(fadeSeconds);
		$('#' + itemArea + 'radioShow3').fadeOut(fadeSeconds);
	} else if (value == '4' || value == '5') {
		$('#' + itemArea + 'radioShow1').fadeOut(fadeSeconds);
		$('#' + itemArea + 'radioShow2').show(fadeSeconds);
		$('#' + itemArea + 'radioShow3').fadeOut(fadeSeconds);
	} else {
		$('#' + itemArea + 'radioShow1').fadeOut(fadeSeconds);
		$('#' + itemArea + 'radioShow2').fadeOut(fadeSeconds);
		$('#' + itemArea + 'radioShow3').fadeIn(fadeSeconds);
	}
}

/**
 * add Template button click
 */
function addNewTemplate() {

	var templateHtml = $("#template").html();
	var template = new Template();
	template.makeHtml("templateContent", templateHtml, function(templateName) {
		console.log('template call back!!..');

		// jquery日付の呼び出す初期化
		$(".datepicker").datepicker();

		// 連動呼び出す
		itemAreaHide(templateName + 'item');
	});
}

/**
 * add Item button click
 */
function addItem(countId, content, itemName) {

	var itemHtml = $("#itemTemplate").html();
	var itemCount = $("#" + countId).val();
	var item = new Item();
	item.makeHtml(content, itemHtml, function(name) {
		console.log('template call back!!..');

		// jquery日付の呼び出す初期化
		$(".datepicker").datepicker();

		// 連動呼び出す
		itemAreaHide(name);
	}, itemCount, itemName);
	$("#" + countId).val(parseInt(itemCount) + 1);
}

/**
 * add Item button click
 */
function addValue(countId, content, name) {
	var valueCount = $("#" + countId).val();
	var valueHtml = $("#valueTemplate").html();
	var value = new Value();
	value.makeHtml(content, valueHtml, function(name) {}, valueCount, name);

	$("#" + countId).val(parseInt(valueCount) + 1);

}

/**
 * delete Item button click
 */
function deleteItem(id) {

	//該当値行を削除する
	$('#' + id).remove();
}

/**
 * delete Template button click
 */
function delTemplate(id) {

	//該当値行を削除する
	$('#' + id).remove();
}

/**
 * delete Template button click
 */
function delValue(id) {

	//該当値行を削除する
	$(id).parent().parent().remove();
}


/**
 * itemのアリア表示連動
 */
function itemAreaHide(area) {
	// default
	$('#' + area + 'radioShow1').show();
	$('#' + area + 'radioShow2').hide();
	$('#' + area + 'radioShow3').hide();
}