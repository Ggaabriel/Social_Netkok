import { useEffect, useState } from "react";
//Хук который принимает ref объект канваса и путь к картинке и возвращает средний цвет изображения
const useMediumColor = (canvasRef: React.RefObject<HTMLCanvasElement>, imagePath: string): string | null => {
    const [mediumColor, setMediumColor] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!canvasRef.current) return;

            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            if (!context) return;

            const image = new Image();
            image.src = imagePath;

            // Когда изображение загружено
            image.onload = function () {
                var imageWidth = image.width; // Замените на фактическую ширину изображения
                var imageHeight = image.height; // Замените на фактическую высоту изображения

                canvas.width = 900;
                canvas.height = 900;
                var x = (900 - imageWidth) / 2;
                var y = (900 - imageHeight) / 2;

                context.drawImage(image, x, y, imageWidth, imageHeight);

                // Получение данных пикселей изображения
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const pixels = imageData.data;
                const colorCounts: { [key: string]: number } = {};

                // Переменные для хранения суммы значений цветов
                for (let i = 0; i < pixels.length; i += 4) {
                    const red = pixels[i];
                    const green = pixels[i + 1];
                    const blue = pixels[i + 2];
                    const colorKey = rgbToHex(red, green, blue);

                    if (colorCounts[colorKey]) {
                        colorCounts[colorKey]++;
                    } else {
                        colorCounts[colorKey] = 1;
                    }
                }

                // Поиск наиболее преобладающего цвета
                let maxCount = 0;
                let dominantColor = "";

                for (const colorKey in colorCounts) {
                    if (colorCounts[colorKey] > maxCount) {
                        maxCount = colorCounts[colorKey];
                        dominantColor = colorKey;
                    }
                }

                setMediumColor(dominantColor ? "#" + dominantColor : null);
            };
        };

        fetchData();
    }, [canvasRef, imagePath]);

    const rgbToHex = (red: number, green: number, blue: number): string => {
        const toHex = (c: number) => {
            const hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };

        return toHex(red) + toHex(green) + toHex(blue);
    };
    return mediumColor;
};

export default useMediumColor;
