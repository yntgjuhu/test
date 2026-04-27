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
    { name: '熊', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/320px-2010-kodiak-bear-1.jpg' },
    { name: '鹿', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cervus_elaphus_Luc_Viatour.jpg/320px-Cervus_elaphus_Luc_Viatour.jpg' },
    { name: '松鼠', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sciurus_vulgaris_LC0220.jpg/320px-Sciurus_vulgaris_LC0220.jpg' },
    { name: '狼', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Wolf_1.jpg/320px-Wolf_1.jpg' },
    { name: '兔子', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/320px-Oryctolagus_cuniculus_Rcdo.jpg' },
    { name: '狐狸', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Vulpes_vulpes_laying_in_snow.jpg/320px-Vulpes_vulpes_laying_in_snow.jpg' },
    { name: '鯊魚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/320px-White_shark.jpg' },
    { name: '海豚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/320px-Tursiops_truncatus_01.jpg' },
    { name: '珊瑚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coral_reef.jpg/320px-Coral_reef.jpg' },
    { name: '章魚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Octopus_vulgaris_01.JPG/320px-Octopus_vulgaris_01.JPG' },
    { name: '海龜', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Green_Sea_Turtle_grazing_seagrass.jpg/320px-Green_Sea_Turtle_grazing_seagrass.jpg' },
    { name: '鯨魚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/320px-Killerwhales_jumping.jpg' },
    { name: '抹香鯨', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sperm_whale_%28Physeter_macrocephalus%29.jpg/320px-Sperm_whale_%28Physeter_macrocephalus%29.jpg' },
    { name: '海龍', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Phyllopteryx_taeniolatus_%28red_sea_dragon%29.jpg/320px-Phyllopteryx_taeniolatus_%28red_sea_dragon%29.jpg' },
    { name: '海兔', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sea_hare_%28Aplysia_vulgaris%29.jpg/320px-Sea_hare_%28Aplysia_vulgaris%29.jpg' },
    { name: '旗魚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/White_marlin_%28Kajikia_albidus%29.jpg/320px-White_marlin_%28Kajikia_albidus%29.jpg' },
    { name: '小丑魚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Amphiprion_ocellaris_%28Clown_Fish%29.jpg/320px-Amphiprion_ocellaris_%28Clown_Fish%29.jpg' },
    { name: '水母', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Aurelia_aurita_06.jpg/320px-Aurelia_aurita_06.jpg' },
    { name: '海葵', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Anemone.jpg/320px-Anemone.jpg' },
    { name: '白鯨', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Beluga_whale.jpg/320px-Beluga_whale.jpg' },
    { name: '海鰻', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Moray_Eel.jpg/320px-Moray_Eel.jpg' },
    { name: '鱟', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Tachypleus_gigas.jpg/320px-Tachypleus_gigas.jpg' },
    { name: '河豚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Tetrodon_nigroviridis.jpg/320px-Tetrodon_nigroviridis.jpg' },
    { name: '大王烏賊', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Architeuthis_dux.jpg/320px-Architeuthis_dux.jpg' },
    { name: '駱駝', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/08._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/320px-08._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg' },
    { name: '蜥蜴', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lacerta_agilis_close_up.JPG/320px-Lacerta_agilis_close_up.JPG' },
    { name: '仙人掌', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Saguaro_National_Park_2.jpg/320px-Saguaro_National_Park_2.jpg' },
    { name: '蠍子', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Scorpion.jpg/320px-Scorpion.jpg' },
    { name: '蛇', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Desert_horned_viper.jpg/320px-Desert_horned_viper.jpg' },
    { name: '沙漠狐', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Fennec_Fox_Vulpes_zerda.jpg/320px-Fennec_Fox_Vulpes_zerda.jpg' },
    { name: '獅子', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/320px-Lion_waiting_in_Namibia.jpg' },
    { name: '斑馬', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/320px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg' },
    { name: '羚羊', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gazella_dorcas.jpg/320px-Gazella_dorcas.jpg' },
    { name: '大象', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/320px-African_Bush_Elephant.jpg' },
    { name: '長頸鹿', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Giraffe_closeup_-_20090202.jpg/320px-Giraffe_closeup_-_20090202.jpg' },
    { name: '草原狼', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Wolf_1.jpg/320px-Wolf_1.jpg' },
    { name: '北極熊', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/320px-Polar_Bear_-_Alaska_%28cropped%29.jpg' },
    { name: '馴鹿', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Reindeer_herd.jpg/320px-Reindeer_herd.jpg' },
    { name: '雪鴞', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Snowy_Owl_%28Bubo_scandiacus%29.jpg/320px-Snowy_Owl_%28Bubo_scandiacus%29.jpg' },
    { name: '北極狐', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Vulpes_lagopus.jpg/320px-Vulpes_lagopus.jpg' },
    { name: '海豹', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Phoca_vitulina1.jpg/320px-Phoca_vitulina1.jpg' },
    { name: '苔蘚', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Moss.jpg/320px-Moss.jpg' },
    { name: '鴿子', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rock_Pigeon_Columba_livia.jpg/320px-Rock_Pigeon_Columba_livia.jpg' },
    { name: '老鼠', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rattus_norvegicus_1.jpg/320px-Rattus_norvegicus_1.jpg' },
    { name: '松鼠', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sciurus_vulgaris_LC0220.jpg/320px-Sciurus_vulgaris_LC0220.jpg' },
    { name: '貓', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/320px-Cat03.jpg' },
    { name: '狗', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/320px-Golde33443.jpg' },
    { name: '鳥類', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bird.jpg/320px-Bird.jpg' },
    { name: '青蛙', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Rana_temporaria_2.jpg/320px-Rana_temporaria_2.jpg' },
    { name: '魚類', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Fish.jpg/320px-Fish.jpg' },
    { name: '海星', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Starfish.jpg/320px-Starfish.jpg' },
    { name: '海膽', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sea_urchin.jpg/320px-Sea_urchin.jpg' },
    { name: '沙漠鳥', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Roadrunner.jpg/320px-Roadrunner.jpg' },
    { name: '草原鳥', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bird.jpg/320px-Bird.jpg' },
    { name: '河馬', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hippopotamus.jpg/320px-Hippopotamus.jpg' },
    { name: '凍原鳥', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Snowy_Owl_%28Bubo_scandiacus%29.jpg/320px-Snowy_Owl_%28Bubo_scandiacus%29.jpg' },
    { name: '凍原魚', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Fish.jpg/320px-Fish.jpg' },
    { name: '城市鳥', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rock_Pigeon_Columba_livia.jpg/320px-Rock_Pigeon_Columba_livia.jpg' },
    { name: '城市植物', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Plant.jpg/320px-Plant.jpg' },
    { name: '蝙蝠', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bat.jpg/320px-Bat.jpg' },
    { name: '蛇', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Desert_horned_viper.jpg/320px-Desert_horned_viper.jpg' },
    { name: '海獺', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_otter.jpg/320px-Sea_otter.jpg' },
    { name: '海獅', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/California_sea_lion.jpg/320px-California_sea_lion.jpg' },
    { name: '海馬', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Seahorse.jpg/320px-Seahorse.jpg' },
    { name: '沙漠兔', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/320px-Oryctolagus_cuniculus_Rcdo.jpg' },
    { name: '沙漠烏龜', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Green_Sea_Turtle_grazing_seagrass.jpg/320px-Green_Sea_Turtle_grazing_seagrass.jpg' },
    { name: '獵豹', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/320px-Lion_waiting_in_Namibia.jpg' },
    { name: '犀牛', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Rhinoceros.jpg/320px-Rhinoceros.jpg' },
    { name: '北極兔', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/320px-Oryctolagus_cuniculus_Rcdo.jpg' },
    { name: '海象', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Walrus.jpg/320px-Walrus.jpg' },
    { name: '鷹', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Snowy_Owl_%28Bubo_scandiacus%29.jpg/320px-Snowy_Owl_%28Bubo_scandiacus%29.jpg' },
    { name: '烏鴉', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rock_Pigeon_Columba_livia.jpg/320px-Rock_Pigeon_Columba_livia.jpg' },
    { name: '麻雀', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bird.jpg/320px-Bird.jpg' },
    { name: '貓頭鷹', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bubo_bubo_-_01_%28cropped%29.jpg/320px-Bubo_bubo_-_01_%28cropped%29.jpg' },
    { name: '山貓', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Lynx_lynx_Luc_Viatour.jpg/320px-Lynx_lynx_Luc_Viatour.jpg' },
    { name: '穿山甲', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Smutsia_pardalis_%28Pangolin%29.jpg/320px-Smutsia_pardalis_%28Pangolin%29.jpg' },
    { name: '貓熊', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/320px-Grosser_Panda.JPG' },
    { name: '水獺', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lutra_lutra_1_%28cropped%29.jpg/320px-Lutra_lutra_1_%28cropped%29.jpg' },
    { name: '海馬', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Seahorse.jpg/320px-Seahorse.jpg' },
    { name: '鴕鳥', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Struthio_camelus_-Etosha.jpg/320px-Struthio_camelus_-Etosha.jpg' },
    { name: '浣熊', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Raccoon_2012.jpg/320px-Raccoon_2012.jpg' },
    { name: '鴨子', habitat: '城市', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mallard2.jpg/320px-Mallard2.jpg' },
    { name: '老虎', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tiger.50.jpg/320px-Tiger.50.jpg' },
    { name: '猩猩', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Orangutan_neu.jpg/320px-Orangutan_neu.jpg' },
    { name: '水鹿', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Muntjac_deer.jpg/320px-Muntjac_deer.jpg' },
    { name: '眼鏡蛇', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Naja_naja.jpg/320px-Naja_naja.jpg' },
    { name: '砂貓', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sand_cat_USFWS.jpg/320px-Sand_cat_USFWS.jpg' },
    { name: '野牛', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/American_bison_k5680-1.jpg/320px-American_bison_k5680-1.jpg' },
    { name: '水牛', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Waterbuffalo.jpg/320px-Waterbuffalo.jpg' },
    { name: '北極狼', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Polar_wolf.jpg/320px-Polar_wolf.jpg' },
    { name: '海牛', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Dugong_3.jpg/320px-Dugong_3.jpg' },
    { name: '山豬', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sus_scrofa_domesticus.jpg/320px-Sus_scrofa_domesticus.jpg' },
    { name: '食蟻獸', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Aardvark_FitzGibbon.JPG/320px-Aardvark_FitzGibbon.JPG' },
    { name: '魟魚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Blue_spotted_stingray.jpg/320px-Blue_spotted_stingray.jpg' },
    { name: '鯨鯊', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Whale_shark_%28Rhincodon_typus%29.jpg/320px-Whale_shark_%28Rhincodon_typus%29.jpg' },
    { name: '藍鯨', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Blue_Whale_2004-11-03.jpg/320px-Blue_Whale_2004-11-03.jpg' },
    { name: '魔鬼魚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Manta_ray.jpg/320px-Manta_ray.jpg' },
    { name: '海蛇', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Sea_Snake.jpg/320px-Sea_Snake.jpg' },
    { name: '海參', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sea_cucumber.jpg/320px-Sea_cucumber.jpg' },
    { name: '龍蝦', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Lobster.jpg/320px-Lobster.jpg' },
    { name: '鮟鱇魚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Monkfish.jpg/320px-Monkfish.jpg' },
    { name: '燈籠魚', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Angler_fish.jpg/320px-Angler_fish.jpg' },
    { name: '烏賊', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Squid.jpg/320px-Squid.jpg' },
    { name: '鬣蜥', habitat: '沙漠', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Iguana_2.jpg/320px-Iguana_2.jpg' },
    { name: '羚牛', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Wildebeest_Lagoon.jpg/320px-Wildebeest_Lagoon.jpg' },
    { name: '袋鼠', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kangaroo_Australia_01.jpg/320px-Kangaroo_Australia_01.jpg' },
    { name: '麝牛', habitat: '凍原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Muskox.jpg/320px-Muskox.jpg' },
    { name: '樹懶', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Three-toed-sloth.jpg/320px-Three-toed-sloth.jpg' },
    { name: '變色龍', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Chamaeleo_chamaeleon_%28detail%29.jpg/320px-Chamaeleo_chamaeleon_%28detail%29.jpg' },
    { name: '鴨嘴獸', habitat: '森林', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Platypus_Melbourne_Aquarium.jpg/320px-Platypus_Melbourne_Aquarium.jpg' },
    { name: '企鵝', habitat: '海洋', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Aptenodytes_forsteri_-Snow_Hill_Island.jpg/320px-Aptenodytes_forsteri_-Snow_Hill_Island.jpg' },
    { name: '山羊', habitat: '草原', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Capra_hircus_%28linguistic%29.jpg/320px-Capra_hircus_%28linguistic%29.jpg' }
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