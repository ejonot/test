/**
 * 
 */

let taches=[];
if(localStorage && localStorage.getItem("taches")){
	taches=JSON.parse(localStorage.getItem("taches"));
}
afficherTableau();


$("#message").hide();
$("#viderTaches").click(deleteAll);
$("#listeTache").on("click", ".delete", deleteTache);
$("#listeTache").on('mouseenter', '.list-group-item', function(){ $(this).addClass("survol");});
$("#listeTache").on("mouseleave", ".list-group-item", function(){$(this).removeClass("survol");});

$('#ajoutTache').click(function(){
	let newTache=$("#newTache").val();
	addTache(newTache);
	$("#newTache").val('');
});

function addTache(tache)
 {
	//idTache="tache"+(i++);
	if(tache.length==0) {
		
		message=$("#message").slideDown(400).delay(1200).slideUp(400);
	
		return;
	}
	taches.push(tache);
	//console.log(taches);
	afficherTableau()
	//$("#listeTache").append("<li class='list-group-item'>"+tache+" <button style='float:right' class='delete' data-target='"+i+"'>X</button></li>")
 }



/*function deleteTache(tache){
	idTache="#"+tache;
	$(idTache).remove();
}*/


function deleteTache(e){
	taches.splice($(this).data('target'), 1);
	afficherTableau();
	//this.parentElement.remove();
}

function deleteAll(){
	//afficherTableau();
	//$("#listeTache > .list-group-item").each(function(){$(this).remove();});
	taches=[];
	afficherTableau();
}

function afficherTableau(){
	$("#listeTache").empty();
	for(let i=0; i<taches.length; i++){
		$("#listeTache").append("<li class='list-group-item'>"+taches[i]+" <button style='float:right' class='delete' data-target='"+i+"'>X</button></li>");	
	}
	localStorage.setItem("taches", JSON.stringify(taches));
}

