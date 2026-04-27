// 生成 SVG 佔位符圖片
function generatePlaceholderImage(text) {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    const hash = text.charCodeAt(0) + text.length;
    const color = colors[hash % colors.length];
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200">
        <rect fill="${color}" width="320" height="200"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="24px" font-weight="bold" font-family="Arial">${text}</text>
    </svg>`;
    
    return 'data:image/svg+xml;base64,' + btoa(svg);
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
    { name: '熊', habitat: '森林', image: generatePlaceholderImage('熊') },
    { name: '鹿', habitat: '森林', image: generatePlaceholderImage('鹿') },
    { name: '松鼠', habitat: '森林', image: generatePlaceholderImage('松鼠') },
    { name: '狼', habitat: '森林', image: generatePlaceholderImage('狼') },
    { name: '兔子', habitat: '森林', image: generatePlaceholderImage('兔子') },
    { name: '狐狸', habitat: '森林', image: generatePlaceholderImage('狐狸') },
    { name: '鯊魚', habitat: '海洋', image: generatePlaceholderImage('鯊魚') },
    { name: '海豚', habitat: '海洋', image: generatePlaceholderImage('海豚') },
    { name: '珊瑚', habitat: '海洋', image: generatePlaceholderImage('珊瑚') },
    { name: '章魚', habitat: '海洋', image: generatePlaceholderImage('章魚') },
    { name: '海龜', habitat: '海洋', image: generatePlaceholderImage('海龜') },
    { name: '鯨魚', habitat: '海洋', image: generatePlaceholderImage('鯨魚') },
    { name: '抹香鯨', habitat: '海洋', image: generatePlaceholderImage('抹香鯨') },
    { name: '海龍', habitat: '海洋', image: generatePlaceholderImage('海龍') },
    { name: '海兔', habitat: '海洋', image: generatePlaceholderImage('海兔') },
    { name: '旗魚', habitat: '海洋', image: generatePlaceholderImage('旗魚') },
    { name: '小丑魚', habitat: '海洋', image: generatePlaceholderImage('小丑魚') },
    { name: '水母', habitat: '海洋', image: generatePlaceholderImage('水母') },
    { name: '海葵', habitat: '海洋', image: generatePlaceholderImage('海葵') },
    { name: '白鯨', habitat: '海洋', image: generatePlaceholderImage('白鯨') },
    { name: '海鰻', habitat: '海洋', image: generatePlaceholderImage('海鰻') },
    { name: '鱟', habitat: '海洋', image: generatePlaceholderImage('鱟') },
    { name: '河豚', habitat: '海洋', image: generatePlaceholderImage('河豚') },
    { name: '大王烏賊', habitat: '海洋', image: generatePlaceholderImage('大王烏賊') },
    { name: '駱駝', habitat: '沙漠', image: generatePlaceholderImage('駱駝') },
    { name: '蜥蜴', habitat: '沙漠', image: generatePlaceholderImage('蜥蜴') },
    { name: '仙人掌', habitat: '沙漠', image: generatePlaceholderImage('仙人掌') },
    { name: '蠍子', habitat: '沙漠', image: generatePlaceholderImage('蠍子') },
    { name: '蛇', habitat: '沙漠', image: generatePlaceholderImage('蛇') },
    { name: '沙漠狐', habitat: '沙漠', image: generatePlaceholderImage('沙漠狐') },
    { name: '獅子', habitat: '草原', image: generatePlaceholderImage('獅子') },
    { name: '斑馬', habitat: '草原', image: generatePlaceholderImage('斑馬') },
    { name: '羚羊', habitat: '草原', image: generatePlaceholderImage('羚羊') },
    { name: '大象', habitat: '草原', image: generatePlaceholderImage('大象') },
    { name: '長頸鹿', habitat: '草原', image: generatePlaceholderImage('長頸鹿') },
    { name: '草原狼', habitat: '草原', image: generatePlaceholderImage('草原狼') },
    { name: '北極熊', habitat: '凍原', image: generatePlaceholderImage('北極熊') },
    { name: '馴鹿', habitat: '凍原', image: generatePlaceholderImage('馴鹿') },
    { name: '雪鴞', habitat: '凍原', image: generatePlaceholderImage('雪鴞') },
    { name: '北極狐', habitat: '凍原', image: generatePlaceholderImage('北極狐') },
    { name: '海豹', habitat: '凍原', image: generatePlaceholderImage('海豹') },
    { name: '苔蘚', habitat: '凍原', image: generatePlaceholderImage('苔蘚') },
    { name: '鴿子', habitat: '城市', image: generatePlaceholderImage('鴿子') },
    { name: '老鼠', habitat: '城市', image: generatePlaceholderImage('老鼠') },
    { name: '松鼠', habitat: '城市', image: generatePlaceholderImage('松鼠') },
    { name: '貓', habitat: '城市', image: generatePlaceholderImage('貓') },
    { name: '狗', habitat: '城市', image: generatePlaceholderImage('狗') },
    { name: '鳥類', habitat: '森林', image: generatePlaceholderImage('鳥類') },
    { name: '青蛙', habitat: '森林', image: generatePlaceholderImage('青蛙') },
    { name: '魚類', habitat: '海洋', image: generatePlaceholderImage('魚類') },
    { name: '海星', habitat: '海洋', image: generatePlaceholderImage('海星') },
    { name: '海膽', habitat: '海洋', image: generatePlaceholderImage('海膽') },
    { name: '沙漠鳥', habitat: '沙漠', image: generatePlaceholderImage('沙漠鳥') },
    { name: '草原鳥', habitat: '草原', image: generatePlaceholderImage('草原鳥') },
    { name: '河馬', habitat: '草原', image: generatePlaceholderImage('河馬') },
    { name: '凍原鳥', habitat: '凍原', image: generatePlaceholderImage('凍原鳥') },
    { name: '凍原魚', habitat: '凍原', image: generatePlaceholderImage('凍原魚') },
    { name: '城市鳥', habitat: '城市', image: generatePlaceholderImage('城市鳥') },
    { name: '城市植物', habitat: '城市', image: generatePlaceholderImage('城市植物') },
    { name: '蝙蝠', habitat: '森林', image: generatePlaceholderImage('蝙蝠') },
    { name: '蛇', habitat: '森林', image: generatePlaceholderImage('蛇') },
    { name: '海獺', habitat: '海洋', image: generatePlaceholderImage('海獺') },
    { name: '海獅', habitat: '海洋', image: generatePlaceholderImage('海獅') },
    { name: '海馬', habitat: '海洋', image: generatePlaceholderImage('海馬') },
    { name: '沙漠兔', habitat: '沙漠', image: generatePlaceholderImage('沙漠兔') },
    { name: '沙漠烏龜', habitat: '沙漠', image: generatePlaceholderImage('沙漠烏龜') },
    { name: '獵豹', habitat: '草原', image: generatePlaceholderImage('獵豹') },
    { name: '犀牛', habitat: '草原', image: generatePlaceholderImage('犀牛') },
    { name: '北極兔', habitat: '凍原', image: generatePlaceholderImage('北極兔') },
    { name: '海象', habitat: '凍原', image: generatePlaceholderImage('海象') },
    { name: '鷹', habitat: '凍原', image: generatePlaceholderImage('鷹') },
    { name: '烏鴉', habitat: '城市', image: generatePlaceholderImage('烏鴉') },
    { name: '麻雀', habitat: '城市', image: generatePlaceholderImage('麻雀') },
    { name: '貓頭鷹', habitat: '森林', image: generatePlaceholderImage('貓頭鷹') },
    { name: '山貓', habitat: '森林', image: generatePlaceholderImage('山貓') },
    { name: '穿山甲', habitat: '森林', image: generatePlaceholderImage('穿山甲') },
    { name: '貓熊', habitat: '森林', image: generatePlaceholderImage('貓熊') },
    { name: '水獺', habitat: '海洋', image: generatePlaceholderImage('水獺') },
    { name: '海馬', habitat: '海洋', image: generatePlaceholderImage('海馬') },
    { name: '鴕鳥', habitat: '草原', image: generatePlaceholderImage('鴕鳥') },
    { name: '浣熊', habitat: '城市', image: generatePlaceholderImage('浣熊') },
    { name: '鴨子', habitat: '城市', image: generatePlaceholderImage('鴨子') },
    { name: '老虎', habitat: '森林', image: generatePlaceholderImage('老虎') },
    { name: '猩猩', habitat: '森林', image: generatePlaceholderImage('猩猩') },
    { name: '水鹿', habitat: '森林', image: generatePlaceholderImage('水鹿') },
    { name: '眼鏡蛇', habitat: '沙漠', image: generatePlaceholderImage('眼鏡蛇') },
    { name: '砂貓', habitat: '沙漠', image: generatePlaceholderImage('砂貓') },
    { name: '野牛', habitat: '草原', image: generatePlaceholderImage('野牛') },
    { name: '水牛', habitat: '草原', image: generatePlaceholderImage('水牛') },
    { name: '北極狼', habitat: '凍原', image: generatePlaceholderImage('北極狼') },
    { name: '海牛', habitat: '海洋', image: generatePlaceholderImage('海牛') },
    { name: '山豬', habitat: '森林', image: generatePlaceholderImage('山豬') },
    { name: '食蟻獸', habitat: '森林', image: generatePlaceholderImage('食蟻獸') },
    { name: '魟魚', habitat: '海洋', image: generatePlaceholderImage('魟魚') },
    { name: '鯨鯊', habitat: '海洋', image: generatePlaceholderImage('鯨鯊') },
    { name: '藍鯨', habitat: '海洋', image: generatePlaceholderImage('藍鯨') },
    { name: '魔鬼魚', habitat: '海洋', image: generatePlaceholderImage('魔鬼魚') },
    { name: '海蛇', habitat: '海洋', image: generatePlaceholderImage('海蛇') },
    { name: '海參', habitat: '海洋', image: generatePlaceholderImage('海參') },
    { name: '龍蝦', habitat: '海洋', image: generatePlaceholderImage('龍蝦') },
    { name: '鮟鱇魚', habitat: '海洋', image: generatePlaceholderImage('鮟鱇魚') },
    { name: '燈籠魚', habitat: '海洋', image: generatePlaceholderImage('燈籠魚') },
    { name: '烏賊', habitat: '海洋', image: generatePlaceholderImage('烏賊') },
    { name: '鬣蜥', habitat: '沙漠', image: generatePlaceholderImage('鬣蜥') },
    { name: '羚牛', habitat: '草原', image: generatePlaceholderImage('羚牛') },
    { name: '袋鼠', habitat: '草原', image: generatePlaceholderImage('袋鼠') },
    { name: '麝牛', habitat: '凍原', image: generatePlaceholderImage('麝牛') },
    { name: '樹懶', habitat: '森林', image: generatePlaceholderImage('樹懶') },
    { name: '變色龍', habitat: '森林', image: generatePlaceholderImage('變色龍') },
    { name: '鴨嘴獸', habitat: '森林', image: generatePlaceholderImage('鴨嘴獸') },
    { name: '企鵝', habitat: '海洋', image: generatePlaceholderImage('企鵝') },
    { name: '山羊', habitat: '草原', image: generatePlaceholderImage('山羊') }
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
        <div class="animal-list">
            ${animals.map(org => `
                <div class="animal-card">
                    <img src="${org.image}" alt="${org.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%23ddd%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2216px%22%3E圖片無法加載%3C/text%3E%3C/svg%3E'">
                    <p>${org.name}</p>
                </div>
            `).join('')}
        </div>
    `;
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
        resultDiv.innerHTML = `
            <h3>${found.name}</h3>
            <img src="${found.image}" alt="${found.name}" style="max-width: 300px; width: 100%; height: auto;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%23ddd%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2216px%22%3E圖片無法加載%3C/text%3E%3C/svg%3E'">
            <p><strong>棲息地：</strong>${found.habitat}</p>
        `;
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