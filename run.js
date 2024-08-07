const url = $request.url;
const contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
const userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

// 检查是否为图片类型并且请求头中不包含浏览器的标识
if (url.includes("storage.googleapis.com") && contentType.includes('image') && !userAgent.includes('Mozilla')) {
    console.log(`检测到图片且非浏览器请求: ${url}`);
    // 更新 Tile 面板内容，设置 URL
    $done({
        title: '检测到图片',
        content: '点击查看图片',
        icon: 'photo',
        backgroundColor: '#FFD700',
        url: url
    });
} else {
    // 返回未修改的响应体
    $done({});
}
