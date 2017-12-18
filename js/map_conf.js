ymaps.ready(init);
var myMap, myPlacemark;

function init(){
  myMap = new ymaps.Map("map", {
    center: [59.93927457, 30.32153752],
    zoom: 17,
    controls: ['smallMapDefaultSet']
  });

  myPlacemark = new ymaps.Placemark(
    [59.93888666, 30.32312383], {
    hintContent: 'Дизайн-студия Nerds'
  }, {
    iconLayout: 'default#image',
    iconImageHref: "img/map-marker.png",
    iconImageSize: [231, 190],
    iconImageOffset: [-48, -190]
  });

  myMap.geoObjects.add(myPlacemark);
}
