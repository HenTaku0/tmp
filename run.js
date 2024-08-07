name: "🌐 图片检测器"
desc: "检测 storage.googleapis.com 的图片并发送通知"
author: "Your Name"
category: "Utility"

http:
  mitm:
    - "storage.googleapis.com"

  script:
    - match: ^https?://storage\.googleapis\.com/.*$
      name: detect_and_redirect_image
      type: response
      require-body: false

      
script-providers:
   detect_and_redirect_image:
     url: https://raw.githubusercontent.com/HenTaku0/tmp/main/walk.js
     interval: 86400
