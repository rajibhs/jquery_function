$(document).ready(function (){
	// animate function
	$("#animate_btn").click(function (){
		$(".animation").animate({
			right:'500px',
			width:'500px',
			height:'43px'
		});
	});
	// Stop function
	$("#slide_btn").click(function (){
		$(".slide_p").slideToggle(5000);
	});
	$("#stop_btn").click(function (){
		$(".slide_p").stop()
	});

	// Callback function
	$("#hide_btn").click(function (){
		$(".hide_p").hide("slow",function(){
			alert("The paragraph is now hidden");
		});
	});

	// Change function
	$("#cng_btn").click(function (){
		$(".cng_p").css("color","red",).slideUp(2000).slideDown(2000)
	});

	// Get Html function
	$("#know_btn").click(function (){
		alert("Message:" + $(".know_p").text());
	});
	$("#know_html_btn").click(function (){
		alert("Message:" + $(".know_p").html());
	});


	// Set  function
	$("#set_text_btn").click(function (){
		$(".set_text").text("Hello I Am Rajib Full Stack Web Developer");
	});
	$("#set_html_btn").click(function (){
		$(".set_html").html("<b><i>Rajib Full Stack Web Developer<i/></b>");
	});
	$("#set_value_btn").click(function (){
		$("#input").val(" I Am Rajib Hossain");
	});

	// Append and Prepend  function
	$("#append_btn").click(function (){
		$("#appent_c").append("<li>Append Item</li>");
	});
	$("#prepend_btn").click(function (){
		$("#appent_c").prepend("<li>Prepend Item</li>");
	});
	// remove and empty

	$("#remove_btn").click(function (){
		$("#remove_em").remove();
	});

	$("#emty_btn").click(function (){
		$("#remove_em").empty();
	});

	// Add clss Remove Class

	$("#add_btn").click(function (){
		$(".add_item").addClass("middle");
	});
	$("#rm_btn").click(function (){
		$(".add_item").toggleClass("middle");
	});


});