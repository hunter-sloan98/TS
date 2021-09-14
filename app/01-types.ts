let username: string = 'instructor';
let password: string = 'Letmein1234';
let instructorId: number = 5;
//Implicit Typing
let greeting = "Hello";

let age: number = 40;
let currentYear: number = 2018;

let decimal: number = 6;
let hex: number = 0xfd00d;
let binary: number = 0b1010;

let companyName: string;
companyName = 'Eleven Fifty'

let appName: string = 'Twitter';
appName = 'Instagram';
//Booleans
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;
//Arrays
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
let allScores: Array<number> = [100, 92, 95, 96];
console.log('Student List:', studentList[0]);
//Any
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty)
//Void
function sayHelloToAll() : void {
  console.log('Hello to All')
}
//Null & Undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;
//Tuple
//Declare tuple type
let usernameAndId: [number, string];
//Initialize it
usernameAndId = [1, 'kennisreally40'];
//Enum
enum WeaponType { Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword

enum CardType { Ace=1, Two, Three, Four}
let cardType: string = CardType[2]
console.log(cardType);
//Unions
let x: number | string;
let y: number | string;
x = '1234';
x = 1234;

function demoFunction(someNum){
  return someNum;
}
demoFunction(1);
demoFunction('stuff');
// demoFunction(1, 'Stuff');
