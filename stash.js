name: "🐱 Spotify Lyrics Share Detector"
desc: "检测 Spotify 歌词分享的图片并发送通知"
author: "Your Name"
category: "Utility"

http:
  mitm:
    - "storage.googleapis.com"

  script:
    - match: ^https?://storage\.googleapis\.com/.*$
      name: spotify_lyrics_share_detector
      type: response
      require-body: true
      argument:

script-providers:
  spotify_lyrics_share_detector:
    url: https://raw.githubusercontent.com/HenTaku0/tmp/main/main.js

    interval: 86400
