let counter = 0;
while (counter < 5) {

    var unitOfMeasure = prompt("Будь ласка, оберіть одиницю вимірювання (кілометр, кілограм, година):", "");
    let unitOfMeasureLC = unitOfMeasure.toLowerCase();
    let unitOfMeasureNum;

switch (unitOfMeasureLC) {
    case "кілометр":
        unitOfMeasureNum = parseInt(prompt("Введіть кількість кілометрів:", ""), 10);
        alert("В " + unitOfMeasureNum + " км - " + unitOfMeasureNum * 1000 + " м");
        break;
    case "кілограм":
        unitOfMeasureNum = parseInt(prompt("Введіть кількість кілограм:", ""), 10);
        alert("В " + unitOfMeasureNum + " кг - " + unitOfMeasureNum * 1000 + " грм");
        break;
    case "година":
        unitOfMeasureNum = parseInt(prompt("Введіть кількість годин:", ""), 10);
        alert("В " + unitOfMeasureNum + " год - " + unitOfMeasureNum * 60 + " хв");
        break;
    default:
            alert("Одиниця виміру " + unitOfMeasure + " поки що не підтримується. Введіть підтримувану одиницю виміру (кілометр, кілограм, година)");
        break;
}
    counter++;
    if (counter === 5) {
                alert("Ви вичерпали всі спроби. Будь ласка, перезавантажте сторінку та спробуйте знову.");
    }

}
