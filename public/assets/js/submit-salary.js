

$(document).ready(function(){	



	$("button").click(function(){

		var nmecano = $("#nmecano").val();
		var salary = $("#salary").val();

		postedData = {
			"nmecano":nmecano,
			"salary": salary
		 }
		$.ajax({
			type: 'POST',
			url: '.../../api/submit-salary.php',
			data: JSON.stringify(postedData),
			dataType: 'json',
			success: function( data, textStatus, jQxhr )
			{
				console.log(data)
			},
			error: function( jqXhr, textStatus, errorThrown ){
				alert("erro: " + textStatus + " - "+ errorThrown + " - " + jqXhr);
			}

		});

					

	});

});