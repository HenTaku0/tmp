const url = $request.url;
const contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
const userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

// 检查是否为图片类型并且请求头中不包含浏览器的标识
if (url.includes("storage.googleapis.com") && contentType.includes('image') && !userAgent.includes('Mozilla')) {
    console.log(`检测到图片且非浏览器请求: ${url}`);
    // 保存 URL 到持久化存储中
    $persistentStore.write(url, "lastDetectedImageUrl");

    // 下载图片并保存到相册
    $httpClient.get(url, { 'binary-mode': true }, (error, response, data) => {
        if (error) {
            console.log(`下载图片失败: ${error}`);
            $persistentStore.write("下载图片失败", "imageDownloadStatus");
        } else {
            // 保存图片到相册
            const imagePath = "/tmp/image.jpg";
            $fs.writeFile(imagePath, data, 'binary');
            $photo.save(imagePath, (success) => {
                if (success) {
                    console.log(`图片已保存到相册: ${url}`);
                    $persistentStore.write("图片已保存到相册", "imageDownloadStatus");
                } else {
                    console.log(`保存图片到相册失败: ${url}`);
                    $persistentStore.write("保存图片到相册失败", "imageDownloadStatus");
                }
            });
        }
    });
    $done({});
} else {
    // 返回未修改的响应体
    $done({});
}
