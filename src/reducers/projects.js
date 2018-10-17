const projectsInititalState = {
    isCategoriesOpen: false,
    projects: [{
            id: 1,
            user_id: 1,
            user_rating: 154,
            user_name: "Андрей",
            title: "Нужен велосипед",
            price: "до 1000 руб.",
            before_date: new Date(2018, 9, 10)
        },
        {
            id: 1,
            user_id: 2,
            user_rating: 119,
            user_name: "Василий",
            title: "Нужно собрать поликарбонатную теплицу",
            price: "до 5000 руб.",
            before_date: new Date(2018, 10, 21)
        },
        {
            id: 1,
            user_id: 1,
            user_rating: 154,
            user_name: "Андрей",
            title: "Написать курсовую работу за 4 курс",
            price: "2000 руб.",
            before_date: new Date(2018, 11, 30)
        },
        {
            id: 1,
            user_id: 1,
            user_rating: 154,
            user_name: "Андрей",
            title: "Написать курсовую работу за 4 курс",
            price: "2000 руб.",
            before_date: new Date(2018, 11, 30)
        }
    ],
    categories: [
        'Уборка',
        'Красота и здоровье',
        'Ремонт техники',
        'Работа по дому',
        'Проведение мероприятий',
        'Фото и видео',
        'Транспортные услуги',
        'Образование',
        'Уход за животными',
        'Юридическая помощь',
        'Ремонт и строительство',
        'IT, компьютеры'
    ]
}

const projectsReducer = (state = projectsInititalState, action) => {
    return state;
}

export default projectsReducer;