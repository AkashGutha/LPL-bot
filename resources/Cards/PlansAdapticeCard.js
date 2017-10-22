module.exports = {
  contentType: "application/vnd.microsoft.card.adaptive",
  content: {
    speak: "Plan your future with us, by choosing, one of the following plans",
    type: "AdaptiveCard",
    version: "1.0",
    body: [
      {
        type: "TextBlock",
        text: "Plans",
        size: "large",
        weight: "bolder"
      }
    ],
    actions: [
      {
        type: "Action.Submit",
        title: "Wedding Plans",
        data: "Wedding Plans"
      },
      {
        type: "Action.Submit",
        title: "Retirement Plans",
        data: "Retirement Plans"
      },
      {
        type: "Action.Submit",
        title: "Education Plans",
        data: "Education Plans"
      },
      {
        type: "Action.Submit",
        title: "Personal Plans",
        data: "PersonalPlans"
      }
    ]
  }
};
