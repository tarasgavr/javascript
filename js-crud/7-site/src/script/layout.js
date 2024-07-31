export const createElement = (tag, className, content ) => {
  const elem = document.createElement(tag);
  if (className) {
    elem.className = className;
  }
  if (content) {
    elem.innerText = content;
  }
  return elem;
}
export const createHeader = (htime,hsignal,hwifi,hpower) => {
  const headerTag = createElement('header');
  const time = createElement('div','time',htime);
  headerTag.appendChild(time);
  const container = createElement('div');
  headerTag.appendChild(container);
  const signal = document.createElement('img');
  signal.setAttribute('src',hsignal);
  container.appendChild(signal);
  const wifi = document.createElement('img');
  wifi.setAttribute('src',hwifi);
  container.appendChild(wifi);
  const power = document.createElement('img');
  power.setAttribute('src',hpower);
  container.appendChild(power);
  return headerTag;
}
export const createMain = (marrow,mlogo,mtitle) => {
  const mainTag = createElement('main');
  const panel = createElement('div','panel');
  mainTag.appendChild(panel);
  const arrow = createElement('img');
  arrow.setAttribute('src',marrow);
  arrow.setAttribute('width',24);
  panel.appendChild(arrow);
  const logo = createElement('img');
  logo.setAttribute('src',mlogo);
  logo.setAttribute('width',24);
  panel.appendChild(logo);
  const title = createElement('div','title',mtitle);
  mainTag.appendChild(title);
  return mainTag;
}
export const createBlog = (important,new,) => {
  const blog = createElement('div','blog');
  const blogTitle = createElement('div','blogTitle');
  blog.appendChild(blogTitle);
  if (important) {
    const badge1 = createElement('div','badge',important);
  }
  return blog;
}