

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slideElements.length;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto slide every 3 seconds
let autoSlide = setInterval(nextSlide, 6000);

// Manual navigation with dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlide);
        showSlide(index);
        autoSlide = setInterval(nextSlide, 3000);
    });
});



// latest mobile

const mobileData = {
    apple: [
        {
            name: "iPhone 15 Pro Max",
            image: "static/assets/15pro_max.jpg",
            description: "6.7-inch Super Retina XDR display, A17 Pro chip, 48MP main camera, Titanium design"
        },
        {
            name: "iPhone 15 Pro",
            image: "static/assets/15pro.jpg",
            description: "6.1-inch Super Retina XDR display, A17 Pro chip, 48MP main camera, Titanium design"
        },
        {
            name: "iPhone 15 Plus",
            image: "static/assets/15plus.jpg",
            description: "6.7-inch Super Retina XDR display, A16 Bionic chip, Dual 12MP camera system"
        },
        {
            name: "iPhone 15",
            image: "static/assets/15.jpg",
            description: "6.1-inch Super Retina XDR display, A16 Bionic chip, Dual 12MP camera system"
        },
        {
            name: "iPhone 14 Pro Max",
            image: "static/assets/14pro_max.jpg",
            description: "6.7-inch Super Retina XDR display, A16 Bionic chip, 48MP main camera"
        }
    ],
    samsung: [
        {
            name: "Galaxy S23 Ultra",
            image: "static/assets/s23_ultra.jpg",
            description: "6.8-inch Dynamic AMOLED 2X, Snapdragon 8 Gen 2, 200MP main camera, S Pen included"
        },
        {
            name: "Galaxy S23+",
            image: "static/assets/s23+.jpg",
            description: "6.6-inch Dynamic AMOLED 2X, Snapdragon 8 Gen 2, 50MP main camera"
        },
        {
            name: "Galaxy S23",
            image: "static/assets/s23.jpg",
            description: "6.1-inch Dynamic AMOLED 2X, Snapdragon 8 Gen 2, 50MP main camera"
        },
        {
            name: "Galaxy Z Fold5",
            image: "static/assets/s_fold.jpg",
            description: "7.6-inch foldable Dynamic AMOLED 2X, Snapdragon 8 Gen 2, Triple camera system"
        },
        {
            name: "Galaxy Z Flip5",
            image: "static/assets/s_flip.jpg",
            description: "6.7-inch foldable Dynamic AMOLED 2X, Snapdragon 8 Gen 2, 3.4-inch cover display"
        }
    ],
    realme: [
        {
            name: "Realme GT 5",
            image: "static/assets/r_gt5.jpg",
            description: "6.74-inch AMOLED, Snapdragon 8 Gen 2, 50MP main camera, 240W fast charging"
        },
        {
            name: "Realme 11 Pro+",
            image: "static/assets/r_pro+.jpg",
            description: "6.7-inch AMOLED, Dimensity 7050, 200MP main camera, 100W fast charging"
        },
        {
            name: "Realme Narzo 60 Pro",
            image: "static/assets/r_narzo.jpg",
            description: "6.7-inch AMOLED, Dimensity 7050, 100MP main camera, 67W fast charging"
        },
        {
            name: "Realme C55",
            image: "static/assets/r_c55.jpg",
            description: "6.72-inch IPS LCD, Helio G88, 64MP main camera, 33W fast charging"
        },
        {
            name: "Realme 10 Pro",
            image: "static/assets/r_10pro.jpg",
            description: "6.72-inch IPS LCD, Snapdragon 695, 108MP main camera, 33W fast charging"
        }
    ],
    redmi: [
        {
            name: "Redmi Note 12 Pro+",
            image: "static/assets/note12pro.jpg",
            description: "6.67-inch AMOLED, Dimensity 1080, 200MP main camera, 120W fast charging"
        },
        {
            name: "Redmi K60 Ultra",
            image: "static/assets/k60.jpg",
            description: "6.67-inch AMOLED, Dimensity 9200+, 50MP main camera, 120W fast charging"
        },
        {
            name: "Redmi 12",
            image: "static/assets/red12.jpg",
            description: "6.79-inch IPS LCD, Helio G88, 50MP main camera, 18W fast charging"
        },
        {
            name: "Redmi Note 14 pro",
            image: "static/assets/note14pro.jpg",
            description: "6.67-inch AMOLED, Snapdragon 685, 50MP main camera, 33W fast charging"
        },
        {
            name: "Redmi 12C",
            image: "static/assets/12c.jpg",
            description: "6.71-inch IPS LCD, Helio G85, 50MP main camera, 10W charging"
        }
    ],
    motorola: [
        {
            name: "Moto Edge 40 Pro",
            image: "static/assets/edge40.jpg",
            description: "6.67-inch pOLED, Snapdragon 8 Gen 2, 50MP main camera, 125W fast charging"
        },
        {
            name: "Moto G82",
            image: "static/assets/g85.jpg",
            description: "6.6-inch AMOLED, Snapdragon 695, 50MP main camera, 30W fast charging"
        },
        {
            name: "Moto G73",
            image: "static/assets/g73.jpg",
            description: "6.5-inch IPS LCD, Dimensity 930, 50MP main camera, 30W fast charging"
        },
        {
            name: "Moto E13",
            image: "static/assets/e13.jpg",
            description: "6.5-inch IPS LCD, Unisoc T606, 13MP main camera, 10W charging"
        },
        {
            name: "Moto Razr 40 Ultra",
            image: "static/assets/razr.jpg",
            description: "6.9-inch foldable pOLED, Snapdragon 8+ Gen 1, 12MP main camera, 3.6-inch cover display"
        }
    ],
    vivo: [
        {
            name: "Vivo X100 Pro",
            image: "static/assets/x100.jpg",
            description: "6.78-inch AMOLED, Dimensity 9300, 50MP main camera, 120W fast charging"
        },
        {
            name: "Vivo V30 Pro",
            image: "static/assets/v30.jpg",
            description: "6.78-inch AMOLED, Dimensity 8200, 50MP triple camera, 80W fast charging"
        },
        {
            name: "Vivo T2 Pro",
            image: "static/assets/t2.jpg",
            description: "6.78-inch AMOLED, Dimensity 7200, 64MP main camera, 66W fast charging"
        },
        {
            name: "Vivo Y200e",
            image: "static/assets/y200.jpg",
            description: "6.67-inch AMOLED, Snapdragon 4 Gen 2, 50MP main camera, 44W fast charging"
        },
        {
            name: "Vivo X Fold3 Pro",
            image: "static/assets/fold3.jpg",
            description: "8.03-inch foldable LTPO AMOLED, Snapdragon 8 Gen 3, 50MP main camera, 5700mAh battery"
        }
    ]

};

