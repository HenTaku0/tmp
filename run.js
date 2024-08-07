const url = $request.url;
const contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
const userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

// 检查是否为图片类型并且请求头中不包含浏览器的标识
if (url.includes("storage.googleapis.com") && contentType.includes('image') && !userAgent.includes('Mozilla')) {
    // 发送通知，包含图片的URL链接，可以在浏览器中打开
    $notification.post("检测到图片", `URL: ${url}`, "点击查看图片", { "open-url": url });

    // 直接跳转到浏览器
    $done({ response: { status: 302, headers: { Location: url } } });
} else {
    // 返回未修改的响应体
    $done({});
}
