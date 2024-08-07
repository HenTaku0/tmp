name: "🌐 简单通知测试"
desc: "测试 Stash 的通知功能"
author: "Your Name"
category: "Utility"

http:
  mitm:
    - "*"

  script:
    - match: ^https?://.*$
      name: simple_notify
      type: response
      require-body: false

script-providers:
  simple_notify:
     url: https://raw.githubusercontent.com/HenTaku0/tmp/main/walk.js
     interval: 86400
