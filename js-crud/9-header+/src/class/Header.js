export default class Header {
  static #block = null
  static #button = null
  static #count = 0
  static #input = null
  static #list = []
  static #template = null
  static init = () => {
    this.#block = document.querySelector(".menu__block");
    this.#button = document.querySelector{".menu__button"};
    this.#button.onclick = console.log(this.#button);
    
  }
  static #toggleDone = (id) => {
    let item;
    this.#list.forEach(elem => {
      if (elem.id === id) item=elem;
    });
    if (item) {
      item.done = !item.done;
      return item.done;
    } else {
      return null;
    }
  }
  static #handleCancel = (data) => () => {
    if (confirm("Дійсно видалити?")) {
      const rss = this.#deleteById(data.id);
      if (rss) {
        this.#count--;
        this.#render();
        this.#saveData();
      }
    }
  }
  static #deleteById = (id) => {
    this.#list = this.#list.filter((item) => item.id !== id);
    return true;
  }
}