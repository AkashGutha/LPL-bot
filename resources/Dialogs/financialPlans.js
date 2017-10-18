var builder = require("botbuilder");

//Import regex functions
var regexFunc = require("../regexFx");

//All plan dialog
const allPlans = {
  name: "allPlans",
  dialog: function(session) {
    session.send(
      "What can I help you plan ? <br> You can choose one of the following and I will use my futuristic intelligence to help you build a plan which will help you achieve your goals."
    );
    var msg = new builder.Message(session);
    msg.attachmentLayout(builder.AttachmentLayout.list);
    msg.attachments([
      new builder.ThumbnailCard(session).buttons([
        builder.CardAction.imBack(
          session,
          "retirement plans",
          "Retirement Plans"
        )
      ]),
      new builder.HeroCard(session).buttons([
        builder.CardAction.imBack(session, "education plans", "Education Plans")
      ]),

      new builder.ThumbnailCard(session).buttons([
        builder.CardAction.imBack(session, "wedding plans", "Wedding Plans")
      ]),

      new builder.HeroCard(session).buttons([
        builder.CardAction.imBack(session, "personal plans", "Personal Plans")
      ])
    ]);
    session.send(msg).endDialog();
  }
};

//Retirement plans
const retirePlanDialog = {
  name: "retireDialog",
  dialogs: [
    function(session) {
      session.userData.profile.plan = "retirement";
      builder.Prompts.text(
        session,
        "After how long are you planning to retire ? (in months)"
      );
    },
    function(session, results) {
      var timeFrame = regexFunc.extractnumbers(results.response);
      var timeFrame = Number(timeFrame);
      if (timeFrame.isNan) {
        builder.Prompts.text(session, "Please enter a number");
      } else {
        session.userData.profile.timeFrame = timeFrame;
        console.log(session.userData.profile);
        session.send("Building plan that suits your profile......");
      }
    }
  ]
};
//Education plans
const eduPlanDialog = {
  name: "eduPlanDialog",
  dialogs: [
    function(session) {
      session.userData.profile.plan = "education";
      builder.Prompts.text(
        session,
        "After how long are you planning to pursue you education ? (in months)"
      );
    },
    function(session, results) {
      var timeFrame = regexFunc.extractnumbers(results.response);
      session.userData.profile.timeFrame = timeFrame;
      console.log(session.userData.profile);
      session.send("Building plan that suits your profile......");
    }
  ]
};
//Wedding plans
const wedPlanDialog = {
  name: "wedPlanDialog",
  dialogs: [
    function(session) {
      session.userData.profile.plan = "wedding";
      builder.Prompts.text(session, "When is the wedding ? (in months)");
    },
    function(session, results) {
      var timeFrame = regexFunc.extractnumbers(results.response);
      session.userData.profile.timeFrame = timeFrame;
      console.log(session.userData.profile);
      session.send("Building plan that suits your profile......");
    }
  ]
};
//Personal plans
const perPlanDialog = {
  name: "perPlanDialog",
  dialogs: [
    function(session) {
      session.userData.profile.plan = "personal";
      let text = builder.Prompts.text(
        session,
        "After how long are you planning to liquidate the assets ? (in months)"
      );
      session.send(text);
    },
    function(session, results) {
      var timeFrame = regexFunc.extractnumbers(results.response);
      session.userData.profile.timeFrame = timeFrame;
      console.log(session.userData.profile);
      session.send("Building plan that suits your profile......");
    }
  ]
};
module.exports = {
  all: allPlans,
  retirement: retirePlanDialog,
  wedding: wedPlanDialog,
  personal: perPlanDialog,
  education: eduPlanDialog
};
