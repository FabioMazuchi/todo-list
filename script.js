let btnAdd = document.querySelector('#criar-tarefa');
let ol = document.querySelector('#lista-tarefas')
let input = document.querySelector('#texto-tarefa')

btnAdd.addEventListener('click', function () {
	let texto = input.value;
	let li = document.createElement('li');
	li.innerHTML = texto;
	ol.appendChild(li);
	input.value = '';
	console.log(texto);
});
