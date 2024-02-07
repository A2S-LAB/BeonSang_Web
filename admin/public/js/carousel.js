const carousel = document.querySelector('.carousel__image');
const buttonPrev = document.querySelector('.carousel__prev');
const buttonNext = document.querySelector('.carousel__next');

var carouselImage = document.querySelector('.carousel__nav');
var fileInput = document.getElementById('fileInput');
var uploadForm = document.getElementById('uploadForm');
var submitForm = document.getElementById('submitForm');

let count = 0;
let images = [
  '/assets/beomsang-outer.jpeg',
  '/assets/beomsang-inner.jpeg',
  '/assets/beomsang-food.jpeg',
];

const IMAGES = [
  { title: 'outer', image: images[0] },
  { title: 'inner', image: images[1] },
  { title: 'food', image: images[2] },
];

const handleCarousel = state => {
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

$('#fileInput').change(function () {
  var formData = new FormData();
  var fileInput = document.getElementById('fileInput');
  if (fileInput.files[0]) {
    formData.append('file', fileInput.files[0]);
  }
  $.ajax({
    url: '/image/upload',
    type: 'POST',
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    
    success: function (result) {
      if (result.code == 200) {
        images[count] = result.data;
        $('.carousel__image img').attr('src', result.data);
        imgPath = result.data;
        IMAGES[count].image = imgPath;

      } else if (result.code == 400) {
        console.log(result.msg);
      } else {
        console.log('이미지 업로드 실패:' + result.msg);
      }
    },
    error: function (err) {
      console.log('이미지 업로드 에러 발생:' + err);
    },
  });
});

submitForm.addEventListener('click', function () {
  alert('이미지가 변경되었습니다.');
  console.log(count);
  console.log(imgPath);

  $.ajax({
    url: '/image/save',
    type: 'POST',
    dataType: 'json',
    data: {
      carousel_id: count,
      img_path: imgPath
    },
    cache: false,

    success: function(result){
      if(result.code ==200){
        console.log('이미지 저장 성공');
      } else if (result.code == 400){
        console.log(result.msg);
      } else {
        console.log('이미지 저장 실패:' + result.msg);
      }
    },
    error: function(err){
      console.log('이미지 저장 에러 발생:' + err);
    }
    })
  });
