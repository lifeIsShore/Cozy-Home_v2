// Sample product data (replace with your actual product data)
const products = [
    {
        id: 4,
        name: 'Rattan ArmChair',
        price: 130,
        imageUrl: 'image_room/livingroom1_chair.png',
        link: 'lr1-armchair.html'
    },

    {

        id: 5,
        name: 'Grey Sofa',
        price: 480,
        imageUrl: 'image_room/livingroom1_sofa.png',
        link: 'lr1-graysofa.html'
    },

    {
        id: 6,
        name: 'White stained light brown Coffee Table',
        price: 250,
        imageUrl: 'image_room/livingroom1_table.png',
        link: 'lr1-coffetable.html'
    },
    {
        id: 7,
        name: 'Beige Flat Woven carpet',
        price: 150,
        imageUrl: 'image_room/livingroom1_carpet.png',
        link: 'lr1-carpet.html'
    },
    {
        id: 8,
        name: 'White Storage Trolley',
        price: 100,
        imageUrl: 'image_room/livingroom1-1_trolley.png',
        link: 'lr1-storagetrolley.html'
    },
    {
        id: 9,
        name: 'Image "A moment with mom"',
        price: 40,
        imageUrl: 'image_room/livingroom1-1_bild.png',
        link: 'lr1-decopicmama.html'
    },
    {
        id: 10,
        name: 'Reed grass handmade wall decoration',
        price: 150,
        imageUrl: 'image_room/livingroom1-2_deco.png',
        link: 'lr1-walldeco150.html'
    },
    {
        id: 11,
        name: 'White sideboard with doors',
        price: 200,
        imageUrl: 'image_room/livingroom1-2_storage.png',
        link: 'lr1-sideboard.html'
    },
    {
        id: 13,
        name: 'Side table with wheels',
        price: 220,
        imageUrl: 'image_room/livingroom2_side-table.png',
        link: 'lr2-Sidetablewheels.html'
    },
    {
        id: 14,
        name: 'ArmChair dark yellow',
        price: 250,
        imageUrl: 'image_room/livingroom2_armchair.png',
        link: 'lr2-armchairdarkyellow.html'
    },
    {
        id: 15,
        name: 'Carpet short pile',
        price: 150,
        imageUrl: 'image_room/livingroom2_carpet.png',
         link: 'lr2-carpetshortpile.html'
    },
    {
        id: 16,
        name: '3-seater sofa bed',
        price: 530,
        imageUrl: 'image_room/livingroom2_sofabed.png',
        link: 'lr2-3seatersofabed.html'
    },
    {
        id: 17,
        name: 'Black-brown desk',
        price: 160,
        imageUrl: 'image_room/livingroom2-1_desk.png',
        link: 'lr2-deskblackbrown.html'
    },
    {
        id: 18,
        name: 'Cabinet walnut',
        price: 30,
        imageUrl: 'image_room/livingroom2-2_cabinet.png',
        link: 'lr2-cabinetwalnut.html'
    },
    {
        id: 19,
        name: 'Ivory curtains',
        price: 110,
        imageUrl: 'image_room/livingroom2-1_curtains.png',
        link: 'lr2-2courtains.html'
    },
    {
        id: 20,
        name: 'Work light, black',
        price: 50,
        imageUrl: 'image_room/livingroom2-2_worklight.png',
        link: 'lr2-worklight.html'
    },
    {
        id: 22,
        name: 'Bookcase with panel/glass',
        price: 139,
        imageUrl: 'image_room/livingroom3_Bookcase.png',
        link: 'lr3-bookcasewithpanel.html'
    },
    {
        id: 23,
        name: '2 seater sofa, Kilanda pale blue',
        price: 390,
        imageUrl: 'image_room/livingroom3_sofa.png',
        link: 'lr3-kilandasofa.html'
    },
    {
        id: 24,
        name: 'Coffee table, white',
        price: 109,
        imageUrl: 'image_room/livingroom3_coffeetable.png',
        link: 'lr3-coffeetablewhite.html'
    },
    {
        id: 25,
        name: 'Floor lamp, ash/white',
        price: 90,
        imageUrl: 'image_room/livingroom3_lamp.png',
        link: 'lr3-floorlampash.html'
    },
    {
        id: 26,
        name: 'Side table, white',
        price: 60,
        imageUrl: 'image_room/livingroom3-2_sidetable.png',
        link: 'lr3-sidetablewhite.html'
    },
    {
        id: 27,
        name: 'Cushion cover, grey-green',
        price: 10,
        imageUrl: 'image_room/livingroom3-2_pillowcase.png',
        link: 'lr3-cushioncovergreygreen.html'
    },
    {
        id: 28,
        name: 'Hauga desk, white',
        price: 180,
        imageUrl: 'image_room/livingroom3-1_desk.png',
        link: 'lr3-haugadesk.html'
    },
    {
        id: 29,
        name: 'Nilsove ArmChair, rattan/white',
        price: 145,
        imageUrl: 'image_room/livingroom3-1_armchair.png',
        link: 'lr3-nilsovearmchair.html'
    },
    {
        id: 31,
        name: 'Curtain, 1 panel, light yellow/grey turquoise',
        price: 160,
        imageUrl: 'image_room/livingroom4_curtain_panel.png',
        link: 'lr4-Curtainlight.html'
    },
    {
        id: 32,
        name: 'SÖDERHAMN Seat element 3',
        price: 300,
        imageUrl: 'image_room/livingroom4_seat.png',
        link: 'lr4-sofaelement3.html'
    },
    {
        id: 33,
        name: 'Stool with storage, Knisa medium blue',
        price: 90,
        imageUrl: 'image_room/livingroom4_stool.png',
        link: 'lr4-stoolwithstorage.html'
    },
    {
        id: 34,
        name: 'LED pendant light, white frosted glass',
        price: 140,
        imageUrl: 'image_room/livingroom4_light.png',
        link: 'lr4-ledpendantlight.html'
    },
    {
        id: 35,
        name: 'Acoustic panel, sound-absorbing',
        price: 70,
        imageUrl: 'image_room/livingroom4-2_image.png',
        link: 'lr4-acusticpanel.html'
    },
    {
        id: 36,
        name: 'Swivel chair, Lejde grey/black',
        price: 279,
        imageUrl: 'image_room/livingroom4-2_chair.png',
        link: 'lr4-swivelchair.html'
    },
    {
        id: 37,
        name: 'Side table with wheels, red',
        price: 80,
        imageUrl: 'image_room/livingroom4-1_sidetable.png',
        link: 'lr4-sidetablewheelsred.html'
    },
    {
        id: 38,
        name: 'TV bench, black/oak veneer',
        price: 180,
        imageUrl: 'image_room/livingroom4-1_tvstand.png',
        link: 'lr4-tvbenchoakveneer.html'
    },
    {
        id: 40,
        name: '3.5 seater with chaise longue',
        price: 900,
        imageUrl: 'image_room/livingroom5_sofa.png',
        link: 'lr5-chaiselonguesofa.html'
    },
    {
        id: 41,
        name: 'Table lamp, beige/opal white glass',
        price: 70,
        imageUrl: 'image_room/livingroom5_lamp.png',
        link: 'lr5-whiteglasstablelamp.html'
    },
    {
        id: 42,
        name: 'Eket dark gray cabinet',
        price: 40,
        imageUrl: 'image_room/livingroom5_wardrobe.png',
        link: 'lr5-eketstorage.html'
    },
    {
        id: 43,
        name: 'Cabinet combination/legs',
        price: 80,
        imageUrl: 'image_room/livingroom5_cabinet.png',
        link: 'lr5-cabinetcombi.html'
    },
    {
        id: 44,
        name: 'Armchair and stool, Lejde grey/black',
        price: 450,
        imageUrl: 'image_room/livingroom5-1_armchair.png',
        link: 'lr5-armchairwstool.html'
    },
    {
        id: 45,
        name: 'FBlack Frame',
        price: 10,
        imageUrl: 'image_room/livingroom5-1_frame.png',
        link: 'lr5-blackframe.html'
    },
    {
        id: 46,
        name: 'Table with air purifier, stained oak veneer',
        price: 230,
        imageUrl: 'image_room/livingroom5-2_table.png',
        link: 'lr5-tablepurifier.html'
    },
    {
        id: 47,
        name: '2 curtain panels, dark beige',
        price: 200,
        imageUrl: 'image_room/livingroom5-2_curtain.png',
        link: 'lr5-2courtainbeige.html'
    },
    {
        id: 49,
        name: '1.5 seater armchair, Blekinge white',
        price: 220,
        imageUrl: 'image_room/livingroom6_armchair.png',
        link: 'lr6-seaterarmchairblekinge.html'
    },
    {
        id: 50,
        name: 'Table lamp, smoke-colored glass',
        price: 70,
        imageUrl: 'image_room/livingroom6_tablelamp.png',
        link: 'lr6-lampsmokecolor.html'
    },
    {
        id: 51,
        name: 'Gray tall cabinet HAUGA',
        price: 240,
        imageUrl: 'image_room/livingroom6-1_cabinet.png',
        link: 'lr6-graytallcabinethauga.html'
    },
    {
        id: 52,
        name: 'Storage table, black/pine light brown glazed',
        price: 160,
        imegeUrl:'image_room/livingroom6_storagetable.png',
        link: 'lr6-blackpinestoragetable.html'
    },
    {
        id: 53,
        name: 'Bar with 6 buttons, oak',
        price: 50,
        imageUrl: 'image_room/livingroom6-1_bar.png',
        link: 'lr6-hanger6buttons.html'
    },
    {
        id: 54,
        name: 'White bench',
        price: 150,
        imageUrl: 'image_room/livingroom6-1_bench.png',
        link: 'lr6-whitebench.html'
    },
    {
        id: 55,
        name: 'Handmade Rattan Basket',
        price: 20,
        imageUrl: 'image_room/livingroom6_bookcase.png',
        link: 'lr6-handmadebasket.html'
    },
    {
        id: 56,
        name: 'Grey HAUGA Display Case',
        price: 300,
        imageUrl: 'image_room/livingroom6-2_storage.png',
        link: 'lr6-grayvitrine.html'
    },
    {
        id: 58,
        name: 'Beige Corner Sofa',
        price: 879,
        imageUrl: 'image_deals/sofa.png',
        link: 'bd_beige_corner_sofa.html'
    },
    {
        id: 59,
        name: 'Dark Writing Desk',
        price: 199,
        imageUrl: 'image_deals/desk.png',
        link: 'bd_Dark_Writing_Desk.html'
    },
    {
        id: 60,
        name: 'Cabinet Light',
        price: 20,
        imageUrl: 'image_deals/light.png',
        link: 'bd_Cabinet_Light.html'
    },
    {
        id: 61,
        name: 'Contemporary Bookcase',
        price: 199,
        imageUrl: 'image_deals/bookcase.png',
        link: 'bd_Contemporary_Bookcase.html'
    },
    {
        id: 62,
        name: 'Rustic Sideboard',
        price: 389,
        imageUrl: 'image_deals/sideboard.jpg',
        link: 'bd_Rustic_Sideboard.html'
    },
    {
        id: 63,
        name: 'Storage Basket',
        price: 7.99,
        imageUrl: 'image_deals/basket.jpg',
        link: 'bd_Storage_Basket.html'
    },
    {
        id: 64,
        name: 'Silver Curtains',
        price: 40,
        imageUrl: 'image_deals/SilverCurtains.jpg',
        link: 'bd_Silver_Curtains.html'
    },
    {
        id: 65,
        name: 'Colorful Pillow Case',
        price: 7.99,
        imageUrl: 'image_deals/pillowcase.jpg',
        link: 'bd_Colorful_Pillow_Case.html'
    },
    {
        id: 66,
        name: 'Wing Grey Chair',
        price: 179,
        imageUrl: 'image_deals/chair.jpg',
        link: 'bd_Wing_Grey_Chair.html'
    },
    {
        id: 67,
        name: 'Flat Carpet',
        price: 99,
        imageUrl: 'image_deals/carpet.jpg',
        link: 'bd_Flat_Carpet.html'
    },
    {
        id: 68,
        name: 'Compact Stool',
        price: 50,
        imageUrl: 'image_deals/stool.jpg',
        link: 'bd_Compact_Stool.html'
    },
    {
        id: 69,
        name: 'Cozy Recamiere',
        price: 285,
        imageUrl: 'image_deals/recamier.jpg',
        link: 'bd_Cozy_Recamiere.html'
    },
    {
        id: 71,
        name: 'Carryhome Corner Sofa',
        price: 1259,
        imageUrl: 'img_fav/sofa.jpg',
        link: 'Cf_CornerSofa.html'
    },
    {
        id: 72,
        name: 'MID.YOU Sideboard',
        price: 199,
        imageUrl: 'img_fav/sideboard.jpg',
        link: 'Cf_ModernSideboard.html'
    },
    {
        id: 73,
        name: 'Hom`in Living Wall',
        price: 849,
        imageUrl: 'img_fav/Livingwall.jpg',
        link: 'Cf_LivingWall.html'
    },
    {
        id: 74,
        name: 'Electric Fireplace',
        price: 459,
        imageUrl: 'img_fav/electricfireplace.jpg',
        link: 'Cf_ElectricFireplace.html'
    },
    {
        id: 75,
        name: 'MIRJAN24 Coffee Table',
        price: 109,
        imageUrl: 'img_fav/Coffeetable.jpg',
        link: 'Cf_CoffeeTable.html'
    },
    {
        id: 76,
        name: 'Landscape Bookshelf, black',
        price: 485,
        imageUrl: 'img_fav/Bookcase.jpg',
        link: 'Cf_Bookcase.html'
    },
    {
        id: 77,
        name: 'Carryhome Sideboard',
        price: 299,
        imageUrl: 'img_fav/Sideboardwhite.jpg',
        link: 'Cf_WhiteSideboard.html'
    },
    {
        id: 78,
        name: 'Living Environment',
        price: 2500,
        imageUrl: 'img_fav/Livingend.jpg',
        link: 'Cf_LivingEnviorenment.html'
    },
    {
        id: 79,
        name: 'Linea Natura Coffee Table',
        price: 350,
        imageUrl: 'img_fav/Couchtable.jpg',
        link: 'Cf_WoodenTable.html'
    },
    {
        id: 80,
        name: 'Oak Artisan Wallboard, black',
        price: 79,
        imageUrl: 'img_fav/Wallboard.jpg',
        link: 'Cf_ModernWallBoard.html'
    },
    {
        id: 81,
        name: 'Carryhome Sofa Bed',
        price: 199,
        imageUrl: 'img_fav/Sofabed.jpg',
        link: 'Cf_SofaBed.html'
    },
    {
        id: 82,
        name: 'Livetastic Armchair, white',
        price: 149,
        imageUrl: 'img_fav/Armchair.jpg',
        link: 'Cf_ComfyArmchair.html'
    },
    {
        id: 85,
        name: 'Vintage Bookshelf',
        price: 200,
        imageUrl: 'Images_new_items/1.png',
        link: 'NI_Vintage_Bookshelf.html'
    },
    {
        id: 86,
        name: 'Wooden Table ',
        price: 350,
        imageUrl: 'Images_new_items/2.png',
        link: 'NI_wooden_Table.html'
    },
    {
        id: 87,
        name: 'Velvet Sofa',
        price: 900,
        imageUrl: 'Images_new_items/3.png',
        link: 'NI_Velvet_sofa.html'
    },
    {
        id: 88,
        name: 'Modern Desk Lamp',
        price: 120,
        imageUrl: 'Images_new_items/4.png',
        link: 'NI_Modern_Desk_Lamp'
    },
    {
        id: 89,
        name: 'Marble Side Table',
        price: 450,
        imageUrl: 'Images_new_items/5.png',
        link: 'NI_Marble_Side_Table'
    },
    {
        id: 90,
        name: 'Modern Floor Lamp',
        price: 150,
        imageUrl: 'Images_new_items/6.png',
        link: 'NI_Modern_Floor_Lamp.html'
    },
    {
        id: 91,
        name: 'Long Mirror',
        price: 100,
        imageUrl: 'Images_new_items/13.png',
        link: 'NI_Long_Mirror.html'
    },
    {
        id: 92,
        name: 'Modern Cozy Sofa',
        price: 500,
        imageUrl: 'Images_new_items/15.png',
        link: 'NI_Modern_Cozy_Sofa.html'
    },
    {
        id: 93,
        name: 'TV Combo',
        price: 1315,
        imageUrl: 'Images_new_items/tv_combo.jpg',
        link: 'NI_tv_combo.html'
    },
    {
        id: 94,
        name: 'Side Board with Storage',
        price: 279,
        imageUrl: 'Images_new_items/sideboard-white.jpg',
        link: 'NI_side_board_with_storage.html'
    },
    {
        id: 95,
        name: 'Grey Comfy Sofa',
        price: 399,
        imageUrl: 'Images_new_items/grey-sofa.jpg',
        link: 'NI_Grey_comfy_sofa.html'
    },
    {
        id: 96,
        name: 'Shelf Set',
        price: 80,
        imageUrl: 'Images_new_items/16',
        link: 'NI_Shelf_Set.html'
    },

    {
        id: 99,
        name: 'Loft Leather Chair',
        price: 200,
        imageUrl: 'Images_latest_collection/1.png',
        link: 'loft_leather_chair.html'
    },
    {
        id: 100,
        name: 'Loft Modern Sofa',
        price: 400,
        imageUrl: 'Images_latest_collection/2.png',
        link: 'loft_modern_sofa.html'
    },
    {
        id: 101,
        name: 'Loft Deco Vase',
        price: 70,
        imageUrl: 'Images_latest_collection/4.png',
        link: 'loft_deco_vase.html'
    },
    {
        id: 102,
        name: 'Loft Chair Set',
        price: 600,
        imageUrl: 'Images_latest_collection/6.png',
        link: 'loft_chair_set.html'
    },

    {
        id: 103,
        name: 'Loft Coffee Table',
        price: 150,
        imageUrl: 'Images_latest_collection/8.png',
        link: 'loft_accent_table.html'
    },
    {
        id: 104,
        name: 'Loft Modern Vase',
        price: 50,
        imageUrl: 'Images_latest_collection/5.png',
        link: 'loft_accent_table.html'
    },
    {
        id: 105,
        name: 'Loft Bookshelf',
        price: 150,
        imageUrl: 'Images_latest_collection/23.png',
        link: 'loft_bookshelf.html'
    },

    {
        id: 106,
        name: 'Loft Accent Table',
        price: 250,
        imageUrl: 'Images_latest_collection/9.png',
        link: 'loft_accent_table.html'
    },
    {
        id: 107,
        name: 'Loft Big Mirror',
        price: 300,
        imageUrl: 'Images_latest_collection/15.png',
        link: 'loft_accent_table.html'
    }, {
        id: 108,
        name: 'Loft Side Table	',
        price: 150,
        imageUrl: 'Images_latest_collection/13.png',
        link: 'loft_accent_table.html'
    }, {
        id: 109,
        name: 'Loft Round Mirror',
        price: 80,
        imageUrl: 'Images_latest_collection/16.png',
        link: 'loft_accent_table.html'
    }, {
        id: 110,
        name: 'Loft TV Stand',
        price: 200,
        imageUrl: 'Images_latest_collection/20.png',
        link: 'loft_accent_table.html'
    },

    


    
    // Add more product objects here
];

// Function to filter products based on search input
function filterProducts(searchTerm) {
    return products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Function to render search results dynamically
function renderSearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    results.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result');
        resultItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="search-result-image">
            <div class="search-result-details">
                <h5>${product.name}</h5>
                <p>€${product.price.toFixed(2)}</p>
            </div>
        `;
        resultItem.addEventListener('click', () => {
            window.location.href = product.link; // Redirect to product page
        });
        resultsContainer.appendChild(resultItem);
    });

    resultsContainer.style.display = results.length ? 'block' : 'none'; // Show results only if there are any
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        const filteredProducts = filterProducts(searchTerm);
        renderSearchResults(filteredProducts);
    });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm === '') {
            document.getElementById('searchResults').style.display = 'none';
        } else {
            const filteredProducts = filterProducts(searchTerm);
            renderSearchResults(filteredProducts);
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.matches('#searchInput') && !e.target.closest('#searchResults')) {
            document.getElementById('searchResults').style.display = 'none';
        }
    });
});
