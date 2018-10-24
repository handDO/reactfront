import {
    TOGGLE_CATEGORIES,
    GET_ORDERS,
    REQUEST_ORDERS,
    RECEIVE_ORDERS
} from '../actions';

const projectsInititalState = {
    isCategoriesOpen: false,
    isFetching: false,
    didInvalidate: false,
    lastOrderID: 0,
    lastUpdate: Date.now(),
    projects: [],
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
    switch (action.type) {
        case TOGGLE_CATEGORIES:
            return {
                ...state,
                isCategoriesOpen: !state.isCategoriesOpen
            }
        case GET_ORDERS:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST_ORDERS:
            return {
                ...state,
                didInvalidate: false,
                isFetching: true
            }
        case RECEIVE_ORDERS:
            return {
                ...state,
                isFetching: false,
                lastUpdate: action.receivedAt,
                lastOrderID: action.orders[action.orders.length - 1].id,
                projects: action.orders
            }
        default:
            return state;
    }
}

export default projectsReducer;