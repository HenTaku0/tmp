const targetDomain = "storage.googleapis.com"; // 目标域名
const url = $request.url;
const contentType = $response.headers['Content-Type'] || $response.headers['content-type'];

console.log("执行响应脚本");
console.log("URL: " + url);
console.log("Content-Type: " + contentType);

// 检查 URL 是否包含目标域名并且响应类型是图片
if (url.includes(targetDomain) && contentType.includes('image')) {
    console.log("检测到指定域名的图片");

    // 发送通知，包含图片的URL链接，可以在浏览器中打开
    $notification.post("检测到图片", `URL: ${url}`, "点击查看图片", { "open-url": url });
} else {
    console.log("未检测到指定域名或响应不是图片");
}

// 返回未修改的响应体
$done({});
