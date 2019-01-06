'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_RADUIS = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  // UP
  for (var i = CLOUD_X + CLOUD_RADUIS; i <= CLOUD_WIDTH - CLOUD_RADUIS * 2; i = i + (CLOUD_RADUIS * 2)) {
    ctx.arc(i, CLOUD_Y + CLOUD_RADUIS, CLOUD_RADUIS, 1 * Math.PI, 0 * Math.PI);
  }

  // RIGHT
  for (var i = CLOUD_Y + CLOUD_RADUIS; i <= CLOUD_HEIGHT; i = i + (CLOUD_RADUIS * 2)) {
    ctx.arc(CLOUD_WIDTH - CLOUD_RADUIS, i, CLOUD_RADUIS, 1.5 * Math.PI, 0.5 * Math.PI);
  }

  // BOTTOm
  for (var i = CLOUD_WIDTH - (CLOUD_RADUIS * 2); i >= CLOUD_X; i = i - (CLOUD_RADUIS * 2)) {
    ctx.arc(i, CLOUD_HEIGHT, CLOUD_RADUIS, 0 * Math.PI, 1 * Math.PI);
  }

  // LEFT
  for (var i = CLOUD_HEIGHT; i >= CLOUD_Y + CLOUD_RADUIS; i = i - (CLOUD_RADUIS * 2)) {
    ctx.arc(CLOUD_X, i, CLOUD_RADUIS, 0.5 * Math.PI, 1.5 * Math.PI);
  }

  //ctx.arc(CLOUD_X + 110, CLOUD_Y + 50, 30, 1 * Math.PI, 0 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  // renderCloud(ctx, ((ctx.canvas.clientWidth - CLOUD_WIDTH) / 2), ((ctx.canvas.clientHeight - CLOUD_HEIGHT) / 2), 'rgba(50, 50, 50, 0.7)');
  renderCloud(ctx, CLOUD_X + 100, CLOUD_Y + 100, 'rgba(50, 50, 50, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgb(255, 255, 255)');
};
