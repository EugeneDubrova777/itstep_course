import $ from "jquery";

const bgColors = ['black', '#45ad12', '#ef2a12', '#ed345f', '#df54a1'];

function changeBgColor() {
  const rand = () => {
    return Math.floor(Math.random() * (bgColors.length - 1));
  }

  $('[data-colored]').each(function() {
    $(this).css('backgroundColor', bgColors[rand()]);
  });
}



setInterval(changeBgColor, 2000);






