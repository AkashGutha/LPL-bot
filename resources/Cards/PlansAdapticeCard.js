exports.allActions = {
  type: "container",
  contentType: "application/vnd.microsoft.card.adaptive",
  content: {
    $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
    type: "AdaptiveCard",
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
        data: "Personal Plans"
      }
    ]
  }
};

exports.getPersonalizedDoc = {
  type: "container",
  contentType: "application/vnd.microsoft.card.adaptive",
  content: {
    $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
    type: "AdaptiveCard",
    body: [
      {
        type: "TextBlock",
        text: "Your personalized plan"
      }
    ],
    actions: [
      {
        type: "Action.OpenUrl",
        title: "Get your personalized plan",
        url: "http://lpl-cts.herokuapp.com/pdf"
      }
    ]
  }
};
