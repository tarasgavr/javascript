export const createElement = (tag, className, content ) => {
  const elem = document.createElement(tag);
  if (className) {
    elem.className = className;
  }
  if (content) {
    elem.innerHTML = content;
  }
  return elem;
}

export const createHeader = () => {
  const header = {
    time: '9:41',
    signal: '/svg/signal.svg',
    wifi: '/svg/wifi.svg',
    power: '/svg/power.svg',
  }
  const headerTag = createElement('header');
  const time = createElement('div','time',header.time);
  headerTag.appendChild(time);
  const container = createElement('div');
  headerTag.appendChild(container);
  const signal = document.createElement('img');
  signal.setAttribute('src',header.signal);
  container.appendChild(signal);
  const wifi = document.createElement('img');
  wifi.setAttribute('src',header.wifi);
  container.appendChild(wifi);
  const power = document.createElement('img');
  power.setAttribute('src',header.power);
  container.appendChild(power);
  return headerTag;
}