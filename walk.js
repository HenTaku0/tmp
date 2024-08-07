name: "🌐 图片检测器"
desc: "检测 storage.googleapis.com 的图片并更新 Tile 面板"
author: "Your Name"
category: "Utility"

http:
  mitm:
    - "storage.googleapis.com"

  script:
    - match: ^https?://storage\.googleapis\.com/.*$
      name: detect_and_update_tile
      type: response
      require-body: false

tiles:
  - name: detect_and_update_tile
    interval: 600
    title: '等待检测到的图片'
    content: '暂无图片'
    icon: 'photo'
    backgroundColor: '#CCCCCC'

script-providers:
  detect_and_update_tile:
    url: https://raw.githubusercontent.com/HenTaku0/tmp/main/run.js
    interval: 86400
