
// Check off todos by click
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

// Add todo on enter
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});