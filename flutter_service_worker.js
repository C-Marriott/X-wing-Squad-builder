'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
".git/config": "3b69b835317d0c8ddb65cfd27c1c9558",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6c0b52ca4e52262381508cd8181d1863",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8bfa3a42c5210a3d5f9e9cca37d75a4a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f2217d470a3815dda8ec7ea51822f02d",
".git/logs/refs/heads/main": "839ce103a9736c73de217f32905ee4f4",
".git/logs/refs/remotes/origin/main": "7e675be6931132628612ee67af650780",
".git/objects/00/82e7189c06251c8ed85e3b14508f21b6116bbf": "732338ae7844fbf8d0518e824f4dd654",
".git/objects/03/03e24c196d09a5e4f7709160040c487026d7c0": "8bee2e94be39e7a028d5ecd564c2b638",
".git/objects/07/f9f1637aed916d6c252e50aeaf713641866173": "6efb168eca875b8256ac5400632f8a24",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/a00e7aa1fb6ff8f74c4543207a680ca1640214": "33a68c5e17fb82c6137175bed7326f3d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/7c920b4e87a1c241d6f06195a0ac10377c1110": "936bf39b50384256921ed8015ad2ebbd",
".git/objects/24/cfcf2ef078d4eac5fd48ae0a5cfa821e8b06c8": "458c147405d0966daba680279033e151",
".git/objects/24/ea3bf662d99b39b8809945491ce5cc0a4b60a1": "b416f1896d80353cc72c9178e2cf2d64",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/c5085e06893f5bc27eef37428f009becf307b5": "f41993526065e51e2ee8fd97841f8ae9",
".git/objects/2b/0610277d8545442490acfbc5d4940fb68efb63": "3dff536166f96ecc6af317a262b7fd35",
".git/objects/2e/e798c4bad27c4373081a495eb7276cedc51411": "59d98653b77432a9adc2a3a5d704b218",
".git/objects/31/625c4428562987fee25cf377da066d3717c948": "13eb752ad1c54ae6926ba4ba5e2a3882",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/980d071ed1c565706066161fabf2fc2a892ace": "9a696ee8447bd362b4a8fe910b637774",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/4ac31db6085f0d8b84ed4435802f9e292f8472": "e9d669b1b961bc2320bb8400d6ab9ea6",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/5a/a5fe0160118a0433cce972344d4731b79da6a9": "798bd15e40e8cc54103e64fea9cac5a2",
".git/objects/5b/5289c58f3af72e144308f2bfad530f7791a19c": "8cb6c407767ff8e466a605e9616d2cfe",
".git/objects/5b/d41bd3bc9d835ec4c68764fdb5955c124bb603": "28dc00264b96ec6378fa54aae8f357f1",
".git/objects/5d/fab4fc918854602defa3505405394c71092f03": "351e9a3992510ef75adf4d191f4937aa",
".git/objects/6a/f0ef65c5ec55d1143628d232c49d883026a5a6": "350d78daf065aded5d0bc56d6371425c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/545124a55ef241ea60c73a44cbfdd36f8a8cd0": "cd8bc7bef7462f6b45f4db37dc2cf16b",
".git/objects/75/e466c06d5ad0469ded2e79322aa2540713b86e": "6eb4a10f5f6ebfbff22c14087f6ec5f0",
".git/objects/7b/370d841dbb71f35b7233a8ca5fa7664f2e482f": "e4cf04e391dfd3cfc062c48852c6e572",
".git/objects/7c/979a5983cc875fe83599b81873a768243cd295": "948e5a8f60db38648c730ccc5ac5f683",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/55d035c108fc3a7117697149fafcdfe41100a3": "f63f75a118050d5450f0adab4092ea91",
".git/objects/8b/691e115b68c110ad0a22f57a9caacdf119e790": "f6b3f2976741ae33c0747d68b4359a42",
".git/objects/8c/ffc1129b0d23ee796503628c6c6e5ba776525d": "651da41c040531dc5e7b378be07bd3ea",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/258fe8826f719c52c9c6aa5808636314f8c3a9": "86c584fd92197c54e9b36455caa69f2f",
".git/objects/96/473abcfd859f6570272f62adb722c7ce8215ed": "e0492f5235abbcd7b2adc1dbb8f207ac",
".git/objects/96/a90920a9932876e73ef7250482bdd69caa68b5": "c9342e7e1434e32b8376accb1fc5167b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/5cc69b5ad2d7630420a5599acecbb781deb107": "1fe1bb16a6603f7f51ffc1c051b07725",
".git/objects/98/c7791eef673dcf3432b75a2a1db58b220f55d5": "e52886e261f05c296532932e278a4563",
".git/objects/9b/5d0cc4903099d01a4066eaa283c1936285169a": "404d0c7efaa4bc61f547d2ffa5e790fa",
".git/objects/ac/ef968b3a5ea9e81f4cd7934d8a813fbb7b19af": "9fb70ae8887c94e6b066108a655274de",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/5805f029b471cd347f980474ba3165f9ae29e3": "ef23e44c44ca573c3389187a743fcfc1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/6c6c63952a49ca5f1e9eb90349708d8881fe3f": "612d6ba2bc7f62e8bf3f378993ff97ad",
".git/objects/c8/082dc4739fe429c95baa709028a5d56a50e865": "720f27c40e269eff0658a5832fb3c9e7",
".git/objects/c8/68f3aa16a27a803871f9c7eeed66079c05f2f1": "cb2eeb3e65ae42074fcca8956d2cdd59",
".git/objects/c9/ef715f316059dd8e24140885851ea052150c8e": "567517c0f25e5e99b727c047adfd23f4",
".git/objects/cc/2eb3c08ee20116fa70e310cef43c635fb60332": "0f0076c3103a9f2ed1590a005c447db4",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/13c0ed087bda042af538101b24d92ac118765a": "43b35d86dbef8147e5e221197d90e5ff",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/cd5b8fa1c1ad884270e02694c06238b5ca5ead": "e270fd12c26111a956b0b0cad14d660f",
".git/objects/dc/b29c3a6278205327a945d42801da09d32c3182": "fb58563eb5727bcb483d9e7ff741e589",
".git/objects/e6/f37e195c4c6c108f9b8f8569f0e0f412fc1b83": "f213187dcb1e498a277b275a3ce57e03",
".git/objects/e8/ed11bd61fc496bc91814e3b995c1e73ff9fe06": "f6d67e10177ce3a6a8464bea8653ffe2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/871eb3ee92a0ab8e59b2d3704b6f0e923f6b91": "1282074c817f07789000b8f593271c0d",
".git/objects/f0/4d4fc67240bd9197e97b4af6caac0a367016c1": "d11b56ca8015523a12c4be0a2b0b7c6c",
".git/objects/f1/cd4d6c322abd36b53a91b21b4f870f9003ba98": "a3a9bf9306a9b62a33f86f74c72f7dba",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/8608dcf098b6a5b0a7888b20ecaae01512bd3c": "484afb7504ea90ae011edea1d11f78eb",
".git/objects/f8/a71ac5fe3bdbcb40d872f7dd45bb5d468f031c": "45508de7003270b42cc06032e6252d51",
".git/objects/fd/b8bc24fe2bd574de7cb9b0ca1bed2c6f6f46a8": "9a2015b82d7178afa2376b57bf06cef8",
".git/ORIG_HEAD": "994deb09057c7d24cf53287090e32a1b",
".git/refs/heads/main": "cb90793e329932962074cc2570b4fb68",
".git/refs/remotes/origin/main": "cb90793e329932962074cc2570b4fb68",
"assets/AssetManifest.bin": "a9d0315190de04b43b686ee7211415ed",
"assets/AssetManifest.bin.json": "e33e93dd76918607f67845db9f0b2eb1",
"assets/AssetManifest.json": "01ae919a9ce174977f025a383d4f61a4",
"assets/assets/imperialIcon.png": "5ff9d190a91bc2e04bb438217ba15546",
"assets/assets/rebelIcon.png": "2cc8b45e93df9efa3c146372577953eb",
"assets/assets/scumIcon.png": "c20f9bdc7015d218a52083ad2e6e019f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7606c61c17fb53f4b5f011a567936fd5",
"assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3978c08692a536f557ddd2c56559dba3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0a5de1e921c7c4ea4f9a6b86207dba5c",
"/": "0a5de1e921c7c4ea4f9a6b86207dba5c",
"main.dart.js": "bf7c2c5c351be63fc0419f87b0e9d0fa",
"manifest.json": "3e28919db461728985da5088ea8313d5",
"version.json": "bf43c4aef60f7be5ad0c9b8b8a5a30e3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
