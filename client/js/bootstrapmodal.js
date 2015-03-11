$(document).ready(function() { 
	$('#fullCalModal').on('shown.bs.modal', function() {
		$('#bootstrapModalFullCalendar').fullCalendar('render');
	});
});
