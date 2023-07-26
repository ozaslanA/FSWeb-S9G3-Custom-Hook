import React from "react";
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key); //sayfa açıp kapatıldığında önceden kalan key var mı diye bakıyoruz.
    return item ? JSON.parse(item) : initialValue; // item var mı diye bakıyoruz yoksa ilk değeri alıyoruz(initial value). yani initial değerini key boşsa atayacak
  });
  //state yazma
  const setValue = (value) => {
    setStoredValue(value); //state yazıyoruz.
    window.localStorage.setItem(key, JSON.stringify(value)); //state yazdığımızı localStorage atıyoruz
  };
  return [storedValue, setValue];
};
