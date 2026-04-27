// 獲取生物的顏色
const animalColors = {
    '熊': '#FF6B6B', '鹿': '#4ECDC4', '松鼠': '#45B7D1', '狼': '#FFA07A', '兔子': '#98D8C8',
    '狐狸': '#F7DC6F', '鯊魚': '#BB8FCE', '海豚': '#85C1E2', '珊瑚': '#FF6B6B', '章魚': '#4ECDC4',
    '海龜': '#45B7D1', '鯨魚': '#FFA07A', '抹香鯨': '#98D8C8', '海龍': '#F7DC6F', '海兔': '#BB8FCE',
    '旗魚': '#85C1E2', '小丑魚': '#FF6B6B', '水母': '#4ECDC4', '海葵': '#45B7D1', '白鯨': '#FFA07A',
    '海鰻': '#98D8C8', '鱟': '#F7DC6F', '河豚': '#BB8FCE', '大王烏賊': '#85C1E2', '駱駝': '#FF6B6B',
    '蜥蜴': '#4ECDC4', '仙人掌': '#45B7D1', '蠍子': '#FFA07A', '蛇': '#98D8C8', '沙漠狐': '#F7DC6F',
    '獅子': '#BB8FCE', '斑馬': '#85C1E2', '羚羊': '#FF6B6B', '大象': '#4ECDC4', '長頸鹿': '#45B7D1',
    '草原狼': '#FFA07A', '北極熊': '#98D8C8', '馴鹿': '#F7DC6F', '雪鴞': '#BB8FCE', '北極狐': '#85C1E2',
    '海豹': '#FF6B6B', '苔蘚': '#4ECDC4', '鴿子': '#45B7D1', '老鼠': '#FFA07A', '貓': '#98D8C8',
    '狗': '#F7DC6F', '鳥類': '#BB8FCE', '青蛙': '#85C1E2', '魚類': '#FF6B6B', '海星': '#4ECDC4',
    '海膽': '#45B7D1', '沙漠鳥': '#FFA07A', '草原鳥': '#98D8C8', '河馬': '#F7DC6F', '凍原鳥': '#BB8FCE',
    '凍原魚': '#85C1E2', '城市鳥': '#FF6B6B', '城市植物': '#4ECDC4', '蝙蝠': '#45B7D1', '海獺': '#FFA07A',
    '海獅': '#98D8C8', '海馬': '#F7DC6F', '沙漠兔': '#BB8FCE', '沙漠烏龜': '#85C1E2', '獵豹': '#FF6B6B',
    '犀牛': '#4ECDC4', '北極兔': '#45B7D1', '海象': '#FFA07A', '鷹': '#98D8C8', '烏鴉': '#F7DC6F',
    '麻雀': '#BB8FCE', '貓頭鷹': '#85C1E2', '山貓': '#FF6B6B', '穿山甲': '#4ECDC4', '貓熊': '#45B7D1',
    '水獺': '#FFA07A', '鴕鳥': '#98D8C8', '浣熊': '#F7DC6F', '鴨子': '#BB8FCE', '老虎': '#85C1E2',
    '猩猩': '#FF6B6B', '水鹿': '#4ECDC4', '眼鏡蛇': '#45B7D1', '砂貓': '#FFA07A', '野牛': '#98D8C8',
    '水牛': '#F7DC6F', '北極狼': '#BB8FCE', '海牛': '#85C1E2', '山豬': '#FF6B6B', '食蟻獸': '#4ECDC4',
    '魟魚': '#45B7D1', '鯨鯊': '#FFA07A', '藍鯨': '#98D8C8', '魔鬼魚': '#F7DC6F', '海蛇': '#BB8FCE',
    '海參': '#85C1E2', '龍蝦': '#FF6B6B', '鮟鱇魚': '#4ECDC4', '燈籠魚': '#45B7D1', '烏賊': '#FFA07A',
    '鬣蜥': '#98D8C8', '羚牛': '#F7DC6F', '袋鼠': '#BB8FCE', '麝牛': '#85C1E2', '樹懶': '#FF6B6B',
    '變色龍': '#4ECDC4', '鴨嘴獸': '#45B7D1', '企鵝': '#FFA07A', '山羊': '#98D8C8'
};

function getAnimalColor(name) {
    return animalColors[name] || '#888888';
}

