module.exports = {
  contentType: "application/vnd.microsoft.card.adaptive",
  content: {
    $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
    type: "AdaptiveCard",
    version: "1.0",
    body: [
      {
        type: "container"
      }
    ],
    actions: [
      {
        type: "Action.Submit",
        title: "Wedding Plans"
      },
      {
        type: "Action.Submit",
        title: "Retirement Plans"
      },
      {
        type: "Action.Submit",
        title: "Education Plans"
      },
      {
        type: "Action.Submit",
        title: "Personal Plans"
      }
    ]
  }
};
