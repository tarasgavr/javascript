export default class Todo {
  static #block = null
  static #button = null
  static #count = 0
  static #input = null
  static #list = []
  static #template = null
  static init = () => {
    this.#template = document.getElementById("task").content.firstElementChild
    this.#block = document.getElementById("task__list")
    this.#button = document.getElementById("button")
    this.#input = document.getElementById("input")
    this.#button.onclick =  this.#handleData
    this.#render();
  }
  static #createTaskData = (text) => {
    this.#list.push({
      id: ++this.#count,
      text,
      done: false,
    })
  }
  static #handleData = () => {
    let value = this.#input.value;
    if (value.length > 1) {
      this.#createTaskData(value);
      value = "";
      this.#render();
    }
  }
  static #render = () => {
    this.#block.innerHTML = "";
    if (this.#list.length === 0) {
      this.#block.innerText = "Немає задач"
    } else {
      this.#list.forEach((text) => {
        const task = this.#createTaskEl(text);
        this.#block.append(task);
      });
    }
  }
  static #createTaskEl = (data) => {
    const task = this.#template.cloneNode(true);
    const task2 = this.#template.children;
    const [ id, text ] = task.children;
    id.innerText = `${data.id}.`;
    text.innerText = data.text;
    console.log(task2);
    
    // btnCancel.onclick = this.#handleCancel(data)
    return task;
  }
  static #handleCancel = (data) => () => {
    const rss = this.#deleteById(data.id);
     if (rss) this.#render()
  }
  static #deleteById = (id) => {
    this.#list = this.#list.filter((item) => item.id !== id)
    return true
  }
}