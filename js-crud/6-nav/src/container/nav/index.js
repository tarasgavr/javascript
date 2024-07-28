class Nav{
  static #HOME_PAGE="http://localhost:3000/nav"
  static #back = () => {
    return history.back()
  }
  static #next = () => {
    return history.forward()
  }
  static #go = () => {
    if (window.input.value) {
      try {
        const url = new URL(window.input.value);
        this.#changePage(url.href);
      } catch (e) {
        alert('Введіть коректну адресу');
        console.log(e);
      }
    } else {
      alert('Введіть URL-адресу');
    }
  }
  static #changePage = (href) => {
    return location.assign(href)
  }
  static #reload = () => {
    return location.reload()
  }
  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }
  static init = () => {
    window.back.onclick = this.#back
    window.next.onclick = this.#next
    window.home.onclick = this.#home
    window.reload.onclick = this.#reload
    window.go.onclick = this.#go
  }
}
Nav.init()