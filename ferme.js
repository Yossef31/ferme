animaux=[];
function addAnimal (name,country) {
    animal = {
        'name_input': name,
        'country_input':country
    }
    animaux.push(animal);
    console.log(animaux);
}


$(".ajout_animal").on('click', function() {
	var name= $(".name_input").val();
	var country= $(".country_input").val();
	addAnimal(name,country)
}); 