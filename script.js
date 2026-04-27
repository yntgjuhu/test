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
    const stroke = '#333';
    const strokeWidth = '3';

    function addPath(d, extra = {}) {
        const attrs = { d, fill: 'none', stroke, 'stroke-width': strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', ...extra };
        svg.appendChild(createSvgElement('path', attrs));
    }

    function addCircle(cx, cy, r, fill, extra = {}) {
        const attrs = { cx, cy, r, fill, stroke, 'stroke-width': '2', ...extra };
        svg.appendChild(createSvgElement('circle', attrs));
    }

    if (/鳥|鴿|麻雀|鷹|貓頭鴉|企鵝|鴕鳥|雪鴞|沙漠鳥|草原鳥|凍原鳥|城市鳥/.test(name)) {
        // 鳥類輪廓 - 側面視圖，參考 wiki 鳥類插圖
        addPath('M 200,120 Q 220,100 240,110 Q 250,120 240,130 Q 220,140 200,130'); // 鳥頭
        addPath('M 190,125 Q 180,115 170,120 Q 165,130 170,140 Q 180,145 190,140'); // 鳥喙
        addPath('M 200,125 Q 190,135 180,140 Q 170,150 160,155 Q 150,160 140,155 Q 130,150 120,140 Q 110,130 100,120 Q 90,110 80,105 Q 70,100 60,95 Q 50,90 40,85 Q 35,80 30,75'); // 鳥身和尾巴
        addPath('M 120,130 Q 110,120 100,115 Q 90,110 80,105 Q 70,100 60,95'); // 翅膀上緣
        addPath('M 120,140 Q 130,150 140,155 Q 150,160 160,155 Q 170,150 180,140'); // 翅膀下緣
        addPath('M 80,155 Q 70,165 60,160'); // 左腳
        addPath('M 100,155 Q 90,165 80,160'); // 右腳
        addCircle('210', '115', '2', 'none'); // 鳥眼
        return svg;
    }

    if (/魚|鯊|鯨|章|魟|海馬|海豚|河豚|海象|海牛|龍蝦|鮟鱇|燈籠魚|烏賊|海龜|海蛇|鱟|海獺|海獅|海龍|海兔|海鰻|旗魚|小丑魚|白鯨|抹香鯨|大王烏賊|凍原魚/.test(name)) {
        // 魚類輪廓 - 側面視圖，流線型身體
        addPath('M 250,100 Q 270,90 280,95 Q 285,105 280,115 Q 270,120 250,110'); // 魚尾
        addPath('M 40,100 Q 30,90 25,100 Q 30,110 40,105'); // 魚頭
        addPath('M 40,102.5 Q 60,85 80,80 Q 100,75 120,80 Q 140,85 160,90 Q 180,95 200,100 Q 220,105 240,110 Q 250,112 250,107.5 Q 240,105 220,102.5 Q 200,100 180,97.5 Q 160,95 140,92.5 Q 120,90 100,87.5 Q 80,85 60,87.5 Q 40,90 40,102.5 Z'); // 魚身輪廓
        addPath('M 120,82 Q 110,70 100,75'); // 背鰭
        addPath('M 120,117 Q 110,130 100,125'); // 腹鰭
        addPath('M 80,95 Q 70,85 60,90'); // 胸鰭
        addCircle('50', '100', '3', 'none'); // 魚眼
        return svg;
    }

    if (/蛇|蜥蜴|龜|烏龜|變色龍|眼鏡蛇|沙漠狐|蝙蝠|蠍子/.test(name)) {
        // 爬行類輪廓
        if (/龜|烏龜/.test(name)) {
            // 烏龜輪廓 - 有殼的形狀
            addPath('M 160,140 Q 140,130 120,135 Q 100,140 80,145 Q 60,150 50,155 Q 40,160 45,170 Q 50,180 60,175 Q 80,170 100,165 Q 120,160 140,155 Q 160,150 180,155 Q 200,160 220,165 Q 240,170 250,175 Q 255,180 250,170 Q 245,160 240,155 Q 220,150 200,145 Q 180,140 160,140 Z'); // 龜殼
            addPath('M 160,140 Q 150,120 140,110 Q 130,100 120,95 Q 110,90 100,95 Q 90,100 80,110 Q 70,120 60,130'); // 龜頭
            addPath('M 160,140 Q 170,120 180,110 Q 190,100 200,95 Q 210,90 220,95 Q 230,100 240,110 Q 250,120 260,130'); // 龜頭另一側
            addPath('M 100,165 Q 90,175 80,170'); // 左前腳
            addPath('M 220,165 Q 230,175 240,170'); // 右前腳
            addPath('M 120,175 Q 110,185 100,180'); // 左後腳
            addPath('M 200,175 Q 210,185 220,180'); // 右後腳
            addCircle('90', '105', '2', 'none'); // 左眼
            addCircle('230', '105', '2', 'none'); // 右眼
        } else if (/蝙蝠/.test(name)) {
            // 蝙蝠輪廓 - 倒掛的形狀
            addPath('M 160,50 Q 140,40 120,45 Q 100,50 80,55 Q 60,60 50,65'); // 左翅膀
            addPath('M 160,50 Q 180,40 200,45 Q 220,50 240,55 Q 260,60 270,65'); // 右翅膀
            addPath('M 160,50 Q 150,70 140,80 Q 130,90 120,95 Q 110,100 100,95 Q 90,90 80,80 Q 70,70 60,60'); // 蝙蝠身
            addPath('M 160,50 Q 170,70 180,80 Q 190,90 200,95 Q 210,100 220,95 Q 230,90 240,80 Q 250,70 260,60'); // 蝙蝠身另一側
            addCircle('130', '75', '2', 'none'); // 左眼
            addCircle('190', '75', '2', 'none'); // 右眼
        } else {
            // 蛇輪廓 - S形曲線
            addPath('M 40,120 Q 50,110 60,115 Q 70,120 80,125 Q 90,130 100,135 Q 110,140 120,145 Q 130,150 140,155 Q 150,160 160,165 Q 170,170 180,175 Q 190,180 200,185 Q 210,190 220,195 Q 230,200 240,205 Q 250,210 260,215 Q 270,220 280,225'); // 蛇身S形
            addPath('M 40,125 Q 30,135 35,145 Q 40,140 45,130'); // 蛇頭
            addPath('M 280,225 Q 285,235 295,230 Q 290,220 285,215'); // 蛇尾
            addPath('M 120,150 Q 115,140 110,145'); // 鱗片1
            addPath('M 160,170 Q 155,160 150,165'); // 鱗片2
            addPath('M 200,190 Q 195,180 190,185'); // 鱗片3
            addCircle('40', '135', '2', 'none'); // 蛇眼
        }
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

    // 哺乳類輪廓 - 四肢動物的典型形狀
    addPath('M 200,120 Q 220,110 240,115 Q 250,125 245,135 Q 230,145 210,140 Q 190,135 180,125 Q 170,115 160,110 Q 150,105 140,110 Q 130,115 120,125 Q 110,135 100,140 Q 80,145 65,135 Q 60,125 65,115 Q 80,110 100,115 Q 120,120 140,125 Q 160,130 180,135 Q 200,140 200,120 Z'); // 動物身體輪廓
    addPath('M 200,120 Q 190,100 180,90 Q 170,80 160,75 Q 150,70 140,75 Q 130,80 120,90 Q 110,100 100,110'); // 動物頭部
    addPath('M 140,110 Q 130,95 120,100'); // 左耳
    addPath('M 180,110 Q 190,95 200,100'); // 右耳
    addPath('M 120,135 Q 110,145 100,140'); // 左前腳
    addPath('M 200,135 Q 210,145 220,140'); // 右前腳
    addPath('M 140,150 Q 130,160 120,155'); // 左後腳
    addPath('M 180,150 Q 190,160 200,155'); // 右後腳
    addPath('M 220,130 Q 240,125 250,135 Q 245,145 230,140'); // 尾巴
    addCircle('130', '90', '3', 'none'); // 左眼
    addCircle('170', '90', '3', 'none'); // 右眼
    addPath('M 150,100 Q 145,105 155,105'); // 鼻子
    return svg;
}

function createAnimalShapeElement(org) {
    const wrapper = document.createElement('div');
    wrapper.className = 'animal-shape';
    const svg = createAnimalSvgElement(org.name, getAnimalColor(org.name));
    wrapper.appendChild(svg);

    // 添加調試信息
    console.log(`Created SVG for ${org.name}:`, svg.outerHTML.substring(0, 200) + '...');

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