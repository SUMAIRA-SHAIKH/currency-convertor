#! /usr/bin/env node
// let my_name="sumaira"
// let students= ['ali','imran']
//object
/*
let student_data: any =
{
    name: "sumaira",
    age: 20,
    roll: "abc123",
    address: "abc road"
}
//console object and property
console.log(student_data.name);  // object.property
console.log(student_data.roll);
console.log(student_data['address']); //object["age"]
let property: any ="age"
console.log(student_data[property])

*/
import chalk from "chalk"; // fonts background color
console.log(`${chalk.bgMagentaBright.bold("\n\t\t.~~~~WELCOME TO CURRENCY CONVERTOR~~~~.")}`);
import inquirer from 'inquirer';
const currency = {
    /* USD : 1, // BASE CURRENCY
     EUR:0.91,
     GBP:0.76,
     INR:74.57,
     PKR:278.230,
     */
    PKR: 1, //BASE CURRENCY
    USD: 278.230,
    SAR: 74.212,
    INR: 3.339,
    EUR: 296.620,
    KWD: 903.051, //kuwait
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from currency",
        type: 'list',
        //choices: ['USD','EUR','GBP','INR','PKR']
        choices: ['PKR', 'USD', 'SAR', 'INR', 'EUR', 'KWD']
    },
    {
        name: 'to',
        message: "Enter to currency",
        type: 'list',
        choices: ['PKR', 'USD', 'SAR', 'INR', 'EUR', 'KWD']
        // choices: ['USD','EUR','GBP','INR','PKR']
    },
    {
        name: 'amount',
        message: "Enter your Amount",
        type: 'number',
    }
]);
//console.log(user_answer)
let fromAmount = currency[user_answer.from];
//currency['usd']
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //usd base currency
// > pkr to dolor             15000pkr / 280 exchange rate dolor
let convertedAmount = baseAmount * toAmount;
//..let amount = user_answer.amount  // user answer store in variable
console.log(user_answer);
console.log(user_answer.from, fromAmount);
console.log(user_answer.to, toAmount);
console.log("total amount", amount);
console.log(`${chalk.bgWhiteBright.redBright.italic("Converted total amount", convertedAmount)}`);
