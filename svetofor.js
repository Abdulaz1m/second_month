const svetofor = prompt("Выберите свет - Красный, Желтый, Зеленый")
switch (svetofor) {
    case "Красный":
        alert("Стоп!")
    break;
    case "Желтый" :
        alert("Подожди, ещё чуть-чуть")
    break;
    case "Зеленый" :
        alert("Можешь идти :)")
    break;
    default : alert("Неправильный ответ -_-")
}