function getAnimalImageName(name) {
    // 將動物名稱映射到圖片文件名
    const imageMap = {
        '熊': 'bear',
        '鹿': 'deer',
        '松鼠': 'squirrel',
        '狼': 'wolf',
        '兔子': 'rabbit',
        '狐狸': 'fox',
        '鯊魚': 'shark',
        '海豚': 'dolphin',
        '珊瑚': 'coral',
        '章魚': 'octopus',
        '海龜': 'sea_turtle',
        '鯨魚': 'whale',
        '抹香鯨': 'sperm_whale',
        '海龍': 'sea_dragon',
        '海兔': 'sea_hare',
        '旗魚': 'swordfish',
        '小丑魚': 'clownfish',
        '水母': 'jellyfish',
        '海葵': 'sea_anemone',
        '白鯨': 'beluga_whale',
        '海鰻': 'moray_eel',
        '駱駝': 'camel',
        '蜥蜴': 'lizard',
        '仙人掌': 'cactus',
        '蠍子': 'scorpion',
        '蛇': 'snake',
        '沙漠狐': 'desert_fox',
        '獅子': 'lion',
        '斑馬': 'zebra',
        '羚羊': 'antelope',
        '大象': 'elephant',
        '長頸鹿': 'giraffe',
        '草原狼': 'prairie_wolf',
        '北極熊': 'polar_bear',
        '馴鹿': 'reindeer',
        '雪鴞': 'snowy_owl',
        '北極狐': 'arctic_fox',
        '海豹': 'seal',
        '苔蘚': 'moss',
        '鴿子': 'pigeon',
        '老鼠': 'mouse',
        '貓': 'cat',
        '狗': 'dog',
        '鳥類': 'bird',
        '青蛙': 'frog',
        '魚類': 'fish',
        '海星': 'starfish',
        '海膽': 'sea_urchin',
        '沙漠鳥': 'desert_bird',
        '草原鳥': 'prairie_bird',
        '河馬': 'hippopotamus',
        '凍原鳥': 'tundra_bird',
        '凍原魚': 'arctic_fish',
        '城市鳥': 'city_bird',
        '城市植物': 'city_plant',
        '蝙蝠': 'bat',
        '海獺': 'sea_otter',
        '海獅': 'sea_lion',
        '海馬': 'seahorse',
        '沙漠兔': 'desert_rabbit',
        '沙漠烏龜': 'desert_tortoise',
        '獵豹': 'cheetah',
        '犀牛': 'rhinoceros',
        '北極兔': 'arctic_hare',
        '海象': 'walrus',
        '鷹': 'eagle',
        '烏鴉': 'crow',
        '麻雀': 'sparrow',
        '貓頭鷹': 'owl',
        '山貓': 'bobcat',
        '穿山甲': 'pangolin',
        '貓熊': 'panda',
        '水獺': 'otter',
        '鴕鳥': 'ostrich',
        '浣熊': 'raccoon',
        '鴨子': 'duck',
        '老虎': 'tiger',
        '猩猩': 'orangutan',
        '水鹿': 'water_deer',
        '眼鏡蛇': 'cobra',
        '砂貓': 'sand_cat',
        '野牛': 'bison',
        '水牛': 'water_buffalo',
        '北極狼': 'arctic_wolf',
        '海牛': 'manatee',
        '山豬': 'boar',
        '食蟻獸': 'anteater',
        '魟魚': 'ray',
        '鯨鯊': 'whale_shark',
        '藍鯨': 'blue_whale',
        '魔鬼魚': 'devil_ray',
        '海蛇': 'sea_snake',
        '海參': 'sea_cucumber',
        '龍蝦': 'lobster',
        '鮟鱇魚': 'anglerfish',
        '燈籠魚': 'lanternfish',
        '烏賊': 'squid',
        '鬣蜥': 'iguana',
        '羚牛': 'gnu',
        '袋鼠': 'kangaroo',
        '麝牛': 'muskox',
        '樹懶': 'sloth',
        '變色龍': 'chameleon',
        '鴨嘴獸': 'platypus',
        '企鵝': 'penguin',
        '山羊': 'goat'
    };

    return imageMap[name] || 'unknown_animal';
}

const SVG_NS = 'http://www.w3.org/2000/svg';

function createSvgElement(tag, attrs = {}) {
    const el = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([key, value]) => {
        el.setAttribute(key, value);
    });
    return el;
}

