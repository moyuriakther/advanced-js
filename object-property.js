const students =[
    {id:21, name:'omar sunny'},
    {id:41, name:'maannaaa'},
    {id:51, name:'sakib khan'},
    {id:71, name:'deepjpl'}
]
const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     // output.push(result);
//     console.log(result);
// }
const names = students.map(s => s.name);
const ids = students.map(s =>s.id);
const bigger = students.filter(s =>s.id > 40);
const biggerOne = students.find(s =>s.id > 40);
console.log(biggerOne);