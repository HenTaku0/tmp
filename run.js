console.log("执行简单通知脚本");

$notification.post("测试通知", "这是一个测试通知", "点击查看", { "open-url": "https://example.com" });

$done({});
