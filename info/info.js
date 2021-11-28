// Функция сортировки  дял чисел по порядку
const arrNum = [1,3,4,54,13,45,12,66];

function compareNum(a,b) {
    return a - b;
}
arrNum.sort(compareNum);
console.log(arrNum); //[ 1, 3, 4, 12, 13, 45, 54, 66 ]


/*===================================================================*/