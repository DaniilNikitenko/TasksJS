const filter = (all, failed) => {
  for (const i of failed) {
    all.splice(all.indexOf(i), 1);
  }
  return all;
};

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

console.log(filter(allStudents, failedStudents));
