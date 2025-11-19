// Thêm hiệu ứng khi cuộn trang
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Xử lý nút thêm vào giỏ hàng
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('.product-name').textContent;
        alert(`Đã thêm ${productName} vào giỏ hàng!`);
    });
});

// Xử lý tìm kiếm
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-bar input').value;
    if (searchTerm.trim() !== '') {
        alert(`Đang tìm kiếm: ${searchTerm}`);
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm!');
    }
});

// Xử lý nhấn Enter trong ô tìm kiếm
document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-bar button').click();
    }
});

// Xử lý click vào danh mục
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function() {
        const categoryName = this.querySelector('.category-name').textContent;
        alert(`Đang chuyển đến danh mục: ${categoryName}`);
    });
});

// Xử lý click vào các action trong header
document.querySelectorAll('.header-action').forEach(action => {
    action.addEventListener('click', function() {
        const actionName = this.querySelector('span').textContent;
        alert(`Đang mở: ${actionName}`);
    });
});
// Biến để kiểm soát hiệu ứng
let isSnowing = false;
let leafInterval;
let snowInterval;
let shouldCreateLeaves = true;

// Hàm tạo lá mùa thu
function createLeaf() {
    if (!shouldCreateLeaves) return; // Không tạo lá mới nếu đã hết thời gian
    
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    // Các loại lá mùa thu khác nhau
    const leaves = ['🍁', '🍂', '🥮'];
    const randomLeaf = leaves[Math.floor(Math.random() * leaves.length)];
    leaf.innerHTML = randomLeaf;
    
    // Kích thước ngẫu nhiên
    const size = Math.random() * 30 + 15;
    leaf.style.fontSize = `${size}px`;
    
    // Vị trí ngẫu nhiên
    leaf.style.left = `${Math.random() * 100}vw`;
    
    // Tốc độ rơi và độ lắc ngẫu nhiên
    const duration = Math.random() * 10 + 5;
    const sway = Math.random() * 100 - 50; // -50px đến 50px
    
    // Sử dụng CSS variable cho độ lắc
    leaf.style.setProperty('--sway', `${sway}px`);
    leaf.style.animation = `leaf-fall ${duration}s linear forwards`;
    
    // Độ mờ ngẫu nhiên
    leaf.style.opacity = Math.random() * 0.7 + 0.3;
    
    // Màu sắc ngẫu nhiên cho lá
    const colors = ['#ff6b35', '#f4a261', '#e76f51', '#e9c46a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    leaf.style.color = randomColor;
    
    document.body.appendChild(leaf);
    
    // Xóa lá sau khi rơi xong
    setTimeout(() => {
        if (leaf.parentNode) {
            leaf.remove();
        }
    }, duration * 5000);
}

// Hàm tạo bông tuyết
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    
    // Kích thước ngẫu nhiên từ 10 đến 50px
    const size = Math.random() * 40 + 10;
    snowflake.style.fontSize = `${size}px`;
    
    // Vị trí ngẫu nhiên
    snowflake.style.left = `${Math.random() * 100}vw`;
    
    // Tốc độ rơi ngẫu nhiên
    const duration = Math.random() * 5 + 5;
    snowflake.style.animation = `fall ${duration}s linear forwards`;
    
    // Độ mờ ngẫu nhiên
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;
    
    document.body.appendChild(snowflake);
    
    // Xóa bông tuyết sau khi rơi xong
    setTimeout(() => {
        if (snowflake.parentNode) {
            snowflake.remove();
        }
    }, duration * 1000);
}

// Bắt đầu với lá mùa thu
function startLeafFall() {
    leafInterval = setInterval(createLeaf, 50); // Tạo lá mỗi 200ms
}

// Chuyển sang tuyết rơi
function startSnowFall() {
    isSnowing = true;
    
    // Dừng tạo lá mới
    shouldCreateLeaves = false;
    clearInterval(leafInterval);
    
    // Đợi 6 giây để các lá cuối cùng rơi hết (thời gian rơi tối đa là 5s + buffer 1s)
    setTimeout(() => {
        // Bắt đầu tạo tuyết
        snowInterval = setInterval(createSnowflake, 35); // Tạo tuyết mỗi 50ms
    }, 3000);
}

// Khởi động hiệu ứng
startLeafFall();

// Sau 5 giây ngừng tạo lá mới và chuyển dần sang tuyết
setTimeout(startSnowFall, 3000);

