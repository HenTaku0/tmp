var latestImageUrl = $persistentStore.read("latestSpotifyImage");

console.log("读取到的最新图片 URL: " + latestImageUrl); // 输出读取到的 URL

if (latestImageUrl) {
    $done({
        title: '最新 Spotify 图片',
        content: '点击查看图片',
        icon: latestImageUrl,
        backgroundColor: '#1DB954',
        url: latestImageUrl
    });
} else {
    $done({
        title: 'Spotify 图片',
        content: '没有新图片',
        icon: 'photo',
        backgroundColor: '#1DB954'
    });
}
