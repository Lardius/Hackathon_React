const users = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        firstName: "Иван",
        lastName: "Котов",
        age: 31,
        personInfo: "",
        image: "",
        social: { VK: "" },
        language: { HTML: "70%", CSS: "60%", JavaScript: "40%", ReactJS: "40%" },
        teamLeader: true,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        firstName: "Владимир ",
        lastName: "Гринько",
        age: 32,
        personInfo: "Проживаю в городе Санкт-Петербург.2 высших образования. Первое по специальности Инженер,  второе по специальности Экономика и управление на предприятии. На данный момент работаю на Концерне Воздушно-Космической Обороны наладчиком станков с программным управлением и прохожу курс JavaScript Junior Frontend Developer, после успешного прохождения которого настроен работать в IT сфере.",
        image: "",
        social: { linkedIn: "Соц.сети: https://www.linkedin.com/mwlite/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%B3%D1%80%D0%B8%D0%BD%D1%8C%D0%BA%D0%BE-b5834b20a" },
        language: { HTML: "40%", CSS: "45%", JavaScript: "65%", ReactJS: "15%" },
        teamLeader: false,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        firstName: "Владислав ",
        lastName: "Муравьев",
        age: 38,
        personInfo: "Люблю заниматься любимым делом - программировать. Амбициозен и ориентирован на достижение цели. Непрерывно повышаю hard-skills и активно изучаю английский язык.",
        image: "",
        social: { linkedIn: "https://www.linkedin.com/in/vladislav-muravyov/", VK: "https://vk.com/vmuravyov" },
        language: { HTML: "90%", CSS: "80%", JavaScript: "70%", ReactJS: "60%" },
        teamLeader: false,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        firstName: "Евгений",
        lastName: "",
        age: "",
        personInfo: "",
        image: "",
        social: { VK: "" },
        language: { HTML: " %", CSS: " %", JavaScript: " %", ReactJS: " %" },
        teamLeader: false,
        bookmark: false
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function() {
            resolve(users);
        }, 1000);
    });

export default {
    fetchAll
};
