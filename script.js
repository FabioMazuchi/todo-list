const btnAdd = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const btnApaga = document.querySelector('#apaga-tudo');
const btnFinalizados = document.querySelector('#remover-finalizados');

function alteraFundo() {
  const lis = ol.children;
  const cor = 'rgb(128, 128, 128)';
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].addEventListener('click', function () {
      const selected = this;
      for (let n = 0; n < lis.length; n += 1) {
        if (lis[n] !== selected) {
          lis[n].style.backgroundColor = 'white';
        } else {
          lis[n].style.backgroundColor = cor;
        }
      }
    });
  }
}

function removerFinalizados() {
  const lis = ol.children;
  console.log(lis);
  btnFinalizados.addEventListener('click', function () {
    for (let i = 0; i < lis.length; i += 1) {
      if (lis[i].className === 'completed') {
        lis[i].remove();
      }
    }
  });
}

function apagaTudo() {
  const lis = ol.children;
  btnApaga.addEventListener('click', function () {
    for (let i = 0; i < lis.length; i += 1) {
      lis[i].remove();
    }
  });
}

btnAdd.addEventListener('click', function () {
  const texto = input.value;
  const li = document.createElement('li');
  li.innerHTML = texto;
  ol.appendChild(li);
  input.value = '';
  alteraFundo();
  apagaTudo();
  removerFinalizados();
});

ol.addEventListener('dblclick', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('completed');
  }
});