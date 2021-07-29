/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","aba680dcfc6a8b45ebc1d27b3c7daf2a"],["/2020/hexo更新pages出错应急方法/index.html","c7d3dac53031a560f6c04653baccab8d"],["/2020/定时关机/index.html","d0681127e9361c80713477e072f43929"],["/2020/弹出C盘の快乐/index.html","2d5d2fe64f8e21c4adc29da002bd7826"],["/2020/杂物/index.html","ba1b536c9dba2c1708dd2c5b16eb16a7"],["/2020/来在MC里玩电脑/index.html","d3bc3fa9e7fffdb211781db9b591ded6"],["/2020/现已通过myssl认证/index.html","69ea858536df53c4c95865e7e1d82628"],["/2020/用batocera搭建属于你的游戏天地/index.html","0ca9ce5bcde4bd99c5cb6a30072baa2e"],["/2021/GitHub打不开的临时方法/index.html","20edfe019b6c11dca4a3c82af8bdb468"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","c06fad4fee0b84c9fa989b63b60278da"],["/2021/为Stellar主题添加HPP说说功能/index.html","b3d95e4a80086aaa51a7a653a9292991"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","b39d922454dbdf8b00593423c530c4ac"],["/2021/免费游玩《戴森球计划》/index.html","d9ab93669cd015493ccdeb8adb9b1991"],["/2021/搭建Teambition网盘的目录索引/index.html","1185f274bc6fd9f509912f09bd5f7778"],["/2021/解决VSCode安装Go扩展报错/index.html","43334ac0af269d59822629ad5168c564"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","9c5ec2143c16309af6ae7d155c353b4a"],["/2021/记一次简单的水卡破解/index.html","6896bcf31a87c62ba589dfe8a6d54fbe"],["/2021/高质量地从ico转为svg/index.html","fbb6cd831a15ba64e271d62492710774"],["/404.html","e6ede3bf1eef8d8070e223840e03c073"],["/about/index.html","6b70405e0331c24a3687fe86fee52e4e"],["/archives/2020/01/index.html","87de1df77de24bf93033f0c5e6268dab"],["/archives/2020/08/index.html","1ad25cefe7ccbd2a2faf6492f0d924e4"],["/archives/2020/10/index.html","62356dcd9be3f51870b3ee9a48160c9a"],["/archives/2020/11/index.html","33019fa699522dc195f791ed224abd73"],["/archives/2020/12/index.html","61f24d4fdc138ddc15578214a0c8d45d"],["/archives/2020/index.html","4d2d9cc5f8f499a2983e72fb94fdcea3"],["/archives/2021/01/index.html","789567ffb46e71113ef00a3fb63cbee1"],["/archives/2021/02/index.html","580eb5a5690f4da3cea6658476f9cc20"],["/archives/2021/04/index.html","6c69b6303573f636f87a87c95c24fbcc"],["/archives/2021/05/index.html","b73df1730208725a64f00b8cad29bf46"],["/archives/2021/06/index.html","b739ee3f7d032e2f53e03da6e89e6c9b"],["/archives/2021/07/index.html","02a0b07e9533cb0c6a81eaf3b2c631c9"],["/archives/2021/index.html","1d564df46d609b8a14c5986aa2d3d332"],["/archives/index.html","5eb5181c3d8c8c5e02953f5004f5ef17"],["/archives/page/2/index.html","f6dd0a79aaeacc39d09e0f1837a51eeb"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","800de3d63321ba49ee853bc15c4a0bd3"],["/friends/index.html","6634e8c4949ac0eee972266f670dc0e7"],["/htalk/index.html","f60a1f260cc9341b9531aa567c7983fe"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default1.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/favicon.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","a110a00f56c8cb91f796aa32c8725b5f"],["/js/artalkconfig.js","ecdf4f0f388693332962c5a6ab7c04b4"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","aa2435c12a8db3f299fa0040b4c2e851"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/morecss/heimu.css","893878b6ac5b5d900687a85244e409a4"],["/morecss/main.css","9f54b91517adaca5a282b5b1f832dd8a"],["/morecss/search.css","ef05d20824c365c1aa71f318522e2b7b"],["/page/2/index.html","5de5726b9d28738cf7d3b976ba9d2459"],["/sw-register.js","148781dbac2f3610b901d3f5cfd35934"],["/tags/Go/index.html","4d9904c926165facf82266aef1a0d5ff"],["/tags/MIUI/index.html","0019bd23b71d4a0ebd8473b1fa36809d"],["/tags/Minecraft/index.html","37de3638f8112ea6304b1673e7783330"],["/tags/blog/index.html","7ddcee02d99b6ba5518b8b85c6793bb3"],["/tags/cmd命令/index.html","f0feb276f86b4a45e882376cd2c77fe0"],["/tags/free/index.html","facfa2df703163dd4eafdd5200fb1f81"],["/tags/github/index.html","f51623b8c0c23f39b87f7d30f713442a"],["/tags/index.html","7a8ab55184cd32492b5e0c19b238971b"],["/tags/linux/index.html","b32e6d2d9f00c1999cfd27dc0ef0bd1d"],["/tags/oneindex/index.html","262924ae1821f17444bcfa3f3b9d181c"],["/tags/ssl认证/index.html","4f3aa455bbdae6c717335d1d0c62ed2e"],["/tags/web/index.html","071aa51f0a8c3e81d4d046319d0f7cc4"],["/tags/甜糖/index.html","7cc3cd577a960c3c6f72380783676880"],["/tags/网站/index.html","4218234c44c214e4f5bdd5f426331c24"],["/tags/转换/index.html","e49a614f599106242d1df14413d17b90"],["/tools/ghcdn/css.css","86ac5a43f4f56a743f71bf8aae905965"],["/tools/ghcdn/index.css","20c89d2537d1a9fa5bc9390e1be84501"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","d460b2c502fc7fdc5d0985451f87faef"],["/wiki/Artalk/QandA.html","49e96124c55b720b39e4df89d6f81fc2"],["/wiki/Artalk/about.html","c50fded30faed0c6ab407dc955de817d"],["/wiki/Artalk/develop.html","062debdb31150c93d23000b2fe7114fe"],["/wiki/Artalk/index.html","1e79ed97d7b95d6a98ba27f65061a42a"],["/wiki/Artalk/install.html","a11c7bc46dfb7bf6b77c740dffeef068"],["/wiki/Artalk/more-url.html","4a3e0b7df6d107cd5994cf397edd43b7"],["/wiki/Artalk/use.html","9043dd65aecdf709839ad57c2cdbae7f"],["/wiki/categories/文档/index.html","d0bd4fe5d5874627a0ced32f74578016"],["/wiki/index.html","c769144e8cadd8a1f7b2f3439a51f156"]];
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
