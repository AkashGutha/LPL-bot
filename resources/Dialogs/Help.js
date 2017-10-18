var builder = require("botbuilder");

var plans = require("./financialPlans");

const helpDialog = {
  name: "helpDialog",
  dialogs: [
    function(session, args, next) {
      if (!session.userData.profile || session.userData.profile === undefined) {
        session.send(
          "Sorry I did not get that, Start by telling me your name!"
        );
      } else {
        session.send("Sorry I did not get that,");
        next();
      }
    },
    plans.all.dialog
  ]
};
module.exports = helpDialog;
