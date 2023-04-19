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

const addPrefix = (names, text) => names.map((x) => `${text} ${x}`);

console.log(addPrefix(names, "Mr"));
