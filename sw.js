/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","53dd4be83ae9a07a3922b8e58da38f84"],["/2020/hexo更新pages出错应急方法/index.html","665ff31539d2e63090d8b9ad41b21628"],["/2020/定时关机/index.html","35767a0aa0fd1a3474411548790d3c09"],["/2020/弹出C盘の快乐/index.html","e95c29bc1280231680a465e23cdb4cc8"],["/2020/杂物/index.html","95193f8df148a914c9376e41199bcefd"],["/2020/来在MC里玩电脑/index.html","bf44e90212e11e3943090c30e4eae829"],["/2020/现已通过myssl认证/index.html","d9b7dc87154d8c198f611726bb3d5d80"],["/2020/用batocera搭建属于你的游戏天地/index.html","e1fab403833ae96ed5e4fc9c93633672"],["/2021/GitHub打不开的临时方法/index.html","de6404d9a28f04716cc816fee459f50e"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","8be6ce6a421c0e2943a853a4c935f2ae"],["/2021/为Stellar主题添加HPP说说功能/index.html","397cb2efa7207caaa06913b7d1ac3688"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","da8b806fa9e658aa7faa36d75567e6ba"],["/2021/免费游玩《戴森球计划》/index.html","3a4903c9bf99028d01cf56b23c7565fc"],["/2021/搭建Teambition网盘的目录索引/index.html","f70d6408d7ccd04bd2f3e52da6876c74"],["/2021/解决VSCode安装Go扩展报错/index.html","023e58d8d9f83dfd1caec1c1b79c3b7c"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","b609a992c1ded5629b282bb4414e5e4e"],["/2021/记一次简单的水卡破解/index.html","128e6d5d7bca03797cc08747f31f97fe"],["/2021/高质量地从ico转为svg/index.html","962b3abd3bb45fa80e86eb8e71485299"],["/404.html","4534047970a28c23361b63c8f14468f4"],["/about/index.html","f0ce1942038bcb4a633d5164d73433f8"],["/archives/2020/01/index.html","077d630908d95501a17d1c6618fd5c8e"],["/archives/2020/08/index.html","5449728b329698725f3a4dc62e7008c7"],["/archives/2020/10/index.html","42b0d48bc299efd3a99bd629a07559d4"],["/archives/2020/11/index.html","abfe81007be62555cc7aff5f0a9a60e2"],["/archives/2020/12/index.html","a7e5887405bd763add1b71ec206378cf"],["/archives/2020/index.html","a5a9883f744ede114c9bfc66474145fa"],["/archives/2021/01/index.html","7211963a95abeb7b13a44a1a3bf83664"],["/archives/2021/02/index.html","86178275d58b650735d890b11fd35a17"],["/archives/2021/04/index.html","1f20dbf4b4f2698e723d7e8fbeb547bb"],["/archives/2021/05/index.html","0adcd980bdd3fdceb6b9332ca11db952"],["/archives/2021/06/index.html","d0c997f4afd0e69afecbbe94a9c0a16d"],["/archives/2021/07/index.html","a6e42014c3f2bc4b3923a05ed10fbdfc"],["/archives/2021/index.html","b923467f22a8f7082c1d01491f7e0449"],["/archives/index.html","37e8b7356d1439df66a96f8abbc68e3b"],["/archives/page/2/index.html","a9c84b247f31a4193d00fd243c231f20"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","800de3d63321ba49ee853bc15c4a0bd3"],["/htalk/index.html","7397d81b266b7565a20f134d5d5e9a82"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default1.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/favicon.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","c9bde5e9733b08cb8f24275cdd48792c"],["/js/artalkconfig.js","ecdf4f0f388693332962c5a6ab7c04b4"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","aa2435c12a8db3f299fa0040b4c2e851"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/morecss/heimu.css","893878b6ac5b5d900687a85244e409a4"],["/morecss/main.css","9f54b91517adaca5a282b5b1f832dd8a"],["/morecss/search.css","ef05d20824c365c1aa71f318522e2b7b"],["/page/2/index.html","ccde3111874bbac3170b8c4b52f493c4"],["/sw-register.js","1a45c0424e38caf87dcdd40d9f8afbff"],["/tags/Go/index.html","6db5e9079746734f01cd7b8f3cbafb2e"],["/tags/MIUI/index.html","68438c5ec5218db59d50eff267208163"],["/tags/Minecraft/index.html","d4002a8ca753c098fd0590f9b919ec89"],["/tags/blog/index.html","f2b4558e17e41c98550c7657ba872d52"],["/tags/cmd命令/index.html","30ac4e131e073bc6176cf7371a328585"],["/tags/free/index.html","eef0cdfa1bbe9ac28f481393ea817810"],["/tags/github/index.html","96657c0497639491dfe4725f6b35c4ca"],["/tags/index.html","7f1b683e12036768f325cdadd71cea58"],["/tags/linux/index.html","ddf4fe47e2b97d391987e72b1bc78464"],["/tags/oneindex/index.html","0d7620e294e82a80fbfa65c7bf39ffeb"],["/tags/ssl认证/index.html","f1976e3f0402fa0957e9d7e433a1342f"],["/tags/web/index.html","27cd13709e8f4466a261657e0ee82931"],["/tags/甜糖/index.html","b1d2eb3314d56175b6b3bc32109cbadd"],["/tags/网站/index.html","09f731454390147d9a6e960abda9331e"],["/tags/转换/index.html","21cc28622178e9be002962c66022c669"],["/tools/ghcdn/css.css","86ac5a43f4f56a743f71bf8aae905965"],["/tools/ghcdn/index.css","20c89d2537d1a9fa5bc9390e1be84501"],["/tools/ghcdn/index.html","4813212a110ea01104b27fd227a51cfd"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","98fff515cc1703a31acaaee53ae2b6c2"],["/wiki/Artalk/QandA.html","953105d6dee6912f4dcd2e6d08dc42bc"],["/wiki/Artalk/about.html","ee52ee9df96c9d9d90eb1f20da76da1d"],["/wiki/Artalk/develop.html","4ffffadf333a83ecb70eba716fbb0e26"],["/wiki/Artalk/index.html","08885d8db55259eb3ea77f749e91f5ae"],["/wiki/Artalk/install.html","359afaa55cd9898a3d40db5e66f224d7"],["/wiki/Artalk/more-url.html","8acb1ba1de34c09d5fe0c58f7e675334"],["/wiki/Artalk/use.html","09a75959ed9796382ff5bfe49a6eb9d8"],["/wiki/categories/文档/index.html","324597e72602535aaf680fada450d4af"],["/wiki/index.html","3f23895d67b4a64e5a6b589e70d15c30"]];
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
