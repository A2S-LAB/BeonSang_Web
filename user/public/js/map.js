const buttonSongdo = document.getElementById('button-songdo');
const buttonHapjeong = document.getElementById('button-hapjeong');

const mapSongdo = new naver.maps.Map('map-songdo', {
  center: new naver.maps.LatLng(37.383384400000274, 126.64275719999928),
  zoom: 15,
  mapTypeControl: true,
  mapTypeControlOptions: {
    style: naver.maps.MapTypeControlStyle.BUTTON,
    position: naver.maps.Position.TOP_RIGHT,
  },
  zoomControl: true,
  zoomControlOptions: {
    style: naver.maps.ZoomControlStyle.SMALL,
    position: naver.maps.Position.TOP_RIGHT,
  },
  scaleControl: true,
  scaleControlOptions: {
    position: naver.maps.Position.RIGHT_CENTER,
  },
  logoControl: true,
  logoControlOptions: {
    position: naver.maps.Position.TOP_LEFT,
  },
  mapDataControl: true,
  mapDataControlOptions: {
    position: naver.maps.Position.BOTTOM_LEFT,
  },
});

const markerInSongdo = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.383384400000274, 126.64275719999928),
  map: mapSongdo,
});

const contentStringSongdo = [
  '<div class="naver-maker-box">',
  '   <a class="naver-maker" href="https://naver.me/5ITYpN4t">범상 스프커리 송도점</p>',
  '</div>',
].join('');

// 가게 정보
const infoWindowSongdo = new naver.maps.InfoWindow({
  content: contentStringSongdo,
  disableAnchor: true,
  pixelOffset: new naver.maps.Point(0, 0),
});

// 클릭시, 정보 닫힘
naver.maps.Event.addListener(markerInSongdo, 'click', function (e) {
  if (infoWindowSongdo.getMap()) {
    infoWindowSongdo.close();
  } else {
    infoWindowSongdo.open(mapSongdo, markerInSongdo);
  }
});

// 가게 정보 렌더링
infoWindowSongdo.open(mapSongdo, markerInSongdo);
const handleOnLocation = e => {
  const getLocation = e.target.value;
  const location = {};
  return location[getLocation];
};

const mapHapjeong = new naver.maps.Map('map-hapjeong', {
  center: new naver.maps.LatLng(37.549502400000094, 126.91009380000014),
  zoom: 15,
  mapTypeControl: true,
  mapTypeControlOptions: {
    style: naver.maps.MapTypeControlStyle.BUTTON,
    position: naver.maps.Position.TOP_RIGHT,
  },
  zoomControl: true,
  zoomControlOptions: {
    style: naver.maps.ZoomControlStyle.SMALL,
    position: naver.maps.Position.TOP_RIGHT,
  },
  scaleControl: true,
  scaleControlOptions: {
    position: naver.maps.Position.RIGHT_CENTER,
  },
  logoControl: true,
  logoControlOptions: {
    position: naver.maps.Position.TOP_LEFT,
  },
  mapDataControl: true,
  mapDataControlOptions: {
    position: naver.maps.Position.BOTTOM_LEFT,
  },
});

const markerInHapjeong = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.549502400000094, 126.91009380000014),
  map: mapHapjeong,
});

const contentStringHapjeong = [
  '<div class="naver-maker-box">',
  '   <a class="naver-maker" href="https://naver.me/5ITYpN4t">범상 스프커리 합정점</p>',
  '</div>',
].join('');

// 가게 정보
const infoWindowHapjeong = new naver.maps.InfoWindow({
  content: contentStringHapjeong,
  disableAnchor: true,
  pixelOffset: new naver.maps.Point(0, 0),
});

// 클릭시, 정보 닫힘
naver.maps.Event.addListener(markerInHapjeong, 'click', function (e) {
  if (infoWindowHapjeong.getMap()) {
    infoWindowHapjeong.close();
  } else {
    infoWindowHapjeong.open(mapHapjeong, markerInHapjeong);
  }
});

// 가게 정보 렌더링
infoWindowHapjeong.open(mapHapjeong, markerInHapjeong);
