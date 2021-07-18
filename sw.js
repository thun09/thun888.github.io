/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","a4899d75f914e5d5eb9c6d40d8a2d091"],["/2020/hexo更新pages出错应急方法/index.html","7e8729c9449943ab872bed07b0df4500"],["/2020/定时关机/index.html","ce42e9f90d5c5ed2d54e6401ad652f5f"],["/2020/弹出C盘の快乐/index.html","a60d1c2e09af442064cd30008051c1d9"],["/2020/杂物/index.html","76313dba92b20280369a4c42513dfca8"],["/2020/来在MC里玩电脑/index.html","cf71d80b12a038e0ab72f120eff7891c"],["/2020/现已通过myssl认证/index.html","a79cee0f17f789c1fc3b428dcaf0a62e"],["/2020/用batocera搭建属于你的游戏天地/index.html","4ffb599710a0469e569f81ec143337d0"],["/2021/GitHub打不开的临时方法/index.html","b985178e64b7c90560dce3a9e9f0e7a9"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","93e1683d34dfebc4bfb23253c044b758"],["/2021/为Stellar主题添加HPP说说功能/index.html","532b1f6be8e1efba2e99e817a231a578"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","e4641eba8b7ea303a50a58e85bf8de15"],["/2021/免费游玩《戴森球计划》/index.html","6e235c8ab0f0be87764f809c7243b05e"],["/2021/搭建Teambition网盘的目录索引/index.html","8bf1fc7a408b668470e87bc4cae261fa"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","9083ffda5336d89429ba7e1d4678a7e9"],["/2021/记一次简单的水卡破解/index.html","97af9737ca44a102da4091071b9a2293"],["/2021/高质量地从ico转为svg/index.html","265f659617b42ab65f248ebfb258a4b0"],["/404.html","96038b1e99f52b5f97640bb32b6f366d"],["/about/index.html","222e56195bfca333c170edb91ce76329"],["/archives/2020/01/index.html","b54739dbfbc7faa1a918dc770bc4a41a"],["/archives/2020/08/index.html","4ef897abc94cb8422033499cbce1033f"],["/archives/2020/10/index.html","11529804596b5e381ab43551bafc8775"],["/archives/2020/11/index.html","af2172c62d21297bb44b23ad6388b7b2"],["/archives/2020/12/index.html","d925bc337f787a94ea6cf6515c361dc0"],["/archives/2020/index.html","360fdea4f39add0f0c1904ab4decf229"],["/archives/2021/01/index.html","6f7d5d28bd9e4ea320f1f657d757cb8c"],["/archives/2021/02/index.html","6376e21df4a33d4d8c2cc5e3595d920b"],["/archives/2021/04/index.html","5aa836da4e8c394dabc3d26e34df702e"],["/archives/2021/05/index.html","31be4600b11e36692ec08eaa27a76ea6"],["/archives/2021/06/index.html","6a7717616bf79fbb179736be4643b83b"],["/archives/2021/07/index.html","4d5310bf4f203ab8c9a23ff17d302258"],["/archives/2021/index.html","cd7aac807f4412c6f0d63bbc136093b8"],["/archives/index.html","822d7bf3283819bab4fd5b941831126b"],["/archives/page/2/index.html","5c242e36c2803125baf224026343dbf8"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","800de3d63321ba49ee853bc15c4a0bd3"],["/htalk/index.html","f113cb92620f001a1ba486f74c80c720"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default1.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/favicon.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","965569d0f6368c245f1309e28a1e9ecd"],["/js/artalkconfig.js","916f027a1550697b3ac8574dc1f41f1f"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","8fe2dd1c34e84c3bf34af83dc234ad41"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/morecss/main.css","61cacec41a5987b9b5c6109221329340"],["/page/2/index.html","5151017135fa684c719f87cb948b7615"],["/sw-register.js","76d0b629761f0db4bd26441ca0f6fa2a"],["/tags/MIUI/index.html","8cb497f3ca9f68291d4007536f96cbee"],["/tags/Minecraft/index.html","81ec73e08c75cad27812724abc9234fa"],["/tags/blog/index.html","00a641c2834683e51e8125033f5bef9c"],["/tags/cmd命令/index.html","c08b054f89c4fd39e5e5e8fd027d43c8"],["/tags/free/index.html","98ff2468f02e56b4f534dce6ffeaf2d1"],["/tags/github/index.html","352ff609ec2a80612258f2c605ba3b1e"],["/tags/index.html","0eab3c1aab9d428ed2c0ab0ff8317281"],["/tags/linux/index.html","3fab5de02609fff5c2729f25d456690a"],["/tags/oneindex/index.html","0edea595ba761e90d8d60325dcec12a4"],["/tags/ssl认证/index.html","7970fe30fa8e2199494c94c8160a6535"],["/tags/web/index.html","a61f63e602c4a0cef6e9827f7d9ef64c"],["/tags/甜糖/index.html","8b180892d9e54a507239ae573bd4e83f"],["/tags/网站/index.html","2dce4991c3530e658ae25833bb0a9b6b"],["/tags/转换/index.html","dd6a9e1b451a497141785a408b16fcfc"],["/tools/ghcdn/css.css","86ac5a43f4f56a743f71bf8aae905965"],["/tools/ghcdn/index.css","20c89d2537d1a9fa5bc9390e1be84501"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","e3cec2616e1214f3c65f37a3a0a2aa86"],["/wiki/Artalk/QandA.html","1347e7663996095cfb24c349893c8a1f"],["/wiki/Artalk/about.html","1589a274c700bf435587ae6474d3d753"],["/wiki/Artalk/develop.html","03e2ebf27670f4ebfdd51a5288984777"],["/wiki/Artalk/index.html","8d74e1cf7d81820b46b39fbf55601ce2"],["/wiki/Artalk/install.html","00b9e094829d5f251fa6b3a11b14f18f"],["/wiki/Artalk/more-url.html","73805f8f9cc0db635814e559a5775b96"],["/wiki/Artalk/use.html","824ca9087a80cfa723c96aada0d907c4"],["/wiki/categories/文档/index.html","cb44e162da9b855065a3180137cb7831"],["/wiki/index.html","587de1d557624f3614d21bf02ac8b831"]];
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
