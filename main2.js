const url = $request.url;
const contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
const userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

// 检查是否为图片类型并且请求头中不包含浏览器的标识
if (contentType.includes('image') && !userAgent.includes('Mozilla')) {
    // 发送通知，包含图片的URL链接，可以在浏览器中打开
    $notification.post("🐱检测到Spotify歌词分享🐱", `URL: ${url}`, "点击查看图片", { "open-url": url });
    
    // 更新 Tile 面板内容，显示图片
    $done({
        title: 'Spotify Lyrics Share',
        content: '点击查看图片',
        icon: url, // 直接使用图片URL作为图标
        backgroundColor: '#663399',
        url: url // 点击 Tile 时打开图片链接
    });
} else {
    // 如果没有检测到图片，保持面板内容不变
    $done({});
}
