## 爬虫路径

### 搜索列表页

- URL： https://www.myhome.ge/en/s/House-for-Sale-Tbilisi?Keyword=Tbilisi&PrTypeID=2&AdTypeID=1&GID=1996871
- 搜索条件如下： 
    - 地点: Tbilisi
    - 类型: house for sale
- 总数据： 
    - 估计有 130 * 20 个
- 保存数据：
    - 文件存储：/data/tbilisi/HouseForSale/{pageNum}.json
    - 具体数据格式含义如下：
````
[
    {
    // 房子id
    "productId": 9241205, 
    // 房子缩略小图
    "thumbPhotos": [],  
    // 房子高清大图
    "largePhotos": [
        "https://static.my.ge/myhome/photos/large/0418/9241205_1.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_2.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_3.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_4.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_5.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_6.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_7.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_8.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_9.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_10.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_11.jpg?v=8",
        "https://static.my.ge/myhome/photos/large/0418/9241205_12.jpg?v=8"
    ],
    // 房子标题
    "title": "Country house for sale",
    // 房子总价
    "price": "205,500 ₾",
    // 房子每平米价格
    "sqPrice": "1028 ₾",
    // 房子总平米
    "size": "200 m²",
    // 房子总房间数量
    "rooms": "Room 5",
    // 房子卧室数量
    "bedrooms": "Br 4",
    // 房子外院平米
    "yards": "Yard600 m²",
    // 房子地址
    "address": "Tsavkisi, Mtatsminda District, Tbilisi",
    // 房子简介
    "description": ""
    }
]
````

2.

