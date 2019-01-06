'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_RADUIS = 10;
var cloudText = ['Ура вы победили!', 'Список результатов:'];
var textColor = '#000000';
var GAP_UP = 20;
var GAP = 50;
var GAP_TEXT = 20;
var STRING_WIDTH = 40;
var barHeight = 150;

// поиск максимального значения
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// var randomIntFromInterval = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// var generateColor = function (black) {
//   if (black) {
//     return '#000000';
//   } else {
//     return 'rgb(' + randomIntFromInterval(0, 255) + ', ' + randomIntFromInterval(0, 255) + ', ' + randomIntFromInterval(0, 255) + ')';
//   }
// };

// цвет столбцов
var getFillColumn = function (name) {
  var rnd = Math.random();
  if (name === 'Вы') {
    var colorColumn = 'rgba(255, 0, 0, 1)';
  } else {
    colorColumn = 'rgba(0, 0, 255, ' + rnd + ')';
  }
  return colorColumn;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.beginPath();
  // UP
  for (var i = x + CLOUD_RADUIS; i <= (x + CLOUD_WIDTH) - (CLOUD_RADUIS * 2); i = i + (CLOUD_RADUIS * 2)) {
    ctx.arc(i, y + CLOUD_RADUIS, CLOUD_RADUIS, 1 * Math.PI, 0 * Math.PI);
  }

  // RIGHT
  for (var j = y + CLOUD_RADUIS; j <= (CLOUD_HEIGHT + y); j = j + (CLOUD_RADUIS * 2)) {
    ctx.arc(CLOUD_WIDTH + x - CLOUD_RADUIS, j, CLOUD_RADUIS, 1.5 * Math.PI, 0.5 * Math.PI);
  }

  // BOTTOm
  for (var n = (CLOUD_WIDTH + x) - (CLOUD_RADUIS * 2); n >= x; n = n - (CLOUD_RADUIS * 2)) {
    ctx.arc(n, CLOUD_HEIGHT + y, CLOUD_RADUIS, 0 * Math.PI, 1 * Math.PI);
  }

  // LEFT
  for (var k = CLOUD_HEIGHT + y; k >= (y + CLOUD_RADUIS); k = k - (CLOUD_RADUIS * 2)) {
    ctx.arc(x, k, CLOUD_RADUIS, 0.5 * Math.PI, 1.5 * Math.PI);
  }

  ctx.closePath();
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(50, 50, 50, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgb(255, 255, 255)');

  for (var i = 0; i < cloudText.length; i++) {
    ctx.fillStyle = textColor;
    ctx.fillText(cloudText[i], CLOUD_X + GAP_TEXT, GAP_TEXT * (i + 2));
  }

  for (var j = 0; j < names.length; j++) {
    ctx.fillStyle = textColor;
    ctx.fillText(Math.round(times[j]), CLOUD_X + GAP + (STRING_WIDTH + GAP) * j, CLOUD_HEIGHT - ((barHeight * times[j]) / maxTime + GAP_UP));
    ctx.fillText(names[j], CLOUD_X + GAP + (STRING_WIDTH + GAP) * j, CLOUD_Y + CLOUD_HEIGHT);
    ctx.fillStyle = getFillColumn(names[j]);
    ctx.fillRect(CLOUD_X + GAP + (STRING_WIDTH + GAP) * j, CLOUD_HEIGHT - ((barHeight * times[j]) / maxTime + GAP_UP), STRING_WIDTH, ((barHeight * times[j]) / maxTime + GAP_UP));
  }
};
