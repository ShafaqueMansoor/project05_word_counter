#! /usr/bin/env node
//Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
//display a colourful welcome message
console.log(chalk.bold.cyanBright("\n \t\t Code With Shafaque - Word Counter"));
console.log("=".repeat(60));
//PROMPT THE USER TO ENTER A SENTENCE 
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
//Triminig the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
//analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)} `));
console.log("=".repeat(60));
