'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "dcd87d5b81a6aee5b7a648e98d1397d3",
"splash/img/light-2x.png": "088f3d430e9533fe3c4e0c64ae90937a",
"splash/img/dark-4x.png": "0dbf74ae6aa081bb920370e7c42ecf76",
"splash/img/light-3x.png": "4a95951ac59a7806a0d2486fbb9fff5b",
"splash/img/dark-3x.png": "4a95951ac59a7806a0d2486fbb9fff5b",
"splash/img/light-4x.png": "0dbf74ae6aa081bb920370e7c42ecf76",
"splash/img/dark-2x.png": "088f3d430e9533fe3c4e0c64ae90937a",
"splash/img/dark-1x.png": "e2ea9758bb5a0fae3566be770b55ffca",
"splash/img/light-1x.png": "e2ea9758bb5a0fae3566be770b55ffca",
"index.html": "6147a1ac261e675491e947837b2f6c7f",
"/": "6147a1ac261e675491e947837b2f6c7f",
"main.dart.js": "15f80186af9fab1f329b0ec0a58a8410",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "81cb7725c18d26698bf8a332a057a60c",
".git/config": "c83ae3378f6041dfcd5d81882670ca6e",
".git/objects/0d/a834ee556f76231483cf6a1b391912a378c5a3": "97f48b2fdc07e3ac071130139f0a5383",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/7206b225520e4f587cd060db2545f6eea6dbdf": "0af6d42a517972e6342cad1773954d81",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/77ad9ac11ff6530d0d35f1d5d0c8f7736ecade": "a85de46f851cb78d3f7680b8418e8fa7",
".git/objects/04/455c868da02498336bde834c99878f08c169e0": "6c9854fff9834f96b385473816c51b89",
".git/objects/6a/d894a08d11b98e5508f46139033bdb230a2f9c": "2e8dddc11a75cb0394fa24788391fa08",
".git/objects/35/5568e714e3f899a37f82a01650f8eb6b187dac": "ebe6d6e120cb2031deb7c8c35423bb53",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/38a0cd4f1b5e988a460c32d2a5df28f3c06f92": "b8eaab65693e6cfd699415481981d17d",
".git/objects/3c/5a7e5d9b88889c7767c6c577fa029ac1a9f717": "2f7c94c06d5e5e5062dae5c5ca8d80ff",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/f26992bde3b0339b949fcfd0bc34934ceb52f3": "3282311427cbe33d1ffca3fdf8635cc5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/f0e9a0aca6dcc943124c2f8e20a00fb69e0bb3": "9a01aa1c8a8c8312be5e53a14ee64891",
".git/objects/5a/f522c8c7129a2075a3907a1172143ccf718ae5": "9da296cf00afec9e0fb356c913e3342f",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a4/9daa4113f94af390c8345814c33c8681bea501": "046ef5f10c868c666d324da261d9b7c6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ad/264548f3c103294dda3fb02564b872feafe78b": "402b945b83cd5955d31cde0ba4c78370",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/b3/4d8793515550eed9585dab225abcb036d8dbd6": "73ffc1225a9b51a5265673c3241c969c",
".git/objects/b3/eff1ed7ca60e120d39bb752c916124b20bb9ad": "1f8174b927dcf55ce3579c43a1acf0db",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/f7081db9371eb68e9943ec21e08d35c115db15": "1a714d3e6ffe402b55ab5c211a3b7336",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/ce3f23509347da0c83924c1720c3438cd676f7": "531958ade0b62b71b1a8329a4dc423a4",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/5f4f4e40256fe573d49e20e6485a5b30c74978": "7074ff01fa7dbb513aad14a33611c48a",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/20a5a7c0fe3af43f6810c94af5e34e98be4d11": "b636efffe9308ae6673c0ef905fc57fa",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/a819fbfe8586d5945aa02b85e627005c57e58b": "03fb49ab983bfdfae2fff7060eb8eedd",
".git/objects/ed/637087242228be9994bd93186ca169821814b5": "3aa08495ff4d1e99316cfbb525379bdf",
".git/objects/c6/fc4fb0323bcd0a7f32bb2bc64266e9e11930b2": "8561ce53a93cbf9a0b0a80271e326cd5",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/11/1ac2f21796a7865aa75f51700ed43b1b32e8db": "2655ded110a314f70f89298cf746b721",
".git/objects/45/9e75837e7549ce432b1d071ae04787c1777142": "e42ce3c15614c8c351dccf64a5f3eb78",
".git/objects/80/12aa523427c4f4af45c4226081dcceb334fd45": "37048cce9466358a88d5121f9232c54c",
".git/objects/1a/feab075a1c61553d77986ec4a2da33cb63dbdc": "44237309b3c225332f15ae07157b08a2",
".git/objects/1a/6ee48633d5f75c80fa057313eaec688194ca66": "03718234a086c4aeb0b71e14825abc4e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/35234d85749e97106915d5382fa9b9fb92c419": "9c7b7f1e753f675fe0ad87a029c9df1c",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/44/9f2d80c3ef104bbd488162c48f1c1767d7adfb": "a1f9be76b1f8b3f685a73830f618749f",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/43/d43cf13029b3f05a1018852695bd6d17c67269": "ed6c1c696fae228fdcfcbeccc4ff7ba1",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/f13936b70fb93f5ba182760a82dd7a18e7ca5b": "09344c20f84c7a69b8a549acc551d822",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/54/7af66967438e44c9fd70da3ada5acfc11f092c": "b82ea54999c2aa427907aa8a9bc495be",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/16dd0a3737e8019999e8e9f8be37514f9888e1": "8cf43628d50f708547843e9762f716ce",
".git/objects/5e/9a7ce3b19505c771e72249cdaf1ab793cca028": "945d355cf77db9b56cf23156aff76a02",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/dcf0dbd325c959b9f9eed7166709763e6363a9": "b846447ed90a1606dd5d76171ea6587f",
".git/objects/06/c9e73fe193de1eccc3b392c8e8141058a16a61": "3a888aa3a99519a42149cdd2da562dc3",
".git/objects/06/9962238eb121f177b2ac461f3333d3b61813f4": "0e4222142b7447832ecd3e6584d5f8d4",
".git/objects/97/86a546223192646ceac431c3c3c35491ab2f69": "677a40dbea71ec81722c32f521f2d910",
".git/objects/0a/1f159756beabbadbf5837dbd06bfe8833efa6b": "3364fe48d00ebd2e3d6a6f90c148f987",
".git/objects/bf/f28d4e1041c279e7f7a05430f634892191cc84": "c54580a08a62ea07ed4a39a0c1c022a8",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dd/0a2bbcf3c8200ff05c51d3368b65c7342e15ac": "829f7f53b0eefe9898a46e8493a7c70e",
".git/objects/d5/c696528cc3f649cefa211e907451063fbaf9c5": "a71a405516a5fb86a4676c3b6aa951e9",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/6f069a50c8a12dfb09ab783f3af6464479183b": "b6b53c505da9d58c9a6580f08fae4102",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/3bb32cf314b163530b4992693fdcfa17b991e5": "98dbd89c84371a07c4a964450fb9deda",
".git/objects/ef/7df5a3e4fea41c091d5dd0a5b3e5e6dfaeb67a": "327c6327209ed80ed6ae2c976050be30",
".git/objects/c3/2f491cef514730be2aac102fa2090892f9ae2a": "d2763f03a51ed2164198a8aa0516a723",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/2ea8930b44f70273d5900e82902537c510e28e": "d84fa849481d42959fc4f8fe17b9f774",
".git/objects/c5/55a079ffe45c08074515b7dcba119b46c99619": "a3481c94bb5669fbb78b8d6a984e4ab5",
".git/objects/c5/ed96fc5a68f8d5509898cf1a3ece9fdf48bb2d": "df6739aa465f947549f2ed6b0f57f7f8",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9f092be1e7890a70c5dcaad18af679f9f40b58": "684434b6ec0f45c256502be045e902d1",
".git/objects/2c/16b59ba9984acdeef589e9bc9ad2da1be2f16a": "821ccbc1bc08d2e0726f9014560d9cd0",
".git/objects/79/4f0ff34de4dab7b68a0722028e53e8aeb7ab94": "610c42403f47fc16e512202f749df7d1",
".git/objects/79/c442b0215485ec9cfea12472c827878084b4ac": "cab094346f2f2e90ae1bf7e67205fa07",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/24/e06ecc6e025bfe1aca9f0fdc35dad11570b6df": "c2d67c9eaad73f2848d79ac38fc0c36c",
".git/objects/15/d5b34e36d3a7b94d555369fe7d4419d10b097f": "683f9501d709e5591e76a69581362aa7",
".git/objects/8c/0ec398e888b98d2ea53d05710ff509612fbd53": "e9a185554697ae601cb52d232185abc7",
".git/objects/85/0e76569541ecce28124495026720a5c8730d57": "f790ca126e9cec0f9b8252426e92c773",
".git/objects/1d/9788977b118f4f8f5e439813653b691d1d191f": "d6244365426c3afbe746a6677e898c69",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/47/f3358252d1729e7b2c1abdef310c6677f945fa": "d68669bbe0fac54be2c87b5d34edeed0",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/3bd016eb37a6f2454dfce75e2c4c64c567ed28": "53d676ebe942de7d9a3177ffdf8b6218",
".git/objects/25/c42a2d841841782a01a2b12209f92d58f41951": "f28df5ae5a272b9fd315554db5b0cb88",
".git/objects/25/fe7e47c0cd658f0ec8fd803cbcf421f3e48383": "5dceab03d4a41d7eb98cc61a6ea54e8c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb0fee1ad3a095a8834f78d96e12f7e0",
".git/logs/refs/heads/master": "bb0fee1ad3a095a8834f78d96e12f7e0",
".git/logs/refs/remotes/juubin/master": "c8097b4f4fa4b6eb72ec4400790d6950",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "3884d6d805dcdeb19a9bb8feeaa518b1",
".git/refs/remotes/juubin/master": "3884d6d805dcdeb19a9bb8feeaa518b1",
".git/index": "30134f297249394c92766185a84fd50c",
".git/COMMIT_EDITMSG": "c7ccfd8af62d81b4e92df97f5a28216d",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "78dbb805af61994616aa1112fc77fecc",
"assets/NOTICES": "b4deb2b34a7132ebf9b83c68561b6562",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ef78d1a0ea48967796f0a2fec8df431e",
"assets/fonts/MaterialIcons-Regular.otf": "13eba343c43677e0fb94738744df5820",
"assets/assets/flappy_juubin.PNG": "8e7a1b1fa56e58ba7eebb49239ed0829",
"assets/assets/tickle.gif": "afdfa5843aec240c9b4f27cbc4650713",
"assets/assets/flappy_bird.riv": "59d8692c4105b3a0a0d18dd2d097abd0",
"assets/assets/annoyed.gif": "ac4cda899241eeda46789a0cdcc5d84a",
"assets/assets/jubin.jpg": "b1871e26838b1be436fc147fb0fd6fb1",
"assets/assets/jubin.PNG": "e3d8f65c100f54b2918619c236fe5649",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
