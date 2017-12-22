$('.delete-link').click(function(e){
	e.preventDefault();
	console.log("hi");
	$.ajax({
		url: $(this).attr('href'),
		method: 'DELETE'
	}).success(function(data){
		window.location.href = '/teams';
	});
});

