var latestImageUrl = $persistentStore.read("latestSpotifyImage");

console.log("读取到的最新图片 URL: " + latestImageUrl); // 输出读取到的 URL

if (latestImageUrl) {
    // 更新 Tile 内容并删除持久化存储中的 URL
    $done({
        title: '最近聆听的专辑',
        content: '点击查看图片',
        icon: latestImageUrl,
        backgroundColor: '#1DB954',
        url: latestImageUrl
    });
    $persistentStore.write("", "latestSpotifyImage"); // 删除持久化存储中的 URL
} else {
    $done({
        title: 'Spotify 图片',
        content: '没有新图片',
        icon: 'photo',
        backgroundColor: '#1DB954'
    });
}
