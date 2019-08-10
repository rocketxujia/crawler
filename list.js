var Crawler = require("crawler");
var fs = require('file-system');

var crawler = new Crawler({
    maxConnections : 4,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            var $ = res.$;
            var pageNum = /Page=(\d*)/gi.exec(res.options.uri)[1];
            saveHouses($, pageNum);
        }
        done();
    }
});
crawlerList();

// 获取数据，并保存到文件
function saveHouses($, pageNum) {
    var $cards = $('div.statement-card[data-product-id]'), cards = [],
        $card, card;
    for(var i =0, len = $cards.length; i < len; i++){
        $card = $cards.eq(i);
        $priceSpace = $card.find('div.price-space');
        $options = $card.find('div.options.d-flex');
        card = {
            productId: $card.data('product-id'),
            thumbPhotos: fetchHousePhotos($card, 'thumb'),
            largePhotos: fetchHousePhotos($card, 'large'),
            title: $card.find('h5.card-title').text(),
            price: $priceSpace.find('b.item-price').text() + ' ₾',
            sqPrice: $priceSpace.find('span.sq-price').text() + ' ₾',
            size: $priceSpace.find('div.item-size').text(),
            rooms: $options.find('div[data-tooltip="Number of rooms"]').text(),
            bedrooms: $options.find('div[data-tooltip="Bedroom"]').text(),
            yards: $options.find('div[data-tooltip="Yard area"]').text(),
            address: $card.find('div.address').text(),
            description: $card.find('p.description').text(),
        };
        cards.push(card);
    }
    fs.writeFile(`./data/tbilisi/HouseForSale/page-${pageNum}.json`, JSON.stringify(cards), function(err) {})
    console.log(`完成保存第${pageNum}页的房子`);
}

// 发起爬虫请求
function crawlerList(){
    const maxPageNum = 10;
    for(let i = 1; i <= maxPageNum; i++){
        crawler.queue({
            uri: "https://www.myhome.ge/en/s/House-for-Sale-Tbilisi?Keyword=Tbilisi&PrTypeID=2&AdTypeID=1&GID=1996871&Page=" + i,
        });
    }
    console.log(`开始下载所有房子数据...`);
}

function fetchHousePhotos($card, type) {
    const $dots = $card.find('div.statement-dots-container span');
    const picRoot = {
        thumb: 'https://static.my.ge/myhome/photos/thumbs/',
        large: 'https://static.my.ge/myhome/photos/large/'
    }
    const photoName = $card.data('thumb');
    const photos = [];
    for(var i = 1, len = $dots.length; i <= len; i++) {
        let currentPhotoName = i === 1 ? photoName : photoName.replace(/_\d\.jpg\?*/,`_${i}.jpg?`)
        photos.push(`${picRoot[type]}${currentPhotoName}`);   
    }
    return photos;
}