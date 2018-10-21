export const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';
export const TOGGLE_CATEGORIES = 'TOGGLE_CATEGORIES';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CLOSE_ALL_DROP_MENU = 'CLOSE_ALL_DROP_MENU';

export const toggleAuthForm = () => ({
    type: TOGGLE_AUTH_FORM
});

export const toggleCategories = () => ({
    type: TOGGLE_CATEGORIES
});

export const toggleMenu = () => ({
    type: TOGGLE_MENU
});

export const closeAllDropMenu = () => ({
    type: CLOSE_ALL_DROP_MENU
});