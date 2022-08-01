const languageStore = require('./langDB')

function parseSentence(words){
  let sentence = "";
  for (let i = 0; i < words.length; i++){
    sentence += words[i] + "";
  }
  return sentence;
}

function showHelp(){
  const usage = "\nUsage: tran <language> sentence to be translated";
  console.log(usage);
  console.log("\nOptions:\r");
  console.log('\t--version\t    ' + 'Show version number.' + '\t\t' +  '[boolean]\r');
  console.log('  -l, --languages\t' + ' List all available languages.' + '\t\t' +  '[boolean]\r');
  console.log('\t--help\t\t    ' + 'Show help.' + '\t\t' +  '[boolean]\r');
}

function listLanguages(){
  console.log("\n Name\t\tISO-639-1 Code\n".toUpperCase().padStart(2 , "-->").padEnd(2, "<--"));
  for (let [key, value] of languageStore){
    console.log(key.trim() + "\t" + "--> \t" + value.trim() + "\n");
  }
}

function parseLanguage(language){
  if (language.length === 2) return language;
  if (languageStore.has(language)) return languageStore.get(language);
  console.log("-->Language not supported<--");

}

module.exports = {
  parseSentence,
  showHelp,
  listLanguages,
  parseLanguage
}