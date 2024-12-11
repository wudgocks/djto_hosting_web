const images = [
    'assets/images/background1.png',
    'assets/images/background2.png',
    'assets/images/background3.png'
];
let currentIndex = 0;

const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

// 슬라이더 업데이트 함수
function updateSlider() {
    sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 이전 버튼 클릭 이벤트
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // 순환
    updateSlider();
});

// 다음 버튼 클릭 이벤트
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // 순환
    updateSlider();
});

// 초기 슬라이더 업데이트
updateSlider();

// 자동으로 5초마다 슬라이드 넘어가기
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // 5초마다 자동으로 슬라이드 변경
    updateSlider();
}, 5000); // 5초마다 실행
