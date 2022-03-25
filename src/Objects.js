/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    const person = { ...data };
    switch (person.gender) {
        case (person.gender = 'female'):
            delete person.age;
            break;
        case (person.gender = 'male'):
            if (person.hasOwnProperty('income')) {
                person.income = person.income;
            } else {
                person.income = 100000;
            }
            break;
    }
    return person;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    const allobj = { ...obj1, ...obj2, ...obj3 };
    const allobjName = [];
    for (let key in allobj) {
        allobjName.push(key);
    }
    return allobjName.sort();
}
/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let Obj2 = JSON.parse(JSON.stringify(obj));
    const objAll = [];
    for (let i = 0; i < count; i++) {
        Obj2.id = i;
        objAll[i] = { ...Obj2 };
    }
    return objAll;
}
