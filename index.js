//Завдання 1
function delayedPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(value)
        },delay)
    })
}

const promises = [
    delayedPromise('Проміс 1', 2000),
    delayedPromise('Проміс 2', 1500),
    delayedPromise('Проміс 3', 1000),
    delayedPromise('Проміс 4', 2500),
    delayedPromise('Проміс 5', 3000),
  ];
  
Promise.all(promises).then((results) => {
    console.log('Результати виконання промісів:', results);
}).catch((error) => {
    console.error('Сталася помилка:', error);
});


//Завдання 2

function randomDelay(value) {
    const delay = Math.random() * (5000 - 1000) + 1000;
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`Машина за номером ${value} дісталась фінішу за  ${delay} мілісекунд`);
        resolve(value);
      }, delay);
    });
  }
  
const cars = [
    randomDelay(1),
    randomDelay(2),
    randomDelay(3),
    randomDelay(4),
    randomDelay(5)
];
  

Promise.race(cars).then(result => {
    console.log(`Найшвидша машина фінішувала зі значенням: ${result}`);
}).catch(error => {
    console.error(`Виявлено помилку: ${error}`);
});