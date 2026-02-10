// OOP in TypeScript

// Classes are a template for creating objects. Just a blueprint. They don't do anything until you create an instance of the class.
interface Person {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}

// explicitly typed :void function since its a boundary!
function sayHappyBirthdayWithObject(personObject: Person): void{
  let output ='';
  output += 'Happy Birthday '
         + personObject.name + '! ';
  output += 'You are now ' 
         + personObject.age + ' years old! ';
  output += 'Your birthday wish was to receive ' 
         + personObject.giftWish 
         + '. And guess what? You will ';
  if (!personObject.success){
    output += 'not ';
  }
  output += 'receive it! \n';
  console.log(output);
}

// array of type Person[] as in Person class array( set of person objects)
let birthdayBabies: Person[] = [
  {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
  {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
  {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
]; 

// loop through the array of Person objects and call the sayHappyBirthdayWithObject function for each one
birthdayBabies.forEach(sayHappyBirthdayWithObject);

