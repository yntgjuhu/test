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

    function addPolygon(points, fill, extra = {}) {
        const attrs = { points, fill, stroke, 'stroke-width': '2', ...extra };
        svg.appendChild(createSvgElement('polygon', attrs));
    }

    function addCircle(cx, cy, r, fill, extra = {}) {
        const attrs = { cx, cy, r, fill, ...extra };
        svg.appendChild(createSvgElement('circle', attrs));
    }

    if (/鳥|鴿|麻雀|鷹|貓頭鴉|企鵝|鴕鳥/.test(name)) {
        addPolygon('60,140 100,80 140,60 180,80 220,140 200,130 180,150 140,150 120,140', color);
        addPolygon('140,70 160,50 180,70 160,90', '#fff', { opacity: '0.6' });
        addPolygon('220,120 260,100 280,110 240,140', '#ffd54f');
        addCircle('130', '110', '12', '#fff');
        addCircle('130', '110', '5', '#333');
        return svg;
    }

    if (/魚|鯊|鯨|章|魟|海馬|海豚|河豚|海象|海牛|龍蝦|鮟鱇|燈籠魚|烏賊|海龜|海蛇|鱟|海獺|海獅/.test(name)) {
        addPolygon('40,100 120,60 210,70 260,100 210,130 120,140', color);
        addPolygon('260,100 300,80 300,120', color);
        addPolygon('110,70 130,40 150,70', '#fff', { opacity: '0.6' });
        addCircle('90', '95', '10', '#fff');
        addCircle('90', '95', '4', '#333');
        return svg;
    }

    if (/蛇|蜥蜴|龜|烏龜|變色龍|眼鏡蛇|沙漠狐|蝙蝠/.test(name)) {
        addPolygon('40,120 80,110 120,130 160,110 200,130 240,115 280,120 300,135 280,150 240,145 200,130 160,145 120,140 80,160 40,150', color);
        addCircle('40', '120', '12', color);
        addPolygon('35,120 15,110 15,130', '#ffcc00');
        addCircle('44', '116', '4', '#333');
        return svg;
    }

    if (/仙人掌|城市植物|苔蘚|植物/.test(name)) {
        svg.appendChild(createSvgElement('rect', { x: '150', y: '100', width: '20', height: '70', fill: '#8b5a2b' }));
        addPolygon('160,100 120,70 160,40 200,70', color);
        addPolygon('130,90 100,70 110,100 130,110', color);
        addPolygon('190,90 220,70 210,100 190,110', color);
        addCircle('160', '70', '10', '#fff', { opacity: '0.8' });
        return svg;
    }

    addPolygon('60,130 110,80 150,60 200,80 260,130 240,145 120,145', color);
    addPolygon('90,80 110,45 130,80', color);
    addPolygon('200,80 220,45 240,80', color);
    addCircle('130', '100', '10', '#fff');
    addCircle('130', '100', '4', '#333');
    addCircle('210', '100', '10', '#fff');
    addCircle('210', '100', '4', '#333');
    addPolygon('250,130 280,120 290,140 260,150', color);
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