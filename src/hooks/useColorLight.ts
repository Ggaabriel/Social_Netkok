import { useState, useEffect } from 'react';

export default function useColorLight(hexColor:string| null):boolean | null {
  const [textColor, setTextColor] = useState<boolean | null>(null);

  useEffect(() => {
    function isColorLight(hexColor:string | null) {
    if(hexColor === null) return; 
      // Удаление символа # из начала строки
      hexColor = hexColor.replace('#', '');
    
      // Разделение значения HEX на составляющие каналы RGB
      var r = parseInt(hexColor.substr(0, 2), 16);
      var g = parseInt(hexColor.substr(2, 2), 16);
      var b = parseInt(hexColor.substr(4, 2), 16);
    
      // Вычисление среднего значения каналов RGB
      var average = (r + g + b) / 3;
    
      // Пороговое значение для определения более белого цвета
      var threshold = 200;
    
      // Сравнение среднего значения с порогом
      if (average > threshold) {
        return true; // Цвет более белый
      } else {
        return false; // Цвет менее белый
      }
    }

    const isLight = isColorLight(hexColor);
    setTextColor(isLight ? true : false);
  }, [hexColor]);

  return textColor;
}