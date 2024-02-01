const carousel = document.querySelector('.carousel__image');
const buttonPrev = document.querySelector('.carousel__prev');
const buttonNext = document.querySelector('.carousel__next');

var carouselImage = document.querySelector('.carousel__nav');
var fileInput = document.getElementById('fileInput');
var editImage = document.querySelector('.edit_img');
var uploadForm = document.getElementById('uploadForm');

let count = 0;

const handleCarousel = state => {
  const IMAGES = [
    { title: 'outer', image: '/assets/beomsang-outer.jpeg' },
    { title: 'inner', image: '/assets/beomsang-inner.jpeg' },
    { title: 'food', image: '/assets/beomsang-food.jpeg' },
  ];

  const handle = {
    next: () => {
      if (count < 2) {
        count++;
        carousel.innerHTML = `<img src='${IMAGES[count].image}' alt='${IMAGES[count].title}'>`;
      }
    },
    prev: () => {
      if (count > 0) {
        count--;
        carousel.innerHTML = `<img src='${IMAGES[count].image}' alt='${IMAGES[count].title}'>`;
      }
    },
  };

  return handle[state]();
};

buttonPrev.addEventListener('click', handleCarousel.bind(this, 'prev'));
buttonNext.addEventListener('click', handleCarousel.bind(this, 'next'));

carousel.addEventListener('click', function () {
  fileInput.click();
});

$('#fileInput').change(function() {

  var formData = new FormData();
  var fileInput = document.getElementById('fileInput');
  if (fileInput.files[0]) {
    formData.append('file', fileInput.files[0]);
  }
  $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function(result) {
        if (result.code == 200){
          $('.carousel__image img').attr('src', result.data);
          imgPath = result.data;
        } else if (result.code == 400){
          console.log(result.msg);
        } else {
          console.log('이미지 업로드 실패:' + result.msg);
        }
      }, error: function(err) {
        console.log("이미지 업로드 에러 발생:" + err);
      }
  });
});



// 저장 버튼 누르면 modify api 호출