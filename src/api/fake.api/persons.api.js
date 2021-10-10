const skillsConfig = {
  html: {
    name: 'HTML',
    color: '#dc3545',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png'
  },
  css: {
    name: 'CSS',
    color: '#0d6efd',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
  },
  js: {
    name: 'JavaScript',
    color: '#ffc107',
    image: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png'
  },
  react: {
    name: 'ReactJS',
    color: '#0dcaf0',
    image:
      'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png'
  }
}

const persons = [
  {
    _id: "67rdca3eeb7f6fgeed471815",
    firstName: "Иван ",
    lastName: "Котов ",
    age: 31,
    personInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "/images/Kotov.jpg",
    social: { VK: "" },
    skills: [
      { _id: 1, value: skillsConfig.html, level: 70 },
      { _id: 2, value: skillsConfig.css, level: 60 },
      { _id: 3, value: skillsConfig.js, level: 40 },
      { _id: 4, value: skillsConfig.react, level: 40 }
    ],
    teamLeader: true,
    bookmark: false,
    color: 'primary'
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    firstName: "Владимир ",
    lastName: "Гринько ",
    age: 32,
    personInfo: "Проживаю в городе Санкт-Петербург. 2 высших образования. Первое по специальности Инженер, второе по специальности Экономика и управление на предприятии. На данный момент работаю на Концерне Воздушно-Космической Обороны наладчиком станков с программным управлением и прохожу курс JavaScript Junior Frontend Developer, после успешного прохождения которого настроен работать в IT сфере.",
    image: "/images/js.png",
    social: { linkedIn: "https://www.linkedin.com/mwlite/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%B3%D1%80%D0%B8%D0%BD%D1%8C%D0%BA%D0%BE-b5834b20a" },
    skills: [
      { _id: 1, value: skillsConfig.html, level: 40 },
      { _id: 2, value: skillsConfig.css, level: 45 },
      { _id: 3, value: skillsConfig.js, level: 65 },
      { _id: 4, value: skillsConfig.react, level: 15 }
    ],
    teamLeader: false,
    bookmark: false,
    color: 'success'
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    firstName: "Владислав ",
    lastName: "Муравьев ",
    age: 38,
    personInfo: "Люблю заниматься любимым делом - программировать. Амбициозен и ориентирован на достижение цели. Непрерывно повышаю hard-skills и активно изучаю английский язык.",
    image: "/images/Vladick.jpg",
    social: { linkedIn: "https://www.linkedin.com/in/vladislav-muravyov/", VK: "https://vk.com/vmuravyov" },
    skills: [
      { _id: 1, value: skillsConfig.html, level: 90 },
      { _id: 2, value: skillsConfig.css, level: 80 },
      { _id: 3, value: skillsConfig.js, level: 70 },
      { _id: 4, value: skillsConfig.react, level: 60 }
    ],
    teamLeader: false,
    bookmark: false,
    color: 'secondary'
  },
  {
    _id: "67rdca3eeb7f6fgeed471818",
    firstName: "Евгений ",
    lastName: "Олефиренко ",
    age: 46,
    personInfo: "В it сфере с 2006 года, начинал верстальщиком с 2009 года являюсь разработчиком на php CMS Bitrix, c 2019 года на Laravel. Сейчас прохожу курс JavaScript Junior Frontend Developer, после успешного прохождения которого настроен работать Frontend Developer'ом",
    image: "/images/eaol.jpg",
    social: { facebook: "https://www.facebook.com/profile.php?id=100001914199120", VK: "https://vk.com/eaol1" },
    skills: [
      { _id: 1, value: skillsConfig.html, level: 90 },
      { _id: 2, value: skillsConfig.css, level: 80 },
      { _id: 3, value: skillsConfig.js, level: 70 },
      { _id: 4, value: skillsConfig.react, level: 60 }
    ],
    teamLeader: false,
    bookmark: false,
    color: 'danger'
  }
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(persons);
    }, 500);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(persons.find((person) => person._id === id));
    }, 500);
  });

export default {
  fetchAll,
  getById
};
