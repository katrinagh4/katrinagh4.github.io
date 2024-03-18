document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            displayProducts(data);
        })
        .catch(error => console.error('Ошибка при загрузке данных:', error));
});

function displayProducts(data) {
    displayCategory(data.mensShoes, 'mens-shoes-container');
    displayCategory(data.womensShoes, 'womens-shoes-container');
    displayCategory(data.kidsShoes, 'kids-shoes-container');
}

function displayCategory(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Очищаем контейнер перед добавлением новых элементов

    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = 'images/' + product.image;
    image.alt = product.name;

    const name = document.createElement('h3');
    name.textContent = product.name;

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = 'Цена: ' + product.price + ' руб.';

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);

    return card;
}

// Обработчик события для кнопки "Мужская обувь"
document.getElementById('mens-shoes-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    openCatalog('mens-shoes-container'); // Вызываем функцию открытия каталога для мужской обуви
});

// Обработчик события для кнопки "Женская обувь"
document.getElementById('womens-shoes-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    openCatalog('womens-shoes-container'); // Вызываем функцию открытия каталога для женской обуви
});

// Обработчик события для кнопки "Детская обувь"
document.getElementById('kids-shoes-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    openCatalog('kids-shoes-container'); // Вызываем функцию открытия каталога для детской обуви
});

// Функция открытия каталога для определенной категории обуви
function openCatalog(containerId) {
    // Здесь можно добавить код для открытия каталога соответствующей категории
    // Например, показать соответствующие продукты и т.д.
    console.log('Открываем каталог для категории:', containerId);
}
