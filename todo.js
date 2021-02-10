// Check Off Specific Todos By CLicking
// $("li").click(function(){
// 	$(this).css({
// 		color: "gray",
// 		textDecoration:"line-through"
// 	});\
// 	on is used for future respect

	$("ul").on("click", "li" , function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(evnt){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	evnt.stopPropagation();

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li> <span><i class='fa fa-trash' ></i> </span>"+ todoText+"</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
	
})