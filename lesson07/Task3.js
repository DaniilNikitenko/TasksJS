const addPrefix = (names, text) => names.map((x) => `${text} ${x}`);

const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

console.log(addPrefix(names, "Mr"));
