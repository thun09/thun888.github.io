/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","8347c056b3968ba777cdc9d311d8c3ce"],["/2020/hexo更新pages出错应急方法/index.html","04634cec015f534c39de94c46e32c6c9"],["/2020/定时关机/index.html","5ac20629ed69e5d5f001e932db3a72bb"],["/2020/弹出C盘の快乐/index.html","77255e715ff4ef6813577a2cf144d5d7"],["/2020/杂物/index.html","e428a03d862cb66e1ad247fe66d20ab7"],["/2020/来在MC里玩电脑/index.html","178b9b874f3744eab48ccaa661d0f92a"],["/2020/现已通过myssl认证/index.html","20d84ef341baa1f574112e5c4bf13365"],["/2020/用batocera搭建属于你的游戏天地/index.html","f92160bd358a5e70c5936000ce57670f"],["/2021/GitHub打不开的临时方法/index.html","d299b2a2bf3674311e8ee9a481f13fa0"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","0f63ea6a72202ffc3bbbfa23170edcef"],["/2021/为Stellar主题添加HPP说说功能/index.html","90629394dddb70ee6b198b5b61450837"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","d8a11281c69afc90db7319b59b24125c"],["/2021/免费游玩《戴森球计划》/index.html","8179c3bd3f3de3c5cbc97c96048e4a3f"],["/2021/搭建Teambition网盘的目录索引/index.html","9965c004b2cae0cbda8e719d382e1b66"],["/2021/解决Clouddlare-Wrangler无法获取授权/index.html","f83f407feb72cdaa3b05e82bc530f5fc"],["/2021/解决VSCode安装Go扩展报错/index.html","a4e274b6129951669cef9b00d1e70971"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","3f36f160475db59817308437a3487948"],["/2021/记一次简单的水卡破解/index.html","d335c62650356329a26cd8a033f545d7"],["/2021/高质量地从ico转为svg/index.html","c55dc7dae8615e702497f1d9ba1bb12b"],["/404.html","bdbbd0765eeff852bc6b71cb01d34298"],["/about/index.html","2e0c124bc3e2a26d7a862f2dd52d81aa"],["/archives/2020/01/index.html","3f30f8064aee165ef44d32fcc15e58d4"],["/archives/2020/08/index.html","ab856e37e9571c281eff4baf2a145036"],["/archives/2020/10/index.html","40095631bcb3763e3d47718d549a238c"],["/archives/2020/11/index.html","6df4c7b90a6517082663dfb557bb556b"],["/archives/2020/12/index.html","952d5d8d08dfa1cb653b3fd51248bb70"],["/archives/2020/index.html","9404c21dc236b8706f37e2ab8e8d8cf3"],["/archives/2021/01/index.html","b1e3ca6a2eecd190181ba52680086b6e"],["/archives/2021/02/index.html","a1c44fcd2a2862a6d84b7af852d27ab6"],["/archives/2021/04/index.html","888252588f764e9b5c604c9f4e8d094a"],["/archives/2021/05/index.html","71ad4925d24d6dcf57b53305ef419441"],["/archives/2021/06/index.html","863d2ee527d36f0a5c4f57fb444882ab"],["/archives/2021/07/index.html","dbd1753a73437e971969c6f67bf0ead3"],["/archives/2021/index.html","63162af9a6fe95aebfa1612595f41ee2"],["/archives/2021/page/2/index.html","e827d46a3d083c12301d4f9e297d6da4"],["/archives/index.html","17e751dbd48676cb67df6fd14fb31e1b"],["/archives/page/2/index.html","3088d33c7448fec3ba2f839f2d276cfa"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","800de3d63321ba49ee853bc15c4a0bd3"],["/friends/index.html","b214df021635d981165742e16a3fa6d5"],["/htalk/index.html","72d1bc61f7d269880b216d5608df55ec"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default1.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/favicon.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","725a35d8c762adfdbce5da865b091f10"],["/js/artalkconfig.js","02f75a69637569d26f818a7292f529fb"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","aa2435c12a8db3f299fa0040b4c2e851"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/morecss/heimu.css","893878b6ac5b5d900687a85244e409a4"],["/morecss/main.css","9f54b91517adaca5a282b5b1f832dd8a"],["/morecss/search.css","ef05d20824c365c1aa71f318522e2b7b"],["/page/2/index.html","21a1646e6e2cc68f0e99882285ca57fd"],["/say/index.html","f3da268be3b7dcfc847674149c10e7d2"],["/sw-register.js","96f09530a8c5a74a7f2b66e5169c95bf"],["/tags/Clouddlare/index.html","faf49f17d286f331057a8b298370cf32"],["/tags/Go/index.html","9fe982f37871392bc0a983f821736214"],["/tags/MIUI/index.html","fb7e7d76afaaff17c33b9b14d61abfb1"],["/tags/Minecraft/index.html","0582303e9c675e70cddcdd5fd234e368"],["/tags/blog/index.html","796991debcebc05e454db7968b3eeae3"],["/tags/cmd命令/index.html","1c247d9d685e391b3d867865ece30fc8"],["/tags/free/index.html","4ef941aee77f9f2c9b6cc6de3c578ff3"],["/tags/github/index.html","7b5dbbf01963553891ab95cad165bb11"],["/tags/index.html","25ef4a1c37e490e16aa1f9b94f8681d5"],["/tags/linux/index.html","1e54121f3d16b97e42f05bda50c25168"],["/tags/oneindex/index.html","03043ab6aa63a516cbbb92a3e5b7a286"],["/tags/ssl认证/index.html","4b246d7d674432671f9d71d7b0fa27e0"],["/tags/web/index.html","8bc32f9a3f6595f7cd52d5cd04a1184c"],["/tags/甜糖/index.html","7619761260f255e74e4068d7c162f8e2"],["/tags/网站/index.html","73d1d7118ed012177ab5e25291440f0b"],["/tags/转换/index.html","29e5197e391f5e6913a07df977e6aaaf"],["/tools/ghcdn/css.css","86ac5a43f4f56a743f71bf8aae905965"],["/tools/ghcdn/index.css","20c89d2537d1a9fa5bc9390e1be84501"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","3297e4fb87e790bff40ee965201d6a5a"],["/wiki/Artalk/QandA.html","ef5f39078cd2dfa8c957942e3396506f"],["/wiki/Artalk/about.html","2a168e728f6827210818d3cf3551bac2"],["/wiki/Artalk/develop.html","f40ca860f985d58e42e7c2a7f6baf25a"],["/wiki/Artalk/index.html","122e39e6262220ea6986d2cf39328b31"],["/wiki/Artalk/install.html","6c9bd7da626215a2f010aead40d298c3"],["/wiki/Artalk/more-url.html","536f033f5803a74aadc662fbd24beb47"],["/wiki/Artalk/use.html","9c6ca47d02bc0e8ebd25a8229fb35e6d"],["/wiki/categories/文档/index.html","efde50eefdb510e9f8de061def5b7f89"],["/wiki/index.html","e169cf62a34a58d85b365cb776933a65"]];
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
