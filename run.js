name: "🌐 域名响应检测器"
desc: "检测指定域名的响应并发送通知"
author: "Your Name"
category: "Utility"

http:
  mitm:
    - "storage.googleapis.com"  # 替换为您想要检测的域名

  script:
    - match: ^https?:\/\/storage\.googleapis\.com\/.*$   # 替换为您想要检测的域名
      name: extract_response_and_notify
      type: response
      require-body: true
      argument:

script-providers:
  extract_response_and_notify:
    url: https://raw.githubusercontent.com/HenTaku0/tmp/main/walk.js
    interval: 86400
