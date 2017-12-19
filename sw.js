/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["./index.html","f20f249be5feddcc2cf14ea6cafbf544"],["./manifest.json","1a1361b78feef910e1f93d552cfcf42b"],["./manifest.webapp","88a97d75eeb82f0706d9e324794dc81d"],["./static/img/1.png","f9d9fa548a351a07f91a86cea4f75098"],["./static/img/2.c9d0ac0.png","c9d0ac0e473a8624e771136b2526a4b5"],["./static/img/2.png","c9d0ac0e473a8624e771136b2526a4b5"],["./static/img/3.71e7117.png","71e7117b3f7e583ab2290194709e52f3"],["./static/img/3.png","71e7117b3f7e583ab2290194709e52f3"],["./static/img/logo.png","c2a605fbc0e687b2e1b4b90a7c445cdd"],["./static/img/logos/android-chrome-144x144.png","95a2c975c95437612aeab172156596c2"],["./static/img/logos/android-chrome-192x192.png","d9babbd8bf8cec3f74e407866cde7326"],["./static/img/logos/android-chrome-256x256.png","713e2f529663d22028f20bf7b5d182a0"],["./static/img/logos/android-chrome-36x36.png","6b97d501518835326c551a46b1c27729"],["./static/img/logos/android-chrome-384x384.png","94384c5cb803118ca0c7eac84c638d39"],["./static/img/logos/android-chrome-48x48.png","71aa1a8957ee41f44dae3b0c31435e06"],["./static/img/logos/android-chrome-512x512.png","5eff4c31f507e7143281f7239957cff5"],["./static/img/logos/android-chrome-72x72.png","ef711b55ce09ebed030b2ec0723f449a"],["./static/img/logos/android-chrome-96x96.png","ed2e90b9cf61e79002483aeb94f8bc37"],["./static/img/logos/apple-touch-icon-114x114.png","1f9fda85a8837a7d1540d58d7481f20b"],["./static/img/logos/apple-touch-icon-120x120.png","3173fba8a46e1b86219938583089850c"],["./static/img/logos/apple-touch-icon-144x144.png","419dc847916a26b5c9da5b9efea5d3fb"],["./static/img/logos/apple-touch-icon-152x152.png","e5021edadf2c0f5b7e2a1807b8b0f1ac"],["./static/img/logos/apple-touch-icon-167x167.png","fa5adea3696a962b5cf217e102d1f1a6"],["./static/img/logos/apple-touch-icon-180x180.png","d701e225581a9b61f95e29af7aba8961"],["./static/img/logos/apple-touch-icon-57x57.png","df360508d0d9dbac8397bd5b0cbe1be4"],["./static/img/logos/apple-touch-icon-60x60.png","99a126a167ec5f3aaae2e972a56c8a72"],["./static/img/logos/apple-touch-icon-72x72.png","21b5769d8324cec00673be2a0362a91f"],["./static/img/logos/apple-touch-icon-76x76.png","1ad5cdff74dd84091d4f38eb79bbd1a9"],["./static/img/logos/apple-touch-icon-precomposed.png","d701e225581a9b61f95e29af7aba8961"],["./static/img/logos/apple-touch-icon.png","d701e225581a9b61f95e29af7aba8961"],["./static/img/logos/apple-touch-startup-image-1182x2208.png","e4e1f5044e0c72ea3900d7c7ef725eaa"],["./static/img/logos/apple-touch-startup-image-1242x2148.png","d2ead58ab1b287053962f42f96b70400"],["./static/img/logos/apple-touch-startup-image-1496x2048.png","5de578a26630259bf2ef2841b67113b3"],["./static/img/logos/apple-touch-startup-image-1536x2008.png","9279b2b0bd7a16faf6c4fc1fdecc5b1a"],["./static/img/logos/apple-touch-startup-image-320x460.png","3f86d19d07baae6a1af450854c557fbc"],["./static/img/logos/apple-touch-startup-image-640x1096.png","a26ce2f9b8fdf03571850a866d64f178"],["./static/img/logos/apple-touch-startup-image-640x920.png","97894f521aef8e8de253199e6f0a38a6"],["./static/img/logos/apple-touch-startup-image-748x1024.png","a59117ce23a971705472de8d9cf1762c"],["./static/img/logos/apple-touch-startup-image-750x1294.png","8cb1c4d70b48ce7c0872357cda4ca3a7"],["./static/img/logos/apple-touch-startup-image-768x1004.png","cb7014db164263c37ebdc70ec2e12e12"],["./static/img/logos/browserconfig.xml","cd159f569536bad48eb667a55ec51f61"],["./static/img/logos/favicon-16x16.png","7d6c032fb096b584abab4022b4db8f11"],["./static/img/logos/favicon-32x32.png","905d09a7689844fc433a3a8136066349"],["./static/img/logos/favicon.ico","d43185483d2a9f1e05afcc716ee47fb4"],["./static/img/logos/firefox_app_128x128.png","1dc963c966da6ea45b9fa562b14d6f65"],["./static/img/logos/firefox_app_512x512.png","de5fac0c8400d058980df46707015e36"],["./static/img/logos/firefox_app_60x60.png","56c2e79495de8426a9eb48106fab2e84"],["./static/img/logos/manifest.json","6c560d0be539b7f33fd9cdbf786baad1"],["./static/img/logos/manifest.webapp","59010e7bb45ffec4e72a1e89a7e2a7d3"],["./static/img/logos/mstile-144x144.png","95a2c975c95437612aeab172156596c2"],["./static/img/logos/mstile-150x150.png","b1bfdc1df9d731374bab599de2fc551a"],["./static/img/logos/mstile-310x150.png","cc6e4c46129eefa3e52c9b763929f336"],["./static/img/logos/mstile-310x310.png","0a9cdf9e0f12e04d6ca83e5c452e835d"],["./static/img/logos/mstile-70x70.png","722ababd3b10f62e7c0404e1df86a718"],["./static/img/manifest.json","b58fcfa7628c9205cb11a1b2c3e8f99a"],["./static/js/app.b8b93f3c5ffe7d5be95a.js","7821b18bece6900bdb7178cf929d7d4e"],["./static/js/app.b8b93f3c5ffe7d5be95a.js.map","11f8ddbce6648e9b15a986404f13d745"],["./static/js/vendor.1a19c2a85a37526391b3.js","e398e8fb886a4a8e30bbf64881e926d2"],["./static/js/vendor.1a19c2a85a37526391b3.js.map","ab50a20d9c56cc47fc7a0944c905f0e8"],["./static/manifest.json","908720bd333dfac79d514eed4e8bb6ff"]];
var cacheName = 'sw-precache-v3-2017-12-19T20:45:49.640Z-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







