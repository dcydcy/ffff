/**
 * Created by Administrator on 2016/10/23.
 */
(function(){
    var hotModule = angular.module('doubanApp.hotModule',['doubanApp.serviceModule']);
    hotModule.controller('HotCtrl',['$scope','$http','JsonpService','$routeParams','$route',function($scope,$http,JsonpService,$routeParams,$route){

        //$scope.subjects =  [
        //    {
        //        "rating": {
        //            "max": 10,
        //            "average": 5.7,
        //            "stars": "30",
        //            "min": 0
        //        },
        //        "genres": [
        //            "动作",
        //            "犯罪"
        //        ],
        //        "title": "机械师2：复活",
        //        "casts": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1049484/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/424.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/424.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/424.jpg"
        //                },
        //                "name": "杰森·斯坦森",
        //                "id": "1049484"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1004861/",
        //                "avatars": {
        //                    "small": "https://img1.doubanio.com/img/celebrity/small/37927.jpg",
        //                    "large": "https://img1.doubanio.com/img/celebrity/large/37927.jpg",
        //                    "medium": "https://img1.doubanio.com/img/celebrity/medium/37927.jpg"
        //                },
        //                "name": "杰西卡·阿尔芭",
        //                "id": "1004861"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1047994/",
        //                "avatars": {
        //                    "small": "https://img1.doubanio.com/img/celebrity/small/259.jpg",
        //                    "large": "https://img1.doubanio.com/img/celebrity/large/259.jpg",
        //                    "medium": "https://img1.doubanio.com/img/celebrity/medium/259.jpg"
        //                },
        //                "name": "汤米·李·琼斯",
        //                "id": "1047994"
        //            }
        //        ],
        //        "collect_count": 15259,
        //        "original_title": "Mechanic: Resurrection",
        //        "subtype": "movie",
        //        "directors": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1027653/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/9882.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/9882.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/9882.jpg"
        //                },
        //                "name": "丹尼斯·甘塞尔",
        //                "id": "1027653"
        //            }
        //        ],
        //        "year": "2016",
        //        "images": {
        //            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2385311728.jpg",
        //            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2385311728.jpg",
        //            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2385311728.jpg"
        //        },
        //        "alt": "https://movie.douban.com/subject/25825412/",
        //        "id": "25825412"
        //    },
        //    {
        //        "rating": {
        //            "max": 10,
        //            "average": 8.2,
        //            "stars": "40",
        //            "min": 0
        //        },
        //        "genres": [
        //            "动作",
        //            "犯罪"
        //        ],
        //        "title": "湄公河行动",
        //        "casts": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1274319/",
        //                "avatars": {
        //                    "small": "https://img1.doubanio.com/img/celebrity/small/49047.jpg",
        //                    "large": "https://img1.doubanio.com/img/celebrity/large/49047.jpg",
        //                    "medium": "https://img1.doubanio.com/img/celebrity/medium/49047.jpg"
        //                },
        //                "name": "张涵予",
        //                "id": "1274319"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1013782/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/1368156632.65.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/1368156632.65.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1368156632.65.jpg"
        //                },
        //                "name": "彭于晏",
        //                "id": "1013782"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1274640/",
        //                "avatars": {
        //                    "small": "https://img1.doubanio.com/img/celebrity/small/5979.jpg",
        //                    "large": "https://img1.doubanio.com/img/celebrity/large/5979.jpg",
        //                    "medium": "https://img1.doubanio.com/img/celebrity/medium/5979.jpg"
        //                },
        //                "name": "孙淳",
        //                "id": "1274640"
        //            }
        //        ],
        //        "collect_count": 195930,
        //        "original_title": "湄公河行动",
        //        "subtype": "movie",
        //        "directors": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1275075/",
        //                "avatars": {
        //                    "small": "https://img1.doubanio.com/img/celebrity/small/1372934445.18.jpg",
        //                    "large": "https://img1.doubanio.com/img/celebrity/large/1372934445.18.jpg",
        //                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1372934445.18.jpg"
        //                },
        //                "name": "林超贤",
        //                "id": "1275075"
        //            }
        //        ],
        //        "year": "2016",
        //        "images": {
        //            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2380677316.jpg",
        //            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2380677316.jpg",
        //            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2380677316.jpg"
        //        },
        //        "alt": "https://movie.douban.com/subject/25815034/",
        //        "id": "25815034"
        //    },
        //    {
        //        "rating": {
        //            "max": 10,
        //            "average": 3.9,
        //            "stars": "20",
        //            "min": 0
        //        },
        //        "genres": [
        //            "剧情",
        //            "动作",
        //            "犯罪"
        //        ],
        //        "title": "惊天破",
        //        "casts": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1050053/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/1363937868.66.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/1363937868.66.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1363937868.66.jpg"
        //                },
        //                "name": "谢霆锋",
        //                "id": "1050053"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1007251/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/844.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/844.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/844.jpg"
        //                },
        //                "name": "刘青云",
        //                "id": "1007251"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1275756/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/12000.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/12000.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/12000.jpg"
        //                },
        //                "name": "佟丽娅",
        //                "id": "1275756"
        //            }
        //        ],
        //        "collect_count": 3723,
        //        "original_title": "惊天破",
        //        "subtype": "movie",
        //        "directors": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1358616/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/1476942357.32.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/1476942357.32.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1476942357.32.jpg"
        //                },
        //                "name": "吴品儒",
        //                "id": "1358616"
        //            }
        //        ],
        //        "year": "2016",
        //        "images": {
        //            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2390833166.jpg",
        //            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2390833166.jpg",
        //            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2390833166.jpg"
        //        },
        //        "alt": "https://movie.douban.com/subject/26220722/",
        //        "id": "26220722"
        //    },
        //    {
        //        "rating": {
        //            "max": 10,
        //            "average": 6.2,
        //            "stars": "30",
        //            "min": 0
        //        },
        //        "genres": [
        //            "剧情",
        //            "动作",
        //            "犯罪"
        //        ],
        //        "title": "侠探杰克：永不回头",
        //        "casts": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1054435/",
        //                "avatars": {
        //                    "small": "https://img1.doubanio.com/img/celebrity/small/567.jpg",
        //                    "large": "https://img1.doubanio.com/img/celebrity/large/567.jpg",
        //                    "medium": "https://img1.doubanio.com/img/celebrity/medium/567.jpg"
        //                },
        //                "name": "汤姆·克鲁斯",
        //                "id": "1054435"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1000018/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/27133.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/27133.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/27133.jpg"
        //                },
        //                "name": "寇碧·史莫德斯",
        //                "id": "1000018"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1010576/",
        //                "avatars": {
        //                    "small": "https://img1.doubanio.com/img/celebrity/small/1238.jpg",
        //                    "large": "https://img1.doubanio.com/img/celebrity/large/1238.jpg",
        //                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1238.jpg"
        //                },
        //                "name": "罗伯特·克耐普",
        //                "id": "1010576"
        //            }
        //        ],
        //        "collect_count": 3485,
        //        "original_title": "Jack Reacher: Never Go Back",
        //        "subtype": "movie",
        //        "directors": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1027877/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/10780.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/10780.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/10780.jpg"
        //                },
        //                "name": "爱德华·兹威克",
        //                "id": "1027877"
        //            }
        //        ],
        //        "year": "2016",
        //        "images": {
        //            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2382529090.jpg",
        //            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2382529090.jpg",
        //            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2382529090.jpg"
        //        },
        //        "alt": "https://movie.douban.com/subject/25789402/",
        //        "id": "25789402"
        //    },
        //    {
        //        "rating": {
        //            "max": 10,
        //            "average": 5.8,
        //            "stars": "30",
        //            "min": 0
        //        },
        //        "genres": [
        //            "动画"
        //        ],
        //        "title": "龙珠Z：复活的弗利萨",
        //        "casts": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1041488/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/26240.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/26240.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/26240.jpg"
        //                },
        //                "name": "野泽雅子",
        //                "id": "1041488"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1008254/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/32892.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/32892.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/32892.jpg"
        //                },
        //                "name": "中尾隆圣",
        //                "id": "1008254"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1019299/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/1711.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/1711.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1711.jpg"
        //                },
        //                "name": "山寺宏一",
        //                "id": "1019299"
        //            }
        //        ],
        //        "collect_count": 5718,
        //        "original_title": "ドラゴンボールZ 復活のF",
        //        "subtype": "movie",
        //        "directors": [
        //            {
        //                "alt": null,
        //                "avatars": null,
        //                "name": "山室直儀",
        //                "id": null
        //            }
        //        ],
        //        "year": "2015",
        //        "images": {
        //            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2389784085.jpg",
        //            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2389784085.jpg",
        //            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2389784085.jpg"
        //        },
        //        "alt": "https://movie.douban.com/subject/25931246/",
        //        "id": "25931246"
        //    },
        //    {
        //        "rating": {
        //            "max": 10,
        //            "average": 6.8,
        //            "stars": "35",
        //            "min": 0
        //        },
        //        "genres": [
        //            "奇幻",
        //            "冒险"
        //        ],
        //        "title": "圆梦巨人",
        //        "casts": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1345580/",
        //                "avatars": {
        //                    "small": "https://img1.doubanio.com/img/celebrity/small/1456108960.49.jpg",
        //                    "large": "https://img1.doubanio.com/img/celebrity/large/1456108960.49.jpg",
        //                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1456108960.49.jpg"
        //                },
        //                "name": "鲁比·巴恩希尔",
        //                "id": "1345580"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1014239/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/18250.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/18250.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/18250.jpg"
        //                },
        //                "name": "马克·里朗斯",
        //                "id": "1014239"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1017902/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/2026.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/2026.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/2026.jpg"
        //                },
        //                "name": "比尔·哈德尔",
        //                "id": "1017902"
        //            }
        //        ],
        //        "collect_count": 15910,
        //        "original_title": "The BFG",
        //        "subtype": "movie",
        //        "directors": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1054440/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/34602.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/34602.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/34602.jpg"
        //                },
        //                "name": "史蒂文·斯皮尔伯格",
        //                "id": "1054440"
        //            }
        //        ],
        //        "year": "2016",
        //        "images": {
        //            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2386736909.jpg",
        //            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2386736909.jpg",
        //            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2386736909.jpg"
        //        },
        //        "alt": "https://movie.douban.com/subject/25875021/",
        //        "id": "25875021"
        //    },
        //    {
        //        "rating": {
        //            "max": 10,
        //            "average": 5.5,
        //            "stars": "30",
        //            "min": 0
        //        },
        //        "genres": [
        //            "喜剧",
        //            "爱情"
        //        ],
        //        "title": "从你的全世界路过",
        //        "casts": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1274235/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/805.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/805.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/805.jpg"
        //                },
        //                "name": "邓超",
        //                "id": "1274235"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1275542/",
        //                "avatars": {
        //                    "small": "https://img1.doubanio.com/img/celebrity/small/21559.jpg",
        //                    "large": "https://img1.doubanio.com/img/celebrity/large/21559.jpg",
        //                    "medium": "https://img1.doubanio.com/img/celebrity/medium/21559.jpg"
        //                },
        //                "name": "白百何",
        //                "id": "1275542"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1276051/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/1435567211.65.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/1435567211.65.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1435567211.65.jpg"
        //                },
        //                "name": "杨洋",
        //                "id": "1276051"
        //            }
        //        ],
        //        "collect_count": 87811,
        //        "original_title": "从你的全世界路过",
        //        "subtype": "movie",
        //        "directors": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1275554/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/11460.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/11460.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/11460.jpg"
        //                },
        //                "name": "张一白",
        //                "id": "1275554"
        //            }
        //        ],
        //        "year": "2016",
        //        "images": {
        //            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2382076389.jpg",
        //            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2382076389.jpg",
        //            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2382076389.jpg"
        //        },
        //        "alt": "https://movie.douban.com/subject/26280528/",
        //        "id": "26280528"
        //    },
        //    {
        //        "rating": {
        //            "max": 10,
        //            "average": 4.4,
        //            "stars": "25",
        //            "min": 0
        //        },
        //        "genres": [
        //            "剧情",
        //            "悬疑",
        //            "惊悚"
        //        ],
        //        "title": "凶手还未睡",
        //        "casts": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1275670/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/1405999893.92.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/1405999893.92.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1405999893.92.jpg"
        //                },
        //                "name": "文咏珊",
        //                "id": "1275670"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1107142/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/5236.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/5236.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/5236.jpg"
        //                },
        //                "name": "许志安",
        //                "id": "1107142"
        //            },
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1050329/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/1408428669.04.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/1408428669.04.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1408428669.04.jpg"
        //                },
        //                "name": "林家栋",
        //                "id": "1050329"
        //            }
        //        ],
        //        "collect_count": 208,
        //        "original_title": "兇手還未睡",
        //        "subtype": "movie",
        //        "directors": [
        //            {
        //                "alt": "https://movie.douban.com/celebrity/1274313/",
        //                "avatars": {
        //                    "small": "https://img3.doubanio.com/img/celebrity/small/28346.jpg",
        //                    "large": "https://img3.doubanio.com/img/celebrity/large/28346.jpg",
        //                    "medium": "https://img3.doubanio.com/img/celebrity/medium/28346.jpg"
        //                },
        //                "name": "邱礼涛",
        //                "id": "1274313"
        //            }
        //        ],
        //        "year": "2016",
        //        "images": {
        //            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2388873185.jpg",
        //            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2388873185.jpg",
        //            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2388873185.jpg"
        //        },
        //        "alt": "https://movie.douban.com/subject/26602966/",
        //        "id": "26602966"
        //    }
        //];e

        $scope.subjects = [];

        //$http.get('data.json').then(function (value) {
        //    console.log(value.data);
        //
        //    $scope.total = value.data.total;
        //
        //    $scope.subjects = value.data.subjects;
        //
        ////    计算分页
            var count = 10;
            var currentPage = parseInt($routeParams.page || 1);
            $scope.currentPage = currentPage;

        //计算开始位置
            var start = (currentPage-1)*count;

        //},function(err) {
        //
        //});


        JsonpService.jsonp('https://api.douban.com/v2/movie/in_theaters',{count:count,start:start},function(data){

            $scope.subjects = data.subjects;
            //总的条数
            $scope.total = data.total;

            //总共多少条
            $scope.totalPage = Math.ceil($scope.total / count);

            //$apply()支持
            $scope.$apply($scope.subjects);

            // 分页 改变路由
            $scope.hundlePage = function(page){
               if(page<1 || page > $scope.totalPage){
                   return;
               }
                $route.updateParams({page:page});
            }
        });

    }]);
})();