// DOM elements
const brandItems = document.querySelectorAll('.brand-item');
const emptyStateDiv = document.getElementById('empty-state');
const productViewerDiv = document.getElementById('product-viewer');
const brandTitle = document.getElementById('brand-title');
const carousel = document.querySelector('.product-carousel');
const indicators = document.querySelector('.carousel-indicators');
const prevBtn = document.querySelector('.nav-prev');
const nextBtn = document.querySelector('.nav-next');

// Carousel variables
let currentItem = 0;
let items = [];
let dots1 = [];
let autoCarouselInterval;
const itemDuration = 3000;

// Initialize the carousel
function initCarousel(company) {
    clearInterval(autoCarouselInterval);

    brandTitle.textContent = `Latest ${company.charAt(0).toUpperCase() + company.slice(1)} Models`;

    carousel.innerHTML = '';
    indicators.innerHTML = '';
    items = [];
    dots1 = [];
    currentItem = 0;

    mobileData[company].forEach((mobile, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${mobile.image}" alt="${mobile.name}">
            <div class="carousel-item-info">
                <h3>${mobile.name}</h3>
                <p>${mobile.description}</p>
            </div>
        `;
        carousel.appendChild(item);
        items.push(item);

        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        dot.dataset.index = index;
        dot.addEventListener('click', () => {
            goToItem(index);
            resetAutoCarousel();
        });
        indicators.appendChild(dot);
        dots1.push(dot);
    });

    updateCarousel();
    startAutoCarousel();
}

function updateCarousel() {
    items.forEach((item, index) => {
        item.style.transform = `translateX(-${currentItem * 100}%)`;
    });

    dots1.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentItem);
    });
}

function goToItem(index) {
    currentItem = index;
    updateCarousel();
}

function nextItem() {
    currentItem = (currentItem + 1) % items.length;
    updateCarousel();
    resetAutoCarousel();
}

function prevItem() {
    currentItem = (currentItem - 1 + items.length) % items.length;
    updateCarousel();
    resetAutoCarousel();
}

function startAutoCarousel() {
    autoCarouselInterval = setInterval(() => {
        nextItem();
    }, itemDuration);
}

function resetAutoCarousel() {
    clearInterval(autoCarouselInterval);
    startAutoCarousel();
}

brandItems.forEach(item => {
    item.addEventListener('click', function () {
        brandItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        const company = this.dataset.company;
        initCarousel(company);
        emptyStateDiv.style.display = 'none';
        productViewerDiv.style.display = 'block';
    });
});

prevBtn.addEventListener('click', prevItem);
nextBtn.addEventListener('click', nextItem);

carousel.addEventListener('mouseenter', () => {
    clearInterval(autoCarouselInterval);
});

carousel.addEventListener('mouseleave', () => {
    resetAutoCarousel();
});

window.addEventListener('DOMContentLoaded', () => {
    const appleItem = document.querySelector('.brand-item[data-company="apple"]');
    if (appleItem) {
        appleItem.click();
    }
});


// Read More

function toggleMore() {
    const extraRow = document.getElementById('extraRow');
    const btn = document.getElementById('toggleBtn');

    extraRow.classList.toggle('show');
    btn.textContent = extraRow.classList.contains('show') ? 'Read Less' : 'More';
}