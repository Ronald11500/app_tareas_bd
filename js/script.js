//base de datos simulada
// esta variable simula una respuesta de tipo json desde el servidor
let Tasks = [];

//funcion para renderizar tareas existentes en mi respuesta de api
const renderTasks = () => {
  const containerTasks = document.querySelector("#tasks");
  containerTasks.innerHTML = "";
  Tasks.forEach((el) => {
    const div = document.createElement("div");
    div.className = "task" + (el.done ? " done" : "");
    div.innerHTML = `
        <span>${el.text}</span>
        <div>
        <button onclick="toggleDone(${el.id})">✅</button>
        <button onclick="editTask(${el.id})">✏️</button>
        <button onclick="deleteTask(${el.id})">🗑️</button>
        </div>`;
    containerTasks.appendChild(div);
  });
};

//creando funcion para agregar una tarea
const addTasks = (text) => {
  const input = document.querySelector("#taskInput");
  //validacion para evitar espacios
  const cleanText = input.value.trim();
  //validacion para evitar tareas vacías
  if (cleanText == "")
    return Swal.fire({
      title: "Error",
      text: "El campo no puede estar vacío",
      icon: "error",
    });
  //crear nuestro objeto
  const newTask = {
    id: Date.now(), //simular id de base de datos
    text: cleanText,
    done: false,
  };
  //agregar a mi base de datos (variable de tipo Tasks)
  //Tasks.push(newTask); //usando métodos
  Tasks = [...Tasks, newTask]; //usando ES6 destructuring
  //limpiar input
  input.value = "";
  //render
  renderTasks();
  Swal.fire({
    title: "Tarea agregada",
    icon: "success",
    draggable: true,
  });
  console.log(Tasks);
};

//marcar tareas como completado
const toggleDone = (id) => {
  Tasks = Tasks.map((el) => (el.id === id ? { ...el, done: !el.done } : el));
  renderTasks();
};
// editar una tarea
const editTask = (id) => {
  const task = Tasks.find((t) => t.id === id);
  const newText = prompt("Editar la trea", task.text);
  //validacion
  if (newText === null)
    return Swal.fire({
      title: "Error",
      text: "El campo no puede estar vacío",
      icon: "error",
    });
  if (newText.trim() === "")
    return Swal.fire({
      title: "Error",
      text: "El campo esta vacío intente nuevamente",
      icon: "error",
    });

  //recorrer las tareas una ves encontrado la tarea con el id indicado setearel nuevo texto
  Tasks = Tasks.map((el) => (el.id === id ? { ...el, text: newText } : el));
  renderTasks();
};

//Eliminar tarea
const deleteTask = (id) => {
  Tasks = Tasks.filter((t) => t.id !== id);
  renderTasks();
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
};
