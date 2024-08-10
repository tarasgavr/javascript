export default class Todo {
  static #template = null
  static init = () => {
    this.#template = document.getElementById("task").content.firstElementChild
    console.log(this.#template);
    
  }
}