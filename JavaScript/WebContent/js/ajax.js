

$.ajax({
           type: 'GET',
           url: 'https://api.punkapi.com/v2/beers/random',
           timeout: 3000,
           success: function(data){
             for(i=0; i<data.length; i++){
            	 let biere=data[i];
            	 $("#content").append("<li class='list-group-item'>"+biere.name+"</li>");
             }
           },
           error: function(){
             $('#zone').html('Cette requête AJAX n\'a pas abouti');
           }
         });