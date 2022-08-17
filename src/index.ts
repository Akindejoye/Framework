import { User } from "./models/User";

const user = new User({name: 'my-name', age: 20});
console.log(user.set({name: 'Francis', age: 40}));

console.log(user.get('name'));
console.log(user.get('age'));