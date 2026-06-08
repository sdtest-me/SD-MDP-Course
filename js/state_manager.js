const StateManager = {
    save(key, value) {
        localStorage.setItem(key, value);
    },
    get(key) {
        return localStorage.getItem(key) || 0.5; // Значение по умолчанию 0.5
    }
};