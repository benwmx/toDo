const localStorage = {
  storage: {},

  setItem(key, value) {
    this.storage[key] = JSON.parse(value);
  },

  getItem(key) {
    return this.storage[key] || null;
  },
};

export default localStorage;
