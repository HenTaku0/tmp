name: "🐱 Spotify Lyrics Share Detector"
desc: "检测 Spotify 歌词分享的图片并发送通知"
author: "Your Name"
category: "Utility"

tiles:
  - name: spotify_lyrics_share_detector
    interval: 600
    title: 'Spotify Lyrics Share'
    content: '等待检测到的图片'
    icon: 'photo'
    backgroundColor: '#663399'

script-providers:
  spotify_lyrics_share_detector:
    url: https://raw.githubusercontent.com/HenTaku0/tmp/main/main2.js

    interval: 86400
