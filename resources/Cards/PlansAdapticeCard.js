exports.allActions = {
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [{
      "type": "container",
      "items":[{
            "type": "TextBlock",
            "text": "Plans",
            "size": "large",
            "weight": "bolder"
      }
      ]
    }],
    "actions": [
      {
        "type": "Action.Submit",
        "title": "Wedding Plans",
        "data": "Wedding Plans"
      },
      {
        "type": "Action.Submit",
        "title": "Retirement Plans",
        "data": "Retirement Plans"
      },
      {
        "type": "Action.Submit",
        "title": "Education Plans",
        "data": "Education Plans"
      },
      {
        "type": "Action.Submit",
        "title": "Personal Plans",
        "data": "Personal Plans"
      },
      {
        "type": "Action.OpenUrl",
        "title": "Get your personalized plan",
        "url": "http://google.com"
      }
    ]
}
