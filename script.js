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