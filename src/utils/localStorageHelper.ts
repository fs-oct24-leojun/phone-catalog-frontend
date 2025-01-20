export const updateLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
  window.dispatchEvent(new Event('localStorageUpdated'));
};
