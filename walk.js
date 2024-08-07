name: "🌐 图片检测器"
desc: "检测 storage.googleapis.com 的图片并显示在面板中"
author: "Your Name"
category: "Utility"

http:
  mitm:
    - "storage.googleapis.com"

  script:
    - match: ^https?://storage\.googleapis\.com/.*$
      name: detect_and_display_image
      type: response
      require-body: false

tiles:
  - name: detect_and_display_image
    interval: 600
    title: "等待检测到的图片"
    content: "暂无图片"
    icon: "photo"
    backgroundColor: "#663399"

script-providers:
  detect_and_display_image:
    url: https://raw.githubusercontent.com/HenTaku0/tmp/main/run.js
    interval: 86400
