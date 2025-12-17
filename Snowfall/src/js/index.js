import '../scss/index.scss';
import options from './options';
import Flake from './flake';
import rand from "./rand";

setInterval(() => {
  let flake = new Flake(
    options.fonts[rand(0, options.fonts.length)],
    rand(0, options.maxWidth - 100),
    0,
    options.flakes[rand(0, options.flakes.length)]    
  );
  flake.draw();
  flake.move(options.speeds[rand(0, options.speeds.length)]);
}, 100);