function createAnimalSvgElement(name, color) {
    const svg = createSvgElement('svg', { viewBox: '0 0 320 200', xmlns: SVG_NS });
    const stroke = color;
    const strokeWidth = '4';
    const nameKey = name.trim();

    function addPath(d, extra = {}) {
        const attrs = { d, fill: 'none', stroke, 'stroke-width': strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', ...extra };
        svg.appendChild(createSvgElement('path', attrs));
    }

    function addCircle(cx, cy, r, fill = 'none', extra = {}) {
        const attrs = { cx, cy, r, fill, stroke, 'stroke-width': '3', ...extra };
        svg.appendChild(createSvgElement('circle', attrs));
    }

    function addPolygon(points, extra = {}) {
        const attrs = { points, fill: 'none', stroke, 'stroke-width': strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', ...extra };
        svg.appendChild(createSvgElement('polygon', attrs));
    }

    // 特定物種輪廓 - 優先於類別檢查
    if (nameKey === '熊') {
        addPath('M 80,140 Q 100,110 140,100 Q 180,95 220,110 Q 240,130 245,150 Q 240,170 220,180 Q 180,190 140,185 Q 100,180 80,160 Q 75,150 80,140 Z');
        addPath('M 220,110 Q 235,105 245,115 Q 235,125 220,120 Z');
        addPath('M 197,120 Q 188,105 178,110');
        addPath('M 225,115 Q 215,100 205,105');
        addPath('M 100,150 L 100,175');
        addPath('M 140,155 L 140,180');
        addPath('M 180,155 L 180,180');
        addPath('M 220,150 L 220,175');
        addCircle('230', '115', '3');
        addCircle('200', '105', '3');
        addPath('M 225,120 Q 220,123 215,120');
        return svg;
    }

    if (nameKey === '鹿') {
        addPath('M 90,130 Q 120,95 150,90 Q 190,95 210,125 Q 220,150 200,165 Q 170,175 135,170 Q 110,160 90,130 Z');
        addPath('M 190,105 Q 205,90 215,95 Q 220,110 210,120 Q 200,125 190,115 Z');
        addPath('M 185,90 L 195,60 L 205,50');
        addPath('M 200,90 L 220,70');
        addPath('M 100,145 L 100,170');
        addPath('M 120,150 L 120,175');
        addPath('M 170,150 L 170,175');
        addPath('M 195,145 L 195,170');
        addCircle('205', '103', '2');
        return svg;
    }

    if (nameKey === '海豚') {
        addPath('M 60,105 Q 90,75 130,70 Q 170,70 205,90 Q 230,105 245,115 Q 235,120 205,125 Q 175,127 140,122 Q 110,118 80,112 Z');
        addPath('M 145,75 Q 150,60 165,65');
        addPath('M 245,115 L 265,105 L 265,125 Z');
        addCircle('90', '95', '3');
        return svg;
    }

    if (nameKey === '鯊魚') {
        addPath('M 50,100 Q 90,80 130,75 Q 170,80 200,95 Q 225,110 240,120 Q 250,130 240,140 Q 220,145 190,145 Q 160,145 120,140 Q 80,135 50,120 Z');
        addPath('M 150,85 Q 160,65 170,85');
        addPath('M 240,120 L 270,110 L 270,130 Z');
        addCircle('80', '95', '3');
        return svg;
    }

    if (nameKey === '企鵝') {
        addPath('M 140,85 Q 120,80 100,100 Q 95,125 110,150 Q 140,170 180,150 Q 195,125 190,100 Q 170,80 140,85 Z');
        addPath('M 140,85 Q 155,95 160,110 Q 155,130 140,145 Q 125,130 120,110 Q 125,95 140,85 Z');
        addPath('M 150,150 L 145,170');
        addPath('M 160,150 L 165,170');
        addPath('M 120,120 L 105,125');
        addPath('M 160,120 L 175,125');
        addCircle('145', '110', '2');
        return svg;
    }

    if (nameKey === '駱駝') {
        addPath('M 70,130 Q 100,90 140,85 Q 180,90 210,120 Q 225,145 220,170 Q 200,180 170,175 Q 150,170 140,150 Q 125,135 110,130 Q 95,132 85,140 Z');
        addPath('M 110,130 Q 100,115 90,110');
        addPath('M 180,110 Q 185,95 195,90');
        addPath('M 140,145 Q 135,160 130,165');
        addPath('M 175,145 Q 180,160 185,165');
        addPath('M 130,120 L 115,105');
        addCircle('160', '110', '2');
        return svg;
    }

    if (nameKey === '旗魚') {
        addPath('M 50,100 Q 90,60 130,55 Q 170,60 210,85 Q 240,105 250,130 Q 230,145 200,150 Q 170,152 130,150 Q 90,145 50,120 Z');
        addPath('M 130,55 Q 145,20 175,45');
        addPath('M 250,130 L 270,120 L 270,140 Z');
        addCircle('80', '90', '3');
        return svg;
    }

    if (nameKey === '海龜') {
        addPath('M 90,125 Q 120,95 170,90 Q 210,100 225,125 Q 230,145 215,165 Q 190,175 160,175 Q 130,175 105,165 Q 95,150 90,125 Z');
        addPath('M 100,130 Q 85,120 80,110');
        addPath('M 210,130 Q 225,120 230,110');
        addPath('M 110,165 Q 100,180 90,175');
        addPath('M 150,165 Q 145,180 135,175');
        addPath('M 190,165 Q 195,180 205,175');
        addCircle('100', '115', '2');
        return svg;
    }

    if (nameKey === '蛇') {
        addPath('M 60,125 Q 80,110 100,115 Q 120,120 140,130 Q 160,140 180,150 Q 200,160 220,170 Q 240,175 260,165 Q 270,160 275,150');
        addPath('M 60,125 Q 50,135 55,145 Q 60,140 65,130');
        addPath('M 275,150 Q 280,160 290,155 Q 285,145 280,140');
        addPath('M 120,130 Q 115,120 110,125');
        addPath('M 160,145 Q 155,135 150,140');
        addPath('M 200,155 Q 195,145 190,150');
        addCircle('60', '135', '2');
        return svg;
    }

    if (nameKey === '蝙蝠') {
        addPath('M 160,50 Q 140,40 120,45 Q 100,50 80,55 Q 60,60 50,65');
        addPath('M 160,50 Q 180,40 200,45 Q 220,50 240,55 Q 260,60 270,65');
        addPath('M 160,50 Q 150,70 140,80 Q 130,90 120,95 Q 110,100 100,95 Q 90,90 80,80 Q 70,70 60,60');
        addPath('M 160,50 Q 170,70 180,80 Q 190,90 200,95 Q 210,100 220,95 Q 230,90 240,80 Q 250,70 260,60');
        addCircle('130', '75', '2');
        addCircle('190', '75', '2');
        return svg;
    }

    if (name === '狼') {
        // 狼輪廓 - 狼的側面形狀
        addPath('M 70,130 Q 90,100 130,90 Q 170,85 210,100 Q 235,115 245,140 Q 235,155 210,165 Q 170,170 130,165 Q 90,160 70,140 Z'); // 狼身
        addPath('M 210,100 Q 225,95 235,105 Q 225,115 210,110 Z'); // 狼頭
        addPath('M 200,110 Q 190,95 180,100'); // 右耳
        addPath('M 225,105 Q 215,90 205,95'); // 左耳
        addPath('M 90,140 L 90,165'); // 左前腳
        addPath('M 130,145 L 130,170'); // 右前腳
        addPath('M 170,145 L 170,170'); // 左後腳
        addPath('M 210,140 L 210,165'); // 右後腳
        addPath('M 245,140 Q 255,135 260,145'); // 狼尾
        addCircle('220', '105', '3', 'none'); // 狼眼
        addPath('M 235,110 Q 230,113 225,110'); // 狼鼻子
        return svg;
    }

    if (name === '狐狸') {
        // 狐狸輪廓 - 狐狸的側面形狀
        addPath('M 70,135 Q 90,105 130,95 Q 170,90 210,105 Q 235,120 245,145 Q 235,160 210,170 Q 170,175 130,170 Q 90,165 70,145 Z'); // 狐狸身
        addPath('M 210,105 Q 225,100 235,110 Q 225,120 210,115 Z'); // 狐狸頭
        addPath('M 200,115 Q 190,100 180,105'); // 右耳
        addPath('M 225,110 Q 215,95 205,100'); // 左耳
        addPath('M 90,145 L 90,170'); // 左前腳
        addPath('M 130,150 L 130,175'); // 右前腳
        addPath('M 170,150 L 170,175'); // 左後腳
        addPath('M 210,145 L 210,170'); // 右後腳
        addPath('M 245,145 Q 255,140 260,150 Q 255,160 245,155'); // 狐狸尾
        addCircle('220', '110', '3', 'none'); // 狐狸眼
        addPath('M 235,115 Q 230,118 225,115'); // 狐狸鼻子
        return svg;
    }

    if (name === '鯨魚') {
        // 鯨魚輪廓 - 特殊的鯨魚形狀
        addPath('M 40,120 Q 70,90 120,100 Q 170,95 220,110 Q 250,125 260,150 Q 250,175 220,185 Q 170,190 120,185 Q 70,180 40,155 Z'); // 鯨魚身
        addPath('M 260,150 L 290,135 L 290,145 L 260,130 Z'); // 鯨魚尾
        addPath('M 120,100 Q 110,80 130,85'); // 背鰭
        addPath('M 120,185 Q 110,200 100,195'); // 腹鰭
        addPath('M 220,110 Q 230,95 240,100'); // 側鰭
        addPath('M 220,110 Q 235,105 245,115 Q 235,125 220,120 Z'); // 鯨魚頭
        addCircle('235', '115', '3', 'none'); // 鯨魚眼
        addPath('M 245,120 Q 255,125 260,130'); // 鯨魚噴水孔
        return svg;
    }

    if (name === '兔子') {
        // 兔子輪廓 - 兔子的側面形狀
        addPath('M 80,140 Q 100,110 140,100 Q 180,95 220,110 Q 240,130 245,150 Q 240,165 220,175 Q 180,180 140,175 Q 100,170 80,155 Z'); // 兔子身
        addPath('M 220,110 Q 235,105 245,115 Q 235,125 220,120 Z'); // 兔子頭
        addPath('M 200,120 Q 190,105 180,110'); // 右耳
        addPath('M 225,115 Q 215,100 205,105'); // 左耳
        addPath('M 100,150 L 100,175'); // 左前腳
        addPath('M 140,155 L 140,180'); // 右前腳
        addPath('M 180,155 L 180,180'); // 左後腳
        addPath('M 220,150 L 220,175'); // 右後腳
        addPath('M 245,150 Q 255,145 260,155 Q 255,165 245,160'); // 兔子尾
        addCircle('230', '115', '3', 'none'); // 兔子眼
        addPath('M 245,120 Q 240,123 235,120'); // 兔子鼻子
        return svg;
    }

    if (/鳥|鴿|麻雀|鷹|貓頭鴉|企鵝|鴕鳥|雪鴞|沙漠鳥|草原鳥|凍原鳥|城市鳥/.test(name)) {
        // 鳥類輪廓 - 側面視圖
        addPath('M 90,125 Q 110,95 140,85 Q 170,80 200,90 Q 220,100 235,120 Q 225,130 210,135 Q 190,140 170,135 Q 150,130 130,125 Q 110,120 90,125 Z'); // 鳥身
        addPath('M 200,90 L 215,85 L 215,95 Z'); // 喙
        addPath('M 145,100 Q 155,90 170,95 Q 160,110 145,100'); // 翅膀
        addPath('M 210,125 L 230,120 L 235,130'); // 尾巴
        addPath('M 125,135 L 125,155'); // 左腳
        addPath('M 155,135 L 155,155'); // 右腳
        addCircle('210', '100', '2', 'none'); // 眼睛
        return svg;
    }

    if (/魚|鯊|鯨|章|魟|海馬|海豚|河豚|海象|海牛|龍蝦|鮟鱇|燈籠魚|烏賊|海龜|海蛇|鱟|海獺|海獅|海龍|海兔|海鰻|旗魚|小丑魚|白鯨|抹香鯨|大王烏賊|凍原魚/.test(name)) {
        // 魚類輪廓 - 側面視圖，流線型魚體
        addPath('M 50,100 Q 80,70 120,80 Q 160,75 200,90 Q 230,105 240,130 Q 230,145 200,150 Q 160,155 120,150 Q 80,145 50,120 Z'); // 魚身
        addPath('M 240,130 L 270,115 L 270,125 L 240,110 Z'); // 魚尾
        addPath('M 120,80 Q 110,60 130,70'); // 背鰭
        addPath('M 120,140 Q 110,155 100,150'); // 腹鰭
        addCircle('70', '105', '3', 'none'); // 魚眼
        return svg;
    }

    if (/蛇|蜥蜴|龜|烏龜|變色龍|眼鏡蛇|蠍子/.test(name)) {
        // 爬行類輪廓
        if (/龜|烏龜/.test(name)) {
            addPath('M 80,135 Q 95,100 130,90 Q 170,85 210,95 Q 235,110 245,140 Q 235,165 205,175 Q 170,185 130,180 Q 95,175 75,160 Q 70,150 80,135 Z'); // 烏龜殼
            addPath('M 80,135 Q 60,125 55,115 Q 55,105 65,100'); // 烏龜頭
            addPath('M 205,175 Q 215,190 225,185'); // 右後腳
            addPath('M 125,180 Q 115,195 105,190'); // 左後腳
            addPath('M 95,165 Q 85,180 75,175'); // 左前腳
            addPath('M 195,165 Q 205,180 215,175'); // 右前腳
            addCircle('65', '105', '2', 'none'); // 左眼
            addCircle('225', '105', '2', 'none'); // 右眼
        } else {
            addPath('M 60,125 Q 80,110 100,115 Q 120,120 140,130 Q 160,140 180,150 Q 200,160 220,170 Q 240,175 260,165 Q 270,160 275,150'); // 蛇身曲線
            addPath('M 60,125 Q 50,135 55,145 Q 60,140 65,130'); // 蛇頭
            addPath('M 275,150 Q 280,160 290,155 Q 285,145 280,140'); // 蛇尾
            addPath('M 120,130 Q 115,120 110,125'); // 鱗片1
            addPath('M 160,145 Q 155,135 150,140'); // 鱗片2
            addPath('M 200,155 Q 195,145 190,150'); // 鱗片3
            addCircle('60', '135', '2', 'none'); // 蛇眼
        }
        return svg;
    }

    if (/蝙蝠/.test(name)) {
        // 蝙蝠輪廓
        addPath('M 160,50 Q 140,40 120,45 Q 100,50 80,55 Q 60,60 50,65'); // 左翅膀
        addPath('M 160,50 Q 180,40 200,45 Q 220,50 240,55 Q 260,60 270,65'); // 右翅膀
        addPath('M 160,50 Q 150,70 140,80 Q 130,90 120,95 Q 110,100 100,95 Q 90,90 80,80 Q 70,70 60,60'); // 蝙蝠身
        addPath('M 160,50 Q 170,70 180,80 Q 190,90 200,95 Q 210,100 220,95 Q 230,90 240,80 Q 250,70 260,60'); // 蝙蝠身另一側
        addCircle('130', '75', '2', 'none'); // 左眼
        addCircle('190', '75', '2', 'none'); // 右眼
        return svg;
    }

    if (/仙人掌|城市植物|苔蘚|植物|珊瑚|水母|海葵|海星|海膽/.test(name)) {
        // 植物/海洋無脊椎動物輪廓
        if (/珊瑚|水母|海葵/.test(name)) {
            // 水母輪廓 - 傘狀
            addPath('M 160,60 Q 120,50 80,60 Q 60,70 50,90 Q 40,110 50,130 Q 60,150 80,160 Q 120,170 160,165 Q 200,170 240,160 Q 260,150 270,130 Q 280,110 270,90 Q 260,70 240,60 Q 200,50 160,60 Z'); // 水母傘
            addPath('M 160,165 Q 150,185 140,180'); // 觸手1
            addPath('M 160,165 Q 170,185 180,180'); // 觸手2
            addPath('M 120,170 Q 110,190 100,185'); // 觸手3
            addPath('M 200,170 Q 210,190 220,185'); // 觸手4
            addPath('M 80,165 Q 70,185 60,180'); // 觸手5
            addPath('M 240,165 Q 250,185 260,180'); // 觸手6
            addCircle('140', '80', '3', 'none'); // 水母眼1
            addCircle('180', '80', '3', 'none'); // 水母眼2
        } else if (/海星|海膽/.test(name)) {
            // 海星輪廓
            addPath('M 160,100 L 140,120 L 120,115 L 100,135 L 120,155 L 140,170 L 160,165 L 180,170 L 200,155 L 220,135 L 200,115 L 180,120 Z'); // 海星五角形
            addPath('M 140,130 Q 130,125 135,120'); // 手臂1細節
            addPath('M 120,145 Q 110,140 115,135'); // 手臂2細節
            addPath('M 180,130 Q 190,125 185,120'); // 手臂3細節
            addPath('M 200,145 Q 210,140 205,135'); // 手臂4細節
            addPath('M 160,155 Q 155,165 165,165'); // 中心細節
        } else {
            // 仙人掌輪廓
            addPath('M 160,180 L 160,120'); // 主幹
            addPath('M 140,160 L 120,140 L 140,120'); // 左枝
            addPath('M 180,160 L 200,140 L 180,120'); // 右枝
            addPath('M 150,140 L 130,130 L 150,120'); // 左小枝
            addPath('M 170,140 L 190,130 L 170,120'); // 右小枝
            addPath('M 155,100 Q 145,90 155,80'); // 頂部刺1
            addPath('M 165,100 Q 175,90 165,80'); // 頂部刺2
            addPath('M 145,150 Q 135,140 145,130'); // 左刺
            addPath('M 175,150 Q 185,140 175,130'); // 右刺
        }
        return svg;
    }

    // 哺乳類輪廓 - 更簡潔的四肢動物形狀
    addPath('M 70,125 Q 90,95 130,85 Q 170,80 210,95 Q 235,110 245,135 Q 235,150 210,155 Q 180,160 150,155 Q 120,150 95,140 Q 80,135 70,125 Z'); // 身體輪廓
    addPath('M 200,95 Q 215,90 225,100 Q 215,110 200,105 Z'); // 頭部
    addPath('M 190,105 Q 180,90 170,95'); // 右耳
    addPath('M 205,100 Q 195,85 185,90'); // 左耳
    addPath('M 95,140 L 95,165'); // 左前腳
    addPath('M 125,145 L 125,170'); // 右前腳
    addPath('M 175,145 L 175,170'); // 左後腳
    addPath('M 205,140 L 205,165'); // 右後腳
    addPath('M 70,125 Q 60,135 55,130'); // 尾巴
    addCircle('208', '100', '3', 'none'); // 眼睛
    addPath('M 205,105 Q 200,108 195,105'); // 鼻子
    return svg;
}

function createAnimalShapeElement(org) {
    const wrapper = document.createElement('div');
    wrapper.className = 'animal-shape';

    // 創建圖片元素而不是SVG
    const img = document.createElement('img');
    img.alt = org.name;
    img.loading = 'lazy';

    // 根據動物名稱設置圖片路徑
    const imageName = getAnimalImageName(org.name);
    img.src = `images/${imageName}.jpg`;

    // 添加錯誤處理，如果圖片載入失敗，顯示動物名稱
    img.onerror = function() {
        console.log(`圖片載入失敗: ${imageName}.jpg`);
        // 創建一個備用顯示，顯示動物名稱
        const fallback = document.createElement('div');
        fallback.className = 'animal-fallback';
        fallback.textContent = org.name;
        fallback.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background: ${getAnimalColor(org.name)};
            color: white;
            font-weight: bold;
            border-radius: 8px;
            text-align: center;
            padding: 10px;
            box-sizing: border-box;
        `;
        wrapper.innerHTML = '';
        wrapper.appendChild(fallback);
    };

    wrapper.appendChild(img);

    // 添加調試信息
    console.log(`Created image for ${org.name}: images/${imageName}.jpg`);

    return wrapper;
}

// 平滑滾動到錨點
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 生物資料
const organisms = [
    { name: '熊', habitat: '森林' },
    { name: '鹿', habitat: '森林' },
    { name: '松鼠', habitat: '森林' },
    { name: '狼', habitat: '森林' },
    { name: '兔子', habitat: '森林' },
    { name: '狐狸', habitat: '森林' },
    { name: '鯊魚', habitat: '海洋' },
    { name: '海豚', habitat: '海洋' },
    { name: '珊瑚', habitat: '海洋' },
    { name: '章魚', habitat: '海洋' },
    { name: '海龜', habitat: '海洋' },
    { name: '鯨魚', habitat: '海洋' },
    { name: '抹香鯨', habitat: '海洋' },
    { name: '海龍', habitat: '海洋' },
    { name: '海兔', habitat: '海洋' },
    { name: '旗魚', habitat: '海洋' },
    { name: '小丑魚', habitat: '海洋' },
    { name: '水母', habitat: '海洋' },
    { name: '海葵', habitat: '海洋' },
    { name: '白鯨', habitat: '海洋' },
    { name: '海鰻', habitat: '海洋' },
    { name: '鱟', habitat: '海洋' },
    { name: '河豚', habitat: '海洋' },
    { name: '大王烏賊', habitat: '海洋' },
    { name: '駱駝', habitat: '沙漠' },
    { name: '蜥蜴', habitat: '沙漠' },
    { name: '仙人掌', habitat: '沙漠' },
    { name: '蠍子', habitat: '沙漠' },
    { name: '蛇', habitat: '沙漠' },
    { name: '沙漠狐', habitat: '沙漠' },
    { name: '獅子', habitat: '草原' },
    { name: '斑馬', habitat: '草原' },
    { name: '羚羊', habitat: '草原' },
    { name: '大象', habitat: '草原' },
    { name: '長頸鹿', habitat: '草原' },
    { name: '草原狼', habitat: '草原' },
    { name: '北極熊', habitat: '凍原' },
    { name: '馴鹿', habitat: '凍原' },
    { name: '雪鴞', habitat: '凍原' },
    { name: '北極狐', habitat: '凍原' },
    { name: '海豹', habitat: '凍原' },
    { name: '苔蘚', habitat: '凍原' },
    { name: '鴿子', habitat: '城市' },
    { name: '老鼠', habitat: '城市' },
    { name: '松鼠', habitat: '城市' },
    { name: '貓', habitat: '城市' },
    { name: '狗', habitat: '城市' },
    { name: '鳥類', habitat: '森林' },
    { name: '青蛙', habitat: '森林' },
    { name: '魚類', habitat: '海洋' },
    { name: '海星', habitat: '海洋' },
    { name: '海膽', habitat: '海洋' },
    { name: '沙漠鳥', habitat: '沙漠' },
    { name: '草原鳥', habitat: '草原' },
    { name: '河馬', habitat: '草原' },
    { name: '凍原鳥', habitat: '凍原' },
    { name: '凍原魚', habitat: '凍原' },
    { name: '城市鳥', habitat: '城市' },
    { name: '城市植物', habitat: '城市' },
    { name: '蝙蝠', habitat: '森林' },
    { name: '蛇', habitat: '森林' },
    { name: '海獺', habitat: '海洋' },
    { name: '海獅', habitat: '海洋' },
    { name: '海馬', habitat: '海洋' },
    { name: '沙漠兔', habitat: '沙漠' },
    { name: '沙漠烏龜', habitat: '沙漠' },
    { name: '獵豹', habitat: '草原' },
    { name: '犀牛', habitat: '草原' },
    { name: '北極兔', habitat: '凍原' },
    { name: '海象', habitat: '凍原' },
    { name: '鷹', habitat: '凍原' },
    { name: '烏鴉', habitat: '城市' },
    { name: '麻雀', habitat: '城市' },
    { name: '貓頭鷹', habitat: '森林' },
    { name: '山貓', habitat: '森林' },
    { name: '穿山甲', habitat: '森林' },
    { name: '貓熊', habitat: '森林' },
    { name: '水獺', habitat: '海洋' },
    { name: '海馬', habitat: '海洋' },
    { name: '鴕鳥', habitat: '草原' },
    { name: '浣熊', habitat: '城市' },
    { name: '鴨子', habitat: '城市' },
    { name: '老虎', habitat: '森林' },
    { name: '猩猩', habitat: '森林' },
    { name: '水鹿', habitat: '森林' },
    { name: '眼鏡蛇', habitat: '沙漠' },
    { name: '砂貓', habitat: '沙漠' },
    { name: '野牛', habitat: '草原' },
    { name: '水牛', habitat: '草原' },
    { name: '北極狼', habitat: '凍原' },
    { name: '海牛', habitat: '海洋' },
    { name: '山豬', habitat: '森林' },
    { name: '食蟻獸', habitat: '森林' },
    { name: '魟魚', habitat: '海洋' },
    { name: '鯨鯊', habitat: '海洋' },
    { name: '藍鯨', habitat: '海洋' },
    { name: '魔鬼魚', habitat: '海洋' },
    { name: '海蛇', habitat: '海洋' },
    { name: '海參', habitat: '海洋' },
    { name: '龍蝦', habitat: '海洋' },
    { name: '鮟鱇魚', habitat: '海洋' },
    { name: '燈籠魚', habitat: '海洋' },
    { name: '烏賊', habitat: '海洋' },
    { name: '鬣蜥', habitat: '沙漠' },
    { name: '羚牛', habitat: '草原' },
    { name: '袋鼠', habitat: '草原' },
    { name: '麝牛', habitat: '凍原' },
    { name: '樹懶', habitat: '森林' },
    { name: '變色龍', habitat: '森林' },
    { name: '鴨嘴獸', habitat: '森林' },
    { name: '企鵝', habitat: '海洋' },
    { name: '山羊', habitat: '草原' }
];

// 搜尋功能
function displayHabitatAnimals(habitat) {
    const habitatResult = document.getElementById('habitatResult');
    const animals = organisms.filter(org => org.habitat === habitat);

    if (animals.length === 0) {
        habitatResult.innerHTML = `<p>此棲息地目前沒有資料。</p>`;
        return;
    }

    habitatResult.innerHTML = `
        <p><strong>${habitat}</strong> 的生物：</p>
        <div class="animal-list"></div>
    `;
    const animalList = habitatResult.querySelector('.animal-list');
    animals.forEach(org => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.appendChild(createAnimalShapeElement(org));
        const label = document.createElement('p');
        label.textContent = org.name;
        card.appendChild(label);
        animalList.appendChild(card);
    });
}

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('searchResult');
    resultDiv.innerHTML = '';

    if (query === '') {
        resultDiv.innerHTML = '<p>請輸入生物名字。</p>';
        return;
    }

    const found = organisms.find(org => org.name.toLowerCase() === query);

    if (found) {
        resultDiv.innerHTML = '';
        const title = document.createElement('h3');
        title.textContent = found.name;
        resultDiv.appendChild(title);

        const shapeContainer = document.createElement('div');
        shapeContainer.style.margin = '1em 0';
        shapeContainer.style.width = '300px';
        shapeContainer.appendChild(createAnimalShapeElement(found));
        resultDiv.appendChild(shapeContainer);

        const habitatText = document.createElement('p');
        habitatText.innerHTML = `<strong>棲息地：</strong>${found.habitat}`;
        resultDiv.appendChild(habitatText);
    } else {
        resultDiv.innerHTML = '<p>未找到此生物。</p>';
    }
});

// 添加一些簡單的動畫效果
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(section);
    });

    document.querySelectorAll('section.habitat-card').forEach(section => {
        section.addEventListener('click', () => {
            displayHabitatAnimals(section.dataset.habitat);
        });
    });
});