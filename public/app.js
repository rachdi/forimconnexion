"use strict";
(function(){
	var app = {
		serveururl:"http://localhost:1991",


		init:function(){
			app.recuform();
		},
		
		
		recuform:function(response){
			var data=$.ajax({
				url:'/yes.json',
				method:'GET',
			}).done(function(response){
				
				var form =response.form;

				for (var i=0; i<form.length; i++){

					$("#form").append("<tr id="+i+"></tr>");

					for(var parcourListes in form[i]){

						$("#"+i).append("<td>"+form[i][parcourListes]+"</td>");

					}
				}


			});
		},



	};

	app.init();
})();