var diviser = $('#diviser');
var multiplier = $('#multiplier');
var aditioner = $('#adition');
var soustraction = $('#soustraction');
var table = $('#table');
var tab = ["X",0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var tab1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var ligne = 2;
var index = 1;


multiplier.click(function (){
	$('#tableau').empty();
table.append('<table id="tableau">');

	$('<tr id="row1">').appendTo("#tableau");

	for (var i = 0; i < tab.length; i++) {
		$('<td>' + tab[i] + '</td>').appendTo("#row1");
	}

	for (var i = 0; i < 10; i++) {
		var tr = 'row'+ ligne;
		$('<tr id='+ tr +'>').appendTo("#tableau");
		$('<td>'+ i + "</td>").appendTo("#"+ tr);
		ligne++;
		for (var j = 0; j < 10; j++) {
			if (j*i>50) {
				$('<td style="background-color: red">'+ j*i + '</td>').appendTo("#"+ tr);
			}else if (j*i>10) {
				$('<td style="background-color: pink">'+ j*i + '</td>').appendTo("#"+ tr);
			}
			else{
			$('<td>'+ j*i + '</td>').appendTo("#"+ tr);
			}
		}
	}
});

diviser.click(function(){
	$('#tableau').empty();
	table.append('<table id="tableau">');
$('<tr id="row1">').appendTo("#tableau");

	for (var i = 0; i < tab.length; i++) {
		$('<td>' + tab[i] + '</td>').appendTo("#row1");
	}

	for (var i = 0; i < 10; i++) {
		var tr = 'row'+ ligne;
		$('<tr id='+ tr +'>').appendTo("#tableau");
		$('<td>'+ i + "</td>").appendTo("#"+ tr);
		ligne++;
		for (var j = 0; j < 10; j++) {
			var res = Math.floor(j/i)
			if (res == Infinity || isNaN(res)) {
				res = '-';
			}
			$('<td>'+ res + '</td>').appendTo("#"+ tr);
		}
	}
});

aditioner.click(function(){
	$('#tableau').empty();
	table.append('<table id="tableau">');
$('<tr id="row1">').appendTo("#tableau");

	for (var i = 0; i < tab.length; i++) {
		$('<td>' + tab[i] + '</td>').appendTo("#row1");
	}

	for (var i = 0; i < 10; i++) {
		var tr = 'row'+ ligne;
		$('<tr id='+ tr +'>').appendTo("#tableau");
		$('<td>'+ i + "</td>").appendTo("#"+ tr);
		ligne++;
		for (var j = 0; j < 10; j++) {
			if ((j+i)>10) {
				$('<td style="background-color: pink">'+ (j+i) + '</td>').appendTo("#"+ tr);
			}else{
			$('<td>'+ (j+i) + '</td>').appendTo("#"+ tr);
			}
		}
	}
});

soustraction.click(function (){
	$('#tableau').empty();
	table.append('<table id="tableau">');
$('<tr id="row1">').appendTo("#tableau");

	for (var i = 0; i < tab.length; i++) {
		$('<td>' + tab[i] + '</td>').appendTo("#row1");
	}

	for (var i = 0; i < 10; i++) {
		var tr = 'row'+ ligne;
		$('<tr id='+ tr +'>').appendTo("#tableau");
		$('<td>'+ i + "</td>").appendTo("#"+ tr);
		ligne++;
		for (var j = 0; j < 10; j++) {
			$('<td>'+ (j-i) + '</td>').appendTo("#"+ tr);
		}
	}
});