let btnAdd = document.querySelector('#criar-tarefa');
let ol = document.querySelector('#lista-tarefas')
let input = document.querySelector('#texto-tarefa')

function adicionaTarefa() {
	btnAdd.addEventListener('click', function () {
		let texto = input.value;
		let li = document.createElement('li');
		li.innerHTML = texto;
		ol.prepend(li);
		input.value = '';
		alteraFundo();
	});
}

adicionaTarefa();

function alteraFundo() {
	let lis = ol.children;
	let cor = 'rgb(128, 128, 128)';
	for (let l of lis) {
		l.addEventListener('click', function (e) {
			let selected = this;
			for (let i = 0; i < lis.length; i++) {
				if (lis[i] !== selected) {
					lis[i].style.backgroundColor = 'white';
				} else {
					lis[i].style.backgroundColor = cor;
				}
			}
		});
	}
}


alteraFundo();


