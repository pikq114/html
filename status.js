export default {
  async fetch(request, env) {
    const backendBase = "http://tw1.shdctw.com:20057";
    const statusPagePath = "/status/default"; // 这里换成你实际测试成功的 Slug 路径

    const url = new URL(request.url);

    // 如果用户访问的是根目录，强行指向公开状态页
    let targetPath = url.pathname;
    if (targetPath === "/" || targetPath === "") {
      targetPath = statusPagePath;
    }

    const targetUrl = backendBase + targetPath + url.search;

    let newRequest = new Request(targetUrl, request);
    // 必须设置正确的 Host，否则某些后端会拒绝访问
    newRequest.headers.set("Host", "tw1.shdctw.com");

    const response = await fetch(newRequest);

    // 如果是 HTML 页面且状态码是 200，我们可以返回内容
    return response;
  },
};
