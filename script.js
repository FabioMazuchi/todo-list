const btnAdd = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const olList = document.querySelector('#lista-tarefas');
const btnApagaTudo = document.querySelector('#apaga-tudo');
const btnRemFin = document.querySelector('#remover-finalizados');
const btnSalvar = document.querySelector('#salvar-tarefas');
const btnRemoverSel = document.querySelector('#remover-selecionado');

const removerSelecionados = () => {
  const lis = olList.children;
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].classList.contains('cinza')) {
      lis[i].remove();
    }
  }
};

const salvar = () => {
  localStorage.setItem('items', olList.innerHTML);
  alert('Lista salva com suceso!');
};

const removerFinalizados = () => {
  btnRemFin.addEventListener('click', () => {
    const lis = olList.children;
    for (let i = 0; i < lis.length; i += 1) {
      if (lis[i].classList.contains('completed')) {
        lis[i].remove();
      }
    }
  });
};

const apagaTudo = () => {
  olList.innerHTML = '';
};

const addCompleted = ({ target }) => {
  target.classList.toggle('completed');
};

const selecItem = ({ target }) => {
  olList.childNodes.forEach((li) => {
    if (li === target) {
      target.classList.add('cinza');
    } else {
      li.classList.remove('cinza');
    }
  });
};

const adicionarEventos = (li) => {
  li.addEventListener('click', selecItem);
  li.addEventListener('dblclick', addCompleted);
};

const recuperar = () => {
  olList.innerHTML = localStorage.getItem('items');
  olList.childNodes.forEach(adicionarEventos);
};

const addTarefas = () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  adicionarEventos(li);
  olList.appendChild(li);
  input.value = '';
  removerFinalizados();
};

btnAdd.addEventListener('click', addTarefas);
btnApagaTudo.addEventListener('click', apagaTudo);
btnSalvar.addEventListener('click', salvar);
btnRemoverSel.addEventListener('click', removerSelecionados);

window.onload = recuperar;
