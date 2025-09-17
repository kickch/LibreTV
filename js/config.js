// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
      "aqyzy": {
      "api": "https://iqiyizyapi.com/api.php/provide/vod",
      "name": "TV-爱奇艺",
      "detail": "https://iqiyizyapi.com"
    },
   "caijidb": {
      "name": "TV-豆瓣资源",
      "api": "https://caiji.dbzy5.com/api.php/provide/vod",
      "detail": "dbzy.tv"
    },
   "tyyszyapi": {
      "api": "https://tyyszy.com/api.php/provide/vod",
      "name": "TV-天涯影视",
      "detail": "https://tyyszy.com"	
    },
    "ckzy.me": {
      "name": "TV-CK资源",
      "api": "https://ckzy.me/api.php/provide/vod",
      "detail": "https://ckzy.me"
    },
    "maotaizy": {
      "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
      "name": "TV-茅台资源",
      "detail": "https://mtzy.me"
    },
    "wolong": {
      "api": "https://wolongzyw.com/api.php/provide/vod",
      "name": "TV-卧龙资源",
      "detail": "https://wolongzyw.com"
    },
    "ikun": {
      "api": "https://ikunzyapi.com/api.php/provide/vod",
      "name": "TV-iKun资源",
      "detail": "https://ikunzy.com"
    },
    "lzi": {
      "api": "https://cj.lziapi.com/api.php/provide/vod",
      "name": "TV-量子资源",
      "detail": "https://lzizy.net"
    },
    "dyttzy": {
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
      "name": "TV-电影天堂",
      "detail": "http://caiji.dyttzyapi.com"
    },
    "1080y": {
      "api": "https://api.yzzy-api.com/inc/apijson.php",
      "name": "TV-优质资源",
      "detail": "https://1080zyk4.com"
    },
    "myzy": {
      "api": "https://api.maoyanapi.top/api.php/provide/vod",
      "name": "TV-猫眼资源",	
      "detail": "https://www.maoyanzy.com"
    },
    "lz": {
      "api": "https://cj.lzcaiji.com/api.php/provide/vod",
      "name": "TV-量子资源",	
      "detail": "https://cj.lzcaiji.com"
    },
    "ruyi": {
        "api": "https://cj.rycjapi.com/api.php/provide/vod",
      "name": "TV-如意资源",	
      "detail": "https://www.ryzyw.com"
    },
    "zy360": {
      "api": "https://360zy.com/api.php/provide/vod",
      "name": "TV-360资源",
      "detail": "https://360zy.com"
    },
    "collectwolongzy": {
      "name": "TV-卧龙资源1",
      "api": "https://collect.wolongzyw.com/api.php/provide/vod",
      "detail": "https://collect.wolongzyw.com"
    },
    "jisu": {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "TV-极速资源",
      "detail": "https://jszyapi.com"
    },
    "mdzy": {
      "api": "https://www.mdzyapi.com/api.php/provide/vod",
      "name": "TV-魔都资源",
      "detail": "https://www.moduzy.net"
    },
    "mozhuazy": {
      "api": "https://mozhuazy.com/api.php/provide/vod",
      "name": "TV-魔爪资源",
      "detail": "https://mozhuazy.com"
    },
    "ffzy1": {
      "name": "TV-非凡资源",
      "api": "http://api.ffzyapi.com/api.php/provide/vod",
      "detail": "https://cj.ffzyapi.com"
    },
    "ffzy": {
      "name": "TV-非凡资源1",
      "api": "https://cj.ffzyapi.com/api.php/provide/vod",
      "detail": "https://cj.ffzyapi.com"
    },
    "bfzy": {
      "api": "https://bfzyapi.com/api.php/provide/vod",
      "name": "TV-暴风资源",	
      "detail": "https://bfzy.tv"
    },
    "zuid": {
      "api": "https://api.zuidapi.com/api.php/provide/vod",
      "name": "TV-最大资源",
      "detail": "zuida.xyz"
    },
    "zuidazy": {
      "name": "TV-最大点播",
      "api": "http://zuidazy.me/api.php/provide/vod",
      "detail": "https://zuidazy.co"
    },
    "yinghua": {
      "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
      "name": "TV-樱花资源",
        "detail": "https://yhzy.cc"
    },
    "wujin": {
      "api": "https://api.wujinapi.me/api.php/provide/vod",
      "name": "TV-无尽资源",
      "detail": "https://wujinzy.net"
    },
    "wujincom": {
      "api": "https://api.wujinapi.com/api.php/provide/vod",
      "name": "TV-无尽资源1",
      "detail": "https://wujinzy.com"
    },
    "wwzy": {
      "api": "https://wwzy.tv/api.php/provide/vod",
      "name": "TV-旺旺短剧",
      "detail": "https://wwzy.tv"
    },
    "apiwwzy": {
      "name": "TV-旺旺资源",
      "api": "https://api.wwzy.tv/api.php/provide/vod",
      "detail": "https://api.wwzy.tv"
    },
    "hhzyapi": {
      "name": "TV-豪华资源",
      "api": "https://hhzyapi.com/api.php/provide/vod",
      "detail": "https://www.haohuazy.com"
    },
    "subocaiji": {
      "name": "TV-速播资源",
      "api": "https://subocaiji.com/api.php/provide/vod",
      "detail": "www.subozy.com"
    },
    "xiaomaomi": {
      "api": "https://zy.xmm.hk/api.php/provide/vod",
      "name": "TV-小猫咪",	
      "detail": "http://zy.xmm.hk"
    },
    "huyaapi": {
      "name": "TV-虎牙资源",
      "api": "https://www.huyaapi.com/api.php/provide/vod",
      "detail": "https://www.huyaapi.com"
    },
    "jinyingzy": {
      "name": "TV-金鹰点播",
      "api": "https://jinyingzy.com/api.php/provide/vod",
      "detail": "https://jinyingzy.com"
    },
    "jyzyapi": {
      "name": "TV-金鹰资源",
      "api": "https://jyzyapi.com/provide/vod/from/jinyingyun/at/json",
      "detail": "https://jinyingzy.net"
    },
    "p2100": {
      "name": "TV-飘零资源",
      "api": "https://p2100.net/api.php/provide/vod",
      "detail": "https://p2100.net"
    },
    "uku": {
      "name": "TV-U酷资源",
      "api": "https://api.ukuapi.com/api.php/provide/vod",
      "detail": "https://api.ukuapi.com"
    },
    "ukuapi88": {
      "name": "TV-U酷88",
      "api": "https://api.ukuapi88.com/api.php/provide/vod",
      "detail": "https://api.ukuapi88.com"
    },
    "guangsuapi": {
      "api": "https://api.guangsuapi.com/api.php/provide/vod",
      "name": "TV-光速资源",
      "detail": "https://api.guangsuapi.com"
    },
    "xinlang": {
      "name": "TV-新浪点播",
      "api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
      "detail": "https://api.xinlangapi.com"
    },
    "niuniuzy": {
      "name": "TV-牛牛点播",
      "api": "https://www.hongniuzy3.com/api.php/provide/vod",
      "detail": "https://www.hongniuzy.com"
    },
    "hongniuzy": {
      "name": "TV-红牛资源",
      "api": "https://www.hongniuzy2.com/api.php/provide/vod",
      "detail": "https://www.hongniuzy.com"
    },
    "modu": {
      "name": "TV-魔都动漫",
      "api": "https://caiji.moduapi.cc/api.php/provide/vod",
      "detail": "https://caiji.moduapi.cc"
    },
    "api_47": {
      "name": "AV-91麻豆",
      "api": "https://91md.me/api.php/provide/vod",
      "detail": "https://91md.me",
       adult: true
    },
    "api_48": {
      "name": "AV-AIvin",
      "api": "http://lbapiby.com/api.php/provide/vod",
      "detail": "http://lbapiby.com",
       adult: true
    },
    "bwzy2": {
      "api": "https://api.bwzyz.com/api.php/provide/vod",
      "name": "AV-百万资源",
      "detail": "https://api.bwzym3u8.com",
       adult: true
    },
    "souavzy": {
      "api": "https://api.souavzy.vip/api.php/provide/vod",
      "name": "AV-souavZY",
      "detail": "https://api.souavzy.vip",
       adult: true
    },
    "155zy": {
      "api": "https://155api.com/api.php/provide/vod",
      "name": "AV-155资源",
      "detail": "https://155zy2.com",
       adult: true
    },
    "api_54": {
      "name": "AV-玉兔资源",
      "api": "https://apiyutu.com/api.php/provide/vod",
      "detail": "https://apiyutu.com",
       adult: true
    },
    "api_55": {
      "name": "AV-番号资源",
      "api": "http://fhapi9.com/api.php/provide/vod",
      "detail": "http://fhapi9.com",
       adult: true
    },
    "api_56": {
      "name": "AV-白嫖资源",
      "api": "https://www.kxgav.com/api/json.php",
      "detail": "https://www.kxgav.com",
       adult: true
    },
    "api_57": {
      "name": "AV-精品资源",
      "api": "https://www.jingpinx.com/api.php/provide/vod",
      "detail": "https://www.jingpinx.com",
       adult: true
    },
    "api_59": {
      "name": "AV-老色逼",
      "api": "https://apilsbzy1.com/api.php/provide/vod",
      "detail": "https://apilsbzy1.com",
       adult: true
    },
    "thzy": {
      "name": "AV-桃花资源",
      "api": "https://thzy1.me/api.php/provide/vod",
      "detail": "https://thzy8.me",
       adult: true
    },
    "yyzy": {
      "name": "AV-优优资源",
      "api": "https://www.yyzywcj.com/api.php/provide/vod",
      "detail": "https://www.yyzywcj.com",
       adult: true
    },
    "xjzy": {
      "name": "AV-小鸡资源",
      "api": "https://api.xiaojizy.live/provide/vod",
      "detail": "https://xiaojizy.live",
       adult: true
    },
    "api_65": {
      "name": "AV-黄AVZY",
      "api": "https://www.pgxdy.com/api/json.php",
      "detail": "https://www.pgxdy.com",
       adult: true
    },
    "api_66": {
      "name": "AV-黄色仓库",
      "api": "https://hsckzy.xyz/api.php/provide/vod",
      "detail": "hsckzy.xyz",
       adult: true
    },
    "dnzzy": {
      "api": "https://apidanaizi.com/api.php/provide/vod",
      "name": "AV-大奶子",
      "detail": "https://apidanaizi.com",
       adult: true
    },
    "xxbzy": {
      "api": "https://www.xxibaozyw.com/api.php/provide/vod",
      "name": "AV-X细胞",
      "detail": "https://www.xxibaozyw.com",
       adult: true
    },
    "jkunaklmzy": {
      "api": "https://jkunzyapi.com/api.php/provide/vod",
      "name": "AV-jkun爱坤",
      "detail": "https://jkunzyapi.com",
       adult: true
    },
    "xbzy": {
      "api": "https://xingba111.com/api.php/provide/vod",
      "name": "AV-杏吧资源",
      "detail": "https://xingba111.com",
       adult: true
    },
    "api_60": {
      "name": "AV-色南国",
      "api": "https://api.sexnguon.com/api.php/provide/vod",
      "detail": "https://api.sexnguon.com",
       adult: true
    },
    "api_49": {
      "name": "AV-乐播资源",
      "api": "https://lbapi9.com/api.php/provide/vod",
      "detail": "https://lbapi9.com",
       adult: true
    },
    "api_58": {
      "name": "AV-美少女",
      "api": "https://www.msnii.com/api/json.php",
      "detail": "https://www.msnii.com",
       adult: true
    },
    "api_50": {
      "name": "AV-奥斯卡",
      "api": "https://aosikazy.com/api.php/provide/vod",
      "detail": "https://aosikazy.com",
       adult: true
    },
    "api_51": {
      "name": "AV-奶香香",
      "api": "https://Naixxzy.com/api.php/provide/vod",
      "detail": "https://Naixxzy.com",
       adult: true
    },
    "api_52": {
      "name": "AV-森林资源",
      "api": "https://beiyong.slapibf.com/api.php/provide/vod",
      "detail": "https://slapibf.com",
       adult: true
    },
    "api_61": {
      "name": "AV-色猫资源",
      "api": "https://caiji.semaozy.net/inc/apijson_vod.php",
      "detail": "https://semaozy1.com/",
       adult: true
    },
    "api_63": {
      "name": "AV-辣椒资源",
      "api": "https://apilj.com/api.php/provide/vod",
      "detail": "https://apilj.com",
       adult: true
    },
    "api_64": {
      "name": "AV-鲨鱼资源",
      "api": "https://shayuapi.com/api.php/provide/vod",
      "detail": "https://shayuapi.com",
       adult: true
    },
    "swzy": {
      "api": "https://siwazyw.tv/api.php/provide/vod",
      "name": "AV-丝袜资源",
      "detail": "https://siwazyw.tv",
       adult: true
    }

    // 下面是资源失效率高的API源，不建议使用
    // subo: {
    //     api: 'https://subocaiji.com/api.php/provide/vod',
    //     name: '速播资源'
    // },
    // fczy: {
    //     api: 'https://api.fczy888.me/api.php/provide/vod',
    //     name: '蜂巢资源'
    // },
    // ukzy: {
    //     api: 'https://api.ukuapi88.com/api.php/provide/vod',
    //     name: 'U酷资源'
    // },
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
