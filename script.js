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

    if (/鳥|鴿|麻雀|鷹|貓頭鴉|企鵝|鴕鳥/.test(name)) {
        // 鳥類輪廓 - 參考 wiki 鳥類圖片
        addPath('M 80,160 Q 100,120 120,100 Q 140,80 160,90 Q 180,100 200,120 Q 220,140 240,160'); // 身體輪廓
        addPath('M 120,100 Q 110,85 100,90 Q 95,95 100,105'); // 頭部
        addPath('M 160,90 Q 170,75 180,80 Q 185,85 180,95'); // 頭部另一側
        addPath('M 140,110 Q 130,95 120,100'); // 脖子
        addPath('M 180,110 Q 190,95 200,100'); // 脖子另一側
        addPath('M 100,120 Q 80,110 70,130 Q 75,150 90,140'); // 左翅膀
        addPath('M 220,120 Q 240,110 250,130 Q 245,150 230,140'); // 右翅膀
        addPath('M 130,140 Q 120,155 110,150'); // 左腳
        addPath('M 190,140 Q 200,155 210,150'); // 右腳
        addCircle('115', '95', '3', 'none'); // 左眼
        addCircle('185', '95', '3', 'none'); // 右眼
        return svg;
    }

    if (/魚|鯊|鯨|章|魟|海馬|海豚|河豚|海象|海牛|龍蝦|鮟鱇|燈籠魚|烏賊|海龜|海蛇|鱟|海獺|海獅/.test(name)) {
        // 魚類輪廓 - 參考 wiki 魚類圖片
        addPath('M 50,100 Q 80,70 120,80 Q 160,75 200,90 Q 240,100 260,110 Q 240,130 200,120 Q 160,125 120,120 Q 80,130 50,110 Z'); // 魚身輪廓
        addPath('M 260,100 Q 280,85 290,95 Q 285,115 270,110'); // 魚尾
        addPath('M 50,95 Q 30,85 25,100 Q 30,115 50,105'); // 魚頭
        addPath('M 120,85 Q 110,75 100,80'); // 魚鰭上
        addPath('M 120,115 Q 110,125 100,120'); // 魚鰭下
        addCircle('70', '100', '4', 'none'); // 魚眼
        return svg;
    }

    if (/蛇|蜥蜴|龜|烏龜|變色龍|眼鏡蛇|沙漠狐|蝙蝠/.test(name)) {
        // 爬行類輪廓 - 參考 wiki 爬行動物圖片
        addPath('M 40,120 Q 60,110 80,115 Q 100,120 120,115 Q 140,110 160,120 Q 180,130 200,125 Q 220,120 240,125 Q 260,130 280,125 Q 290,120 295,130'); // 蛇身曲線
        addPath('M 40,125 Q 35,135 45,140 Q 50,135 45,125'); // 蛇頭
        addPath('M 295,130 Q 300,140 310,135 Q 305,125 295,130'); // 蛇尾
        addPath('M 120,115 Q 115,105 110,110'); // 鱗片1
        addPath('M 160,120 Q 155,110 150,115'); // 鱗片2
        addPath('M 200,125 Q 195,115 190,120'); // 鱗片3
        addCircle('45', '135', '2', 'none'); // 蛇眼
        return svg;
    }

    if (/仙人掌|城市植物|苔蘚|植物/.test(name)) {
        // 植物輪廓 - 參考 wiki 仙人掌圖片
        addPath('M 160,180 L 160,120'); // 主幹
        addPath('M 140,140 Q 120,120 140,100 Q 160,90 180,100 Q 200,120 180,140'); // 左刺
        addPath('M 180,140 Q 200,120 180,100 Q 160,90 140,100 Q 120,120 140,140'); // 右刺
        addPath('M 150,130 Q 130,110 150,90 Q 170,85 190,90 Q 210,110 190,130'); // 上刺
        addPath('M 170,130 Q 190,110 170,90 Q 150,85 130,90 Q 110,110 130,130'); // 下刺
        addPath('M 155,110 Q 145,100 155,90'); // 小刺1
        addPath('M 165,110 Q 175,100 165,90'); // 小刺2
        return svg;
    }

    // 哺乳類輪廓 - 參考 wiki 熊圖片
    addPath('M 80,160 Q 100,130 120,120 Q 140,110 160,115 Q 180,120 200,130 Q 220,150 240,160'); // 熊身輪廓
    addPath('M 120,120 Q 110,100 130,90 Q 150,85 170,90 Q 190,100 180,120'); // 熊頭
    addPath('M 140,115 Q 130,105 120,110'); // 左耳
    addPath('M 180,115 Q 190,105 200,110'); // 右耳
    addPath('M 100,140 Q 90,125 80,135'); // 左前腳
    addPath('M 220,140 Q 230,125 240,135'); // 右前腳
    addPath('M 120,160 Q 110,175 100,170'); // 左後腳
    addPath('M 200,160 Q 210,175 220,170'); // 右後腳
    addCircle('145', '105', '4', 'none'); // 左眼
    addCircle('175', '105', '4', 'none'); // 右眼
    addPath('M 160,115 Q 155,120 165,120'); // 鼻子
    return svg;
}

function createAnimalShapeElement(org) {
    const wrapper = document.createElement('div');
    wrapper.className = 'animal-shape';
    wrapper.appendChild(createAnimalSvgElement(org.name, getAnimalColor(org.name)));
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