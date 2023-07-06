export const studArr = () => {
  // const students = [
  //   { name: "Alice", age: 21, courses: ["Math", "Physics"] },
  //   { name: "Bob", age: 20, courses: ["Computer Science"] },
  //   { name: "Charlie", age: 13, courses: ["History", "Art"] },
  // ];
  // let m = null;
  // let k = null;
  // let p = null;
  // if (students[0].age <= students[1].age) {
  //   m = 1;
  //   p = 0;
  // } else {
  //   m = 0;
  //   p = 1;
  // }
  // if (students[m].age <= students[2].age) {
  //   k = 2;
  // } else if (students[p].age <= students[2].age) {
  //   k = m;
  //   m = 2;
  // } else {
  //   k = m;
  //   m = p;
  //   p = 2;
  // }
  // console.log([students[p].name, students[m].name, students[k].name]);
  const text = `A "collection" lets you group related "requests" and easily set common "authorization", tests, scripts, and variables for all requests in it.`;
  const value = text.match(/"(.*?)"/g);

  console.log("value:", value);
  console.log("object :>> ", text.match);
};
