const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Соколов",
];

const failedStudents = ["Сидоров", "Смирнов", "Попов"];

const filter = (all, failed) => {
  const resultAll = all;
  for (const i of failed) {
    resultAll.splice(resultAll.indexOf(i), 1);
  }
  return resultAll;
};

console.log(filter(allStudents, failedStudents));
