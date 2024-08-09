var url = $request.url;
var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
var userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

// 检查是否为图片类型并且请求头中不包含浏览器的标识
if (contentType.includes('image') && !userAgent.includes('Mozilla')) {
    // 读取存储的图片列表
    var existingImages = JSON.parse($persistentStore.read("spotifyImageList") || "[]");
    
    // 如果URL不在已有列表中，添加到列表
    if (!existingImages.includes(url)) {
        existingImages.push(url);
        $persistentStore.write(JSON.stringify(existingImages), "spotifyImageList");
        $notify("🐱检测到新 Spotify 图片🐱", `URL: ${url}`, "图片已保存到Tile");
    }

    // 更新Tile面板内容
    let tileContent = existingImages.length > 0 ? existingImages.join('\n') : '没有新图片';
    
    $done({
        title: '检测到的 Spotify 图片',
        content: tileContent,
        icon: existingImages.length > 0 ? existingImages[existingImages.length - 1] : 'photo',
        backgroundColor: '#1DB954',
        url: existingImages.length > 0 ? existingImages[existingImages.length - 1] : ''
    });
} else {
    // 返回未修改的响应体
    $done({});
}
