document.addEventListener('DOMContentLoaded', function() {
    const toggleButton1 = document.getElementById('toggleButton1');
    const toggleButton2 = document.getElementById('toggleButton2');
    const toggleButton3 = document.getElementById('toggleButton3');
    const toggleButton4 = document.getElementById('toggleButton4');
    const toggleButton5 = document.getElementById('toggleButton5');
    const toggleButton6 = document.getElementById('toggleButton6');
    const toggleButton7 = document.getElementById('toggleButton7');
    const textContent1 = document.getElementById('textContent1');
    const textContent2 = document.getElementById('textContent2');
    const textContent3 = document.getElementById('textContent3');
    const textContent4 = document.getElementById('textContent4');
    const textContent5 = document.getElementById('textContent5');
    const textContent6 = document.getElementById('textContent6');
    const textContent7 = document.getElementById('textContent7');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');
    const image4 = document.getElementById('image4');
    const image5 = document.getElementById('image5');
    const image6 = document.getElementById('image6');
    const image7 = document.getElementById('image7');
    const defaultImage1 = document.getElementById('defaultImage1');
    const defaultImage2 = document.getElementById('defaultImage2');
    const defaultImage3 = document.getElementById('defaultImage3');
    const defaultImage4 = document.getElementById('defaultImage4');
    const defaultImage5 = document.getElementById('defaultImage5');
    const defaultImage6 = document.getElementById('defaultImage6');
    const defaultImage7 = document.getElementById('defaultImage7');
    

    function toggleContent(button, text, image, defaultImage) {
        button.addEventListener('click', function() {
            if (text.style.display === 'none') {
                text.style.display = 'block';
                image.style.display = 'block';
                button.textContent = 'Hide Content';
                defaultImage.style.display = 'none';
            } else {
                text.style.display = 'none';
                image.style.display = 'none';
                button.textContent = 'Show Content';
                defaultImage.style.display = 'block';
            }
        });
    }

    toggleContent(toggleButton1, textContent1, image1, defaultImage1);
    toggleContent(toggleButton2, textContent2, image2, defaultImage2);
    toggleContent(toggleButton3, textContent3, image3, defaultImage3);
    toggleContent(toggleButton4, textContent4, image4, defaultImage4);
    toggleContent(toggleButton5, textContent5, image5, defaultImage5);
    toggleContent(toggleButton6, textContent6, image6, defaultImage6);
    toggleContent(toggleButton7, textContent7, image7, defaultImage7);

    var scrollToTopBtn = document.getElementById("scrollToTop");

    // 当页面滚动超过 300px 时显示按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // 点击按钮时滚动到顶部
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // 添加图片点击放大功能
    function setupImageZoom(image) {
        image.addEventListener('click', function(event) {
            event.stopPropagation(); // 防止事件冒泡到父元素

            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1000';

            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.objectFit = 'contain';
            modalImg.style.boxShadow = '0 0 20px rgba(255,255,255,0.5)';
            modalImg.style.transition = 'transform 0.3s ease';

            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            // 添加放大效果
            setTimeout(() => {
                modalImg.style.transform = 'scale(1.1)';
            }, 50);

            modal.addEventListener('click', function() {
                modalImg.style.transform = 'scale(1)';
                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 300);
            });
        });
    }

    // 为所有相关图片添加点击放大功能
    setupImageZoom(defaultImage1);
    setupImageZoom(defaultImage2);
    setupImageZoom(defaultImage3);
    setupImageZoom(defaultImage4);
    setupImageZoom(defaultImage5);
    setupImageZoom(defaultImage6);
    setupImageZoom(defaultImage7);
    setupImageZoom(image1);
    setupImageZoom(image2);
    setupImageZoom(image3);
    setupImageZoom(image4);
    setupImageZoom(image5);
    setupImageZoom(image6);
    setupImageZoom(image7);
});

function checkVisibility() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
