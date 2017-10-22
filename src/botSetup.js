//=====================================
// Contains code to setup bot framework
//~@Bhomitb
//=====================================

//Node Imports
var restify = require("restify");
var builder = require("botbuilder");

//to load .env file
require("dotenv").load();

//Importing Regex Intents
var regeX = require("./regexIntents");

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
  console.log("%s listening to %s", server.name, server.url);
});

// add the pubic directory to serve as the direct testing application
server.get('/', restify.plugins.serveStatic({
  directory: './public',
  default: 'index.html'
}))

server.get('/pdf', restify.plugins.serveStatic({
  directory: './public',
  default: 'plans.pdf'
}))

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID, //Currently using my credentials @BhomitB
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
server.post("/api/messages", connector.listen());

//Bot connector initiation
var bot = new builder.UniversalBot(connector);
bot.set("persistConversationData", true);

//Connecting LUIS Model
var luisRecognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL);
bot.recognizer(luisRecognizer);

var intents = new builder.IntentDialog({
  recognizers: [
    regeX.clearDataRegex,
    regeX.retirementRegex,
    regeX.personalRegex,
    regeX.weddingRegex,
    regeX.educationRegex,
    luisRecognizer
  ],
  recognizeOrder: "series"
});

module.exports = {
  bot: bot,
  intents: intents,
  connector: connector
};
