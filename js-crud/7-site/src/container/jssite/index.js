import { createElement, createHeader, createMain,createBlog } from "../../script/layout";
const mobileScreen = [
  {
    header: {
      time: '9:41',
      signal: '/svg/signal.svg',
      wifi: '/svg/wifi.svg',
      power: '/svg/power.svg',
    },
    main: {
      arrow: '/svg/arrow.svg',
      logo: '/svg/logo.svg',
      title: 'Мій блог',
    },
    blog: [
      {
        important: 'Важлива',
        new: 'Нова',
        date: '25.01',
        text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
      },
      {
        new: 'Нова',
        date: '15.01',
        text: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
      },
      {
        important: 'Важлива',
        date: '25.01',
        text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
      },
    ],
  },
  {
    header: {
      time: '9:41',
      signal: '/svg/signal.svg',
      wifi: '/svg/wifi.svg',
      power: '/svg/power.svg',
    },
    main: {
      arrow: '/svg/arrow.svg',
      logo: '/svg/logo.svg',
      title: "Ком'юніті",
    },
    comunity: [
      {
        tabs: [
          {
            title: 'База знань',
            active: false,
          },
          {
            title: 'Інформація',
            active: true,
          },
        ],
        badge: '/svg/image.svg',
        text: 'Що таке база знань?',
        description: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
        button: "Перейти до ком'юніті у Телеграм"
      },
    ],
  },
];
let div=createElement('div','desk');
mobileScreen.forEach(mob => {
  console.log(mob);
  let page=createElement('div','page');
  let header=createHeader(mob.header.time,mob.header.signal,mob.header.wifi,mob.header.power);
  let main=createMain(mob.main.arrow,mob.main.logo,mob.main.title);
  let blg;
  let tabs;
  page.appendChild(header);
  page.appendChild(main);
  if (Object.hasOwn(mob,'blog')) {
    mob.blog.forEach(post => {
      blg=createBlog(post.important,post.new,post.date,post.text);
      main.appendChild(blg);
    });
  }
  if (Object.hasOwn(mob,'comunity')) {
    console.log(mob);
    mob.blog.forEach(post => {
      blg=createBlog(post.important,post.new,post.date,post.text);
      main.appendChild(blg);
    });
  }
  div.appendChild(page);
});
document.body.append(div);