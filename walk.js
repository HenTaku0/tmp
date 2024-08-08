if (typeof $request !== 'undefined') {
    var url = $request.url;
    var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
    var userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

    // 输出检测到的 URL 到日志
    console.log("检测到匹配的 URL: " + url);

    // 检查是否为图片类型并且请求头中不包含浏览器的标识
    if (contentType && contentType.includes('image') && !userAgent.includes('Mozilla')) {
        // 发送通知，显示图片 URL
        $notification.post("🐱检测到访问 URL", "检测到访问 URL: " + url, "点击查看图片", { "open-url": url });

        // 重定向到浏览器
        $done({
            response: {
                status: 302,
                headers: {
                    "Location": url
                }
            }
        });
    } else {
        console.log("请求内容类型不匹配或用户代理包含浏览器标识");
        // 返回未修改的响应体
        $done({});
    }
} else {
    console.log("$request 未定义");
    // 如果 $request 未定义，返回未修改的响应体
    $done({});
}
