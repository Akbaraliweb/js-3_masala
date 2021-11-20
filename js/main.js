let salaries = {
    Akmal: 1200,
    Salim: 5200,
    Karima: 1800
};

let sum = 0;
for (let key in salaries) {
    sum = sum + salaries[key];
}
console.log(" Ishchilarning jami oyliklari summasi:",sum);