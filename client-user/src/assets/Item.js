class Food {
  constructor(title, image, price, desc) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.desc = desc;
  }
}

export const FOOD_SECTION = [
  {
    sectionTitle: '시그니처 스프커리',
    foods: [
      new Food(
        '홈런볼 스프커리',
        'https://ldb-phinf.pstatic.net/20231231_196/1703999274340lCUuh_JPEG/wVXGm0aDqltDD6eK8N2nVkX43M0X-1UpIp9eGj4Msd0Z2KNHUYGZwnNL5rGdjXgu.jpg',
        '14,500',
        '새우볼 / 두부가라아게/ 메추리알이 들어간 다양한 맛의 스프커리'
      ),
      new Food(
        '메가 닭고기 스프커리',
        'https://ldb-phinf.pstatic.net/20231231_76/1703999274091yPPIK_JPEG/nFBIwgKJ9yGzA6W8qquN4tHahho4wJ-Pa4bOWLjW2qSfXXFhGJ2mcS7Cal1OMl6V.jpg',
        '16,900',
        '그가 돌아왔다. 삼계탕보다 몸보신 될 것 같은 닭고기 듬뿍 스프커리의 귀환.'
      ),
      new Food(
        '점보 스프커리',
        'https://ldb-phinf.pstatic.net/20231231_132/1703999274176I8lVe_JPEG/nFBIwgKJ9yGzA6W8qquN4mcNSGk0bFYoF1Ko_kGy4NGjf_hSKx-wJqiCp0DJKq9r.jpg',
        '15,900',
        '돈까스에 새우튀김까지 카레와 함께 즐기는 당신 :O 주인장도 점보 한그릇이면 배부르다오.'
      ),
      new Food(
        '범상 우동',
        'https://ldb-phinf.pstatic.net/20231231_86/1703999274085kVTJ8_JPEG/Wd6-vV4Hwz0Xfr0pDYPUHhWk2gWj-Jrd4E17EqFE8j2vfpFcObRLm5tDoYJQP2Un.jpg',
        '10,900',
        '범상의 깊은 스프커리와 탱글한 우동의 마법같은 만남 :D'
      ),
    ],
  },

  {
    sectionTitle: '스프커리',
    foods: [
      new Food(
        '홈런볼 스프커리',
        'https://ldb-phinf.pstatic.net/20231231_196/1703999274340lCUuh_JPEG/wVXGm0aDqltDD6eK8N2nVkX43M0X-1UpIp9eGj4Msd0Z2KNHUYGZwnNL5rGdjXgu.jpg',
        '14,500',
        '새우볼 / 두부가라아게/ 메추리알이 들어간 다양한 맛의 스프커리'
      ),
      new Food(
        '메가 닭고기 스프커리',
        'https://ldb-phinf.pstatic.net/20231231_76/1703999274091yPPIK_JPEG/nFBIwgKJ9yGzA6W8qquN4tHahho4wJ-Pa4bOWLjW2qSfXXFhGJ2mcS7Cal1OMl6V.jpg',
        '16,900',
        '그가 돌아왔다. 삼계탕보다 몸보신 될 것 같은 닭고기 듬뿍 스프커리의 귀환.'
      ),
      new Food(
        '점보 스프커리',
        'https://ldb-phinf.pstatic.net/20231231_132/1703999274176I8lVe_JPEG/nFBIwgKJ9yGzA6W8qquN4mcNSGk0bFYoF1Ko_kGy4NGjf_hSKx-wJqiCp0DJKq9r.jpg',
        '15,900',
        '돈까스에 새우튀김까지 카레와 함께 즐기는 당신 :O 주인장도 점보 한그릇이면 배부르다오.'
      ),
      new Food(
        '범상 우동',
        'https://ldb-phinf.pstatic.net/20231231_86/1703999274085kVTJ8_JPEG/Wd6-vV4Hwz0Xfr0pDYPUHhWk2gWj-Jrd4E17EqFE8j2vfpFcObRLm5tDoYJQP2Un.jpg',
        '10,900',
        '범상의 깊은 스프커리와 탱글한 우동의 마법같은 만남 :D'
      ),
    ],
  },
];
