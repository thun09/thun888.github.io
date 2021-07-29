/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","9ade1d86299577ea8c8bf0c06652bc8a"],["/2020/hexo更新pages出错应急方法/index.html","6569516188a4cad243f3452637c3d988"],["/2020/定时关机/index.html","312bb33bbc0e114e05919aa592cee8bf"],["/2020/弹出C盘の快乐/index.html","548aa7e8ba0ad62742dadfac732bb33c"],["/2020/杂物/index.html","1f44fd665160b48e04693c2e22c67674"],["/2020/来在MC里玩电脑/index.html","a663a18c19e920034034f2e4236670f4"],["/2020/现已通过myssl认证/index.html","0967176bae3cdea32951d81a77d2269b"],["/2020/用batocera搭建属于你的游戏天地/index.html","e3d8baf07921cf162b9e6a3c69edb2e6"],["/2021/GitHub打不开的临时方法/index.html","d0f2f17bd6601661c10f12b89574cb23"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","e570744f9cf8b7732081020034d0f6ac"],["/2021/为Stellar主题添加HPP说说功能/index.html","f4c067691b91ad34aae34cc302f8edff"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","c376b09e9ef46c2ea49489841802a711"],["/2021/免费游玩《戴森球计划》/index.html","feb42b96baafe77129bc63e09196122a"],["/2021/搭建Teambition网盘的目录索引/index.html","1a0db608e623dfb0f89c98d10babef32"],["/2021/解决Clouddlare-Wrangler无法获取授权/index.html","3a5c9a7a0e0e0d48d2f240777596f2a1"],["/2021/解决VSCode安装Go扩展报错/index.html","6452dcacc2f09c64d745f1bb9d5404a3"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","5445937b13f1e17dd0320e231e599849"],["/2021/记一次简单的水卡破解/index.html","42bbe9b13072849ed0791965fd0b07b7"],["/2021/高质量地从ico转为svg/index.html","e9cea04f34a1e21d9df9a1ec55c7c108"],["/404.html","6a7fc79755f5d5838495da0bccecf5f1"],["/about/index.html","c4b738d7c05d27c0442ae3e5e13b1a1e"],["/archives/2020/01/index.html","3b88184628a7e8d53b9e6b6f8547161a"],["/archives/2020/08/index.html","274625ad20b8ac018f7d2cf29c1ccbed"],["/archives/2020/10/index.html","8295691ac862d82900d3c423e0fdd8ab"],["/archives/2020/11/index.html","39bf263e40f27b51f64ad72ed29296e9"],["/archives/2020/12/index.html","8a30545382a44c32b50b018a418a1798"],["/archives/2020/index.html","abc6a85c8317c79ec855dfacd9ed3073"],["/archives/2021/01/index.html","bc2676be8a2b1ca7494a46469ab83fde"],["/archives/2021/02/index.html","020ee6c2642c9dd4616d79143a19db7c"],["/archives/2021/04/index.html","88c3556deb3cca226e320ff7984ca6ac"],["/archives/2021/05/index.html","ff7932a3b1f8434378833731de14e8d7"],["/archives/2021/06/index.html","4321978801ae1f81e94aab0305eade75"],["/archives/2021/07/index.html","46502df7397df6950ed003eb065b62eb"],["/archives/2021/index.html","421704ea2e42e4191880b5ca9ec67657"],["/archives/2021/page/2/index.html","951de61529ffdc89b5a22751fba815d6"],["/archives/index.html","a8d9272a74f11c87de653e02f124e432"],["/archives/page/2/index.html","18c95d00a40a20c4e644dd32f0a0281b"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","800de3d63321ba49ee853bc15c4a0bd3"],["/friends/index.html","12082256461e700c5b95df4825b82b8e"],["/htalk/index.html","a4a96e06b0525261a8124208a6548999"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default1.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/favicon.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","84fd30866daebfba26c4d1c23ad34e76"],["/js/artalkconfig.js","02f75a69637569d26f818a7292f529fb"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","aa2435c12a8db3f299fa0040b4c2e851"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/morecss/heimu.css","893878b6ac5b5d900687a85244e409a4"],["/morecss/main.css","9f54b91517adaca5a282b5b1f832dd8a"],["/morecss/search.css","ef05d20824c365c1aa71f318522e2b7b"],["/page/2/index.html","5db2ec3cd512996657bcb89195311292"],["/say/index.html","e39d1bf8bd797f3077cf75975181bc8a"],["/sw-register.js","59931d1842fe162f3092f10d03677629"],["/tags/Clouddlare/index.html","42258d2e26783d76ca662fd49519e406"],["/tags/Go/index.html","08945c0a66f6f4723057b9b6130d5f5b"],["/tags/MIUI/index.html","1ef1005a955179812ee57a3235a80785"],["/tags/Minecraft/index.html","d7e4da4f0f999838b6ff673e2dee010b"],["/tags/blog/index.html","901d5a234d3b6657c5f2931268dddbb8"],["/tags/cmd命令/index.html","788280c7a0ac8d01c07ef47f704140dd"],["/tags/free/index.html","74dc7805a896f2d29d65ce3ec8227f38"],["/tags/github/index.html","65d42e6b8310496db6c22865cc327a17"],["/tags/index.html","1e299b102b3b5233cd928f906785c601"],["/tags/linux/index.html","8240bfac7ca475058a79fe72d0534d63"],["/tags/oneindex/index.html","702a09ebfcd8bac404cb432d2ed134b2"],["/tags/ssl认证/index.html","156d2acc0867fa0fb4dda5b6fb302fd2"],["/tags/web/index.html","c4c0e6533432f15b01fd2b911d3122ee"],["/tags/甜糖/index.html","7c1c55af1d4bbd294244b404153e1407"],["/tags/网站/index.html","dde7d8ef970c34d6cb3607e1e3a0ef55"],["/tags/转换/index.html","2af2b4265a683887d9fa535ff7d2a0e3"],["/tools/ghcdn/css.css","86ac5a43f4f56a743f71bf8aae905965"],["/tools/ghcdn/index.css","20c89d2537d1a9fa5bc9390e1be84501"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","07fc363020a16c58831766d5be2e1ca2"],["/wiki/Artalk/QandA.html","52254e6e164f41f647915dce11816a04"],["/wiki/Artalk/about.html","58b66235830856cf80b1fb57173a0a90"],["/wiki/Artalk/develop.html","045eea2e912acf2e5e01c3224f86665d"],["/wiki/Artalk/index.html","cc19741e259becf5e7876d015734c475"],["/wiki/Artalk/install.html","06725174a266e197c11edb77368816ad"],["/wiki/Artalk/more-url.html","28ae5104cf0585fdfaeb5fb82322adca"],["/wiki/Artalk/use.html","cc9ec06d65d06a76647c854a50157fab"],["/wiki/categories/文档/index.html","7d94c3d1fd9db679aac20de25f4587fe"],["/wiki/index.html","0297be4bae23a127f84515c875fa8ba6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
