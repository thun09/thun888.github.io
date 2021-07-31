/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","5b5ba6e06f0bf1a4a2ce6d97b93390a9"],["/2020/hexo更新pages出错应急方法/index.html","567230b5d07f34dca8994851f012160d"],["/2020/定时关机/index.html","0a5268226315776803fd760fc5d546d4"],["/2020/弹出C盘の快乐/index.html","3b3580801480c2274879ee4e09bb1060"],["/2020/杂物/index.html","2028f9dae332a51feb1dee15ae075647"],["/2020/来在MC里玩电脑/index.html","bc200166229e622d59997e1211e7411e"],["/2020/现已通过myssl认证/index.html","4a19ebcfb03a7d65dcae5d66d02e5d6b"],["/2020/用batocera搭建属于你的游戏天地/index.html","a172d8c0bae0b99878beb51f4bdf16ed"],["/2021/GitHub打不开的临时方法/index.html","9cef19fd387437c8ebc51313ea1137b3"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","14c27ebe5bc543fe54af2ddc1f476546"],["/2021/为Stellar主题添加HPP说说功能/index.html","fe49a15e1f473e65e6935c1d14411df7"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","534d018f8cd6bc8d487f1f4710b9f80d"],["/2021/免费游玩《戴森球计划》/index.html","ef00157b3a795447188a6d260314db00"],["/2021/搭建Teambition网盘的目录索引/index.html","b9274441419fcb926e7a87f99f4cd5a2"],["/2021/解决Clouddlare-Wrangler无法获取授权/index.html","aa2b7d6b0598460a7f39cb23a28bd5bc"],["/2021/解决VSCode安装Go扩展报错/index.html","7f5d09f47609792b91f733b5880d31db"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","f9bca4eb0b5c37d62209e5f7fabfe6ae"],["/2021/记一次简单的水卡破解/index.html","e4f2811e1a3cf83c1ade442838ff3d72"],["/2021/高质量地从ico转为svg/index.html","94656bb571f73175d1a22b06688382f6"],["/404.html","dfef1b15031fa5981a3f5cd6984a6894"],["/about/index.html","e9e0f04877ea4918dabf6c3ccbdeda1b"],["/archives/2020/01/index.html","cb0fcde4ac7edfc9351a9434d2e34475"],["/archives/2020/08/index.html","a779eda3c15e6d310bfce340eb2eccfb"],["/archives/2020/10/index.html","9ab6d6dae7dcfb65bd96eba29da18c57"],["/archives/2020/11/index.html","37e25962af937d750ee761a1b09a0d00"],["/archives/2020/12/index.html","23b3df9470ce8a275c90b03d90d82753"],["/archives/2020/index.html","78060f68cd8b933360810cfc84cc5532"],["/archives/2021/01/index.html","deca7f4d984edffa6c808a42f696b516"],["/archives/2021/02/index.html","9e7d4b1d9a910eade2f256faada05df8"],["/archives/2021/04/index.html","0d4b6e156e95e9cf19bdfd22e95a86b0"],["/archives/2021/05/index.html","2ea45dff056292cce032bb42c3d8f756"],["/archives/2021/06/index.html","621cd3538268e7e0359d1acab0add81d"],["/archives/2021/07/index.html","d366df7943db2b5e01208d4e3f1ca900"],["/archives/2021/index.html","ab686eadb2cea1b0fdf20f69152a8758"],["/archives/2021/page/2/index.html","3bc729a0541094ba61a716ac4d783b06"],["/archives/index.html","98af885b30317fc73c388f3f0ba65573"],["/archives/page/2/index.html","78d4f062f755e2ebaa04729a66c46db1"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","800de3d63321ba49ee853bc15c4a0bd3"],["/friends/index.html","4aac8e0c80dc77e0d6620520bc4b0d5d"],["/htalk/index.html","d35e38dff7ad3898738adfe48d0f26fa"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default1.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/favicon.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","e0aa85007eb6b1147be0c40165b63716"],["/js/artalkconfig.js","02f75a69637569d26f818a7292f529fb"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","aa2435c12a8db3f299fa0040b4c2e851"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/morecss/heimu.css","893878b6ac5b5d900687a85244e409a4"],["/morecss/main.css","9f54b91517adaca5a282b5b1f832dd8a"],["/morecss/search.css","ef05d20824c365c1aa71f318522e2b7b"],["/page/2/index.html","0a51f5169e56b16a3a3da5d222f1a189"],["/say/index.html","df0c0b836effd3e6135c8e2491ff22e0"],["/sw-register.js","f221dc0a10a36f7484834c9f9d5856d2"],["/tags/Clouddlare/index.html","0258d15d868942c01d898a1d7b8773d0"],["/tags/Go/index.html","e1a7ddf803161ac8dbdb3be60aee1bba"],["/tags/MIUI/index.html","1b0a4d2cc8991b9fee6b60063909bfd0"],["/tags/Minecraft/index.html","af601190b12be8508ec6ee3a0c06e543"],["/tags/blog/index.html","3c2bed5acf7a6145fdf7aab31273e0f2"],["/tags/cmd命令/index.html","c2a8aec8e3408cffce48f7de98a391c1"],["/tags/free/index.html","0718bc00d400a287695ba8dc425a10fe"],["/tags/github/index.html","2dcd6094512ac7c40fd313331b2c92b7"],["/tags/index.html","f7adcb222e6c55ebf7efe1c7562fccd7"],["/tags/linux/index.html","1d1b9f0b68d50805db36009da1052e0e"],["/tags/oneindex/index.html","2a5455603d8da6700bff1c48b2ace453"],["/tags/ssl认证/index.html","159f0e6ff35b4efefa98a862a9cf884e"],["/tags/web/index.html","bf8bb5d0c36bad5337bff89247e434ae"],["/tags/甜糖/index.html","456b71d12680e0f63f8c2b696de8d6e1"],["/tags/网站/index.html","4d1e0e0038c79f6db72aa0f38e520628"],["/tags/转换/index.html","b6e83336090c5711be68125af852fe79"],["/tools/ghcdn/css.css","86ac5a43f4f56a743f71bf8aae905965"],["/tools/ghcdn/index.css","20c89d2537d1a9fa5bc9390e1be84501"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","f97a7911015d78fdc8279ece4e476ef0"],["/wiki/Artalk/QandA.html","07e753f168effb931d9adf49c8f4c3ff"],["/wiki/Artalk/about.html","fc2db486095ec1c65049aa2434450eeb"],["/wiki/Artalk/develop.html","c8bd827e7669ac7590b8335c049785e4"],["/wiki/Artalk/index.html","a2f837718ec05f94d3c30d9662a34c0d"],["/wiki/Artalk/install.html","b3502b842871befd03fd0f18ddd2d781"],["/wiki/Artalk/more-url.html","473af2c6a45507b146449ecadab3a218"],["/wiki/Artalk/use.html","9994d665487a52c68d67210514c328a3"],["/wiki/categories/文档/index.html","21c25b2cb6ba4c3f71d5fe9a03d0a6ce"],["/wiki/index.html","acc59a8c25bcd799c962d0ffd22f68c2"]];
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
