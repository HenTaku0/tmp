name: "Spotify Lyrics Share Detector"
desc: "Detects Spotify lyrics share and opens the image URL in the browser."
author: "YourName"
homepage: "http://spotify.com"
manual: "http://spotify.com/manual"
icon: "http://spotify.com/icon.png"
category: "Spotify"

http:
  force-http-engine:
    - "storage.googleapis.com:80"
  mitm:
    - "storage.googleapis.com"
  script:
    - match: ^https?:\/\/storage\.googleapis\.com\/.*
      name: Spotify Lyrics Share Detector
      type: request
      require-body: false
      timeout: 120
      script: |
        var url = $request.url;
        var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
        var userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

        // 检查是否为图片类型并且请求头中不包含浏览器的标识
        if (contentType.includes('image') && !userAgent.includes('Mozilla')) {
            // 打开浏览器，显示图片URL
            $notify("🐱检测到Spotify歌词分享🐱", `URL: ${url}`, "点击查看图片", {"open-url": url});
            // 直接跳转到浏览器
            $done({response: {status: 302, headers: {Location: url}}});
        } else {
            // 返回未修改的响应体
            $done({});
        }

script-providers:
  Spotify Lyrics Share Detector:
    url: https://example.com/your_script.js
    interval: 86400
