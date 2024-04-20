#! /usr/bin/env node

import inquirer from 'inquirer' 

const currency: any = {
    USD: 1,    //this is base currency
    PKR: 277.69,
    INR: 83.37,    
    AED: 3.67,     //dirham
    EUR: 0.94,
    GBP: 0.81,     //pounds
    SAR: 3.75      //saudi riyal
};

let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: 'Enter from Currency',
            type: 'list',
            choices: ['USD', 'PKR', 'INR', 'AED', 'EUR', 'GBP', 'SAR'],
        },
        {
            name: 'to',
            message: 'Enter to Currency',
            type: 'list',
            choices: ['USD', 'PKR', 'INR', 'AED', 'EUR', 'GBP', 'SAR'],
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: 'number'
        }
    ]
)

let fromAmount = currency[user_answer.from]    //di hui amount ko base currency mai convert karo
let toAmount = currency[user_answer.to]        //jis currency mai krna hai uski base currency
let amount = user_answer.amount                //amount do jo user nay enter ki hai
let baseAmount = amount / fromAmount           //given amount ko usi ki base currency say divide kro
let convertedAmount = baseAmount * toAmount    //jis currency mai convert krna hai uski base amount say multiply kro upr wali amount ko
console.log(convertedAmount);                  
