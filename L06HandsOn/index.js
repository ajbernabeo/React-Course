const arr = [
    {"name":"chevy", "count": 2},
    {"name":"ford", "count": 5},
    {"name":"acura", "count": 3},
    {"name":"honda", "count": 16},
];

const filtered = arr.filter(value => value.name === "ford");

console.log("Filter results:", filtered);

//----------------------------------------------------------------------------------------------------------------//
const arr = ['Bill', 'Joe', 'Emily', 'Andrea'];
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

const addNewStudents = [...arr, ...newStudents];

console.log(addNewStudents);