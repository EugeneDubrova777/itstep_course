import $ from "jquery";

async function getFact() {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    if (!response.ok) {
      throw new Error('Error!');
    }
    const data = await response.json();
    $('[data-fact]').each(function() {
      $(this).prepend(data.fact + '<br>');
    });
  } catch (error) {
    console.error('Error!!!!', error);
  }
}

setInterval(getFact, 3000);











