const targetDomain = "storage.googleapis.com"; // 目标域名
const url = $request.url;
const contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
const userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

console.log("执行响应脚本");
console.log("URL: " + url);
console.log("Content-Type: " + contentType);
console.log("User-Agent: " + userAgent);

// 检查是否为图片类型并且请求头中不包含浏览器的标识
if (url.includes(targetDomain) && contentType.includes('image') && !userAgent.includes('Mozilla')) {
    console.log("检测到指定域名的图片");

    // 发送通知，包含图片的URL链接，可以在浏览器中打开
    $notification.post("检测到图片", `URL: ${url}`, "点击查看图片", { "open-url": url });

    // 直接跳转到浏览器
    $done({ response: { status: 302, headers: { Location: url } } });
} else {
    console.log("未检测到指定域名或响应不是图片");

    // 返回未修改的响应体
    $done({});
}
