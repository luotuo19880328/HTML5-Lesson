// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function() {
	var $dictionary = $('#dictionary');
	$('#letter-a a').click(function(e) {
		e.preventDefault();
		$dictionary.load("a.html");
	});
	//b.json
	$('#letter-b a').click(function(e) {
		e.preventDefault();
		$.getJSON('b.json', function(data) {
			var html = '';
			$.each(data, function(i, item) {
				html += '<div class="entry">';
				html += '<h3 class="term">' + item.term + '</h3>';
				html += '<div class="part">' + item.part + '</div>';
				html += '<div class="definition">' + item.definition;
				if(item.quote) {
					html += '<div class="quote">';
					$.each(item.quote, function(i, line) {
						html += '<div class="quote-line">' + line + '</div>';
					});
					html += '<div class="quote-author">' + item.author + '</div>';
					html += '</div>';
				}
				html += '</div>';
				html += '</div>';
			});
			$dictionary.html(html);
		});
	});
	//c.js
	$('#letter-c a').click(function (e) {
		e.preventDefault();
		$.getScript('c.js');
	})
});