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
export const createBlog = (pimportant,pnew,pdate,ptext) => {
  const blog = createElement('div','blog');
  const blogTitle = createElement('div','blogTitle');
  blog.appendChild(blogTitle);
  const div = createElement('div');
  if (pimportant) {
    const badge1 = createElement('div','badge',pimportant);
    div.appendChild(badge1);
    blogTitle.appendChild(div);
  }
  if (pnew) {
    const badge2 = createElement('div','badge',pnew);
    div.appendChild(badge2);
  }
  blogTitle.appendChild(div);
  const date = createElement('div','blogDate',pdate);
  blogTitle.appendChild(date);
  const text = createElement('div','blogText',ptext);
  blog.appendChild(text);
  return blog;
}
export const createCommunity = (tabsArr=[]) => {
  const tabs = createElement('div','tabs');
  const tabHeader = createElement('div','tabHeader');
  tabs.appendChild(tabHeader);
  let tabTitle;
  tabsArr.forEach(tabEl => {
    tabTitle = createElement('div','tabTitle',tabEl.title);
    if (tabEl.active) {
      tabTitle.className += 'active';
      tabHeader.appendChild(tabTitle);
    }
  });
  blog.appendChild(blogTitle);
  const div = createElement('div');
  if (pimportant) {
    const badge1 = createElement('div','badge',pimportant);
    div.appendChild(badge1);
    blogTitle.appendChild(div);
  }
  if (pnew) {
    const badge2 = createElement('div','badge',pnew);
    div.appendChild(badge2);
  }
  blogTitle.appendChild(div);
  const date = createElement('div','blogDate',pdate);
  blogTitle.appendChild(date);
  const text = createElement('div','blogText',ptext);
  blog.appendChild(text);
  return tabs;
}