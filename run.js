const url = $request.url;
const contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
const userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

// 检查是否为图片类型并且请求头中不包含浏览器的标识
if (url.includes("storage.googleapis.com") && contentType.includes('image') && !userAgent.includes('Mozilla')) {
    const lastImageUrl = $persistentStore.read("last_image_url");

    // 检查是否为新图片
    if (lastImageUrl !== url) {
        $persistentStore.write(url, "last_image_url");
        console.log(`检测到新图片: ${url}`);

        // 更新面板内容
        $done({
            title: "检测到图片",
            content: `点击查看图片: ${url}`,
            icon: url,
            url: url,
            backgroundColor: "#663399"
        });
    } else {
        $done({});
    }
} else {
    $done({});
}
