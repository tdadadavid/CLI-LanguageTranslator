#! /usr/bin/env node
console.log("Translate with ease.");

const yargs = require('yargs');
const utils = require('./utils');
const translate = require('@vitalets/google-translate-api');


const usage = "\nUsage: tran <language> sentence to be translated";
const options = yargs.usage(usage).option("l", {
  alias: "Languages",
  describe: "List of all supported languages",
  type: "boolean",
  demandOption: false
})
  .help(true)
  .argv


if (yargs.argv.l == true || yargs.argv.languages == true) {
  utils.listLanguages();
  return;
}

if (yargs.argv._[0] == null) {
  utils.showHelp();
  return;
}

let language;

if (yargs.argv._[0])
  language = yargs.argv._[0].toLowerCase();


let sentence= "";

sentence = utils.parseSentence(yargs.argv._);

if (sentence === "") {
  console.error("\nThe entered sentence is like John Cena, I can't see it!\n")
  console.log("Enter tran --help to get started.\n")
  return;
}

language = utils.parseLanguage(language);

if (language == null) return;

translate(sentence, {to: language}).then(res => {
  console.log("\n" + "\t" + res.text + "\t" + (res.pronunciation || "No pronunciation available now".trimStart()) + "\t" + "\n");
}).catch
(err => {
  console.error(err);
});




