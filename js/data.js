/*
  **Milestone 1**
  Partendo dalla struttura dati fornita, visualizzare in pagina un box 
  per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

  **Milestone 2**
  Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà 
  per visualizzare le icone del colore corrispondente.

  **Milestone 3**
  Aggiungere alla pagina una select in cui le options corrispondono 
  ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente 
  seleziona un tipo dalla select, visualizzare solamente le icone 
  corrispondenti.

  **BONUS**
  1- modificare la struttura dati fornita e valorizzare la proprietà 
  “color” in modo dinamico: generare in modo casuale un codice colore, 
  sapendo che la notazione esadecimale è formata dal simbolo “#” 
  seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
  2- popolare le options della select della milestone 3 dinamicamente.
*/


const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];



const content = document.querySelector('.content');
content.innerHTML = '';
generateSelect()


const iconTemplate = (icon) => {

	const {name, prefix, type, family, color} = icon;


	return `<div class="col">
            <div class="box">
              <i class="${family} ${prefix}${name} " style = "color: ${randomColor()}"></i>
              <span>${name}</span>
            </div>
          </div>`
}


// Al cambio di opzione della select scateno la funzione
document.getElementById('type').addEventListener('change', function() {
  console.log('Value option html: ', this.value);

	const  h2 = document.querySelector('h2');

	h2.innerHTML = '';
	content.innerHTML = '';

	if (this.value == 0) {

		icons.forEach(icon => {
			content.innerHTML += iconTemplate(icon);
		});

	}	else if(this.value == 1) {

		const animalIcons = icons.filter(icon => (icon.type == 'animal'))
		console.log(animalIcons);
		animalIcons.forEach(icon => {
			content.innerHTML += iconTemplate(icon);
		});

	} else if(this.value == 2) {

		const vegetableIcons = icons.filter(icon => (icon.type == 'vegetable'))
		console.log(vegetableIcons);
		vegetableIcons.forEach(icon => {
			content.innerHTML += iconTemplate(icon);
		});

	} else if(this.value == 3) {

		const userIcons = icons.filter(icon => (icon.type == 'user'))
		console.log(userIcons);
		userIcons.forEach(icon => {
			content.innerHTML += iconTemplate(icon);
		});
		
	}

  // il valore ottenuto lo uso come filtro per filtrare tutto l'array.
  // ottengo quindi un nuovo array filtrato.
  // svuoto il container
  // stampo il nuovo array filtrato
})


// Bonus 1
// Funzione genera colore random per icone
const randomColor = () => {
	return '#' + Math.floor(Math.random()*16777215).toString(16).toUpperCase();
}
console.log('Colore random: ', randomColor());


// Bonus 2
// Funzione che genera la label e la select
function generateSelect() {

	const selectHeaderBottom = document.querySelector('.content-header-bottom');

	const label = document.createElement('label');
	label.setAttribute('for', 'type');
	const labelText = document.createTextNode("Filtra per tipo:");
	selectHeaderBottom.append(labelText);
	// Style non funziona
	// label.style.color = 'white';
	console.log(label, labelText);

  const select = document.createElement("SELECT");
  select.setAttribute("id", "type");
  selectHeaderBottom.append(select);
	select.classList.add('form-select', 'my-3')

  const option0 = document.createElement("option");
  option0.setAttribute("value", "0");
  const optionAll = document.createTextNode("All");
  option0.append(optionAll);

	const option1 = document.createElement("option");
  option1.setAttribute("value", "1");
  const optionAnimals = document.createTextNode("Animals");
  option1.append(optionAnimals);

	const option2 = document.createElement("option");
  option2.setAttribute("value", "2");
  const optionVegetables = document.createTextNode("Vegetables");
  option2.append(optionVegetables);

	const option3 = document.createElement("option");
  option3.setAttribute("value", "3");
  const optionUser = document.createTextNode("User");
  option3.append(optionUser);

  document.getElementById("type").append(option0, option1, option2, option3);
}