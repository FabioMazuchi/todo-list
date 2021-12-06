const btnAdd = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const olList = document.querySelector('#lista-tarefas');

const selecItem = ({ target }) => {
  olList.childNodes.forEach((li) => {
    if (li === target) {
      target.classList.add('cinza');
    } else {
      li.classList.remove('cinza');
    }
  });
};

const addTarefas = () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  li.addEventListener('click', selecItem);
  olList.appendChild(li);
  input.value = '';
};

btnAdd.addEventListener('click', addTarefas);
