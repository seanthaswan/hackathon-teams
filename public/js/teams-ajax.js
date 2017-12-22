$('.delete-link').click(function(e){
	e.preventDefault();
	console.log("Click event was reached");
	
	$.ajax({
		url: $(this).attr('href'),
		method: 'DELETE'
	}).done(function(data){
		window.location.href = '/teams';
	});
});


$('.edit-form').submit(function(e){
	e.preventDefault();
	console.log('edit form ajax function');

	$.ajax({
		method: 'PUT',
		url: $(this).attr('action'),
		data: {
			name: $('#new-name').val(),
			members: $('#members').val()
		}
	}).done(function(data){
		window.location.href = '/teams';
	})
});
